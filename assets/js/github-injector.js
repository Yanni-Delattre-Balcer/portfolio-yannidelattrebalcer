/**
 * github-injector.js — Injection automatique des projets GitHub dans le portfolio.
 *
 * Ce script lit PORTFOLIO_DATA (défini dans data.js, généré automatiquement)
 * et injecte les projets issus de GitHub dans COMPETENCES.autres.apprentissages[0].detail.traces
 * afin qu'ils apparaissent dans la section "AUTRES" du portfolio.
 *
 * Chargé après data.js et portfolio-competences.js.
 */

(function injectGithubProjects() {
  // Vérifications de sécurité : les deux variables doivent exister
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.warn('[github-injector] PORTFOLIO_DATA non disponible — injection annulée.');
    return;
  }
  if (typeof COMPETENCES === 'undefined' || !COMPETENCES.autres) {
    console.warn('[github-injector] COMPETENCES non disponible — injection annulée.');
    return;
  }

  // Récupérer uniquement les projets issus de GitHub
  const githubProjects = (PORTFOLIO_DATA.projects || []).filter(
    (p) => p.source === 'github'
  );

  if (githubProjects.length === 0) {
    console.info('[github-injector] Aucun projet GitHub à injecter.');
    return;
  }

  // Convertir un projet portfolio_data en trace compatible portfolio-competences.js
  function toTrace(project) {
    // Construire les tags à partir du stack
    const tags = Array.isArray(project.stack) && project.stack.length > 0
      ? project.stack.slice(0, 5)   // max 5 tags
      : [];

    // Année
    const year = project.year || new Date().getFullYear();

    // URL : préférer le github_url, sinon details_url
    const url = project.github_url || project.details_url || null;

    return {
      title: project.title || project.id,
      category: 'Projet GitHub',
      image: null,   // Pas d'image pour les projets GitHub
      logo: null,
      url: url,
      tags: tags,
      year: year,
      // Données bonus accessibles par d'autres scripts si besoin
      _github: {
        name: project.id,
        description: project.description || '',
        github_url: project.github_url,
        last_updated: project.last_updated,
        status: project.status,
      }
    };
  }

  // Construire les nouvelles traces GitHub
  const githubTraces = githubProjects.map(toTrace);

  // Injecter dans COMPETENCES.autres.apprentissages[0].detail.traces
  // On évite les doublons (par titre)
  const autresTraces = COMPETENCES.autres.apprentissages[0].detail.traces;
  const existingTitles = new Set(autresTraces.map((t) => t.title.toLowerCase()));

  let injected = 0;
  for (const trace of githubTraces) {
    if (!existingTitles.has(trace.title.toLowerCase())) {
      autresTraces.push(trace);
      existingTitles.add(trace.title.toLowerCase());
      injected++;
    }
  }

  if (injected > 0) {
    console.info(`[github-injector] ${injected} projet(s) GitHub injecté(s) dans la section "AUTRES".`);
  } else {
    console.info('[github-injector] Tous les projets GitHub sont déjà présents dans la section "AUTRES".');
  }
})();
