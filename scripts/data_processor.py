#!/usr/bin/env python3
"""
data_processor.py — Fusion, nettoyage et structuration des données.

Lit data/linkedin_raw.json et data/github_raw.json,
les fusionne et produit data/portfolio_data.json —
la source de vérité unique utilisée par le portfolio.

Règle d'or : ne JAMAIS écraser une valeur existante avec null ou vide.
"""

import json
import re
import sys
import logging
from datetime import datetime
from pathlib import Path

# ─── Chemins ───────────────────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DATA_DIR = PROJECT_ROOT / "data"
LOG_DIR = SCRIPT_DIR / "logs"
LINKEDIN_RAW = DATA_DIR / "linkedin_raw.json"
GITHUB_RAW = DATA_DIR / "github_raw.json"
PORTFOLIO_DATA = DATA_DIR / "portfolio_data.json"
LOG_FILE = LOG_DIR / "scraper.log"

# ─── Logging ──────────────────────────────────────────────────────────────────
LOG_DIR.mkdir(parents=True, exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler(sys.stdout),
    ],
)
logger = logging.getLogger("data_processor")

# ─── Mois français ────────────────────────────────────────────────────────────
MOIS_FR = {
    1: "Janvier", 2: "Février", 3: "Mars", 4: "Avril",
    5: "Mai", 6: "Juin", 7: "Juillet", 8: "Août",
    9: "Septembre", 10: "Octobre", 11: "Novembre", 12: "Décembre",
}


def load_json(filepath):
    """Charge un fichier JSON, retourne None si erreur."""
    if not filepath.exists():
        logger.warning(f"Fichier introuvable : {filepath}")
        return None
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError) as e:
        logger.error(f"Erreur lecture {filepath} : {e}")
        return None


def safe_update(existing_value, new_value):
    """Ne jamais écraser une valeur existante avec null ou vide."""
    if new_value is None or new_value == "" or new_value == []:
        return existing_value
    return new_value


def format_date_french(date_str):
    """Convertit une date ISO ou 'YYYY-MM' en français : 'Janvier 2025'."""
    if not date_str:
        return None
    try:
        # Format YYYY-MM-DD ou YYYY-MM-DDTHH:MM:SS
        if "T" in str(date_str):
            dt = datetime.fromisoformat(str(date_str).replace("Z", "+00:00"))
            return f"{MOIS_FR[dt.month]} {dt.year}"
        # Format YYYY-MM
        match = re.match(r"(\d{4})-(\d{1,2})", str(date_str))
        if match:
            year, month = int(match.group(1)), int(match.group(2))
            return f"{MOIS_FR[month]} {year}"
        # Format YYYY seul
        if re.match(r"^\d{4}$", str(date_str)):
            return str(date_str)
        return str(date_str)
    except (ValueError, KeyError):
        return str(date_str)


def normalize_string(s):
    """Normalise une chaîne pour le matching."""
    if not s:
        return ""
    return re.sub(r"[^a-z0-9]", "", s.lower())


def match_projects(existing_projects, github_repos):
    """
    Cherche des correspondances entre les repos GitHub et les projets existants.
    Matching par mots-clés dans le nom et la description.
    """
    matched = set()
    enriched_projects = list(existing_projects)

    for repo in github_repos:
        repo_name_norm = normalize_string(repo.get("name", ""))
        repo_desc_norm = normalize_string(repo.get("description", ""))
        repo_combined = repo_name_norm + " " + repo_desc_norm

        best_match = None
        best_score = 0

        for i, project in enumerate(enriched_projects):
            if i in matched:
                continue

            project_title_norm = normalize_string(project.get("title", ""))
            project_desc_norm = normalize_string(project.get("description", ""))
            project_combined = project_title_norm + " " + project_desc_norm

            # Calculer un score de matching simple
            score = 0
            words_repo = set(repo_name_norm.split()) | set(repo_desc_norm.split())
            words_project = set(project_title_norm.split()) | set(project_desc_norm.split())

            # Mots en commun (au moins 3 caractères)
            common = {w for w in words_repo & words_project if len(w) >= 3}
            score = len(common)

            if score > best_score and score >= 2:
                best_score = score
                best_match = i

        if best_match is not None:
            # Enrichir le projet existant avec les données GitHub
            matched.add(best_match)
            project = enriched_projects[best_match]
            project["github_url"] = safe_update(
                project.get("github_url"), repo.get("url")
            )
            project["last_updated"] = safe_update(
                project.get("last_updated"),
                repo.get("pushed_at", "").split("T")[0] if repo.get("pushed_at") else None,
            )
            # Enrichir le stack avec les langages GitHub
            if repo.get("languages"):
                existing_stack = set(project.get("stack", []))
                for lang in repo["languages"]:
                    existing_stack.add(lang)
                project["stack"] = list(existing_stack)

            logger.info(
                f"Match trouvé : repo '{repo['name']}' → projet '{project['title']}'"
            )
        else:
            # Nouveau projet GitHub sans correspondance
            new_project = {
                "id": f"github-{normalize_string(repo['name'])}",
                "title": repo.get("name", "Sans titre"),
                "category": guess_category(repo),
                "filter_class": "filter-development",
                "status": "en_cours" if not repo.get("archived") else "terminé",
                "year": int(repo["created_at"][:4]) if repo.get("created_at") else datetime.now().year,
                "description": repo.get("description") or repo.get("readme_summary") or "",
                "stack": list(repo.get("languages", {}).keys()),
                "github_url": repo.get("url"),
                "image": None,
                "details_url": repo.get("url"),
                "last_updated": repo.get("pushed_at", "").split("T")[0] if repo.get("pushed_at") else None,
                "source": "github",
            }
            enriched_projects.append(new_project)
            logger.info(f"Nouveau projet GitHub ajouté : '{repo['name']}'")

    return enriched_projects


def guess_category(repo):
    """Devine la catégorie d'un repo GitHub."""
    name = (repo.get("name", "") + " " + (repo.get("description") or "")).lower()
    languages = repo.get("languages", {})

    if any(w in name for w in ["réseau", "network", "cisco", "vlan", "dhcp", "dns"]):
        return "Réseaux"
    if any(w in name for w in ["telecom", "télécoms", "signal", "transmission"]):
        return "Télécoms"
    if "HTML" in languages or "CSS" in languages or any(w in name for w in ["web", "site", "html"]):
        return "Web"
    return "Autres projets informatiques"


def merge_skills(existing_skills, linkedin_skills, github_languages):
    """
    Fusionne les compétences LinkedIn avec les langages GitHub.
    score = (endorsements_linkedin × 0.6) + (usage_github_pct × 0.4)
    """
    merged = {s["name"]: dict(s) for s in existing_skills}

    # Intégrer les compétences LinkedIn
    if linkedin_skills:
        for li_skill in linkedin_skills:
            name = li_skill.get("name")
            if not name:
                continue

            endorsements = li_skill.get("endorsements", 0) or 0

            if name in merged:
                # Mettre à jour les endorsements mais ne pas écraser le score existant
                # sauf si on a un vrai calcul
                if endorsements > 0 and merged[name].get("score") is not None:
                    li_component = min(endorsements * 3, 60)  # Normaliser sur 60
                    github_pct = 0
                    # Chercher un match dans les langages GitHub
                    for lang, pct in (github_languages or {}).items():
                        if normalize_string(lang) in normalize_string(name):
                            github_pct = pct * 0.4
                            break
                    new_score = round(li_component + github_pct)
                    merged[name]["score"] = max(merged[name]["score"] or 0, new_score)
            else:
                # Nouvelle compétence LinkedIn
                merged[name] = {
                    "name": name,
                    "score": min(endorsements * 3, 100) if endorsements else None,
                    "domain": "LinkedIn",
                    "status": "validated" if endorsements else "exc",
                    "linked_project_id": None,
                }

    # Intégrer les langages GitHub comme compétences
    if github_languages:
        for lang, pct in github_languages.items():
            # Chercher si déjà présent (matching flexible)
            found = False
            for name, skill in merged.items():
                if normalize_string(lang) in normalize_string(name):
                    found = True
                    break

            if not found:
                merged[lang] = {
                    "name": lang,
                    "score": round(min(pct, 100)),
                    "domain": "Développement",
                    "status": "validated",
                    "linked_project_id": None,
                }

    # Vérifier que les scores restent dans [0, 100]
    for skill in merged.values():
        if skill.get("score") is not None:
            skill["score"] = max(0, min(100, skill["score"]))

    return list(merged.values())


def merge_certifications(existing_certs, linkedin_certs):
    """
    Fusionne les certifications : déduplique par nom exact,
    trie par date, met à jour 'en cours' → 'obtenu' si date présente.
    """
    merged = {c["name"]: dict(c) for c in existing_certs}

    if linkedin_certs:
        for li_cert in linkedin_certs:
            name = li_cert.get("name")
            if not name:
                continue

            if name in merged:
                # Mettre à jour avec les données LinkedIn sans écraser
                cert = merged[name]
                cert["issuer"] = safe_update(cert.get("issuer"), li_cert.get("issuer"))
                cert["date"] = safe_update(cert.get("date"), li_cert.get("date"))

                # Si on a une date, le statut passe à "obtenu"
                if li_cert.get("date") and cert.get("status") == "en_cours":
                    cert["status"] = "obtenu"
                    logger.info(f"Certification '{name}' : en_cours → obtenu")

                cert["pdf_url"] = safe_update(cert.get("pdf_url"), li_cert.get("url"))
            else:
                # Nouvelle certification
                merged[name] = {
                    "name": name,
                    "issuer": li_cert.get("issuer"),
                    "date": li_cert.get("date"),
                    "status": "obtenu" if li_cert.get("date") else "en_cours",
                    "pdf_url": li_cert.get("url"),
                }
                logger.info(f"Nouvelle certification ajoutée : '{name}'")

    # Trier par date (plus récente en premier)
    result = sorted(
        merged.values(),
        key=lambda c: c.get("date") or "0000",
        reverse=True,
    )
    return result


def merge_timeline(existing_timeline, linkedin_experiences, linkedin_education):
    """
    Fusionne le parcours : expériences + formations, ordre chronologique inverse.
    """
    merged = {}

    # Indexer le parcours existant par clé unique
    for item in existing_timeline:
        key = f"{item.get('type', '')}:{item.get('title', '')}:{item.get('organization', '')}"
        merged[key] = dict(item)

    # Intégrer les expériences LinkedIn
    if linkedin_experiences:
        for exp in linkedin_experiences:
            title = exp.get("title") or "Sans titre"
            company = exp.get("company") or "Inconnu"
            key = f"experience:{title}:{company}"

            if key in merged:
                entry = merged[key]
                entry["location"] = safe_update(entry.get("location"), exp.get("location"))
                entry["description"] = safe_update(entry.get("description"), exp.get("description"))
                start = format_date_french(exp.get("start"))
                end = format_date_french(exp.get("end"))
                entry["start"] = safe_update(entry.get("start"), start)
                entry["end"] = safe_update(entry.get("end"), end)
                entry["status"] = "en_cours" if not exp.get("end") else "terminé"
            else:
                start = format_date_french(exp.get("start"))
                end = format_date_french(exp.get("end"))
                merged[key] = {
                    "type": "experience",
                    "title": title,
                    "organization": company,
                    "location": exp.get("location"),
                    "start": start or "Inconnu",
                    "end": end,
                    "status": "en_cours" if not exp.get("end") else "terminé",
                    "description": exp.get("description"),
                }
                logger.info(f"Nouvelle expérience ajoutée : '{title}' chez '{company}'")

    # Intégrer les formations LinkedIn
    if linkedin_education:
        for edu in linkedin_education:
            school = edu.get("school") or "Inconnu"
            degree = edu.get("degree") or edu.get("field") or "Formation"
            key = f"education:{degree}:{school}"

            if key in merged:
                entry = merged[key]
                entry["description"] = safe_update(entry.get("description"), edu.get("field"))
                start = format_date_french(edu.get("start"))
                end = format_date_french(edu.get("end"))
                entry["start"] = safe_update(entry.get("start"), start)
                entry["end"] = safe_update(entry.get("end"), end)
                entry["status"] = safe_update(entry.get("status"), edu.get("status"))
            else:
                start = format_date_french(edu.get("start"))
                end = format_date_french(edu.get("end"))
                merged[key] = {
                    "type": "education",
                    "title": degree,
                    "organization": school,
                    "location": None,
                    "start": start or "Inconnu",
                    "end": end,
                    "status": edu.get("status") or ("en_cours" if not end else "terminé"),
                    "description": edu.get("field"),
                }
                logger.info(f"Nouvelle formation ajoutée : '{degree}' à '{school}'")

    # Trier par date de début la plus récente
    def sort_key(item):
        start = item.get("start", "")
        # Extraire l'année pour le tri
        match = re.search(r"(\d{4})", str(start))
        return int(match.group(1)) if match else 0

    result = sorted(merged.values(), key=sort_key, reverse=True)
    return result


def main():
    logger.info("=" * 60)
    logger.info("Démarrage du processeur de données")
    logger.info("=" * 60)

    # ─── Charger les fichiers sources ─────────────────────────────────────
    linkedin_data = load_json(LINKEDIN_RAW)
    github_data = load_json(GITHUB_RAW)
    portfolio_data = load_json(PORTFOLIO_DATA)

    if not portfolio_data:
        logger.error("portfolio_data.json introuvable ou invalide — abandon")
        sys.exit(0)

    # ─── Compteurs de changements ─────────────────────────────────────────
    changes = {
        "projects": 0,
        "skills": 0,
        "certifications": 0,
        "timeline": 0,
    }

    # ─── Fusion des projets ───────────────────────────────────────────────
    existing_projects = portfolio_data.get("projects", [])
    github_repos = github_data.get("repositories", []) if github_data else []

    before_count = len(existing_projects)
    portfolio_data["projects"] = match_projects(existing_projects, github_repos)
    after_count = len(portfolio_data["projects"])
    changes["projects"] = after_count - before_count
    logger.info(f"Projets : {before_count} → {after_count} (+{changes['projects']} nouveaux)")

    # ─── Fusion des compétences ───────────────────────────────────────────
    existing_skills = portfolio_data.get("skills", [])
    linkedin_skills = linkedin_data.get("skills", []) if linkedin_data else []
    github_languages = github_data.get("languages_summary", {}) if github_data else {}

    before_count = len(existing_skills)
    portfolio_data["skills"] = merge_skills(existing_skills, linkedin_skills, github_languages)
    changes["skills"] = len(portfolio_data["skills"]) - before_count
    logger.info(f"Compétences : {before_count} → {len(portfolio_data['skills'])}")

    # ─── Fusion des certifications ────────────────────────────────────────
    existing_certs = portfolio_data.get("certifications", [])
    linkedin_certs = linkedin_data.get("certifications", []) if linkedin_data else []

    before_count = len(existing_certs)
    portfolio_data["certifications"] = merge_certifications(existing_certs, linkedin_certs)
    changes["certifications"] = len(portfolio_data["certifications"]) - before_count
    logger.info(f"Certifications : {before_count} → {len(portfolio_data['certifications'])}")

    # ─── Fusion du parcours ───────────────────────────────────────────────
    existing_timeline = portfolio_data.get("timeline", [])
    linkedin_experiences = linkedin_data.get("experiences", []) if linkedin_data else []
    linkedin_education = linkedin_data.get("education", []) if linkedin_data else []

    before_count = len(existing_timeline)
    portfolio_data["timeline"] = merge_timeline(
        existing_timeline, linkedin_experiences, linkedin_education
    )
    changes["timeline"] = len(portfolio_data["timeline"]) - before_count
    logger.info(f"Parcours : {before_count} → {len(portfolio_data['timeline'])}")

    # ─── Mise à jour de la date ───────────────────────────────────────────
    portfolio_data["last_updated"] = datetime.now().isoformat()

    # ─── Sauvegarde ──────────────────────────────────────────────────────
    try:
        with open(PORTFOLIO_DATA, "w", encoding="utf-8") as f:
            json.dump(portfolio_data, f, ensure_ascii=False, indent=2)
        logger.info(f"portfolio_data.json mis à jour avec succès")
    except IOError as e:
        logger.error(f"Erreur lors de la sauvegarde : {e}")

    # ─── Résumé ──────────────────────────────────────────────────────────
    logger.info(
        f"Résumé des changements : "
        f"Projets: +{changes['projects']} · "
        f"Compétences: {changes['skills']} mises à jour · "
        f"Certifications: {changes['certifications']} changement(s) · "
        f"Parcours: {changes['timeline']} changement(s)"
    )

    logger.info("Processeur de données terminé")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        logger.error(f"Erreur fatale non capturée : {e}")
    finally:
        sys.exit(0)
