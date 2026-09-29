/**
 * linkedin-news.js — Rendu dynamique des actualités LinkedIn.
 *
 * Lit PORTFOLIO_DATA.linkedin_posts (défini dans data.js) et génère
 * de belles cards dans #linkedin-posts-grid.
 *
 * Chargé après data.js dans index.html.
 */

(function renderLinkedInNews() {
  const grid = document.getElementById('linkedin-posts-grid');
  if (!grid) return;

  // Attendre que le DOM soit prêt
  function init() {
    if (typeof PORTFOLIO_DATA === 'undefined') {
      console.warn('[linkedin-news] PORTFOLIO_DATA non disponible.');
      grid.innerHTML = '<p class="text-muted text-center">Actualités non disponibles.</p>';
      return;
    }

    const posts = PORTFOLIO_DATA.linkedin_posts || [];

    if (posts.length === 0) {
      grid.innerHTML = `
        <div class="linkedin-empty">
          <i class="bi bi-linkedin"></i>
          <p>Aucune actualité pour le moment.<br>Revenez bientôt !</p>
        </div>`;
      return;
    }

    // Trier par date décroissante
    const sorted = [...posts].sort((a, b) => {
      const da = a.date || '0000-00-00';
      const db = b.date || '0000-00-00';
      return db.localeCompare(da);
    });

    // Formater une date "2026-09-28" en "28 sept. 2026"
    function formatDate(dateStr) {
      if (!dateStr) return '';
      try {
        const d = new Date(dateStr + 'T12:00:00');
        return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
      } catch {
        return dateStr;
      }
    }

    // Tronquer le texte avec "..." si trop long
    function truncate(text, maxLen = 200) {
      if (!text) return '';
      if (text.length <= maxLen) return text;
      return text.slice(0, maxLen).trimEnd() + '…';
    }

    // Mettre en évidence les #hashtags dans le texte
    function highlightHashtags(text) {
      return text.replace(/#(\w+)/g, '<span class="li-hashtag">#$1</span>');
    }

    // Générer le HTML des cards
    const cardsHtml = sorted.map((post, idx) => {
      const dateFormatted = formatDate(post.date);
      const textShort = truncate(post.text, 220);
      const textHighlighted = highlightHashtags(textShort);
      const tags = (post.tags || []).slice(0, 4);
      const hasUrl = !!post.url;

      const tagPills = tags.map(t =>
        `<span class="li-tag">${t.startsWith('#') ? t : '#' + t}</span>`
      ).join('');

      return `
        <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${100 + idx * 80}">
          <div class="li-card-premium ${hasUrl ? 'li-card-clickable' : ''}"
               ${hasUrl ? `onclick="window.open('${post.url}','_blank','noopener')"` : ''}
               role="${hasUrl ? 'link' : 'article'}"
               tabindex="${hasUrl ? '0' : '-1'}"
               ${hasUrl ? `onkeydown="if(event.key==='Enter')window.open('${post.url}','_blank','noopener')"` : ''}>

            <div class="li-card-header">
              <div class="li-icon-wrapper">
                <i class="bi bi-linkedin"></i>
              </div>
              <span class="li-date">${dateFormatted}</span>
            </div>

            <div class="li-card-body">
              <p class="li-text">${textHighlighted}</p>
              ${tagPills ? `<div class="li-tags">${tagPills}</div>` : ''}
            </div>

            ${hasUrl ? `
            <div class="li-card-footer">
              <span class="li-read-more">Voir la publication <i class="bi bi-arrow-right"></i></span>
            </div>` : ''}

          </div>
        </div>`;
    }).join('');

    grid.innerHTML = `<div class="row g-4">${cardsHtml}</div>`;

    // Re-init AOS si disponible
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }

    console.info(`[linkedin-news] ${posts.length} post(s) LinkedIn rendu(s).`);
  }

  // Lancer à DOMContentLoaded ou immédiatement si déjà prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
