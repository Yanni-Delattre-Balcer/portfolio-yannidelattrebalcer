#!/usr/bin/env python3
"""
portfolio_updater.py — Met à jour les fichiers du portfolio.

Lit data/portfolio_data.json et :
  1. Valide le JSON
  2. Génère assets/js/data.js (PORTFOLIO_DATA + LAST_UPDATED)
  3. Met à jour <meta name="last-updated"> dans index.html
  4. Génère sitemap.xml avec la date du jour
  5. Log un résumé dans scripts/logs/update_history.log et history.json
"""

import json
import re
import sys
import logging
from datetime import datetime
from pathlib import Path

import pytz

# ─── Chemins ───────────────────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DATA_DIR = PROJECT_ROOT / "data"
CRAFTIVO_DIR = PROJECT_ROOT
JS_DIR = CRAFTIVO_DIR / "assets" / "js"
LOG_DIR = SCRIPT_DIR / "logs"

PORTFOLIO_DATA = DATA_DIR / "portfolio_data.json"
DATA_JS = JS_DIR / "data.js"
INDEX_HTML = CRAFTIVO_DIR / "index.html"
INDEX_EN_HTML = CRAFTIVO_DIR / "index_en.html"
SITEMAP = CRAFTIVO_DIR / "sitemap.xml"
HISTORY_LOG = LOG_DIR / "update_history.log"
HISTORY_JSON = LOG_DIR / "history.json"
UPDATE_LOG = LOG_DIR / "update.log"

# ─── Logging ──────────────────────────────────────────────────────────────────
LOG_DIR.mkdir(parents=True, exist_ok=True)
JS_DIR.mkdir(parents=True, exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(UPDATE_LOG, encoding="utf-8"),
        logging.StreamHandler(sys.stdout),
    ],
)
logger = logging.getLogger("portfolio_updater")

# ─── Jours et mois en français ────────────────────────────────────────────────
JOURS_FR = {
    0: "Lundi", 1: "Mardi", 2: "Mercredi", 3: "Jeudi",
    4: "Vendredi", 5: "Samedi", 6: "Dimanche",
}
MOIS_FR = {
    1: "janvier", 2: "février", 3: "mars", 4: "avril",
    5: "mai", 6: "juin", 7: "juillet", 8: "août",
    9: "septembre", 10: "octobre", 11: "novembre", 12: "décembre",
}

SITE_URL = "https://yanni-delattre-balcer.github.io/portfolio-yannidelattrebalcer"


def format_date_french_full(dt):
    """Formate une datetime en français complet : 'Dimanche 2 avril 2026'."""
    jour = JOURS_FR[dt.weekday()]
    mois = MOIS_FR[dt.month]
    return f"{jour} {dt.day} {mois} {dt.year}"


def load_portfolio_data():
    """Charge et valide portfolio_data.json."""
    if not PORTFOLIO_DATA.exists():
        logger.error("portfolio_data.json introuvable")
        return None

    try:
        with open(PORTFOLIO_DATA, "r", encoding="utf-8") as f:
            data = json.load(f)
        logger.info("portfolio_data.json chargé et valide")
        return data
    except json.JSONDecodeError as e:
        logger.error(f"portfolio_data.json invalide : {e}")
        return None


def load_previous_data():
    """Charge les données précédentes du data.js pour calculer les diffs."""
    if not DATA_JS.exists():
        return None
    try:
        content = DATA_JS.read_text(encoding="utf-8")
        # Extraire le JSON entre les accolades après PORTFOLIO_DATA =
        match = re.search(r"const PORTFOLIO_DATA = ({.*?});", content, re.DOTALL)
        if match:
            return json.loads(match.group(1))
    except Exception:
        pass
    return None


def generate_data_js(data, date_str_fr):
    """Génère assets/js/data.js."""
    json_content = json.dumps(data, ensure_ascii=False, indent=2)

    js_content = f"""/**
 * data.js — Données du portfolio générées automatiquement.
 * NE PAS MODIFIER MANUELLEMENT — ce fichier est écrasé chaque dimanche.
 * Dernière mise à jour : {date_str_fr}
 */
const PORTFOLIO_DATA = {json_content};

const LAST_UPDATED = "{date_str_fr}";
"""

    try:
        DATA_JS.write_text(js_content, encoding="utf-8")
        logger.info(f"data.js généré : {DATA_JS}")
    except IOError as e:
        logger.error(f"Erreur écriture data.js : {e}")


def update_meta_tag(html_path, date_iso):
    """Met à jour <meta name='last-updated'> dans un fichier HTML."""
    if not html_path.exists():
        logger.warning(f"Fichier HTML introuvable : {html_path}")
        return

    try:
        content = html_path.read_text(encoding="utf-8")

        # Chercher et remplacer la meta last-updated
        pattern = r'<meta\s+name="last-updated"\s+content="[^"]*"'
        replacement = f'<meta name="last-updated" content="{date_iso}"'

        if re.search(pattern, content):
            content = re.sub(pattern, replacement, content)
            logger.info(f"Meta last-updated mise à jour dans {html_path.name}")
        else:
            logger.warning(f"Meta last-updated non trouvée dans {html_path.name}")

        html_path.write_text(content, encoding="utf-8")

    except IOError as e:
        logger.error(f"Erreur mise à jour {html_path.name} : {e}")


def generate_sitemap(date_iso):
    """Génère un sitemap.xml mis à jour."""
    pages = [
        ("", "1.0", "weekly"),
        ("index_en.html", "0.8", "weekly"),
        ("page-credits.html", "0.3", "monthly"),
        ("privacy.html", "0.3", "monthly"),
        ("terms.html", "0.3", "monthly"),
    ]

    urls = ""
    for page, priority, changefreq in pages:
        url = f"{SITE_URL}/{page}" if page else f"{SITE_URL}/"
        urls += f"""  <url>
    <loc>{url}</loc>
    <lastmod>{date_iso}</lastmod>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>
"""

    sitemap_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}</urlset>
"""

    try:
        SITEMAP.write_text(sitemap_content, encoding="utf-8")
        logger.info(f"sitemap.xml généré : {SITEMAP}")
    except IOError as e:
        logger.error(f"Erreur écriture sitemap.xml : {e}")


def calculate_changes(old_data, new_data):
    """Calcule un résumé des changements entre deux versions."""
    changes = {
        "projects_added": 0,
        "skills_updated": 0,
        "certifications_changed": 0,
        "timeline_changed": 0,
    }

    if not old_data:
        return changes

    # Projets ajoutés
    old_ids = {p.get("id") for p in old_data.get("projects", [])}
    new_ids = {p.get("id") for p in new_data.get("projects", [])}
    changes["projects_added"] = len(new_ids - old_ids)

    # Compétences mises à jour
    old_skills = {s.get("name"): s.get("score") for s in old_data.get("skills", [])}
    for skill in new_data.get("skills", []):
        name = skill.get("name")
        if name not in old_skills or old_skills[name] != skill.get("score"):
            changes["skills_updated"] += 1

    # Certifications
    old_certs = {c.get("name") for c in old_data.get("certifications", [])}
    new_certs = {c.get("name") for c in new_data.get("certifications", [])}
    changes["certifications_changed"] = len(new_certs - old_certs)

    # Parcours
    old_timeline = len(old_data.get("timeline", []))
    new_timeline = len(new_data.get("timeline", []))
    changes["timeline_changed"] = new_timeline - old_timeline

    return changes


def log_changes(date_str, changes, data):
    """Log les changements dans update_history.log et history.json."""
    # ─── update_history.log ───────────────────────────────────────────────
    log_line = (
        f"[{date_str}] "
        f"Projets: +{changes['projects_added']} nouveau(x) · "
        f"Compétences: {changes['skills_updated']} mise(s) à jour · "
        f"Certifications: {changes['certifications_changed']} changement(s) · "
        f"Parcours: {changes['timeline_changed']} changement(s)\n"
    )

    try:
        with open(HISTORY_LOG, "a", encoding="utf-8") as f:
            f.write(log_line)
        logger.info(f"Historique mis à jour : {HISTORY_LOG}")
    except IOError as e:
        logger.error(f"Erreur écriture historique : {e}")

    # ─── history.json ─────────────────────────────────────────────────────
    history = []
    if HISTORY_JSON.exists():
        try:
            with open(HISTORY_JSON, "r", encoding="utf-8") as f:
                history = json.load(f)
        except (json.JSONDecodeError, IOError):
            history = []

    history.append({
        "date": date_str,
        "projects_count": len(data.get("projects", [])),
        "skills_count": len(data.get("skills", [])),
        "certifications_count": len(data.get("certifications", [])),
        "timeline_count": len(data.get("timeline", [])),
        "changes": changes,
    })

    try:
        with open(HISTORY_JSON, "w", encoding="utf-8") as f:
            json.dump(history, f, ensure_ascii=False, indent=2)
        logger.info(f"Historique JSON mis à jour : {HISTORY_JSON}")
    except IOError as e:
        logger.error(f"Erreur écriture history.json : {e}")


def main():
    logger.info("=" * 60)
    logger.info("Démarrage du portfolio updater")
    logger.info("=" * 60)

    # ─── Charger les données ──────────────────────────────────────────────
    data = load_portfolio_data()
    if not data:
        logger.error("Impossible de charger portfolio_data.json — abandon")
        return

    # ─── Date actuelle (heure Paris) ──────────────────────────────────────
    paris_tz = pytz.timezone("Europe/Paris")
    now_paris = datetime.now(paris_tz)
    date_str_fr = format_date_french_full(now_paris)
    date_iso = now_paris.strftime("%Y-%m-%d")

    logger.info(f"Date : {date_str_fr} ({date_iso})")

    # ─── Données précédentes pour calculer les diffs ──────────────────────
    old_data = load_previous_data()

    # ─── 1. Générer data.js ───────────────────────────────────────────────
    generate_data_js(data, date_str_fr)

    # ─── 2. Mettre à jour les meta tags ───────────────────────────────────
    update_meta_tag(INDEX_HTML, date_iso)
    update_meta_tag(INDEX_EN_HTML, date_iso)

    # ─── 3. Générer sitemap.xml ───────────────────────────────────────────
    generate_sitemap(date_iso)

    # ─── 4. Logger les changements ────────────────────────────────────────
    changes = calculate_changes(old_data, data)
    log_changes(date_iso, changes, data)

    logger.info("Portfolio updater terminé avec succès")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        logger.error(f"Erreur fatale non capturée : {e}")
    finally:
        sys.exit(0)
