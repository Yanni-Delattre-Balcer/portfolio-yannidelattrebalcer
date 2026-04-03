const COMPETENCES = {
  administrer: {
    label: "Administrer",
    description: "Administrer les réseaux et l'internet",
    color: "#e74c3c", // Rouge
    apprentissages: [
      {
        id: "AC11.01",
        intitule: "Maîtriser les lois fondamentales de l'électricité",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC11.02",
        intitule: "Comprendre l'architecture des systèmes numériques",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC11.03",
        intitule: "Configurer les fonctions de base du réseau local",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Ce projet m'a amené à concevoir et finaliser la conception d'un réseau d'entreprise virtualisé et opérationnel.",
          pourquoi: "Afin de découvrir et valider mes compétences dans la structuration globale d'une infrastructure IT LAN.",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: [
            {
              title: "Conception et Virtualisation d'un Réseau d'Entreprise",
              category: "Projets R&T",
              image: "assets/img/portfolio/portfolio-2.webp",
              url: null,
              tags: ["Réseaux"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC11.04",
        intitule: "Maîtriser les rôles des systèmes d'exploitation",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC11.05",
        intitule: "Identifier les dysfonctionnements du réseau local",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC11.06",
        intitule: "Installer un poste client",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      }
    ]
  },
  connecter: {
    label: "Connecter",
    description: "Connecter les entreprises et les usagers",
    color: "#e67e22", // Orange
    apprentissages: [
      {
        id: "AC12.01",
        intitule: "Mesurer, analyser et commenter les signaux",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC12.02",
        intitule: "Caractériser des systèmes de transmissions élémentaires",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "J'ai mené l'analyse de faisabilité et la simulation (Matlab/LTspice) d'une ligne de transmission coaxiale de 75 Ω, avec étude de l'atténuation et du délai sur 5m et 20m.",
          pourquoi: "Afin de modéliser mathématiquement l'atténuation et la distorsion d'un signal sur divers réseaux filaires et d'en évaluer les paramètres limitants.",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: [
            {
              title: "Analyse de faisabilité et simulation d'une ligne coaxiale (75 Ω)",
              category: "Projets R&T",
              image: "assets/img/portfolio/portfolio-1.webp",
              url: "assets/partie-projet/Analyse de la réponse fréquentielle et de l'atténuation d'un câble coaxial.pdf",
              tags: ["Télécoms"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC12.03",
        intitule: "Déployer des supports de transmission",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC12.04",
        intitule: "Connecter les systèmes de ToIP",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC12.05",
        intitule: "Communiquer avec un tiers et adapter son discours",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      }
    ]
  },
  programmer: {
    label: "Programmer",
    description: "Créer des outils et applications informatiques",
    color: "#f39c12", // Jaune-or
    apprentissages: [
      {
        id: "AC13.01",
        intitule: "Utiliser un système informatique et ses outils",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans un projet personnel, j'ai manipulé un système informatique pour concevoir et modéliser numériquement en 3D l'intégration complète d'une habitation en vue des plans d'agrandissement.",
          pourquoi: "Pour matérialiser mes connaissances en CAO/DAO avant l'ouverture de vrais chantiers.",
          comment: "J'ai utilisé SketchUp et Sweet Home 3D.",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: [
            {
              title: "Modélisation 3D — Habitation et agrandissement",
              category: "Projet Personnel",
              image: "assets/img/portfolio/portfolio-4.webp",
              url: "assets/partie-projet/maison.html",
              tags: ["Architecture"],
              year: 2021
            }
          ]
        }
      },
      {
        id: "AC13.02",
        intitule: "Lire, exécuter, corriger et modifier un programme",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC13.03",
        intitule: "Traduire un algorithme dans un langage de programmation",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC13.04",
        intitule: "Connaître l'architecture et les technologies d'un site Web",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "J'ai pris en main l'architecture et le design des technologies du web moderne pour concevoir un site complet pour un salon de coiffure de ma région.",
          pourquoi: "Pour un projet professionnel réel, afin de valoriser un savoir-faire sur la toile.",
          comment: "Projet mené via les technologies standards HTML/CSS/JS.",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: [
            {
              title: "Site web professionnel — Salon de coiffure",
              category: "Projet Personnel",
              image: "assets/img/portfolio/portfolio-3.webp",
              url: "assets/partie-projet/index.html",
              tags: ["HTML"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC13.05",
        intitule: "Choisir les mécanismes de gestion de données adaptés",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      },
      {
        id: "AC13.06",
        intitule: "S'intégrer dans un environnement de développement collaboratif",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "À compléter",
          pourquoi: "À compléter",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      }
    ]
  },
  autres: {
    label: "Autres",
    description: "Projets divers hors référentiel BUT R&T",
    color: "#8e44ad", // Violet
    apprentissages: [
      {
        id: "PERSO.01",
        intitule: "Projets à venir ou transverses",
        statut: "en_cours",
        detail: {
          ce_que_jai_fait: "Je regroupe ici les projets qui sont soit à venir, soit qui ne rentrent pas spécifiquement dans un seul AC du BUT R&T, mais qui témoignent tout de même de mon intérêt pour les nouvelles technologies.",
          pourquoi: "Pour ne pas brider ma créativité et m'autoriser à expérimenter en dehors des sentiers battus.",
          comment: "À compléter",
          difficultes: "À compléter",
          appris: "À compléter",
          ferais_autrement: "À compléter",
          traces: []
        }
      }
    ]
  }
};
