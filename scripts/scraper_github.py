#!/usr/bin/env python3
"""
scraper_github.py — Scraper GitHub via l'API REST v3 (PyGithub).

Utilise le GITHUB_TOKEN fourni automatiquement par GitHub Actions.
Extrait les repositories, langages, activité et README.

Filtrage :
  - Ignore les forks
  - Ignore les repos avec < 2 commits
  - Ignore les repos dont le nom contient "test" ou "demo"
  - Trie par date de dernière mise à jour (plus récent en premier)
"""

import json
import os
import sys
import logging
import base64
from datetime import datetime
from pathlib import Path

# ─── Chemins ───────────────────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DATA_DIR = PROJECT_ROOT / "data"
LOG_DIR = SCRIPT_DIR / "logs"
RAW_FILE = DATA_DIR / "github_raw.json"
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
logger = logging.getLogger("scraper_github")

# ─── Configuration ────────────────────────────────────────────────────────────
GITHUB_USERNAME = "Yanni-Delattre-Balcer"
EXCLUDED_NAME_PATTERNS = ["test", "demo"]


def load_existing_data():
    """Charge les données existantes comme fallback."""
    if RAW_FILE.exists():
        try:
            with open(RAW_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError) as e:
            logger.warning(f"Impossible de lire github_raw.json existant : {e}")
    return None


def get_commit_count(repo):
    """Récupère le nombre de commits d'un repo via l'API."""
    try:
        commits = repo.get_commits()
        return commits.totalCount
    except Exception as e:
        logger.warning(f"Erreur comptage commits pour {repo.name} : {e}")
        return 0


def get_readme_summary(repo):
    """Extrait la première section significative du README."""
    try:
        readme = repo.get_readme()
        content = base64.b64decode(readme.content).decode("utf-8")

        # Extraire les premières lignes significatives (après le titre)
        lines = content.split("\n")
        summary_lines = []
        found_content = False

        for line in lines:
            stripped = line.strip()
            # Skip le titre principal (# ...)
            if stripped.startswith("# ") and not found_content:
                continue
            # Skip les lignes vides au début
            if not stripped and not found_content:
                continue
            # Stop aux sous-titres suivants
            if stripped.startswith("## ") and found_content:
                break

            if stripped:
                found_content = True
                summary_lines.append(stripped)

            # Limiter à ~3 lignes de résumé
            if len(summary_lines) >= 3:
                break

        return " ".join(summary_lines) if summary_lines else None

    except Exception:
        return None


def should_exclude_repo(repo):
    """Vérifie si un repo doit être filtré."""
    name_lower = repo.name.lower()

    # Ignorer les forks
    if repo.fork:
        logger.info(f"  Exclu (fork) : {repo.name}")
        return True

    # Ignorer les noms contenant test ou demo
    for pattern in EXCLUDED_NAME_PATTERNS:
        if pattern in name_lower:
            logger.info(f"  Exclu (nom contient '{pattern}') : {repo.name}")
            return True

    return False


def main():
    logger.info("=" * 60)
    logger.info("Démarrage du scraper GitHub")
    logger.info("=" * 60)

    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")

    try:
        from github import Github, GithubException

        if token:
            g = Github(token)
            logger.info("Authentification via GITHUB_TOKEN")
        else:
            g = Github()
            logger.warning("Pas de GITHUB_TOKEN — utilisation non-authentifiée (limites d'API plus basses)")

        user = g.get_user(GITHUB_USERNAME)
        logger.info(f"Profil trouvé : {user.login} ({user.public_repos} repos publics)")

        # ─── Récupérer tous les repos ─────────────────────────────────────
        all_repos = []
        languages_global = {}

        for repo in user.get_repos(type="public", sort="updated", direction="desc"):
            if should_exclude_repo(repo):
                continue

            # Compter les commits
            commit_count = get_commit_count(repo)
            if commit_count < 2:
                logger.info(f"  Exclu (< 2 commits) : {repo.name} ({commit_count} commits)")
                continue

            # Langages avec pourcentages
            try:
                languages = repo.get_languages()
                total_bytes = sum(languages.values()) if languages else 0
                languages_pct = {}
                if total_bytes > 0:
                    for lang, bytes_count in languages.items():
                        pct = round((bytes_count / total_bytes) * 100, 1)
                        languages_pct[lang] = pct

                        # Agrégation globale
                        if lang in languages_global:
                            languages_global[lang] += bytes_count
                        else:
                            languages_global[lang] = bytes_count
            except Exception as e:
                logger.warning(f"Erreur langages pour {repo.name} : {e}")
                languages_pct = {}

            # Topics
            try:
                topics = repo.get_topics()
            except Exception:
                topics = []

            # README résumé
            readme_summary = get_readme_summary(repo)

            repo_data = {
                "name": repo.name,
                "description": repo.description,
                "language": repo.language,
                "languages": languages_pct,
                "created_at": repo.created_at.isoformat() if repo.created_at else None,
                "updated_at": repo.updated_at.isoformat() if repo.updated_at else None,
                "pushed_at": repo.pushed_at.isoformat() if repo.pushed_at else None,
                "commits": commit_count,
                "topics": topics,
                "url": repo.html_url,
                "archived": repo.archived,
                "readme_summary": readme_summary,
            }

            all_repos.append(repo_data)
            logger.info(
                f"  ✓ {repo.name} — {repo.language or 'N/A'} — "
                f"{commit_count} commits — maj {repo.updated_at}"
            )

        # ─── Calculer les langages globaux en pourcentages ────────────────
        total_global = sum(languages_global.values()) if languages_global else 0
        languages_summary = {}
        if total_global > 0:
            for lang, bytes_count in sorted(
                languages_global.items(), key=lambda x: x[1], reverse=True
            ):
                languages_summary[lang] = round((bytes_count / total_global) * 100, 1)

        # ─── Activité récente ─────────────────────────────────────────────
        activity = {
            "total_public_repos": user.public_repos,
            "repos_after_filter": len(all_repos),
            "followers": user.followers,
            "following": user.following,
        }

        # Contributions récentes (dernières 52 semaines) via events
        try:
            recent_events = list(user.get_events()[:100])
            push_events = [e for e in recent_events if e.type == "PushEvent"]
            activity["recent_push_events"] = len(push_events)
        except Exception as e:
            logger.warning(f"Erreur récupération activité : {e}")
            activity["recent_push_events"] = 0

        # ─── Résultat final ───────────────────────────────────────────────
        result = {
            "scraped_at": datetime.now().isoformat(),
            "repositories": all_repos,
            "languages_summary": languages_summary,
            "activity": activity,
        }

        # ─── Sauvegarde ──────────────────────────────────────────────────
        with open(RAW_FILE, "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=2)

        logger.info(f"Données sauvegardées dans {RAW_FILE}")
        logger.info(
            f"Résumé : {len(all_repos)} repos retenus, "
            f"{len(languages_summary)} langages détectés"
        )

        g.close()

    except Exception as e:
        logger.error(f"Erreur GitHub API : {e}")

        # Fallback : conserver les données existantes
        existing = load_existing_data()
        if existing:
            logger.info("Fallback : données existantes conservées")
        else:
            logger.warning("Aucune donnée existante — écriture d'un fichier vide")
            result = {
                "scraped_at": datetime.now().isoformat(),
                "repositories": [],
                "languages_summary": {},
                "activity": {},
            }
            with open(RAW_FILE, "w", encoding="utf-8") as f:
                json.dump(result, f, ensure_ascii=False, indent=2)

    logger.info("Scraper GitHub terminé")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        logger.error(f"Erreur fatale non capturée : {e}")
    finally:
        # Toujours exit(0) pour ne pas bloquer le workflow
        sys.exit(0)
