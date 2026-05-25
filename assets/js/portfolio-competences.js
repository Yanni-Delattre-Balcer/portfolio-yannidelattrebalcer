const COMPETENCES = {
  administrer: {
    label: "Administrer",
    description: "Administrer les réseaux et l'internet",
    color: "#e74c3c", // Rouge
    apprentissages: [
      {
        id: "AC11.01",
        intitule: "Maîtriser les lois fondamentales de l'électricité",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre du module R1.04 - Fondamentaux des systèmes électroniques (S1), j'ai réalisé 4 travaux pratiques d'initiation en électricité continue et alternative. J'ai découvert la maquette d'expérimentation Analog Discovery Studio (ADS) pilotée par le logiciel Waveforms. En régime continu (TP1), j'ai appris à mesurer des résistances, à comparer les codes couleurs, et à expérimenter la loi d'Ohm, la loi d'additivité des tensions sur des circuits simples (série et parallèle), et à observer le principe de l'adaptation d'impédance. En régime alternatif (TP2 & TP3), j'ai été initié à la génération de signaux sinusoïdaux et carrés simples sur la sortie WAVEGEN, appris à régler la base de temps et le trigger de l'oscilloscope, et mesuré les valeurs crête-à-crête, moyennes et efficaces (RMS). Enfin, dans le TP4, j'ai mesuré l'impédance complexe d'un circuit série RC en observant le déphasage sur une plage de fréquences de 100 Hz à 20 kHz.",
          pourquoi: "L'apprentissage des lois fondamentales de l'électricité est essentiel pour comprendre comment les données physiques transitent dans les supports. Les notions d'impédance, d'adaptation de charge ou d'échantillonnage de signaux constituent le socle physique indispensable pour appréhender les technologies de câblage cuivre, de transmission par fibre optique ou d'antennes radiofréquences en réseaux.",
          comment: "Pour ces travaux pratiques de niveau débutant, j'ai utilisé la maquette Analog Discovery Studio (ADS) avec le logiciel Waveforms (outils Supplies, Wavegen, Scope et Voltmeter). J'ai câblé des circuits simples sur une plaque d'essai sans soudure (breadboard) et mené une étude introductive sur la sécurité et les niveaux d'habilitation électrique.",
          difficultes: "La principale difficulté a été de se familiariser avec les réglages de base et la synchronisation du Trigger de l'oscilloscope virtuel. La manipulation des nombres complexes pour calculer théoriquement l'impédance et la corréler aux mesures physiques de déphasage a également demandé beaucoup de rigueur.",
          appris: "J'ai appris à câbler en sécurité un circuit sur platine d'essai, à manipuler les fonctions de base d'un générateur de signaux et d'un oscilloscope virtuel sous Waveforms, et à assimiler le fonctionnement d'un circuit RC tout en acquérant les notions indispensables de sécurité électrique.",
          ferais_autrement: "Je prendrais plus de temps pour modéliser le comportement théorique sur papier avant de lancer les mesures physiques sur la maquette, afin de détecter plus rapidement une anomalie de câblage.",
          traces: [
            {
              title: "TP R1.04 - Circuits en Régime Continu & Alternatif (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/electricity_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["ADS", "Waveforms", "Impédance", "Oscilloscope", "Pont Diviseur"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.02",
        intitule: "Comprendre l'architecture des systèmes numériques",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre du module R1.06 - Architecture des systèmes numériques (S1), j'ai découvert et manipulé sous Python les bases logiques et numériques des ordinateurs. J'ai travaillé sur la représentation binaire et hexadécimale, en écrivant des scripts simples d'extraction de bits par décalage et masquage (ET logique avec 1). J'ai codé des algorithmes introductifs d'emballage/déballage de nombres sur 4 bits dans un unique octet pour appréhender l'optimisation de mémoire. Côté logique combinatoire, j'ai traduit en Python des équations booléennes simples : un multiplexeur 4:1, un additionneur 1 bit, et un comparateur de grandeur. Enfin, j'ai expérimenté un script de chiffrement symétrique par opération XOR bit à bit complété par un outil de force brute théorique pour retrouver un message codé.",
          pourquoi: "Comprendre la représentation de l'information et le fonctionnement des circuits logiques de base (additionneurs, multiplexeurs) permet d'assimiler les contraintes matérielles du matériel réseau (processeurs, puces ASIC) et de comprendre le calcul interne effectué pour l'adressage IP (masquage par ET logique pour le réseau, OU logique pour la diffusion).",
          comment: "J'ai développé ces solutions sous Python 3 dans des carnets Jupyter (.ipynb) sous VS Code. J'ai utilisé des opérateurs de décalage et des masques logiques de base, ainsi que la fonction `getsizeof` pour observer le gain de place mémoire lors de l'emballage de données.",
          difficultes: "La principale difficulté a été de comprendre le comportement du complément à un (`~`) en Python avec les entiers signés. J'ai appris à contourner cela en utilisant des masques XOR avec la valeur maximale. La structuration des équations booléennes pour le comparateur a également nécessité une attention particulière.",
          appris: "J'ai appris à manipuler les nombres en binaire par décalages et masquage, à concevoir et modéliser des circuits logiques simples, et à comprendre le fonctionnement théorique du chiffrement XOR. J'ai assimilé comment ces opérateurs s'appliquent au calcul d'adresses réseau.",
          ferais_autrement: "Je documenterais mes scripts plus en détail dès le départ et j'essaierais de simuler ces équations sous le logiciel Logisim-evolution pour avoir une meilleure visualisation visuelle des circuits matériels.",
          traces: [
            {
              title: "R1.06 - Programmation et Logique des Systèmes Numériques (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/digital_arch_dark.png",
              logo: "assets/img/portfolio/logo-3d.webp",
              url: null,
              tags: ["Python", "Binaire", "XOR Chiffrement", "Additionneur", "Bit Shifts"],
              year: 2025
            },
            {
              title: "R1.06 - Conception de circuits logiques",
              category: "TP R&T",
              image: "assets/img/portfolio/logic_gates_dark.png",
              logo: "assets/img/portfolio/logo-3d.webp",
              url: null,
              tags: ["Logisim", "Algèbre de Boole", "Binaire", "Hexadécimal", "Karnaugh"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.03",
        intitule: "Configurer les fonctions de base du réseau local",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre de la SAÉ1.02 - S'initier aux réseaux informatiques (S1) et du module R1.01 - Initiation aux réseaux (S1), j'ai appris à concevoir, modéliser et tester des architectures réseau locales simples. Sous Cisco Packet Tracer, j'ai configuré des liaisons poste-à-poste (câblage droit/croisé FastEthernet), des commutateurs 2960 (6 machines en sous-réseaux isolés, puis tests de masques /16 et /24) et des routeurs 2911. J'ai été initié en mode console CLI au routage statique inter-VLAN entre deux sous-réseaux (192.168.100.0/24 via Gig0/0 et 172.31.0.0/16 via Gig0/1) et configuré des tables de routage statiques simples. En laboratoire réel (TP8), j'ai réalisé le brassage physique en reliant les ports xx.2 de ma table aux commutateurs de la baie de brassage. J'ai calculé et configuré les masques de sous-réseau optimaux (/18 soit 255.255.192.0) pour faire communiquer des adresses d'équipes initialement isolées (172.16.154.x/24 et 172.16.186.x/24) dans un même réseau de broadcast. Enfin, j'ai raccordé ce réseau au VLAN 800 pour obtenir une IP dynamique par DHCP et configuré le proxy pour surfer sur Internet.",
          pourquoi: "L'apprentissage de la configuration et de la structuration d'un réseau local (LAN) est fondamental pour un futur technicien R&T. Il est crucial d'apprendre à segmenter physiquement et logiquement un réseau pour optimiser les flux de données, assurer la sécurité inter-services (en limitant la propagation des broadcasts) et maîtriser les bases de l'adressage IP (VLSM/CIDR) et du routage statique pour interconnecter des architectures simples.",
          comment: "J'ai modélisé et simulé ces architectures sur Cisco Packet Tracer en observant les en-têtes de couches du modèle OSI lors de requêtes ICMP de base. En TP physique, j'ai réalisé du câblage et du brassage d'équipements réels. Dans le cadre de la SAÉ1.02 en équipe, nous avons proposé la structure réseau d'une PME avec 4 VLANs distincts (VLAN ADMIN, VLAN PERSONNEL, VLAN PRODUCTION, VLAN VIDEO) reliés à un commutateur Cisco 2960 et un routeur configuré avec un serveur DHCP local.",
          difficultes: "La principale difficulté a été de déterminer mathématiquement le plus petit masque de sous-réseau (CIDR le plus grand) permettant d'intégrer toutes les adresses d'étudiants pour les faire communiquer. J'ai résolu cela en convertissant les adresses en binaire pour repérer le premier bit de divergence (18e bit), me permettant d'identifier le masque /18 avec certitude.",
          appris: "J'ai appris à concevoir un plan d'adressage IP simple (VLSM), à brasser physiquement des câbles RJ45 dans une baie réseau, à configurer des interfaces routeur et commutateur en mode console CLI (Cisco IOS), et à mettre en œuvre une table de routage statique. J'ai également assimilé la structure de base des VLANs et la configuration de serveurs DHCP.",
          ferais_autrement: "Je documenterais mes schémas réseau dès la phase d'étude sous Draw.io de manière encore plus détaillée, en y indiquant toutes les adresses IP associées à chaque port, afin d'accélérer le diagnostic de câblage ou de configuration lors des séances pratiques.",
          traces: [
            {
              title: "SAÉ 1.02 - Conception et Maquettage d'un Réseau PME (S1)",
              category: "Projet BUT",
              image: "assets/img/portfolio/wireshark_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["VLANs", "DHCP", "Apache", "Cisco 2960", "Cisco 800", "Draw.io"],
              year: 2025
            },
            {
              title: "R1.01 - Simulation Packet Tracer et Routage Console (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/cisco_topology_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Packet Tracer", "CLI Cisco", "Routage statique", "ICMP"],
              year: 2025
            },
            {
              title: "R1.01 - Construction de Réseau Local Réel en Laboratoire (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/cabling_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Baie de brassage", "Sous-réseaux /18", "VLSM", "DHCP", "VLAN 800"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.04",
        intitule: "Maîtriser les rôles des systèmes d'exploitation",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre des modules de systèmes d'exploitation (R1.08, R2.02), j'ai été initié à l'administration de systèmes physiques, virtualisés et conteneurisés. En premier lieu (CLI Linux), j'ai appris les commandes de base d'introspection matérielle (lscpu, free -h, lsblk, df -h), la gestion des permissions Unix (chmod, chown), les redirections de flux simples (>, >>) et l'utilisation de filtres de base (grep, head, tail, cut). En second lieu (Virtualisation Type 2 - VirtualBox), j'ai créé et configuré des machines virtuelles Ubuntu simples, en étudiant le rôle des fichiers de configuration (.vbox, disques virtuels .vdi), en installant les Additions Invité pour le partage de presse-papier/dossiers (/etc/fstab), et en découvrant les bases de la gestion de snapshots de sécurité et des modes réseau (NAT, Pont/Bridge). En troisième lieu (Virtualisation Type 1 - VMware ESXi), j'ai découvert l'environnement d'un hyperviseur bare-metal à travers son interface web pour provisionner des machines virtuelles simples. En dernier lieu (Conteneurisation - Docker), j'ai appris à installer Docker, à configurer le proxy universitaire, et à gérer le cycle de vie de conteneurs isolés simples (docker run, docker ps).",
          pourquoi: "La compréhension des systèmes d'exploitation et de l'initiation aux concepts de virtualisation et de conteneurisation est essentielle pour un futur technicien réseau. Cela permet d'assimiler comment les ressources physiques sont partagées et comment déployer des serveurs et applications de manière isolée et sécurisée.",
          comment: "J'ai configuré et exploité des machines virtuelles sous l'hyperviseur de type 2 VirtualBox, et découvert l'hyperviseur de type 1 VMware ESXi. Pour la conteneurisation, j'ai été initié à Docker sous Linux. Les scripts et configurations de base ont été écrits en Bash.",
          difficultes: "La principale difficulté a été de configurer correctement les dossiers partagés permanents sous VirtualBox et de comprendre la gestion des droits d'écriture. J'ai surmonté cela en apprenant à paramétrer proprement le fichier /etc/fstab et en ajoutant l'utilisateur au groupe système vboxsf.",
          appris: "J'ai appris à installer, configurer et administrer sous supervision des machines virtuelles (VirtualBox, ESXi) et des conteneurs basiques (Docker). J'ai assimilé les notions clés d'allocation de ressources, d'instantanés (snapshots), de types de réseaux virtuels et de gestion des pilotes d'intégration.",
          ferais_autrement: "J'aimerais approfondir mes compétences d'écriture de scripts Bash complexes afin d'automatiser davantage la configuration post-installation de mes machines virtuelles de TP.",
          traces: [
            {
              title: "Virtualisation de Systèmes et Administration de VMs (VirtualBox & VMware ESXi) (S1/S2)",
              category: "TP R&T",
              image: "assets/img/portfolio/virtualization_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["VirtualBox", "VMware ESXi", "VBoxManage", "Snapshots", "Bridge Network", "fstab"],
              year: 2025
            },
            {
              title: "Conteneurisation Applicative et Administration Docker (Debian/Ubuntu) (S2)",
              category: "TP R&T",
              image: "assets/img/portfolio/git_docker_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Docker", "docker.io", "Systemd Proxy", "Container Lifecycle", "docker diff", "Bridge Network"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC11.05",
        intitule: "Identifier les dysfonctionnements du réseau local",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre de R1.01 (Initiation Réseaux) et des TP de diagnostic, j'ai appris à identifier et diagnostiquer sous supervision des pannes réseau simples de niveau 1, 2 et 3. J'ai simulé et résolu des défauts d'allocation DHCP en observant les paquets DORA dans Wireshark et en identifiant les adresses APIPA d'erreur (169.254.x.x). D'autre part, j'ai réalisé des diagnostics simples en utilisant les utilitaires CLI sous Linux et Windows : test de connectivité (ping ICMP), tracé de route (traceroute/tracert), consultation de la table de routage (ip route) et vérification de la résolution DNS (nslookup / host) pour repérer des défauts de serveurs de noms.",
          pourquoi: "Savoir diagnostiquer une panne réseau simple est une compétence terrain indispensable pour un futur technicien. Face à un dysfonctionnement, il faut appliquer une démarche structurée, de la couche physique à la couche applicative, pour localiser l'origine du problème et restaurer le service.",
          comment: "J'ai utilisé l'analyseur de protocoles Wireshark pour capturer les trames réseau réelles en filtrant les protocoles DHCP, ICMP ou DNS. Sur mon poste de TP ou des machines virtuelles, j'ai exécuté les commandes système de connectivité standards pour vérifier le réseau.",
          difficultes: "La principale difficulté a été de filtrer efficacement le bruit de fond important du réseau dans Wireshark pour isoler les paquets d'une requête spécifique. J'ai appris à combiner des filtres logiques simples.",
          appris: "J'ai appris à appliquer une méthodologie de diagnostic réseau de base. Je sais analyser les trames d'adressage et de résolution de noms, et manipuler les outils de connectivité système standards pour isoler un problème de routage ou de pare-feu simple.",
          ferais_autrement: "Je rédigerais un petit guide récapitulatif des pannes les plus courantes pour m'aider à être encore plus efficace lors de mes futures séances de diagnostic.",
          traces: [
            {
              title: "R1.01 - Diagnostic Réseau et Capture de Trames Wireshark (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/wireshark_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Wireshark", "DHCP DORA", "APIPA", "Ping ICMP", "Pare-feu"],
              year: 2025
            },
            {
              title: "R1.01 - Audit de Résolution DNS et de Routage (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/linux_os_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["nslookup", "host", "ip route", "route print", "netstat"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.06",
        intitule: "Installer un poste client",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre du module R2.01 (Services Réseaux) et R2.02 (Administration Système), j'ai été initié à l'installation de postes clients et à l'administration d'annuaires dans un environnement Windows Server / Active Directory. D'une part, j'ai configuré sous supervision un contrôleur de domaine Windows Server 2016 avec rôle Active Directory DS simple (création d'Unités Organisationnelles, utilisateurs, groupes, serveur DHCP basique et stratégies de groupe GPOs de base). D'autre part, j'ai appris à écrire mes premiers scripts d'automatisation PowerShell simples (.ps1) pour importer une liste d'utilisateurs à partir d'un fichier CSV, créer les répertoires associés et leur attribuer des permissions NTFS d'accès simples.",
          pourquoi: "Pour un technicien réseau, comprendre la centralisation des identités et des accès via un annuaire (Active Directory) et l'application de stratégies de groupe (GPO) est fondamental pour administrer un parc informatique d'entreprise de manière homogène et sécurisée.",
          comment: "J'ai utilisé l'hyperviseur VirtualBox pour déployer deux machines virtuelles (un serveur Active Directory Windows Server 2016 et un poste client Windows 10) connectées en réseau privé interne. Mon script PowerShell a été écrit sous VS Code en exploitant les commandes d'administration d'annuaire standard.",
          difficultes: "La principale difficulté a été de gérer les autorisations d'ouverture de session locale sur les postes clients pour les nouveaux utilisateurs créés. J'ai résolu cela en configurant correctement les stratégies de sécurité dans les GPOs du contrôleur de domaine et en forçant l'application des paramètres via `gpupdate /force`.",
          appris: "J'ai appris les bases pour configurer un contrôleur de domaine AD DS, installer des services DHCP, gérer les permissions de fichiers et partages réseau simples, et écrire des scripts d'administration de base en PowerShell.",
          ferais_autrement: "J'aimerais découvrir des solutions de déploiement automatisé d'OS (type PXE ou MDT) pour comprendre comment accélérer l'installation initiale de parcs de machines.",
          traces: [
            {
              title: "Installation et Configuration de Contrôleur de Domaine Windows Server 2016 (S2)",
              category: "TP R&T",
              image: "assets/img/portfolio/active_directory_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Windows Server 2016", "Active Directory", "DHCP Server", "GPOs", "Roaming Profiles", "NTFS ACLs"],
              year: 2026
            },
            {
              title: "Automatisation de l'Administration Active Directory en PowerShell (S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/powershell_script_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["PowerShell", "AD Cmdlets", "icacls", "New-SmbShare", "Scripting"],
              year: 2026
            }
          ]
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
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre de la SAÉ2.02 (Outils pour l'analyse spectrale) et du module R2.05, j'ai configuré et exploité sous supervision la maquette Analog Discovery Studio couplée au logiciel Waveforms pour générer et caractériser des signaux périodiques (sinusoïdaux, carrés, triangulaires). J'ai mesuré leurs paramètres temporels (fréquence, valeur moyenne, valeur efficace AC RMS, crête-à-crête) et fréquentiels à l'aide de l'analyse spectrale par transformée de Fourier rapide (FFT). J'ai également été initié aux séries de Fourier sous MATLAB/Simulink pour sommer des harmoniques successifs et observer la reconstitution de ces signaux.",
          pourquoi: "L'analyse spectrale de base est un outil précieux pour comprendre comment les signaux physiques se propagent. Comprendre la décomposition d'un signal en harmoniques permet d'appréhender l'occupation spectrale (bande passante) et les distorsions qui affectent les lignes de transmission réelles.",
          comment: "J'ai utilisé la maquette Analog Discovery Studio avec le logiciel Waveforms pour les mesures temporelles et la FFT. La simulation théorique a été réalisée sous MATLAB/Simulink en sommant de manière guidée des sources sinusoïdales de fréquences multiples.",
          difficultes: "Le principal défi a été de faire le lien entre les mesures de tension temporelles et les amplitudes obtenues en décibels (dBVRMS) sur l'analyseur de spectre, ce qui a nécessité de se familiariser avec l'échelle logarithmique.",
          appris: "J'ai appris à manipuler les fonctions de base d'un oscilloscope et d'un analyseur de spectre FFT. J'ai été initié à la théorie des séries de Fourier pour les signaux périodiques classiques et j'ai découvert comment simuler ces notions sous MATLAB/Simulink.",
          ferais_autrement: "Je passerai plus de temps à faire des calculs manuels préalables sur les premiers harmoniques pour mieux anticiper les raies spectrales observées lors des mesures.",
          traces: [
            {
              title: "SAÉ2.02 - Outils pour l'analyse spectrale et FFT (S2)",
              category: "Projet BUT",
              image: "assets/img/portfolio/electricity_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Oscilloscope", "FFT", "Signaux", "Analog Discovery Studio", "Waveforms"],
              year: 2026
            },
            {
              title: "R2.05 - Analyse spectrale et synthèse de Fourier sous MATLAB (S2)",
              category: "TP R&T",
              image: "assets/img/portfolio/fourier_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Fourier", "Spectre", "Synthèse de Fourier", "MATLAB", "Simulink"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC12.02",
        intitule: "Caractériser des systèmes de transmissions élémentaires",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre du module R1.05 (Ligne de Transmission) et R2.05 (Filtrage), j'ai réalisé des travaux pratiques d'introduction à la caractérisation de lignes physiques (câble torsadé) et de circuits de filtrage analogique simples. J'ai mesuré les paramètres primaires linéiques (r, l, c) d'un câble court à l'aide d'un pont RLC de précision, et j'ai été initié aux mesures de réflectométrie temporelle (TDR) sur oscilloscope pour calculer la vitesse de propagation et localiser une coupure de ligne. D'autre part, j'ai câblé et caractérisé des filtres passifs du 1er ordre simples (passe-bas, passe-haut) en relevant expérimentalement leurs courbes de gain et de phase (diagrammes de Bode) de 100 Hz à 100 kHz.",
          pourquoi: "Comprendre les bases physiques des supports de transmission et le rôle des filtres analogiques simples est indispensable pour tout technicien R&T afin d'éviter les perturbations sur les lignes physiques et d'assurer une bonne qualité de transmission.",
          comment: "J'ai utilisé un pont RLC pour les mesures primaires et un oscilloscope relié par Té BNC à un générateur de fonctions pour la réflectométrie. Pour les filtres, j'ai câblé les composants passifs (résistances, condensateurs) sur platine d'essai.",
          difficultes: "La principale difficulté a été d'interpréter les échos d'impulsions sur l'oscilloscope lors des manipulations de réflectométrie temporelle, ainsi que de stabiliser les relevés de phase aux basses fréquences.",
          appris: "J'ai appris à mesurer les caractéristiques physiques de base d'une ligne, à localiser un défaut par réflectométrie simple et à câbler et tester des filtres passifs en traçant leurs réponses en fréquence (Bode).",
          ferais_autrement: "Je ferais des schémas de câblage plus précis sur papier avant les manipulations pratiques pour éviter les petites erreurs de connexion sur la plaque d'essai.",
          traces: [
            {
              title: "R1.05 - Caractérisation de Ligne de Transmission et Réflectométrie (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/cabling_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Ligne de transmission", "Paramètres primaires", "Réflectométrie (TDR)", "Pont RLC", "VDV II Pro"],
              year: 2025
            },
            {
              title: "R2.05 - Conception et caractérisation de Filtres Passifs (Passe-Bas, Passe-Haut, Passe-Bande) (S2)",
              category: "TP R&T",
              image: "assets/img/portfolio/bode_plot_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Filtres Passifs", "Diagramme de Bode", "Fréquence de coupure", "Excitation harmonique", "Déformation de signal"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC12.03",
        intitule: "Déployer des supports de transmission",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Au travers du module R1.05 - Supports de transmission pour les réseaux (S1) et de la SAÉ1.03 - Découvrir un dispositif de transmission, j'ai été initié aux différents supports physiques. J'ai appris à sertir des câbles RJ45 droits et croisés standards et à tester leur continuité. De plus, j'ai été initié à la manipulation de fibres optiques multimodes et monomodes (préparation par clivage, raccordement mécanique) et découvert les mesures simples d'affaiblissement avec un wattmètre optique et l'analyse d'une courbe de réflectométrie optique (OTDR).",
          pourquoi: "Le déploiement physique est le socle de toute infrastructure réseau. Savoir sertir correctement un câble RJ45 et comprendre le raccordement et la qualification des fibres optiques est une compétence terrain précieuse pour tout technicien Réseaux.",
          comment: "Nous avons travaillé dans un laboratoire de câblage avec des pinces à sertir, des testeurs de continuité, et des outils de clivage mécanique de fibre optique sous la supervision de nos enseignants.",
          difficultes: "Le clivage de la fibre optique demande une grande régularité et beaucoup de dextérité pour obtenir une face de coupure propre, ce qui a nécessité de nombreux essais avant de réussir.",
          appris: "J'ai appris à fabriquer un câble réseau RJ45 fonctionnel selon les normes TIA-568, à manipuler et préparer la fibre optique avec précaution, et à lire et interpréter les bases d'une courbe OTDR.",
          ferais_autrement: "Je m'exercerais davantage sur le geste technique du clivage mécanique de la fibre afin d'acquérir une meilleure rapidité et précision.",
          traces: [
            {
              title: "SAÉ1.03 - Découvrir un dispositif de transmission (S1)",
              category: "Projet BUT",
              image: "assets/img/portfolio/cabling_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Fibre optique", "RJ45", "OTDR", "Câblage", "Sertissage"],
              year: 2025
            },
            {
              title: "R1.05 - Supports de transmission pour les réseaux (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/fiber_optic_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Cat5e", "Cat6", "TIA-568", "Testeur de câble", "Fluke Networks"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC12.04",
        intitule: "Connecter les systèmes de ToIP",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre du module R2.04 - Initiation à la téléphonie d'entreprise (S2), j'ai découvert et configuré sous supervision des architectures de téléphonie sur IP (ToIP/VoIP). J'ai étudié les bases du protocole SIP (méthodes REGISTER, INVITE, BYE), configuré un serveur IPBX Asterisk basique sur une machine virtuelle Debian, créé des extensions simples et un plan de numérotation dans extensions.conf, et passé des appels de test entre deux softphones Linphone virtuels en analysant les flux SIP/RTP sous Wireshark.",
          pourquoi: "Découvrir la ToIP est essentiel car cette technologie est omniprésente en entreprise. Comprendre comment configurer un service de téléphonie de base et analyser les flux de signalisation permet de se familiariser avec les architectures VoIP modernes.",
          comment: "Les TPs ont été menés sur des machines virtuelles VirtualBox Debian 12 avec Asterisk 20 LTS en éditant les fichiers de configuration sip.conf et extensions.conf. Linphone a été utilisé comme terminal d'appel et Wireshark pour l'observation des paquets.",
          difficultes: "La principale difficulté a été de comprendre la syntaxe spécifique des fichiers de configuration Asterisk et de résoudre des problèmes d'enregistrement SIP de base (liés à des erreurs de mot de passe ou de paramétrage de domaines).",
          appris: "J'ai appris à configurer des comptes SIP et des plans de numérotation simples sur Asterisk, à installer et connecter un softphone Linphone, et à identifier le rôle des flux de signalisation SIP (port 5060) et média RTP.",
          ferais_autrement: "Je documenterais plus méthodiquement mes fichiers de configuration modifiés pour retrouver instantanément la source d'une erreur de syntaxe en cas de blocage d'Asterisk.",
          traces: [
            {
              title: "R2.04 - Initiation à la téléphonie d'entreprise (S2)",
              category: "TP R&T",
              image: "assets/img/portfolio/voip_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["VoIP", "ToIP", "Asterisk", "SIP", "Linphone", "RTP"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC12.05",
        intitule: "Communiquer avec un tiers et adapter son discours",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Au cours de la SAÉ2.04 - Projet intégratif (S2) et du cours R1.15 - Gestion de projet, j'ai appris à structurer ma communication technique. J'ai rédigé des rapports techniques et des guides d'installation simples adaptés à différents profils (techniciens, chefs de projet ou utilisateurs finaux), préparé des soutenances orales collectives en anglais et en français, et tenu un journal de bord au cours des 6 jours d'intégration de notre projet réseau.",
          pourquoi: "Un technicien Réseaux & Télécoms doit savoir communiquer efficacement avec des interlocuteurs variés. Savoir expliquer une panne sans jargon technique à un utilisateur ou présenter une architecture réseau de manière claire à sa hiérarchie est une compétence essentielle en entreprise.",
          comment: "Pour le projet SAÉ2.04, nous avons préparé des diaporamas de présentation et effectué des démonstrations en direct devant un jury d'enseignants. Les documentations techniques ont été rédigées avec soin pour être claires et structurées.",
          difficultes: "Le plus difficile a été d'apprendre à doser la technicité du discours face à des profils non techniques, et à gérer le stress inhérent aux soutenances et aux séances de questions-réponses en direct.",
          appris: "J'ai appris à rédiger un rapport technique structuré, à vulgariser des concepts complexes, et à m'exprimer de manière plus calme et ordonnée lors d'une soutenance orale collective.",
          ferais_autrement: "Je ferais plus de répétitions chronométrées en groupe pour mieux équilibrer le temps de parole entre chaque membre de l'équipe lors des présentations orales.",
          traces: [
            {
              title: "SAÉ2.04 - Projet intégratif (S2)",
              category: "Projet BUT",
              image: "assets/img/portfolio/project_management_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Soutenance", "Communication", "Rédaction technique", "Anglais technique", "VLAN", "Routeurs"],
              year: 2026
            }
          ]
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
          ce_que_jai_fait: "Dans le cadre des modules R1.01 (Initiation Réseaux) et R1.07 (Programmation), j'ai appris à configurer et utiliser mon poste de travail sous Linux Ubuntu et Windows à l'IUT. J'ai pris en main l'interface en ligne de commande (CLI) de Linux pour naviguer, gérer les répertoires, éditer des fichiers texte simples avec `nano` et paramétrer les permissions de base des fichiers (`chmod`). J'ai également été initié au contrôle de version en apprenant les commandes de base de Git et GitLab (clone, add, commit, push) pour archiver mes codes pratiques.",
          pourquoi: "Maîtriser les commandes de base de Linux et l'outil Git est indispensable pour un futur professionnel. La majorité des équipements réseau et serveurs s'administrent via le terminal de commandes, et Git est le standard de l'industrie pour collaborer sur le code.",
          comment: "J'ai configuré mon terminal avec le proxy universitaire pour accéder à GitLab. J'ai structuré mes répertoires de TP et versionné mes codes de manière ordonnée.",
          difficultes: "La principale difficulté a été de m'adapter à la rigueur de la syntaxe de la ligne de commande et de comprendre le fonctionnement des permissions de fichiers (rwx).",
          appris: "J'ai appris à manipuler les commandes système Linux essentielles, à gérer des dépôts Git personnels et à configurer un environnement de développement simple.",
          ferais_autrement: "Je chercherai à configurer des clés SSH pour GitLab pour éviter d'entrer manuellement mon identifiant universitaire à chaque synchronisation de code.",
          traces: [
            {
              title: "Configuration Système et Administration CLI (Linux Ubuntu & GitLab) (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/git_docker_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Linux CLI", "GitLab", "Bash Terminal", "Permissions chmod", "Network Proxy"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC13.02",
        intitule: "Lire, exécuter, corriger et modifier un programme",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre du module R1.07 (Fondamentaux de la programmation) en S1 et R2.09 (Initiation Développement Web) en S2, j'ai appris à analyser et déboguer des programmes simples. En S1, j'ai manipulé les structures de données de base en Python (variables, boucles conditionnelles, listes, dictionnaires) en apprenant à lire et corriger des scripts simples. En S2, j'ai été initié à l'architecture MVC simple sous Flask et j'ai appris les bases de la sécurité pour corriger des vulnérabilités classiques comme des injections SQL de base dans des formulaires web.",
          pourquoi: "Savoir lire et déboguer un code existant est une compétence essentielle en Réseaux & Télécoms. Qu'il s'agisse de comprendre un script d'administration simple laissé par un collègue ou de corriger un bug mineur, la lecture critique de code évite de nombreuses pannes.",
          comment: "J'ai utilisé des débogueurs simples comme celui intégré à VS Code ou Thonny pour exécuter mon code pas-à-pas et inspecter les variables. Pour la sécurité, j'ai appris à remplacer les concaténations SQL à risque par des requêtes préparées.",
          difficultes: "La principale difficulté a été de bien comprendre la portée des variables locales/globales et d'interpréter correctement les tracebacks d'erreurs Python parfois complexes.",
          appris: "J'ai appris à déchiffrer et corriger la structure d'un code Python simple, à analyser les messages d'erreurs (tracebacks), et à sécuriser des scripts web simples contre des vulnérabilités courantes.",
          ferais_autrement: "Je ferais plus d'affichages de débogage clairs (print ou traces) dès le départ dans mes scripts pour mieux visualiser l'état de mes variables en cours d'exécution.",
          traces: [
            {
              title: "Débogage et Sécurisation Web (Python / Flask / MVC) (S2)",
              category: "TP R&T",
              image: "assets/img/portfolio/python_flask_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Python Web", "Flask MVC", "Débogage", "Injections SQL", "Failles XSS", "VS Code"],
              year: 2026
            },
            {
              title: "Analyse et Débogage de Scripts Système (Python TPs 1-10) (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/python_debugging_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Algorithmique", "Débogage", "Collections complexes", "Contrôle de Flux", "Thonny"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC13.03",
        intitule: "Traduire un algorithme dans un langage de programmation",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Au travers des TPs du module R1.07 (Programmation) en S1 et de la SAÉ2.03 (Solution informatique) en S2, j'ai appris à traduire des algorithmes simples en code Python structuré. En S1, j'ai conçu des scripts d'administration simples acceptant des paramètres en ligne de commande (argparse), et écrit des codes basiques de parcours de dossiers avec le module `os`, de requêtes HTTP avec `requests`, et d'extraction d'adresses ou emails par expressions régulières (`re`). En S2, j'ai participé à la traduction de la logique d'une application web Flask simple reliée à une base de données relationnelle sous Docker.",
          pourquoi: "Savoir écrire des scripts système simples et automatiser de petites tâches d'administration (recherche dans des logs, test de ping de serveurs à la chaîne, interfaçage simple de base de données) est une compétence indispensable pour tout administrateur système.",
          comment: "Pour les scripts de programmation système en S1, j'ai écrit des modules Python structurés. J'ai utilisé le gestionnaire de contexte `with open()` pour lire des fichiers texte en sécurité et testé mes expressions régulières sur des outils d'aide en ligne.",
          difficultes: "La principale difficulté a été de construire des expressions régulières correctes sans faux positifs et de comprendre comment connecter proprement Flask à notre conteneur de base de données MySQL dans notre projet de SAÉ.",
          appris: "J'ai appris à concevoir des scripts CLI Python simples, à utiliser les bibliothèques système de base (`os`, `subprocess`), à traiter des données textuelles avec des expressions régulières basiques, et à interfacer une base SQL simple avec du code applicatif.",
          ferais_autrement: "Je découperais davantage mes fonctions en petites unités indépendantes pour rendre mon code plus lisible et plus simple à déboguer pas-à-pas.",
          traces: [
            {
              title: "SAÉ2.03 - Solution informatique pour l'entreprise (Flask/Docker) (S2)",
              category: "Projet BUT",
              image: "assets/img/portfolio/database_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Python Web", "Flask MVC", "Docker Stack", "PostgreSQL", "MySQL", "SQL relational"],
              year: 2026
            },
            {
              title: "Scripts d'Administration CLI, Parsing Log Regex et Réseau (R107 TPs) (S1)",
              category: "TP R&T",
              image: "assets/img/portfolio/python_cli_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Python CLI", "argparse", "subprocess", "re Regex", "requests HTTP", "os / shutil"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC13.04",
        intitule: "Connaître l'architecture et les technologies d'un site Web",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "J'ai conçu et développé Heryze, une application web de caisse enregistreuse nouvelle génération destinée aux commerçants de proximité et au secteur CHR. Le projet comprend un système de point de vente (POS) complet avec gestion du catalogue par catégories, un tableau de bord analytique en temps réel (chiffre d'affaires, panier moyen, graphiques), un module d'inventaire avec import CSV et gestion des taux de TVA, un plan de salle interactif pour la restauration, un scanner mobile via WebRTC transformant un smartphone en douchette, et un journal Z-Caisse conforme à la norme NF525.",
          pourquoi: "Pour créer un outil professionnel réel répondant à un besoin concret du marché : proposer une caisse enregistreuse moderne, accessible, fonctionnant même sans connexion internet, et conforme aux exigences fiscales françaises.",
          comment: "Le projet a été développé en tant que Progressive Web App (PWA) avec une architecture offline-first utilisant les Service Workers pour garantir le fonctionnement hors connexion. L'interface a été construite avec un framework JavaScript moderne et Tailwind CSS. La communication en temps réel entre la caisse et le scanner mobile est assurée par WebRTC et WebSockets. Le système intègre la conformité NF525 avec signature sécurisée des transactions et export FEC (Fichier des Écritures Comptables).",
          difficultes: "La mise en place de l'architecture offline-first a été un défi majeur : synchroniser les données locales avec le serveur à la reprise de connexion sans perte ni doublon. L'implémentation du canal WebRTC pour le scanner mobile a également nécessité de gérer les cas de latence réseau et de compatibilité navigateur.",
          appris: "Ce projet personnel d'envergure m'a permis de découvrir en profondeur le fonctionnement des architectures web modernes, des technologies PWA et de la communication en temps réel (WebSockets / WebRTC), tout en me confrontant aux contraintes légales du secteur (norme NF525).",
          ferais_autrement: "J'aurais intégré des tests automatisés (unitaires et E2E) dès le début du développement pour sécuriser les fonctionnalités critiques comme l'encaissement et la génération des Z-Caisse. J'aurais également documenté l'API plus tôt dans le processus.",
          traces: [
            {
              title: "Heryze — Caisse enregistreuse nouvelle génération",
              category: "Projet Personnel",
              image: "assets/img/portfolio/portfolio-3.webp",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: "https://heryze.com",
              tags: ["Web", "PWA", "WebRTC"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC13.05",
        intitule: "Choisir les mécanismes de gestion de données adaptés",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "J'ai conçu et développé Kdufoot, une plateforme web communautaire permettant aux coachs de football amateur de publier, rechercher et organiser des matchs amicaux et des tournois autour de chez eux. Le projet inclut un système d'authentification sécurisé (Auth0 avec Google OAuth), un tableau de bord personnel, un système de favoris, une recherche filtrée par catégorie/niveau/distance/format, et une page de conformité RGPD complète avec suppression de compte en 1 clic et export automatisé des données (PDF/JSON).",
          pourquoi: "Pour répondre à un vrai besoin de terrain : les coachs de clubs amateurs perdent un temps considérable à chercher des adversaires pour les matchs amicaux. Kdufoot centralise toutes les annonces et simplifie l'organisation.",
          comment: "L'application a été développée avec React et Vite pour le frontend, Tailwind CSS pour le design (thème sombre avec gradients dynamiques). L'authentification est déléguée à Auth0 (email/password + Google OAuth). Les données sont stockées sur Cloudflare D1 (base SQLite en edge computing) avec chiffrement au repos. La conformité RGPD a été implémentée avec un DPO dédié, une politique de rétention de 12 mois, et des mécanismes d'anonymisation automatique.",
          difficultes: "Le choix de Cloudflare D1 comme base de données a impliqué de s'adapter aux contraintes du edge computing (latence, limitations de requêtes). La mise en conformité RGPD complète (droit à l'oubli, portabilité, rétention) a demandé une recherche approfondie sur les obligations légales.",
          appris: "J'ai appris à concevoir une architecture de données simple, à utiliser une base SQL en environnement Edge (Cloudflare D1), et à intégrer un fournisseur d'identité externe (Auth0) tout en appréhendant les enjeux de protection des données personnelles (RGPD).",
          ferais_autrement: "J'aurais mis en place une base de données relationnelle plus classique (PostgreSQL) dès le début pour éviter les limitations de D1, et j'aurais implémenté un système de notifications en temps réel pour prévenir les coachs des nouvelles annonces correspondant à leurs critères.",
          traces: [
            {
              title: "Kdufoot — Plateforme de matchs amicaux de football",
              category: "Projet Personnel",
              image: "assets/img/portfolio/portfolio-5.webp",
              logo: "assets/img/portfolio/logo-kdufoot.webp",
              url: "https://kdufoot.com",
              tags: ["React", "Auth0", "Cloudflare D1"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC13.06",
        intitule: "S'intégrer dans un environnement de développement collaboratif",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre de la SAÉ2.03 (Solution informatique) et des travaux pratiques Docker, j'ai été initié à l'intégration de micro-services dans un cadre collaboratif conteneurisé. D'une part, j'ai appris à versionner mon code en équipe sous Git et GitLab/GitHub (gestion de branches, merges simples et résolution guidée de conflits). D'autre part, j'ai déployé des conteneurs isolés simples coordonnés par Docker Compose : configuration d'un serveur Apache simple monté en volume et d'un blog WordPress de base relié à une base de données MySQL par un réseau privé ponté virtuel.",
          pourquoi: "En milieu professionnel, le travail en équipe et le déploiement applicatif s'appuient systématiquement sur Git et la conteneurisation. Découvrir Docker Compose et la gestion collaborative de dépôts de code permet d'acquérir les bons réflexes pour les futurs projets de développement.",
          comment: "J'ai utilisé Git en ligne de commande pour la synchronisation de code. Pour la conteneurisation, j'ai été initié à l'écriture de fichiers `docker-compose.yml` simples exécutés via le terminal ou supervisés graphiquement dans l'interface Portainer.",
          difficultes: "La principale difficulté a été de comprendre comment assurer une communication inter-conteneurs robuste en utilisant la résolution DNS interne de Docker au lieu de localhost (relier le conteneur applicatif au service 'db').",
          appris: "J'ai appris les bases du cycle de développement collaboratif sous Git (branches, merges). J'ai été initié à l'écriture de fichiers Docker Compose de base avec gestion élémentaire de volumes nommés et de variables d'environnement.",
          ferais_autrement: "Je chercherai à configurer de petits scripts de validation automatique (linters de fichiers YAML) pour vérifier la syntaxe de mes fichiers docker-compose avant de les exécuter.",
          traces: [
            {
              title: "SAÉ2.03 - Solution informatique et Orchestration (Flask/Docker/Git/Portainer) (S2)",
              category: "Projet BUT",
              image: "assets/img/portfolio/git_docker_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Git", "Docker", "docker-compose", "Portainer", "MySQL", "PostgreSQL", "phpMyAdmin"],
              year: 2026
            }
          ]
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
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Je regroupe ici mes projets de développement web personnels et professionnels qui témoignent de ma passion pour les technologies modernes et de ma polyvalence en dehors des matières académiques du BUT R&T.",
          pourquoi: "Pour explorer de nouveaux frameworks, concevoir des solutions adaptées à de vrais clients et consolider mes compétences en Fullstack.",
          comment: "Ces projets sont basés sur des architectures web modernes, allant de sites vitrines en HTML/CSS/JS statiques à des applications dynamiques complexes en React.",
          difficultes: "Gérer le temps entre les projets académiques et personnels, et s'auto-former sur de nouvelles technologies de pointe (React, bases edge D1, Auth0).",
          appris: "J'ai développé une grande autonomie technique, appris à concevoir des architectures complètes et à répondre aux exigences réelles des utilisateurs (ergonomie, performance, sécurité).",
          ferais_autrement: "J'organiserais mon travail avec une planification plus stricte (méthode Agile) pour optimiser les livraisons de mes projets personnels.",
          traces: [
            {
              title: "Kdufoot — Plateforme de matchs amicaux de football",
              category: "Projet Personnel",
              image: "assets/img/portfolio/portfolio-5.webp",
              logo: "assets/img/portfolio/logo-kdufoot.webp",
              url: "https://kdufoot.com",
              tags: ["React", "Auth0", "Cloudflare D1"],
              year: 2025
            },
            {
              title: "Site web professionnel — Salon de coiffure",
              category: "Projet Professionnel",
              image: "assets/img/portfolio/portfolio-3.webp",
              logo: "assets/img/portfolio/logo-coiffure.webp",
              url: "assets/partie-projet/index.html",
              tags: ["HTML", "CSS", "JS"],
              year: 2025
            },
            {
              title: "Modélisation 3D — Habitation et agrandissement",
              category: "Projet Personnel",
              image: "assets/img/portfolio/portfolio-4.webp",
              logo: "assets/img/portfolio/logo-3d.webp",
              url: "assets/partie-projet/maison.html",
              tags: ["Architecture", "SketchUp"],
              year: 2021
            }
          ]
        }
      }
    ]
  }
};
