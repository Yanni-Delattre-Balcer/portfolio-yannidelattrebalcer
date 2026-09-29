#!/usr/bin/env python3
"""
scraper_linkedin.py — Scraper LinkedIn avec fallback à 3 niveaux.

Niveau 1 : API linkedin-api authentifiée (secrets LI_USERNAME / LI_PASSWORD)
Niveau 2 : Scraping du profil public via requests + BeautifulSoup
Niveau 3 : Conservation des données existantes dans data/linkedin_raw.json

Sécurité :
  - try/except global → exit(0) toujours
  - Retry 3x avec délai 30s
  - Logging dans scripts/logs/scraper.log
  - Si un champ manque → null, jamais de crash
"""

import json
import os
import sys
import time
import logging
from datetime import datetime
from pathlib import Path

# ─── Chemins ───────────────────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DATA_DIR = PROJECT_ROOT / "data"
LOG_DIR = SCRIPT_DIR / "logs"
RAW_FILE = DATA_DIR / "linkedin_raw.json"
LOG_FILE = LOG_DIR / "scraper.log"

# ─── Logging ──────────────────────────────────────────────────────────────────
LOG_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR.mkdir(parents=True, exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler(sys.stdout),
    ],
)
logger = logging.getLogger("scraper_linkedin")

# ─── Configuration ────────────────────────────────────────────────────────────
LINKEDIN_PROFILE_ID = "yanni-delattre-balcer-73bb573a3"
LINKEDIN_PUBLIC_URL = f"https://www.linkedin.com/in/{LINKEDIN_PROFILE_ID}"
MAX_RETRIES = 3
RETRY_DELAY = 30  # seconds


def load_existing_data():
    """Charge les données existantes pour le fallback niveau 3."""
    if RAW_FILE.exists():
        try:
            with open(RAW_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
            logger.info("Données existantes chargées depuis linkedin_raw.json")
            return data
        except (json.JSONDecodeError, IOError) as e:
            logger.warning(f"Impossible de lire linkedin_raw.json existant : {e}")
    return None


def safe_get(dct, *keys, default=None):
    """Accès sécurisé à des clés imbriquées dans un dictionnaire."""
    for key in keys:
        if isinstance(dct, dict):
            dct = dct.get(key, default)
        else:
            return default
    return dct


def format_date(date_dict):
    """Formate un objet date LinkedIn {year, month} en string."""
    if not date_dict or not isinstance(date_dict, dict):
        return None
    year = date_dict.get("year")
    month = date_dict.get("month")
    if year and month:
        return f"{year}-{month:02d}"
    elif year:
        return str(year)
    return None


# ═══════════════════════════════════════════════════════════════════════════════
# NIVEAU 1 : API linkedin-api authentifiée
# ═══════════════════════════════════════════════════════════════════════════════

def scrape_level1():
    """Scraping via linkedin-api avec authentification ou LI_AT."""
    li_at = os.environ.get("LI_AT")
    username = os.environ.get("LI_USERNAME")
    password = os.environ.get("LI_PASSWORD")

    if not li_at and (not username or not password):
        logger.warning("Aucun identifiant (LI_AT ou LI_USERNAME/PASSWORD) défini — skip niveau 1")
        return None

    logger.info("Niveau 1 : Tentative de connexion via linkedin-api...")

    try:
        from linkedin_api import Linkedin

        if li_at:
            logger.info("Utilisation du cookie de session LI_AT...")
            # On injecte le cookie manuellement pour la librairie linkedin-api
            import pickle
            from pathlib import Path
            import requests
            
            # Nom d'utilisateur factice pour stocker le fichier cookie
            fake_user = "li_at_user"
            cookie_dir = Path.home() / ".linkedin_api" / "cookies"
            cookie_dir.mkdir(parents=True, exist_ok=True)
            
            jar = requests.cookies.RequestsCookieJar()
            jar.set("li_at", li_at, domain=".linkedin.com", path="/", secure=True)
            jar.set("JSESSIONID", '"ajax:1234567890"', domain=".linkedin.com", path="/", secure=True)
            # linkedin-api attend un fichier pickle avec le jar
            with open(cookie_dir / f"{fake_user}.cookie", "wb") as f:
                pickle.dump(jar, f)
            
            # Initialise l'API avec le faux user, elle lira le fichier cookie sans se connecter
            api = Linkedin(fake_user, "dummy_password")
        else:
            api = Linkedin(username, password)
            
        profile = api.get_profile(LINKEDIN_PROFILE_ID)

        if not profile:
            logger.warning("Niveau 1 : Profil vide retourné")
            return None

        # ─── Expériences ──────────────────────────────────────────────────
        experiences = []
        for exp in safe_get(profile, "experience", default=[]):
            experiences.append({
                "title": safe_get(exp, "title"),
                "company": safe_get(exp, "companyName"),
                "location": safe_get(exp, "locationName"),
                "start": format_date(safe_get(exp, "timePeriod", "startDate")),
                "end": format_date(safe_get(exp, "timePeriod", "endDate")),
                "description": safe_get(exp, "description"),
            })

        # ─── Formations ───────────────────────────────────────────────────
        education = []
        for edu in safe_get(profile, "education", default=[]):
            end_date = format_date(safe_get(edu, "timePeriod", "endDate"))
            education.append({
                "school": safe_get(edu, "schoolName"),
                "degree": safe_get(edu, "degreeName"),
                "field": safe_get(edu, "fieldOfStudy"),
                "start": format_date(safe_get(edu, "timePeriod", "startDate")),
                "end": end_date,
                "status": "obtenu" if end_date else "en_cours",
            })

        # ─── Certifications ───────────────────────────────────────────────
        certifications = []
        for cert in safe_get(profile, "certifications", default=[]):
            certifications.append({
                "name": safe_get(cert, "name"),
                "issuer": safe_get(cert, "authority"),
                "date": format_date(safe_get(cert, "timePeriod", "startDate")),
                "url": safe_get(cert, "url"),
            })

        # ─── Compétences ──────────────────────────────────────────────────
        skills = []
        try:
            skills_data = api.get_profile_skills(LINKEDIN_PROFILE_ID)
            for skill in skills_data or []:
                skills.append({
                    "name": safe_get(skill, "name"),
                    "endorsements": safe_get(skill, "endorsementCount", default=0),
                })
        except Exception as e:
            logger.warning(f"Erreur lors de la récupération des compétences : {e}")

        # ─── Posts récents ───────────────────────────────────────────────────
        posts = []
        try:
            raw_posts = api.get_profile_posts(public_id=LINKEDIN_PROFILE_ID, post_count=10)
            for p in (raw_posts or []):
                # Extraire le texte du post
                commentary = safe_get(p, "commentary") or safe_get(p, "specificContent", "com.linkedin.ugc.ShareContent", "shareCommentaryV2", "text") or ""
                # Parfois le texte est dans un objet avec .text
                if isinstance(commentary, dict):
                    commentary = commentary.get("text", "")

                if not commentary:
                    continue

                # Extraire les hashtags
                import re
                hashtags = re.findall(r'#(\w+)', commentary)

                # Date de publication
                created_at = safe_get(p, "created", "time") or safe_get(p, "createdAt")
                if created_at:
                    try:
                        from datetime import datetime as dt
                        # LinkedIn renvoie un timestamp en millisecondes
                        ts = int(created_at) / 1000
                        date_str = dt.fromtimestamp(ts).strftime("%Y-%m-%d")
                    except (ValueError, TypeError, OSError):
                        date_str = None
                else:
                    date_str = None

                # URL du post
                post_url = None
                try:
                    share_id = safe_get(p, "entityUrn", default="")
                    if share_id:
                        # Extraire l'identifiant numérique depuis urn:li:share:XXXXXXXXX
                        match = re.search(r':(\d+)$', str(share_id))
                        if match:
                            post_url = f"https://www.linkedin.com/feed/update/{share_id}/"
                except Exception:
                    pass

                posts.append({
                    "id": safe_get(p, "entityUrn", default=f"post-{len(posts)}"),
                    "date": date_str,
                    "text": commentary.strip()[:500],   # Tronquer à 500 chars
                    "tags": hashtags[:5],               # Max 5 hashtags
                    "url": post_url,
                    "emoji": None,
                })
        except Exception as e:
            logger.warning(f"Erreur récupération posts LinkedIn : {e}")

        result = {
            "scraped_at": datetime.now().isoformat(),
            "source": "linkedin-api",
            "experiences": experiences,
            "education": education,
            "certifications": certifications,
            "skills": skills,
            "posts": posts,
        }

        logger.info(
            f"Niveau 1 réussi : {len(experiences)} expériences, "
            f"{len(education)} formations, {len(certifications)} certifications, "
            f"{len(skills)} compétences"
        )
        return result

    except Exception as e:
        logger.error(f"Niveau 1 échoué : {e}")
        return None


# ═══════════════════════════════════════════════════════════════════════════════
# NIVEAU 2 : Scraping du profil public
# ═══════════════════════════════════════════════════════════════════════════════

def scrape_level2():
    """Scraping du profil LinkedIn public via requests + BeautifulSoup."""
    logger.info("Niveau 2 : Tentative de scraping du profil public...")

    try:
        import requests
        from bs4 import BeautifulSoup

        headers = {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/120.0.0.0 Safari/537.36"
            ),
            "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        }

        response = requests.get(LINKEDIN_PUBLIC_URL, headers=headers, timeout=30)

        if response.status_code != 200:
            logger.warning(
                f"Niveau 2 : HTTP {response.status_code} — profil public inaccessible"
            )
            return None

        soup = BeautifulSoup(response.text, "html.parser")

        # LinkedIn retourne souvent une page de redirection pour les non-connectés
        # On tente quand même d'extraire les données visibles
        experiences = []
        education = []
        certifications = []
        skills = []

        # ─── Extraction des sections publiques ────────────────────────────
        # Les profils publics LinkedIn ont une structure JSON-LD
        json_ld_scripts = soup.find_all("script", type="application/ld+json")
        for script in json_ld_scripts:
            try:
                ld_data = json.loads(script.string)
                if isinstance(ld_data, dict):
                    # Extraction depuis JSON-LD si disponible
                    if ld_data.get("@type") == "Person":
                        # Expériences via worksFor
                        for work in ld_data.get("worksFor", []):
                            if isinstance(work, dict):
                                experiences.append({
                                    "title": work.get("jobTitle"),
                                    "company": safe_get(work, "name"),
                                    "location": None,
                                    "start": None,
                                    "end": None,
                                    "description": None,
                                })
                        # Formations via alumniOf
                        for school in ld_data.get("alumniOf", []):
                            if isinstance(school, dict):
                                education.append({
                                    "school": school.get("name"),
                                    "degree": None,
                                    "field": None,
                                    "start": None,
                                    "end": None,
                                    "status": None,
                                })
            except (json.JSONDecodeError, TypeError):
                continue

        # ─── Extraction des sections visibles dans le HTML ────────────────
        # Compétences publiques
        skill_sections = soup.find_all("span", class_="skill-name") or []
        for s in skill_sections:
            text = s.get_text(strip=True)
            if text:
                skills.append({"name": text, "endorsements": 0})

        result = {
            "scraped_at": datetime.now().isoformat(),
            "source": "public-scraping",
            "experiences": experiences,
            "education": education,
            "certifications": certifications,
            "skills": skills,
        }

        # Vérifier qu'on a récupéré au moins quelque chose
        total = len(experiences) + len(education) + len(skills)
        if total == 0:
            logger.warning("Niveau 2 : Aucune donnée extraite du profil public")
            return None

        logger.info(
            f"Niveau 2 réussi : {len(experiences)} expériences, "
            f"{len(education)} formations, {len(skills)} compétences"
        )
        return result

    except Exception as e:
        logger.error(f"Niveau 2 échoué : {e}")
        return None


# ═══════════════════════════════════════════════════════════════════════════════
# NIVEAU 3 : Données existantes
# ═══════════════════════════════════════════════════════════════════════════════

def scrape_level3():
    """Fallback : conserver les données existantes."""
    logger.info("Niveau 3 : Conservation des données existantes")
    data = load_existing_data()
    if data:
        data["source"] = "existing-data"
        logger.info("Niveau 3 : Données existantes conservées avec succès")
    else:
        logger.warning("Niveau 3 : Aucune donnée existante disponible")
        data = {
            "scraped_at": datetime.now().isoformat(),
            "source": "empty",
            "experiences": [],
            "education": [],
            "certifications": [],
            "skills": [],
        }
    return data


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN — Orchestration avec retry
# ═══════════════════════════════════════════════════════════════════════════════

def main():
    logger.info("=" * 60)
    logger.info("Démarrage du scraper LinkedIn")
    logger.info("=" * 60)

    result = None

    # ─── Niveau 1 : linkedin-api avec retry ───────────────────────────────
    for attempt in range(1, MAX_RETRIES + 1):
        logger.info(f"Niveau 1 — Tentative {attempt}/{MAX_RETRIES}")
        result = scrape_level1()
        if result:
            break
        if attempt < MAX_RETRIES:
            logger.info(f"Attente de {RETRY_DELAY}s avant nouvelle tentative...")
            time.sleep(RETRY_DELAY)

    # ─── Niveau 2 : Scraping public ──────────────────────────────────────
    if not result:
        logger.info("Niveau 1 épuisé — passage au niveau 2")
        for attempt in range(1, MAX_RETRIES + 1):
            logger.info(f"Niveau 2 — Tentative {attempt}/{MAX_RETRIES}")
            result = scrape_level2()
            if result:
                break
            if attempt < MAX_RETRIES:
                logger.info(f"Attente de {RETRY_DELAY}s avant nouvelle tentative...")
                time.sleep(RETRY_DELAY)

    # ─── Niveau 3 : Données existantes ───────────────────────────────────
    if not result:
        logger.info("Niveaux 1 et 2 épuisés — passage au niveau 3 (fallback)")
        result = scrape_level3()

    # ─── Sauvegarde ──────────────────────────────────────────────────────
    try:
        with open(RAW_FILE, "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        logger.info(f"Données sauvegardées dans {RAW_FILE}")
    except IOError as e:
        logger.error(f"Erreur lors de la sauvegarde : {e}")

    logger.info("Scraper LinkedIn terminé")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        logger.error(f"Erreur fatale non capturée : {e}")
    finally:
        # Toujours exit(0) pour ne pas bloquer le workflow
        sys.exit(0)
