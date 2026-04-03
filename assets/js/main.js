/**
* Template Name: Craftivo
* Template URL: https://bootstrapmade.com/craftivo-bootstrap-portfolio-template/
* Updated: Oct 04 2025 with Bootstrap v5.3.8
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Gestion du Header au scroll
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Masquer nav mobile au clic
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Dropdowns mobile
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll Top
   */
  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ?
      scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * AOS Init
   */
  function aosInit() {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  }
  window.addEventListener('load', aosInit);

  /**
   * Typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
      strings: typed_strings, loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000
    });
  }

  /**
   * Skills Animation
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function() {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => { el.style.width = el.getAttribute('aria-valuenow') + '%'; });
      }
    });
  });

  /**
   * GLightbox & Isotope
   */
  const glightbox = GLightbox({ selector: '.glightbox' });

  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item', layoutMode: layout, filter: filter, sortBy: sort
      });
    });
    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({ filter: this.getAttribute('data-filter') });
        if (typeof aosInit === 'function') aosInit();
      }, false);
    });
  });

  /**
   * Swiper
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  }
  window.addEventListener("load", initSwiper);

  /**
   * Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');
  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.getElementById(decodeURIComponent(navmenulink.hash).substring(1));
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

/**
 * SECTION ACCUEIL : Gestion du Like et Feedback (Modale corrigée pour Anti-Spam)
 */
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btn-like-action');
    const icon = document.getElementById('h-icon');
    const modal = document.getElementById('like-modal');
    const form = document.getElementById('contact-like-form');
    const closeModal = document.getElementById('close-modal');

    if (localStorage.getItem('yanni_feedback_sent') === 'true') {
        setLikedUI();
    }

    function setLikedUI() {
        if (icon) icon.className = "bi bi-heart-fill";
        if (btn) btn.classList.add('is-liked');
    }

    if (btn) {
        btn.onclick = function() {
            if (localStorage.getItem('yanni_feedback_sent') !== 'true') {
                modal.style.display = 'flex';
            }
        };
    }

    if (closeModal) {
        closeModal.onclick = function() { modal.style.display = 'none'; };
    }

    if (form) {
        form.onsubmit = function() {
            const submitBtn = document.getElementById('submit-btn');
            const isEnglish = document.documentElement.lang === 'en';
            
            // Changement visuel pour l'utilisateur
            submitBtn.innerText = isEnglish ? "Redirecting..." : "Redirection...";
            
            // On enregistre le succès localement avant la redirection
            localStorage.setItem('yanni_feedback_sent', 'true');
            
            // On laisse le formulaire s'envoyer normalement pour gérer le CAPTCHA Formspree
            return true; 
        };
    }
});
// Gestion globale de la navigation par data-filter (depuis Footer ou Compétences)
document.querySelectorAll('a[data-filter]').forEach(link => {
  link.addEventListener('click', function(e) {
    if (!this.closest('.portfolio-filters')) {
      e.preventDefault();
      const filter = this.getAttribute('data-filter');
      
      document.querySelector('#Portfolio').scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        // 1. Activer le filtre Isotope existant
        const filterButton = document.querySelector(`.portfolio-filters [data-filter="${filter}"]`);
        if (filterButton) filterButton.click();
        
        // 2. Activer la compétence AC correspondante
        if (filter === '.filter-digital') document.getElementById('btn-administrer')?.click();
        if (filter === '.filter-creative') document.getElementById('btn-connecter')?.click();
        if (filter === '.filter-strategy') document.getElementById('btn-programmer')?.click();
      }, 100);
    }
  });
});

/**
 * =========================================================
 * GESTION DU SYSTÈME AC (APPRENTISSAGES CRITIQUES)
 * =========================================================
 */
document.addEventListener("DOMContentLoaded", function() {
  const competenceBtns = document.querySelectorAll(".btn-competence");
  const acGridContainer = document.getElementById("ac-grid-container");
  const acGrid = document.getElementById("ac-grid");

  // Si on n'est pas sur une page avec la section AC, on arrête
  if (!acGridContainer || typeof COMPETENCES === "undefined") return;

  competenceBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      // 1. Gérer l'état actif des boutons
      const compKey = this.getAttribute("data-comp");
      const isActive = this.classList.contains("active");

      // Reset tous les boutons
      competenceBtns.forEach(b => b.classList.remove("active"));
      
      if (isActive) {
        // Si on reclique sur le bouton actif, on ferme la grille
        acGridContainer.classList.remove("active");
        setTimeout(() => acGridContainer.style.display = "none", 300);
        return;
      }

      // Activer le bouton cliqué
      this.classList.add("active");
      
      // 2. Vider et remplir la grille AC
      const data = COMPETENCES[compKey];
      if (!data) return;

      acGrid.innerHTML = "";
      
      data.apprentissages.forEach(ac => {
        const statutsMap = {
          'non_acquis': '<i class="bi bi-x-circle text-danger"></i>',
          'en_cours': '<i class="bi bi-arrow-repeat text-warning"></i>',
          'valide': '<i class="bi bi-check-circle-fill text-success"></i>'
        };
        
        // Check if the AC has projects
        const tracesCount = ac.detail && ac.detail.traces ? ac.detail.traces.length : 0;
        const badgeClass = tracesCount > 0 ? "bg-info text-dark" : "bg-dark text-light border border-secondary";
        const badgeIcon = tracesCount > 0 ? "bi-folder-fill" : "bi-folder";
        const badgeProjet = `<span class="badge ${badgeClass} ms-2" style="font-size: 0.75rem; vertical-align: middle;"><i class="bi ${badgeIcon}"></i> ${tracesCount} Projet${tracesCount > 1 ? 's' : ''}</span>`;

        const card = document.createElement("div");
        card.className = "ac-card";
        card.style.setProperty("--comp-color", data.color);
        
        card.innerHTML = `
          <div class="ac-card-header">
            <span class="ac-id">${ac.id}</span>
            <span class="ac-status">${statutsMap[ac.statut] || ''}</span>
          </div>
          <h5 class="ac-title">${ac.intitule}</h5>
          <div class="mt-2 text-end">${badgeProjet}</div>
        `;

        // 3. Clic sur une carte AC -> Afficher les détails inline
        card.addEventListener("click", () => afficherDetailsAC(ac, data.color));
        
        acGrid.appendChild(card);
      });

      // Cacher les détails IMMÉDIATEMENT si on change de catégorie
      const detailsContainer = document.getElementById("ac-details-container");
      const tracesContainer = document.getElementById("ac-traces-container");
      if (detailsContainer) detailsContainer.style.display = "none";
      if (tracesContainer) tracesContainer.style.display = "none";

      // Afficher la grille avec animation
      acGridContainer.style.display = "block";
      // Petit délai pour déclencher la transition CSS
      setTimeout(() => acGridContainer.classList.add("active"), 10);
      
      // Scroll vers la grille si le bouton est bas dans l'écran
      setTimeout(() => {
        const yOffset = -80; // Pour laisser la navbar visible
        const element = document.getElementById("ac-grid-container");
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }, 100);
    });
  });

  function afficherDetailsAC(ac, color) {
    const tracesContainer = document.getElementById("ac-traces-container");
    const detailsContainer = document.getElementById("ac-details-container");
    if (!detailsContainer || !tracesContainer) return;
    
    // Cacher les deux au départ
    tracesContainer.style.display = "none";
    detailsContainer.style.display = "none";

    // Forcer la réinitialisation de l'animation CSS (slideDown)
    tracesContainer.style.animation = 'none';
    detailsContainer.style.animation = 'none';
    void tracesContainer.offsetWidth; // trigger reflow
    void detailsContainer.offsetWidth; // trigger reflow
    // Restaurer l'animation définie par le CSS par défaut
    tracesContainer.style.animation = '';
    detailsContainer.style.animation = '';

    const d = ac.detail || {};
    const hasTraces = d.traces && Array.isArray(d.traces) && d.traces.length > 0;

    // Fonction locale pour peupler et afficher le gros bloc de détails de l'AC
    const showMassiveDetailsBlock = (traceClicked = null) => {
      document.getElementById("acInlineId").textContent = ac.id;
      document.getElementById("acInlineId").style.color = color;
      document.getElementById("acInlineIntitule").textContent = ac.intitule;
      
      document.getElementById("acInlineFait").textContent = d.ce_que_jai_fait || "À compléter";
      document.getElementById("acInlinePourquoi").textContent = d.pourquoi || "À compléter";
      document.getElementById("acInlineComment").textContent = d.comment || "À compléter";
      document.getElementById("acInlineDifficultes").textContent = d.difficultes || "À compléter";
      document.getElementById("acInlineAppris").textContent = d.appris || "À compléter";
      document.getElementById("acInlineAutrement").textContent = d.ferais_autrement || "À compléter";

      const tracesListContainer = document.getElementById("acInlineTraces");
      if (traceClicked && traceClicked.url) {
        tracesListContainer.innerHTML = `<a href="${traceClicked.url}" target="_blank" class="btn btn-primary" style="background-color: ${color}; border-color: ${color};"><i class="bi bi-box-arrow-up-right"></i> Consulter le document (${traceClicked.title})</a>`;
      } else if (hasTraces && d.traces[0].url) {
        tracesListContainer.innerHTML = `<a href="${d.traces[0].url}" target="_blank" class="btn btn-primary" style="background-color: ${color}; border-color: ${color};"><i class="bi bi-box-arrow-up-right"></i> Consulter le document</a>`;
      } else {
        tracesListContainer.innerHTML = `<p class="text-muted mb-0" style="font-style: italic;">Aucun document ou fichier dans cet AC</p>`;
      }

      detailsContainer.style.display = "block";
      detailsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (!hasTraces) {
      // 0 projet -> on affiche un message vide clair et on cache le gros pavé
      tracesContainer.innerHTML = `
        <div class="text-center py-5" style="animation: slideDown 0.4s ease-out;">
          <i class="bi bi-folder-x display-1 text-danger mb-3 d-block" style="opacity: 0.8;"></i>
          <h4 class="text-danger">Aucun projet ou fichier dans cet AC</h4>
          <p class="text-danger small" style="opacity: 0.8;">Les compétences associées n'ont pas encore de réalisations documentées.</p>
        </div>
      `;
      tracesContainer.style.display = "block";
      detailsContainer.style.display = "none";
      tracesContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Y a des projets -> on affiche d'abord la grille de "petites cases"
      let tracesHtml = `
        <div class="row g-4 justify-content-center">
          ${d.traces.map((t, idx) => `
            <div class="col-md-6 col-lg-4">
              <div class="trace-card" data-idx="${idx}">
                <img src="${t.image || 'assets/img/portfolio/portfolio-default.jpg'}" alt="${t.title}" class="img-fluid w-100">
                <div class="trace-card-info">
                  <div>
                    <h6 class="mb-2 fw-bold px-3 lh-base">${t.title}</h6>
                    <small class="text-white-50">${t.category} - ${t.year}</small>
                  </div>
                  <button class="btn btn-sm btn-outline-light rounded-circle"><i class="bi bi-link-45deg"></i></button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      tracesContainer.innerHTML = tracesHtml;
      tracesContainer.style.display = "block";
      tracesContainer.scrollIntoView({ behavior: "smooth", block: "start" });

      // Écouteur de clic sur chaque petite case pour révéler le pavé
      const traceCards = tracesContainer.querySelectorAll('.trace-card');
      traceCards.forEach(card => {
        card.addEventListener('click', (e) => {
          const idx = card.getAttribute('data-idx');
          showMassiveDetailsBlock(d.traces[idx]);
        });
      });
    }
  }
});

/**
 * Affichage de la date de dernière mise à jour dans le footer.
 */
document.addEventListener('DOMContentLoaded', function() {
  const el = document.getElementById('last-updated-date');
  if (el && typeof LAST_UPDATED !== 'undefined' && LAST_UPDATED) {
    el.textContent = 'Mis à jour le ' + LAST_UPDATED;
  }
});

/**
 * Particles Logic (Custom Cursor removed)
 */
function initCustomInteractions() {
  // PARTICLES SYSTEM
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");
  let particlesArray = [];
  const mouse = { x: undefined, y: undefined, radius: 150 };

  if (!canvas) return;

  function setCanvasSize() {
    canvas.width = window.innerWidth || 1920;
    canvas.height = window.innerHeight || 1080;
  }
  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 1.2;
      this.speedY = (Math.random() - 0.5) * 1.2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      else if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      else if (this.y < 0) this.y = canvas.height;

      if (mouse.x !== undefined && mouse.y !== undefined) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 1;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 1;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 1;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 1;
        }
      }
    }
    draw() {
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 10000;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  initParticles();

  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let dx = particlesArray[a].x - particlesArray[b].x;
        let dy = particlesArray[a].y - particlesArray[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          opacityValue = 1 - distance / 150;
          ctx.strokeStyle = `rgba(255, 77, 79, ${opacityValue * 0.4})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", () => {
    setCanvasSize();
    initParticles();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCustomInteractions);
} else {
  initCustomInteractions();
}