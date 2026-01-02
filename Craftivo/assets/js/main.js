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
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
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
      swiperElement.classList.contains("swiper-tab") ? initSwiperWithCustomPagination(swiperElement, config) : new Swiper(swiperElement, config);
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
      let section = document.querySelector(navmenulink.hash);
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
 * SECTION ACCUEIL : Gestion du Like et Feedback (Modale)
 * Version Simplifiée (Le texte est géré par CSS)
 */
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btn-like-action');
    const icon = document.getElementById('h-icon');
    const modal = document.getElementById('like-modal');
    const form = document.getElementById('contact-like-form');
    const closeModal = document.getElementById('close-modal');

    // 1. Vérifier le stockage local
    if (localStorage.getItem('yanni_feedback_sent') === 'true') {
        setLikedUI();
    }

    // 2. Mise à jour UI (Juste la classe et l'icône, le texte est en CSS)
    function setLikedUI() {
        icon.className = "bi bi-heart-fill";
        btn.classList.add('is-liked');
    }

    // 3. Events
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
        form.onsubmit = async function(e) {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            
            // Petit hack pour le texte du bouton loading (multilingue simple via JS ici ou CSS avancé)
            const isEnglish = document.documentElement.lang === 'en';
            const originalText = submitBtn.innerText;
            submitBtn.innerText = isEnglish ? "Sending..." : "Envoi en cours...";
            submitBtn.disabled = true;

            const data = new FormData(form);
            try {
                const response = await fetch(form.action, {
                    method: 'POST', body: data, headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    localStorage.setItem('yanni_feedback_sent', 'true');
                    setLikedUI();
                    modal.style.display = 'none';
                } else { throw new Error(); }
            } catch (err) {
                alert(isEnglish ? "Error. Please try again." : "Erreur. Réessayez.");
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        };
    }
});