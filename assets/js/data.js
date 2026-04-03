/**
 * data.js — Données du portfolio générées automatiquement.
 * NE PAS MODIFIER MANUELLEMENT — ce fichier est écrasé chaque dimanche.
 * Dernière mise à jour : Jeudi 2 avril 2026
 */
const PORTFOLIO_DATA = {
  "last_updated": "2026-04-02T09:10:00",
  "profile": {
    "name": "Yanni Delattre Balcer",
    "title": "Étudiant BUT R&T",
    "email": "yannidelattrebalcer.artois@gmail.com",
    "location": "Pas-de-Calais (62), France",
    "linkedin_url": "https://www.linkedin.com/in/yanni-delattre-balcer-73bb573a3/",
    "github_url": "https://github.com/Yanni-Delattre-Balcer",
    "bio": "Passionné par l'informatique. Aujourd'hui, mon BUT R&T me permet d'être au cœur du sujet : je ne me contente pas de la théorie, je pratique pour apprendre à administrer les réseaux, connecter les entreprises et créer des outils informatiques performants.",
    "objective": "Construire de solides bases pour poursuivre mes études jusqu'à un niveau Bac +5 (et éventuellement +9) dans le domaine de la cybersécurité, avec une spécialisation en pentesting."
  },
  "projects": [
    {
      "id": "telecoms-coaxial",
      "title": "Analyse de la faisabilité et simulation d'une ligne de transmission coaxiale de 75 Ω",
      "category": "Télécoms",
      "filter_class": "filter-creative",
      "status": "terminé",
      "year": 2025,
      "description": "Analyse de la faisabilité et simulation (Matlab/LTspice) d'une ligne de transmission coaxiale de 75 Ω. Étude de l'atténuation et du délai de propagation sur 5m et 20m.",
      "stack": [
        "Matlab",
        "LTspice"
      ],
      "github_url": null,
      "image": "assets/img/portfolio/portfolio-1.webp",
      "details_url": "assets/partie-projet/Analyse de la réponse fréquentielle et de l'atténuation d'un câble coaxial.pdf",
      "last_updated": "2025-01-01",
      "source": "manual"
    },
    {
      "id": "reseaux-entreprise",
      "title": "Conception et Virtualisation d'un Réseau d'Entreprise",
      "category": "Réseaux",
      "filter_class": "filter-digital",
      "status": "en_cours",
      "year": 2026,
      "description": "Concevoir et déployer une infrastructure réseau complète, de la planification (Gantt, choix du matériel) à la mise en œuvre technique. Le projet comprendra une phase de simulation pour valider les configurations, puis un déploiement sur machines virtuelles avec l'installation de services critiques (Web, DHCP, DNS). Le bon fonctionnement sera validé par analyse de trames et documenté via des rapports Jupyter.",
      "stack": [
        "Virtualisation",
        "DHCP",
        "DNS",
        "Web",
        "Jupyter"
      ],
      "github_url": null,
      "image": "assets/img/portfolio/portfolio-2.webp",
      "details_url": null,
      "last_updated": "2026-01-01",
      "source": "manual"
    },
    {
      "id": "site-coiffure",
      "title": "Site web professionnel — Salon de coiffure",
      "category": "Web",
      "filter_class": "filter-strategy",
      "status": "en_cours",
      "year": 2025,
      "description": "Création d'une interface moderne pour ce salon de coiffure et institut de beauté situé à Loison-sous-Lens. L'objectif est de valoriser leur double expertise (coiffure mixte et soins esthétiques) via un site intuitif facilitant l'accès aux tarifs et aux informations pratiques.",
      "stack": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "github_url": null,
      "image": "assets/img/portfolio/portfolio-3.webp",
      "details_url": "assets/partie-projet/index.html",
      "last_updated": "2025-01-01",
      "source": "manual"
    },
    {
      "id": "modelisation-3d",
      "title": "Modélisation 3D — Habitation et agrandissement",
      "category": "Architecture",
      "filter_class": "filter-development",
      "status": "terminé",
      "year": 2021,
      "description": "Modélisation d'une habitation et son futur agrandissement à l'aide de SketchUp et Sweet Home 3D. Ce travail a permis de simuler l'intégration du projet pour le dossier de mairie, tout en offrant aux propriétaires une visualisation concrète du résultat final. Les plans ont ensuite servi de support technique aux artisans pour la mise en œuvre du chantier.",
      "stack": [
        "SketchUp",
        "Sweet Home 3D"
      ],
      "github_url": null,
      "image": "assets/img/portfolio/portfolio-4.webp",
      "details_url": "assets/partie-projet/maison.html",
      "last_updated": "2021-01-01",
      "source": "manual"
    }
  ],
  "skills": [
    {
      "name": "Anglais général et technique",
      "score": 83,
      "domain": "Langues",
      "status": "validated",
      "linked_project_id": null
    },
    {
      "name": "Bases des systèmes d'exploitation",
      "score": 80,
      "domain": "Systèmes",
      "status": "validated",
      "linked_project_id": null
    },
    {
      "name": "Fondamentaux de la programmation",
      "score": 77,
      "domain": "Développement",
      "status": "validated",
      "linked_project_id": null
    },
    {
      "name": "Principes et architecture des réseaux",
      "score": 75,
      "domain": "Réseaux",
      "status": "validated",
      "linked_project_id": "reseaux-entreprise",
      "filter_link": ".filter-digital"
    },
    {
      "name": "Mathématiques du signal",
      "score": 72,
      "domain": "Mathématiques",
      "status": "validated",
      "linked_project_id": null
    },
    {
      "name": "Découvrir un dispositif de transmission",
      "score": 68,
      "domain": "Télécoms",
      "status": "validated",
      "linked_project_id": "telecoms-coaxial",
      "filter_link": ".filter-creative"
    },
    {
      "name": "Fondamentaux de l'électronique analogique",
      "score": 64,
      "domain": "Électronique",
      "status": "validated",
      "linked_project_id": null
    },
    {
      "name": "Supports de transmission",
      "score": 63,
      "domain": "Télécoms",
      "status": "validated",
      "linked_project_id": "telecoms-coaxial",
      "filter_link": ".filter-creative"
    },
    {
      "name": "Introduction aux technologies Web",
      "score": 63,
      "domain": "Web",
      "status": "validated",
      "linked_project_id": "site-coiffure",
      "filter_link": ".filter-strategy"
    },
    {
      "name": "Architecture des systèmes numériques",
      "score": 53,
      "domain": "Systèmes",
      "status": "validated",
      "linked_project_id": null
    },
    {
      "name": "Gestion de projet",
      "score": 43,
      "domain": "Management",
      "status": "validated",
      "linked_project_id": null
    },
    {
      "name": "Initiation aux réseaux informatiques",
      "score": null,
      "domain": "Réseaux",
      "status": "exc",
      "linked_project_id": "reseaux-entreprise",
      "filter_link": ".filter-digital"
    },
    {
      "name": "Hygiène informatique et cybersécurité",
      "score": null,
      "domain": "Cybersécurité",
      "status": "exc",
      "linked_project_id": null
    },
    {
      "name": "Réseaux locaux et équipements actifs",
      "score": null,
      "domain": "Réseaux",
      "status": "exc",
      "linked_project_id": "reseaux-entreprise",
      "filter_link": ".filter-digital"
    },
    {
      "name": "Projet Personnel et Professionnel",
      "score": null,
      "domain": "Transversal",
      "status": "exc",
      "linked_project_id": null
    },
    {
      "name": "Se présenter sur Internet",
      "score": null,
      "domain": "Web",
      "status": "exc",
      "linked_project_id": null
    },
    {
      "name": "Traitement de données",
      "score": null,
      "domain": "Données",
      "status": "exc",
      "linked_project_id": null
    },
    {
      "name": "S'initier aux réseaux informatiques",
      "score": null,
      "domain": "Réseaux",
      "status": "exc",
      "linked_project_id": "reseaux-entreprise",
      "filter_link": ".filter-digital"
    }
  ],
  "certifications": [
    {
      "name": "CCNA : Switching, Routing, and Wireless Essentials (SRWE)",
      "issuer": "Cisco",
      "date": "2025",
      "status": "en_cours",
      "pdf_url": null
    },
    {
      "name": "Python Essentials 2",
      "issuer": "Cisco Networking Academy",
      "date": "2025",
      "status": "obtenu",
      "pdf_url": "assets/pdf-certif/Python_Essentials_2_certificate_yanni_delattrebalcer-ens-univ-artois-fr_51223ea2-42cb-4685-9687-3b9ffb284f8b.pdf"
    },
    {
      "name": "Python Essentials 1",
      "issuer": "Cisco Networking Academy",
      "date": "2025",
      "status": "obtenu",
      "pdf_url": "assets/pdf-certif/Python_Essentials_1_certificate_yanni_delattrebalcer-ens-univ-artois-fr_e6ef381d-e548-45f5-90a5-058106e39b07.pdf"
    },
    {
      "name": "PIX Lycée",
      "issuer": "PIX",
      "date": "2025",
      "status": "obtenu",
      "pdf_url": "assets/pdf-certif/certification-pix-20250305.pdf"
    },
    {
      "name": "PIX Collège",
      "issuer": "PIX",
      "date": "2022",
      "status": "obtenu",
      "pdf_url": "assets/pdf-certif/certification-pix-20220506.pdf"
    }
  ],
  "timeline": [
    {
      "type": "education",
      "title": "BUT Réseaux et Télécommunications (R&T)",
      "organization": "IUT de Béthune",
      "location": "Béthune",
      "start": "Septembre 2025",
      "end": null,
      "status": "en_cours",
      "description": "Actuellement en première année de BUT R&T, je prévois de choisir le parcours Cybersécurité pour mes deux dernières années d'études.",
      "degree_level": "Bachelor",
      "year_range": "2025 - 2026"
    },
    {
      "type": "education",
      "title": "Baccalauréat général, spécialités Mathématiques et NSI",
      "organization": "Lycée privé polyvalent Saint-Paul",
      "location": "Lens",
      "start": "Septembre 2022",
      "end": "Juillet 2025",
      "status": "terminé",
      "description": "Titulaire du baccalauréat général (2025). J'ai suivi les spécialités Mathématiques, NSI et Physique-Chimie en classe de Première, puis j'ai conservé les spécialités Mathématiques et NSI en Terminale.",
      "degree_level": "Bachelier",
      "year_range": "2022 - 2025"
    },
    {
      "type": "experience",
      "title": "Stage d'observation — Service informatique",
      "organization": "Swiss Life France",
      "location": "Roubaix",
      "start": "2022",
      "end": "2022",
      "status": "terminé",
      "description": "Lors de mon année de seconde, j'ai effectué un stage d'observation au sein du service informatique, ce qui m'a permis de découvrir les enjeux du développement web et d'élargir ma vision des métiers du numérique. Cette immersion a été déterminante, mais c'est particulièrement mon échange avec le Responsable Cybersécurité de Swiss Life qui a confirmé ma vocation. Cette rencontre a précisé mon projet professionnel et motivé mon orientation vers la cybersécurité et le pentesting."
    },
    {
      "type": "experience",
      "title": "Stage d'observation — Service informatique",
      "organization": "Mairie de Loison-sous-Lens",
      "location": "Loison-sous-Lens",
      "start": "2021",
      "end": "2021",
      "status": "terminé",
      "description": "Lors de mon année de troisième, j'ai effectué un stage d'observation au sein du service informatique de la mairie de Loison-sous-Lens. Cette expérience m'a permis de découvrir l'organisation d'une collectivité et la gestion opérationnelle d'un parc informatique (résolution d'incidents, assistance aux utilisateurs). Cette première immersion a été déterminante et a consolidé mon choix de m'orienter vers la spécialité NSI au lycée."
    }
  ]
};

const LAST_UPDATED = "Jeudi 2 avril 2026";
