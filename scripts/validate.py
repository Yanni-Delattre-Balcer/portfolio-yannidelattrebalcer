#!/usr/bin/env python3
"""
validate.py — Validation de portfolio_data.json.

Vérifie que le fichier JSON est valide et que toutes les données
respectent le schéma attendu. Si la validation échoue, exit(1)
pour bloquer le commit dans le workflow GitHub Actions.
"""

import json
import re
import sys
import logging
from pathlib import Path

# ─── Chemins ───────────────────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DATA_DIR = PROJECT_ROOT / "data"
LOG_DIR = SCRIPT_DIR / "logs"
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
logger = logging.getLogger("validate")

# ─── Validation ───────────────────────────────────────────────────────────────

errors = []
warnings = []


def error(msg):
    """Enregistre une erreur de validation."""
    errors.append(msg)
    logger.error(f"VALIDATION ERROR: {msg}")


def warn(msg):
    """Enregistre un avertissement."""
    warnings.append(msg)
    logger.warning(f"VALIDATION WARN: {msg}")


def check_required_keys(data, keys, context="root"):
    """Vérifie que toutes les clés requises sont présentes et non vides."""
    for key in keys:
        if key not in data:
            error(f"[{context}] Clé manquante : '{key}'")
        elif data[key] is None or data[key] == "":
            warn(f"[{context}] Clé vide : '{key}'")


def check_score(score, context):
    """Vérifie qu'un score est entre 0 et 100 (ou null pour EXC)."""
    if score is None:
        return  # null est acceptable (compétences EXC)
    if not isinstance(score, (int, float)):
        error(f"[{context}] Score invalide (type {type(score).__name__}) : {score}")
        return
    if score < 0 or score > 100:
        error(f"[{context}] Score hors limites [0-100] : {score}")


def check_date_format(date_str, context):
    """Vérifie qu'une date est dans un format cohérent."""
    if date_str is None:
        return  # null est acceptable
    if not isinstance(date_str, str):
        error(f"[{context}] Date invalide (type {type(date_str).__name__}) : {date_str}")
        return

    # Formats acceptés : YYYY, YYYY-MM, YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS,
    # ou texte français comme "Septembre 2025", "2022 - 2025"
    valid_patterns = [
        r"^\d{4}$",                          # YYYY
        r"^\d{4}-\d{2}$",                    # YYYY-MM
        r"^\d{4}-\d{2}-\d{2}$",              # YYYY-MM-DD
        r"^\d{4}-\d{2}-\d{2}T",              # ISO datetime
        r"^[A-ZÀ-Ÿa-zà-ÿ]+\s+\d{4}$",      # "Septembre 2025"
        r"^\d{4}\s*-\s*\d{4}$",              # "2022 - 2025"
    ]

    if not any(re.match(p, date_str) for p in valid_patterns):
        warn(f"[{context}] Format de date inhabituel : '{date_str}'")


def check_status(status, valid_values, context):
    """Vérifie qu'un statut est dans la liste des valeurs valides."""
    if status is None:
        return
    if status not in valid_values:
        warn(f"[{context}] Statut inattendu '{status}' (attendu : {valid_values})")


def main():
    logger.info("=" * 60)
    logger.info("Démarrage de la validation")
    logger.info("=" * 60)

    # ─── Vérification JSON valide ─────────────────────────────────────────
    if not PORTFOLIO_DATA.exists():
        error("portfolio_data.json introuvable")
        return False

    try:
        with open(PORTFOLIO_DATA, "r", encoding="utf-8") as f:
            data = json.load(f)
        logger.info("✓ JSON valide")
    except json.JSONDecodeError as e:
        error(f"JSON invalide : {e}")
        return False

    # ─── Vérification de la structure racine ──────────────────────────────
    check_required_keys(data, ["last_updated", "profile", "projects", "skills", "certifications", "timeline"])

    # ─── Vérification du profil ───────────────────────────────────────────
    profile = data.get("profile", {})
    if profile:
        check_required_keys(profile, ["name", "title", "email"], context="profile")
        logger.info("✓ Profil validé")

    # ─── Vérification des projets ─────────────────────────────────────────
    projects = data.get("projects", [])
    if not isinstance(projects, list):
        error("'projects' n'est pas une liste")
    else:
        for i, project in enumerate(projects):
            ctx = f"projects[{i}]"
            check_required_keys(project, ["id", "title", "category", "status"], context=ctx)
            check_status(project.get("status"), ["terminé", "en_cours"], ctx)
            if project.get("year") is not None:
                if not isinstance(project["year"], int) or project["year"] < 2000 or project["year"] > 2100:
                    warn(f"[{ctx}] Année suspecte : {project.get('year')}")
        logger.info(f"✓ {len(projects)} projets validés")

    # ─── Vérification des compétences ─────────────────────────────────────
    skills = data.get("skills", [])
    if not isinstance(skills, list):
        error("'skills' n'est pas une liste")
    else:
        for i, skill in enumerate(skills):
            ctx = f"skills[{i}]"
            check_required_keys(skill, ["name"], context=ctx)
            check_score(skill.get("score"), ctx)
        logger.info(f"✓ {len(skills)} compétences validées")

    # ─── Vérification des certifications ──────────────────────────────────
    certifications = data.get("certifications", [])
    if not isinstance(certifications, list):
        error("'certifications' n'est pas une liste")
    else:
        for i, cert in enumerate(certifications):
            ctx = f"certifications[{i}]"
            check_required_keys(cert, ["name", "status"], context=ctx)
            check_status(cert.get("status"), ["obtenu", "en_cours"], ctx)
            check_date_format(cert.get("date"), ctx)
        logger.info(f"✓ {len(certifications)} certifications validées")

    # ─── Vérification du parcours ─────────────────────────────────────────
    timeline = data.get("timeline", [])
    if not isinstance(timeline, list):
        error("'timeline' n'est pas une liste")
    else:
        for i, entry in enumerate(timeline):
            ctx = f"timeline[{i}]"
            check_required_keys(entry, ["type", "title", "organization"], context=ctx)
            check_status(entry.get("type"), ["experience", "education"], ctx)
            check_status(entry.get("status"), ["terminé", "en_cours"], ctx)
        logger.info(f"✓ {len(timeline)} entrées de parcours validées")

    # ─── Résultat ─────────────────────────────────────────────────────────
    logger.info("-" * 40)
    if errors:
        logger.error(f"VALIDATION ÉCHOUÉE : {len(errors)} erreur(s), {len(warnings)} avertissement(s)")
        for e in errors:
            logger.error(f"  ✗ {e}")
        for w in warnings:
            logger.warning(f"  ⚠ {w}")
        return False
    else:
        if warnings:
            logger.warning(f"Validation réussie avec {len(warnings)} avertissement(s)")
            for w in warnings:
                logger.warning(f"  ⚠ {w}")
        else:
            logger.info("✓ VALIDATION RÉUSSIE — aucune erreur, aucun avertissement")
        return True


if __name__ == "__main__":
    try:
        success = main()
        # exit(1) si validation échouée — bloque le commit
        sys.exit(0 if success else 1)
    except Exception as e:
        logger.error(f"Erreur fatale lors de la validation : {e}")
        # En cas d'erreur du validateur lui-même, on bloque aussi
        sys.exit(1)
