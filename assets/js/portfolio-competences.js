const COMPETENCES = {
  administrer: {
    label: "Administrer",
    description: "Administrer les réseaux et l'internet",
    color: "#e74c3c", // Rouge
    apprentissages: [      {
        id: "AC11.01",
        intitule: "Maîtriser les lois fondamentales de l'électricité",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Dans le cadre du module R1.04 - Fondamentaux des systèmes électroniques (S1), j'ai réalisé 4 travaux pratiques majeurs en électricité continue et alternative. J'ai pris en main la maquette d'expérimentation Analog Discovery Studio (ADS) pilotée par le logiciel Waveforms. En régime continu (TP1), j'ai mesuré des résistances réelles à l'ohmmètre pour les comparer au code des couleurs, vérifié la loi d'Ohm, la loi d'additivité des tensions sur des circuits en série (pont diviseur de tension) et en parallèle, et validé expérimentalement le principe de l'adaptation d'impédance en mesurant l'évolution de la puissance consommée par une résistance variable. En régime alternatif (TP2 & TP3), j'ai généré des signaux sinusoïdaux et carrés (MLI/PWM à rapport cyclique variable de 20% à 100%) sur la sortie WAVEGEN, réglé la base de temps et le seuil de déclenchement (Trigger) de l'oscilloscope, et mesuré les valeurs crête-à-crête, moyennes et efficaces (RMS). Enfin, dans le TP4, j'ai caractérisé l'impédance complexe d'un circuit série RC (R=39 kΩ, C=1 nF) en calculant le module |Z| et l'argument (déphasage theta mesuré par décalage temporel converti en degrés : theta = delta_t / T * 360) sur une plage de fréquences allant de 100 Hz à 20 kHz, pour modéliser ses schémas équivalents en basse et haute fréquence.",
          pourquoi: "La maîtrise des lois fondamentales de l'électricité et de l'électronique est indispensable pour comprendre le transport physique des données dans les réseaux. Les notions d'impédance, d'adaptation de charge pour maximiser le transfert de puissance, de déphasage ou d'échantillonnage de signaux sont à la base des technologies de câblage cuivre, de transmission par fibre optique ou d'antennes radiofréquences. Sans ces connaissances physiques de base, il est impossible de comprendre les pertes de signal ou de diagnostiquer les pannes de couche physique (couche 1 OSI).",
          comment: "Pour réaliser ces manipulations, j'ai utilisé la maquette Analog Discovery Studio (ADS) connectée en USB à un PC. J'ai exploité le logiciel Waveforms (outils Supplies, Wavegen pour la génération de signaux continus et alternatifs, Scope et Voltmeter pour les mesures). Les circuits ont été câblés sans soudure sur une platine d'essai (breadboard) en utilisant des fils de raccordement MTE, des câbles coaxiaux BNC et des pointes de touche de multimètre de table. J'ai également mené une étude sur la sécurité (TP3) en analysant les seuils de danger corporel et les niveaux d'habilitation électrique.",
          difficultes: "La principale difficulté résidait dans l'utilisation et la synchronisation du Trigger de l'oscilloscope sous Waveforms (notamment pour stabiliser les signaux alternatifs sur front descendant à -1 V, ou comprendre le blocage du balayage lorsque le trigger était réglé hors de la plage du signal à +3.5 V). La manipulation des nombres complexes pour le calcul théorique de l'impédance RC et sa corrélation avec la mesure temporelle du déphasage (conversion du décalage delta_t en degrés) a également nécessité de la rigueur.",
          appris: "J'ai appris à câbler méthodiquement un circuit sur table d'essai sans risquer de court-circuit sur la maquette ADS, à manipuler un générateur et un oscilloscope numérique virtuel sous Waveforms, et à mesurer précisément les grandeurs électriques (RMS, moyenne, amplitude). J'ai assimilé la notion d'impédance d'un circuit alternatif RC et sa dépendance à la fréquence (filtrage BF/HF), tout en acquérant des notions de sécurité et d'habilitation électrique (électrisation vs électrocution).",
          ferais_autrement: "Je prendrais plus de temps pour modéliser le comportement théorique sur papier avant de lancer la simulation ou les mesures physiques sur la maquette. Cela permet de repérer instantanément une anomalie de câblage ou un mauvais calibrage de calibre de tension au lieu de propager des mesures erronées.",
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
          ce_que_jai_fait: "Dans le cadre du module R1.06 - Architecture des systèmes numériques (S1), j'ai étudié et programmé sous Python les fondements logiques et numériques des ordinateurs. J'ai d'abord travaillé sur la représentation binaire et hexadécimale, en programmant des scripts d'extraction du n-ième bit par décalage de bits (bit shifts '<<' et '>>') et masquage (ET logique avec 1). J'ai codé des algorithmes de compression par emballage/déballage (pack/unpack) de deux nombres de 4 bits dans un unique octet (8 bits) pour optimiser le stockage. Côté logique combinatoire, j'ai traduit en Python les équations de circuits électroniques : un multiplexeur 4:1 (MUX), un additionneur 1 bit (calculant la somme S par XOR et la retenue Cout) puis un additionneur n bits chaîné sous forme de tableau, ainsi qu'un comparateur de grandeur 4 bits. Enfin, j'ai implémenté un script de chiffrement symétrique par opération XOR bit à bit (chiffrement de caractères UTF-8 par clé générée avec secrets.randbits), complété par un outil de cryptanalyse par force brute essayant les 256 clés possibles pour retrouver un message codé.",
          pourquoi: "Comprendre la représentation de l'information et le fonctionnement des circuits logiques fondamentaux (additionneurs, multiplexeurs, comparateurs) au niveau du silicium est essentiel pour un technicien réseau. Cela permet d'assimiler les contraintes matérielles du matériel réseau (processeurs des routeurs, puces ASIC des switches) en termes de performances, d'optimisation de mémoire par masquage de bits, et de comprendre le calcul interne effectué pour l'adressage IP (application du masque réseau par ET logique et calcul de l'adresse de diffusion par OU logique).",
          comment: "J'ai développé ces solutions sous Python 3 dans des carnets de notes Jupyter (.ipynb) sous VS Code. J'ai utilisé des opérateurs de décalage (`<<`, `>>`), des masques logiques (`&`, `|`, `^`, `~`), le module `secrets` (secrets.randbits) pour la sécurité cryptographique, et la fonction `getsizeof` pour mesurer et prouver le gain d'espace mémoire lors de la compression de données par emballage d'octets.",
          difficultes: "La principale difficulté résidait dans l'assimilation du comportement de l'opérateur de complément à un (`~`) en Python qui travaille sur des entiers signés (inversion du bit de signe produisant des valeurs négatives). J'ai dû apprendre à contourner ce problème en utilisant des masques XOR avec la valeur maximale (ex: `0b1111 ^ valeur` pour inverser 4 bits). L'écriture propre des grandes équations booléennes pour le comparateur 4 bits a également demandé une grande rigueur de parenthésage pour éviter les erreurs de priorité d'opérateurs.",
          appris: "J'ai appris à manipuler les nombres en binaire de manière très fine par bit shifts et masquage, à concevoir et simuler des circuits combinatoires complexes (additions de mots de n bits, multiplexage), et à implémenter un chiffrement symétrique XOR de base avec son attaque par force brute associée. J'ai également appris à appliquer concrètement ces opérateurs de bits pour le calcul d'adresses IP de réseau et de diffusion.",
          ferais_autrement: "Je documenterais mes fonctions avec des docstrings plus détaillés dès le départ pour clarifier le rôle de chaque bit. J'essaierais également de simuler ces équations sous le logiciel de CAO Logisim-evolution pour visualiser le schéma matériel correspondant à mes codes Python.",
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
          ce_que_jai_fait: "Dans le cadre de la SAÉ1.02 - S'initier aux réseaux informatiques (S1) et du module R1.01 - Initiation aux réseaux (S1), j'ai conçu, modélisé et mis en œuvre des architectures réseau locales réelles et virtuelles. Sous Cisco Packet Tracer, j'ai configuré des liaisons poste-à-poste (câblage droit/croisé FastEthernet), des commutateurs 2960 (6 machines en sous-réseaux isolés, puis tests de masques /16 et /24) et des routeurs 2911. J'ai programmé en mode console CLI le routage statique inter-VLAN entre deux sous-réseaux (192.168.100.0/24 via Gig0/0 et 172.31.0.0/16 via Gig0/1) et configuré les tables de routage statiques sur plusieurs routeurs en réseau de transit (10.0.0.0/8). En laboratoire réel (TP8), j'ai réalisé le brassage physique en reliant les ports xx.2 de ma table J001/J009 aux commutateurs physiques de la baie de brassage (Paris/Madrid/Rome). J'ai calculé et configuré les masques de sous-réseau optimaux (/18 soit 255.255.192.0) pour réunir et faire communiquer des adresses d'équipes initialement isolées (172.16.154.x/24 et 172.16.186.x/24) dans un même réseau de broadcast (Net ID: 172.16.128.0/18, Broadcast: 172.16.191.255). Enfin, j'ai raccordé ce réseau au VLAN 800 pour obtenir une IP dynamique par DHCP et configuré le proxy de l'IUT pour surfer sur Internet.",
          pourquoi: "La configuration et la structuration d'un réseau local (LAN) est le cœur de métier d'un technicien R&T. Il est crucial de savoir segmenter physiquement et logiquement un réseau pour optimiser les flux de données, assurer la sécurité inter-services (en évitant la propagation de tempêtes de broadcast ou de piratage entre les services administratifs et les lignes de production), et maîtriser l'adressage IP (VLSM/CIDR) ainsi que le routage statique pour interconnecter des architectures hétérogènes de manière stable et performante.",
          comment: "J'ai modélisé et simulé ces architectures sur Cisco Packet Tracer en analysant les en-têtes de couches du modèle OSI lors des simulations de requêtes ICMP. En TP physique, j'ai câblé et brassé sur des équipements réels avec des connecteurs RJ45. Dans le cadre de la SAÉ1.02 en équipe, nous avons structuré le réseau d'une PME avec 4 VLANs distincts (VLAN ADMIN hébergeant un serveur Web Apache statique, VLAN PERSONNEL, VLAN PRODUCTION, VLAN VIDEO) connectés à un commutateur Cisco 2960 et un routeur Cisco 800 configuré avec un serveur DHCP local.",
          difficultes: "La principale difficulté a été de déterminer mathématiquement le plus petit masque de sous-réseau (CIDR le plus grand) permettant d'intégrer toutes les adresses d'étudiants (par exemple faire communiquer 172.16.154.x et 172.16.186.x). J'ai résolu cela en convertissant les adresses en binaire pour repérer le premier bit de divergence (18e bit), me permettant d'identifier le masque /18 avec certitude et de calculer les plages d'adresses d'hôtes correspondantes sans erreur.",
          appris: "J'ai appris à concevoir un plan d'adressage IP optimisé (VLSM), à brasser physiquement des câbles RJ45 dans une baie réseau de laboratoire, à configurer des interfaces routeur et commutateur en mode console CLI (Cisco IOS), et à mettre en œuvre une table de routage statique. J'ai également appris à structurer des VLANs et à configurer des serveurs de services de base (DHCP, passerelle par défaut).",
          ferais_autrement: "Je documenterais mes schémas réseau dès la phase d'étude sous Draw.io de manière encore plus détaillée, en y indiquant toutes les adresses physiques (MAC) et IP associées à chaque port de commutateur ou interface routeur, afin d'accélérer le diagnostic de câblage ou de configuration en laboratoire réel.",
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
          ce_que_jai_fait: "Dans le cadre des modules de systèmes d'exploitation (R1.08, R2.02) et des travaux pratiques associés, j'ai développé une expertise complète en administration de systèmes physiques, virtualisés et conteneurisés. En premier lieu (CLI Linux), j'ai maîtrisé l'introspection matérielle et logicielle (lscpu, nproc, lshw, free -h, lsblk, df -h, sensors), la gestion des permissions Unix (chmod, chown, umask), les redirections de flux (>, >>, 2>) et les filtres avancés (grep, head, tail, cut, uniq, wc, diff). En second lieu (Virtualisation Type 2 - VirtualBox), j'ai créé des VMs Ubuntu en analysant le rôle des fichiers associés (.vbox XML de configuration, .vdi disque virtuel dynamique vs taille fixe, logs), installé les Additions Invité en compilant avec les linux-headers (`sudo ./VBoxLinuxAdditions.run`) pour le partage de presse-papier/dossiers (/etc/fstab avec options uid/gid=1000, groupe vboxsf), géré les instantanés (Snapshots) de sécurité, redimensionné dynamiquement les disques via `VBoxManage modifymedium disk --resize`, configuré les adaptateurs en mode NAT et Pont (Bridge) avec adresse MAC spécifique pour accès SSH, et automatisé la création de machines via l'outil CLI `VBoxManage`. En troisième lieu (Virtualisation Type 1 - VMware ESXi), j'ai administré en présentiel un hyperviseur bare-metal via son interface web (rt-vm1.univ-artois.fr), monitoré ses performances matérielles, provisionné des VMs en reliant le lecteur virtuel aux images ISO du NAS (/nas/isos) et connecté les machines virtuelles en réseau interne. En dernier lieu (Conteneurisation - Docker), j'ai installé docker.io, configuré le proxy d'entreprise de l'IUT dans systemd (/etc/systemd/system/docker.service.d/http-proxy.conf), géré le cycle de vie des conteneurs (docker run -ti, docker ps -a, shell interactif bash), analysé le partage du noyau hôte (uname -a identique à l'hôte vs /etc/os-release interne Debian), établi des connexions réseaux avec le pont hôte, et tracé les modifications internes via docker diff.",
          pourquoi: "Maîtriser les systèmes d'exploitation et les différents modèles d'abstraction (hyperviseurs de Type 1 et 2, conteneurisation) est crucial pour un administrateur réseau. Cela permet d'optimiser l'allocation des ressources physiques (processeur, RAM, stockage), de sécuriser et isoler les applications, d'automatiser les déploiements de serveurs, et de concevoir des architectures hautement disponibles et scalables tout en comprenant le fonctionnement interne des systèmes d'exploitation sous-jacents.",
          comment: "J'ai configuré et exploité l'hyperviseur de type 2 VirtualBox (en mode GUI et CLI VBoxManage) ainsi que l'hyperviseur de type 1 VMware ESXi pour la virtualisation. Pour la conteneurisation, j'ai déployé l'environnement Docker sous Debian/Ubuntu. Les configurations d'automatisation ont été écrites en Bash et PowerShell, incluant des modifications de fichiers de configuration système (/etc/fstab) et de services systemd.",
          difficultes: "L'une des difficultés majeures a été le paramétrage des dossiers partagés permanents sous VirtualBox sans bloquer les droits d'écriture de l'utilisateur standard. J'ai résolu ce problème en configurant rigoureusement le fichier /etc/fstab avec les options d'association uid/gid=1000 et en ajoutant l'utilisateur au groupe système vboxsf. Pour Docker, la configuration du proxy de l'IUT dans les variables d'environnement de systemd a été indispensable pour permettre le téléchargement d'images sur le Docker Hub sans échec réseau.",
          appris: "J'ai appris à concevoir, configurer et administrer des machines virtuelles (VirtualBox, ESXi) et des conteneurs isolés (Docker). Je maîtrise l'allocation de ressources, la gestion de snapshots de sécurité, le redimensionnement de disques en CLI, les types de réseaux virtuels (NAT, Bridge, Réseau Interne), l'installation de pilotes invités et le diagnostic d'images conteneurisées.",
          ferais_autrement: "J'automatiserai le provisionnement et le déploiement de ces infrastructures de virtualisation et de conteneurs en utilisant des outils d'infrastructure as code (IaC) comme Vagrant pour VirtualBox ou des templates de déploiement automatisé (FOG/PXE) afin d'accélérer la création de parcs clients.",
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
          ce_que_jai_fait: "Dans le cadre des modules R1.01 - Initiation aux réseaux (S1) et de la SAÉ1.02, j'ai appris à diagnostiquer et résoudre de manière méthodique les dysfonctionnements physiques et logiques d'un réseau local (LAN). J'ai testé la boucle locale (ping 127.0.0.1) pour isoler les dysfonctionnements de carte réseau ou de pilote système, puis le ping vers l'interface configurée. J'ai diagnostiqué les problèmes d'attribution dynamique en analysant les adresses auto-configurées APIPA (169.254.x.x) obtenues par le poste Windows en l'absence de serveur DHCP. Grâce à une RTbox2 (faisant office de pont et serveur DHCP), j'ai capturé avec Wireshark et filtré (filtre bootp) les échanges DHCP (requêtes DORA : Discover, Offer, Request, Acknowledge) en analysant précisément les adresses MAC et IP sources/destinations. J'ai également résolu des problèmes d'inaccessibilité réseau liés au Pare-feu Windows Defender (profil public bloquant ICMP/ping) et testé les impacts de masques asymétriques (/24 vs /25, ping de l'adresse de broadcast .255 qui échoue). Enfin, j'ai vérifié la résolution de noms avec nslookup (nslookup j001-01 172.18.26.101) et host (host google.fr, host 8.8.8.8) et audité les tables de routage (ip route, route -n, netstat -nr sous Linux/Mac et route print sous Windows).",
          pourquoi: "Savoir identifier et résoudre les pannes réseau est une compétence opérationnelle critique en entreprise. Un problème d'adressage (comme une IP APIPA non routable), un pare-feu trop restrictif bloquant les flux ICMP légitimes, ou une mauvaise résolution DNS paralysent instantanément les services de l'entreprise. Appliquer une méthode structurée basée sur les couches du modèle OSI permet de cibler instantanément la source de la panne (matériel, adressage, filtrage ou applicatif) sans perte de temps.",
          comment: "J'ai utilisé des machines virtuelles Linux Ubuntu et Windows 10 configurées en réseau interne isolé. Pour le diagnostic de trafic, j'ai déployé l'analyseur de protocoles Wireshark sur le pont réseau de la RTbox2 pour inspecter le contenu des trames Ethernet et des paquets IP. La résolution des pannes a été validée par la reprise de connectivité physique et logique bidirectionnelle (tests ping réussis après désactivation ciblée du pare-feu Windows Defender et correction des masques de sous-réseau).",
          difficultes: "La principale complexité a été d'analyser le volume massif de trames capturées par Wireshark lors d'une requête de bail DHCP. L'utilisation rigoureuse de filtres d'affichage comme 'bootp' ou 'arp' combinée à l'analyse structurée de la pile (Ethernet II -> Internet Protocol -> User Datagram Protocol -> Bootstrap Protocol) m'a permis d'isoler rapidement les paquets DORA recherchés.",
          appris: "Je maîtrise la démarche de diagnostic réseau basée sur le modèle OSI. Je sais interpréter les codes d'erreurs et adresses spécifiques (comme APIPA en cas de faille DHCP), lire et analyser les en-têtes réseau avec Wireshark, configurer de manière ciblée les pare-feu applicatifs, et manipuler les outils d'audit de routage et de résolution DNS (nslookup, host, ip route, route print).",
          ferais_autrement: "Je rédigerais un guide de diagnostic rapide (Cheat Sheet) répertoriant les codes de pannes typiques (APIPA, paquets ICMP perdus, mauvaise passerelle par défaut ou DNS erroné) avec leurs commandes de vérification correspondantes, afin d'accélérer encore le diagnostic d'incidents.",
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
          ce_que_jai_fait: "Dans le cadre du module R2.02 - Administration système et virtualisation (S2) et du projet Windows Server, j'ai installé et configuré des systèmes d'exploitation clients et serveurs en réseau interne virtuel sous VirtualBox (via le script de laboratoire MachinesVirtuelles). J'ai déployé un contrôleur de domaine Windows Server 2016 (srv-Yanni) promouvant la forêt dom-Yanni.local avec les services AD DS, et configuré en parallèle un poste client Windows 10 (client-Yanni) intégré au domaine. J'ai configuré un serveur DHCP sur le contrôleur avec exclusion et réservation d'adresse IP statique par adresse MAC pour le client, et défini les options d'étendue (DNS, serveur de temps NTP 172.31.25.9, nom de domaine). J'ai administré les comptes utilisateurs (etu01, prof01) et groupes (eleves, Profs), et structuré les profils itinérants et partages NTFS masqués (etu01$) sous C:\\volume (partition de 1 Go montée) avec gestion avancée des ACL et des quotas (limitation à 1 Go avec avertissement à 900 Mo). J'ai déployé des stratégies de groupe (GPOs) pour l'attribution des droits d'ouverture de session locale, la politique de mot de passe, l'installation silencieuse de packages MSI (Notepad++) et le déploiement d'imprimantes TCP/IP (HP Universal Printing/OKI). Enfin, j'ai écrit un script PowerShell d'automatisation (.ps1) acceptant des paramètres pour provisionner automatiquement les utilisateurs, leurs répertoires, leurs partages SMB sécurisés (icacls, New-SmbShare) et leur script de connexion NETLOGON (net use R:).",
          pourquoi: "L'installation de postes clients et leur intégration dans une infrastructure de domaine centralisée est une tâche quotidienne fondamentale pour un administrateur systèmes et réseaux. L'utilisation d'Active Directory, combinée aux GPOs et à l'automatisation par scripts PowerShell, permet d'industrialiser le déploiement, de garantir la sécurité globale des données (via les ACL NTFS et les quotas de stockage), et d'assurer une expérience utilisateur homogène (profils itinérants, mappages automatiques d'unités réseau via NETLOGON) sur des centaines de postes de travail.",
          comment: "Les déploiements ont été réalisés en environnement virtualisé VirtualBox. L'intégration du client Windows 10 a nécessité la configuration rigoureuse de sa carte réseau en IP statique pointant vers l'IP DNS du serveur 2016 avant sa jonction au domaine dom-Yanni.local. Pour l'industrialisation, j'ai conçu un script de provisionnement PowerShell s'exécutant dans le module Active Directory, exploitant des variables d'arguments ($args[0], $args[1]) pour créer l'arborescence, configurer la sécurité NTFS avec icacls et enregistrer l'utilisateur dans AD.",
          difficultes: "La principale difficulté a été de résoudre le blocage de l'ouverture de session locale pour les nouveaux utilisateurs AD sur le serveur et le client. J'ai résolu ce problème en modifiant finement la stratégie locale adéquate (Default Domain Controller Policy) sous la console de gestion des stratégies de groupe (GPMC) pour accorder le droit 'Permettre l'ouverture de session locale' et forcer la mise à jour immédiate avec la commande gpupdate /force.",
          appris: "J'ai appris à promouvoir un contrôleur de domaine AD DS, à installer et configurer un rôle DHCP d'entreprise, à gérer finement la sécurité de fichiers NTFS et les partages SMB cachés, à déployer des logiciels et imprimantes par GPO de manière centralisée, et à automatiser les tâches administratives complexes en scripting PowerShell.",
          ferais_autrement: "Je mettrais en œuvre des outils de déploiement automatisé d'OS sans surveillance (WDS/MDT pour Windows ou PXE/FOG pour Linux) couplés à des outils de gestion de parc comme GLPI/OCS pour automatiser complètement l'inventaire matériel et logiciel dès le déploiement initial du poste.",
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
          ce_que_jai_fait: "Dans le cadre de la SAÉ2.02 (Outils pour l'analyse spectrale) et du module R2.05, j'ai configuré et exploité la maquette Analog Discovery Studio couplée au logiciel Waveforms pour générer, observer et caractériser des signaux périodiques (sinusoïdaux, carrés, triangulaires et impulsionnels). J'ai mesuré rigoureusement leurs paramètres temporels (période, fréquence, valeur moyenne, valeur efficace AC RMS, crête-à-crête) et fréquentiels grâce à l'analyse spectrale par transformée de Fourier rapide (FFT). J'ai étudié le spectre théorique et réel d'une sinusoïde parfaite de 2,5 kHz (amplitude de 4 Vpp, échelle en dBVRMS), puis quantifié la distorsion d'une sinusoïde déformée (symétrie variant de 40% à 50% à 4,5 kHz) en calculant le taux de distorsion harmonique (THD) sur tableur. J'ai modélisé et comparé les harmoniques de signaux carrés (avec et sans composante continue, amplitudes des raies théoriques en Vmax et VRMS vs réelles) et de signaux triangulaires. J'ai également caractérisé des signaux impulsionnels (alpha = 25%, T = 400 µs, tau = 100 µs) en visualisant l'enveloppe spectrale en sinus cardinal (sin(x)/x). Enfin, j'ai réalisé la synthèse harmonique inverse (série de Fourier reconstituée) sous MATLAB/Simulink pour sommer les harmoniques successifs et reformer ces signaux.",
          pourquoi: "L'analyse spectrale est indispensable pour un professionnel R&T. Elle permet d'étudier l'occupation spectrale des signaux de communication (comme la bande passante nécessaire), de vérifier la pureté spectrale des émetteurs, d'identifier les fréquences parasites ou le bruit de fond, et de concevoir des filtres adaptés. Comprendre comment un signal se décompose en harmoniques permet d'évaluer la qualité d'une ligne de transmission physique face aux distorsions.",
          comment: "J'ai utilisé la maquette Analog Discovery Studio avec le logiciel Waveforms pour l'acquisition et la FFT (réglage du Trigger en Repeated Auto, réduction du bruit de trace, ajustement du RefLevel à 0 dBVRMS et de la dynamique verticale). Pour l'analyse quantitative et le calcul du THD (jusqu'à l'harmonique 7), j'ai utilisé un tableur Calc/Excel. La synthèse harmonique inverse a été programmée et visualisée sous MATLAB/Simulink en sommant des sources sinusoïdales déphasées de fréquences multiples.",
          difficultes: "La principale difficulté a été d'appréhender le réglage optimal du Trigger de l'oscilloscope et le calcul du THD à partir des amplitudes relevées en décibels. Le passage du domaine temporel au domaine fréquentiel en dBVRMS nécessite d'appliquer la formule V_dBVRMS = 20log10(V_RMS). J'ai surmonté cela en établissant des formules de conversion automatiques sous Excel pour convertir les dBVRMS en V_RMS afin d'alimenter l'équation de distorsion.",
          appris: "Je sais parfaitement utiliser un oscilloscope numérique et un analyseur de spectre FFT (Analog Discovery Studio). Je maîtrise la théorie des séries de Fourier pour les signaux standards (carrés, triangulaires, impulsions) et je sais calculer le THD. Je maîtrise également l'utilisation de MATLAB/Simulink pour la synthèse de signaux périodiques.",
          ferais_autrement: "J'aimerais appliquer cette analyse spectrale à des modulations analogiques et numériques réelles (AM, FM, QAM) pour observer en direct l'encombrement du canal lors de la transmission de signaux de voix ou de données.",
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
          ce_que_jai_fait: "Dans le cadre du module R1.05 (Ligne de Transmission) et R2.05 (Filtrage), j'ai mené l'étude expérimentale complète d'une ligne de transmission physique (câble Ethernet à paires torsadées de 30m et de 50cm) et de circuits de filtrage analogique. D'une part, j'ai mesuré les paramètres primaires linéiques (r, l, c) d'un câble de 50 cm à l'aide d'un pont RLC de précision BK878B en circuit ouvert et en court-circuit, puis calculé les paramètres secondaires (impédance caractéristique Z0 ≈ 100 Ω, NVP vitesse de propagation et affaiblissement moyen). J'ai injecté une impulsion (Ve = 5V, tau = 100 ns) pour mesurer par réflectométrie temporelle (TDR) sur oscilloscope la vitesse de propagation et localiser une coupure de ligne (longueur Lx calculée). J'ai analysé l'impact de la résistance de terminaison Rv (adaptation parfaite à 100 Ω sans écho, réflexion positive à 1 kΩ en circuit ouvert, réflexion négative à 0 Ω en court-circuit). D'autre part, j'ai câblé et caractérisé des filtres passifs du 1er ordre (R = 39 kΩ, C = 1 nF), à savoir un passe-bas, un passe-haut et un passe-bande (fréquence de coupure théorique Fc ≈ 4 kHz). J'ai tracé leurs diagrammes de Bode (gain et phase de 100 Hz à 100 kHz) et analysé la déformation de signaux carrés (intégration vs dérivation) à 500 Hz, 2 kHz et 20 kHz ainsi que le spectre de sortie.",
          pourquoi: "Caractériser physiquement les supports de transmission et comprendre le comportement des filtres fréquentiels est indispensable pour garantir l'intégrité du signal. Un câble mal adapté génère des échos (ROS) qui corrompent les données. Un filtre permet de nettoyer le signal des bruits haute fréquence ou de séparer les canaux de transmission, mais introduit des déphasages et des atténuations qu'il faut savoir modéliser mathématiquement pour concevoir un système de transmission de qualité.",
          comment: "J'ai utilisé un pont RLC BK878B pour les mesures primaires, un testeur certifié VDV II Pro pour la qualification et le diagnostic de pannes RJ45 (étalonnage NVP), et un oscilloscope relié par Té BNC à un GBF pour les chronogrammes de réflectométrie temporelle. Pour les filtres, j'ai câblé les résistances et condensateurs sur plaque d'expérimentation (Breadboard) et relevé les tensions et déphasages de phase sous excitation harmonique.",
          difficultes: "Le plus difficile a été d'identifier précisément les impulsions réfléchies lors des essais de réflectométrie temporelle à l'oscilloscope et de faire le lien avec l'impédance de charge. De même, les mesures de phase des filtres aux basses fréquences présentaient du bruit. J'ai résolu cela en augmentant la résolution d'acquisition, en ajustant précisément le Trigger et en appliquant l'impédance caractéristique exacte (100 Ω) pour éliminer les rebonds parasites.",
          appris: "Je sais calculer et mesurer les paramètres primaires/secondaires d'une ligne, réaliser un diagnostic de ligne par réflectométrie (TDR), étalonner un testeur de câble et concevoir/mesurer des filtres passifs (passe-bas, passe-haut, passe-bande) en traçant expérimentalement leurs courbes de gain et de phase.",
          ferais_autrement: "Je souhaiterais utiliser un analyseur de réseau vectoriel (VNA) professionnel pour extraire directement les paramètres S (réflexion et transmission) de la ligne sur une bande de fréquence beaucoup plus large (jusqu'au GHz).",
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
          ce_que_jai_fait: "Au travers du module R1.05 - Supports de transmission pour les réseaux (S1) et de la SAÉ1.03 - Découvrir un dispositif de transmission, j'ai étudié et mis en œuvre les différents supports de transmission utilisés en réseaux. J'ai appris à sertir des câbles RJ45 (catégorie 5e et 6) en câblage droit et câblage croisé, à tester leur continuité et leurs performances avec un testeur de câble. J'ai également été initié au raccordement de fibres optiques monomodes et multimodes (préparation par clivage, raccordement sur connecteur LC/SC), et effectué des mesures d'affaiblissement avec un réflectomètre optique (OTDR) et un wattmètre optique.",
          pourquoi: "Quel que soit le niveau d'abstraction logicielle d'un réseau, celui-ci repose toujours sur des supports physiques. Savoir choisir, déployer et tester un câble réseau (cuivre ou fibre) est une compétence terrain indispensable. En entreprise, un câblage mal réalisé est une source fréquente de pannes intermittentes difficiles à diagnostiquer. La maîtrise des mesures de qualification (OTDR, testeur de câble certifié) est également demandée lors des missions de maintenance et de déploiement.",
          comment: "Les TPs de câblage se sont déroulés dans un laboratoire équipé de pinces à sertir RJ45, de dénudeurs, de testeurs de câble Fluke Networks, et d'un OTDR. Pour la fibre optique, nous avons utilisé des cliveurs mécaniques et des kits de raccordement à colle thermique. Les mesures OTDR ont été réalisées sur des tronçons de fibre réels permettant d'observer les réflexions, les atténuations et les défauts de soudure.",
          difficultes: "La principale difficulté a été le clivage de la fibre optique : il faut un geste précis et régulier pour obtenir une face de coupure parfaitement plane, condition sine qua non d'une connexion de qualité. Les premières tentatives donnaient des faces obliques ou ébréchées, visibles au microscope de vérification. J'ai dû refaire plusieurs clivages avant d'obtenir un résultat satisfaisant. Par ailleurs, l'interprétation des courbes OTDR (localisation des événements, calcul des pertes) a nécessité plusieurs exercices d'application.",
          appris: "Je suis capable de réaliser un câblage RJ45 conforme aux normes TIA-568 (T568A et T568B), de tester sa conformité, de préparer et raccorder une fibre optique, et de lire une courbe OTDR pour qualifier un lien optique. Je connais les caractéristiques des différentes catégories de câbles (Cat5e, Cat6) et des types de fibres (OS1/OS2, OM1 à OM4).",
          ferais_autrement: "Je chercherais à pratiquer davantage le raccordement de fibres optiques, qui demande une dextérité qui ne s'acquiert que par la répétition. Je m'intéresserais également aux câblages structurés en baie de brassage (patch panel) pour comprendre l'organisation complète d'un câblage d'entreprise depuis la prise murale jusqu'au switch.",
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
          ce_que_jai_fait: "Dans le cadre du module R2.04 - Initiation à la téléphonie d'entreprise (S2), j'ai découvert et configuré les architectures de téléphonie sur IP (ToIP/VoIP). J'ai étudié le protocole SIP (Session Initiation Protocol) et son fonctionnement (REGISTER, INVITE, 200 OK, BYE), configuré un serveur IPBX Asterisk sur une machine virtuelle Debian, créé des extensions SIP et des plans de numérotation dans le fichier extensions.conf, et testé les appels entre deux softphones Linphone installés sur des postes virtuels du réseau local. J'ai également analysé des flux SIP et RTP dans Wireshark pour comprendre le flux d'un appel VoIP de bout en bout.",
          pourquoi: "La téléphonie sur IP a remplacé la quasi-totalité des PABX traditionnels en entreprise. Tout technicien réseau est aujourd'hui amené à configurer, dépanner ou faire évoluer des systèmes ToIP. La connaissance d'Asterisk, du protocole SIP et de la relation entre les flux de signalisation et les flux média (RTP) est donc une compétence professionnelle directement monnayable sur le marché de l'emploi.",
          comment: "Les TPs se sont déroulés sur des machines virtuelles VirtualBox en réseau interne. Le serveur Asterisk 20 LTS était installé sous Debian 12. La configuration s'effectuait en éditant les fichiers texte sip.conf, extensions.conf et voicemail.conf directement depuis le terminal SSH. Les softphones Linphone (version desktop) étaient utilisés comme terminaux SIP. L'analyse Wireshark permettait d'observer les échanges SIP (méthodes REGISTER, INVITE) et les paquets RTP transportant la voix.",
          difficultes: "La configuration d'Asterisk is complexe car les fichiers de configuration contiennent une syntaxe spécifique très sensible aux erreurs. J'ai passé beaucoup de temps à déboguer des problèmes d'enregistrement SIP (erreurs 403 Forbidden) liés à des mots de passe incorrects dans sip.conf. La compréhension de la relation entre la signalisation SIP (port UDP 5060) et les flux média RTP (ports dynamiques) a également demandé un effort conceptuel particulier.",
          appris: "Je comprends l'architecture d'un système ToIP (softphone → IPBX → trunk SIP vers l'opérateur), je suis capable de configurer des extensions SIP basiques sur Asterisk, de créer un plan de numérotation simple, et d'analyser un flux d'appel SIP/RTP avec Wireshark. Je connais également les codecs audio courants (G.711, G.729) et leur impact sur la bande passante réseau.",
          ferais_autrement: "Je m'initierais à FreePBX (interface graphique pour Asterisk) pour compléter ma maîtrise de la configuration en ligne de commande avec une approche GUI, plus proche de ce qui est utilisé en production. Je testerais également des scénarios de failover et de trunk SIP vers un opérateur VoIP réel.",
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
          ce_que_jai_fait: "Au cours de la SAÉ2.04 - Projet intégratif (S2) et du cours R1.15 - Gestion de projet, j'ai développé mes compétences en communication technique. J'ai rédigé plusieurs rapports techniques et guides d'installation destinés à des lecteurs de niveaux différents (technicien, chef de projet, utilisateur final), préparé et présenté des soutenances orales en groupe devant un jury d'enseignants, et participé aux cours d'anglais technique (S1/S2) portant sur le vocabulaire réseau et télécom. Dans la SAÉ2.04 (projet intégratif sur 6 jours avec routeurs, VLANs et soutenance finale), j'ai rédigé un cahier des charges, tenu un journal de bord, présenté l'avancement lors de points intermédiaires et défendu le projet lors de la soutenance finale.",
          pourquoi: "Un technicien réseau ne travaille jamais seul : il doit communiquer avec des utilisateurs non-techniciens (expliquer une panne sans jargon), des pairs (rédiger une documentation technique précise) et des supérieurs (synthétiser un projet en quelques minutes). La qualité de la communication est souvent ce qui différencie un bon technicien d'un excellent professionnel. De plus, l'anglais étant la langue universelle des réseaux (RFC, documentation Cisco, normes IEEE), sa maîtrise technique est indispensable.",
          comment: "Les présentations orales de la SAÉ2.04 étaient réalisées devant un jury composé de plusieurs enseignants, avec support de présentation (PowerPoint/Impress) et démonstration technique en direct sur le réseau maquette. Les rapports techniques étaient rédigés sous LibreOffice Writer, en respectant un plan imposé (contexte, architecture réseau, plan d'adressage, procédure de déploiement, tests de validation, bilan). Les cours d'anglais technique incluaient des exercices de lecture de RFC et de datasheets, et des jeux de rôles simulant des appels de support technique.",
          difficultes: "Ma principale difficulté a été d'adapter mon niveau de technicité selon l'audience : j'avais tendance à utiliser systématiquement des acronymes techniques (NAT, VLAN, DHCP) même lorsque je m'adressais à une audience mixte. J'ai également eu du mal à gérer le stress de la soutenance orale et à improviser lors des questions du jury sur des points que je n'avais pas préparés. J'ai progressé en m'entraînant à reformuler les mêmes notions techniques avec un vocabulaire plus accessible, et en préparant une liste de questions-réponses potentielles avant chaque soutenance.",
          appris: "J'ai appris à structurer un document technique selon les codes professionnels (introduction, plan d'adressage tabulé, schéma réseau annoté, procédures de test), à adapter mon discours selon l'interlocuteur, à présenter de manière synthétique un travail complexe en temps contraint, et à répondre aux questions d'un jury de manière calme et argumentée. J'ai également renforcé mon vocabulaire en anglais technique (networking, troubleshooting, deployment).",
          ferais_autrement: "Je m'entraînerais davantage aux présentations orales en conditions réelles en filmant mes répétitions pour identifier mes points faibles (débit de parole, posture, regard). Je chercherais aussi à rédiger davantage de documentations techniques en anglais pour me préparer aux environnements professionnels internationaux.",
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
          ce_que_jai_fait: "Dans le cadre des modules R1.01 (Initiation aux réseaux & accueil numérique) et R1.07 (Fondamentaux de la programmation), j'ai configuré et exploité mon environnement numérique de travail en dual-boot Windows/Linux Ubuntu à l'IUT. J'ai pris en main l'interface en ligne de commande (CLI) de Linux pour naviguer dans l'arborescence, configurer les variables d'environnement réseau (variable système `https_proxy` réglée sur `http://cache-etu.univ-artois.fr:3128`), éditer des fichiers avec `nano` ou VS Code, et gérer de manière sécurisée les droits d'accès aux fichiers et répertoires via les commandes `chmod` et `chown`. En outre, j'ai configuré et utilisé GitLab pour versionner et héberger mes projets R107 (clonage de dépôts via HTTPS, commits atomiques et synchronisation distante avec `git clone`, `git add`, `git commit -m` et `git push`).",
          pourquoi: "Maîtriser un système d'exploitation de type UNIX (Linux) et son terminal CLI est fondamental pour tout technicien Réseaux & Télécoms. La majorité des serveurs web, routeurs et équipements réseau s'administrent exclusivement en ligne de commande. De plus, la gestion rigoureuse des droits système (droits rwx via `chmod`) et le proxying réseau sont indispensables pour sécuriser les flux de données. Enfin, le versionnement avec Git est le standard absolu en entreprise pour collaborer de manière transparente et structurer tout projet informatique.",
          comment: "J'ai configuré mon terminal Ubuntu avec le proxy de l'IUT via l'instruction `export https_proxy=cache-etu.univ-artois.fr:3128` pour autoriser la connexion au GitLab de l'université (https://gitlab.univ-artois.fr). J'ai structuré mes dossiers de TPs (`mkdir -p R107/TP1`) et manipulé les permissions des scripts pour les rendre exécutables (`chmod +x`). Les codes ont été hébergés et synchronisés sur mon dépôt GitLab en invitant mes enseignants en tant que développeurs.",
          difficultes: "La principale difficulté a été de s'adapter à la rigueur de la ligne de commande Linux et d'éviter les erreurs d'accès réseau liées au proxy universitaire. L'authentification lors du premier `git push` sur GitLab avec mes identifiants ENT demandait également une configuration correcte des variables d'environnement. J'ai surmonté ces obstacles en documentant systématiquement mes commandes système favorites dans mon mémento personnel.",
          appris: "Je sais parfaitement utiliser les commandes de base de Linux (mkdir, cd, ls -all, chmod, chown, cat, nano), configurer des proxies réseau en ligne de commande, et maîtriser le cycle de versionnement Git/GitLab. Je sais rendre un script exécutable et configurer VS Code pour le développement système.",
          ferais_autrement: "Je chercherais à configurer une clé SSH sécurisée pour mes interactions avec GitLab afin de m'affranchir de la saisie répétée de mes identifiants de connexion universitaires, ce qui accélère le workflow de développement.",
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
          ce_que_jai_fait: "Dans le cadre de R1.07 - Fondamentaux de la programmation (S1) et R2.09 - Initiation au développement Web (S2), j'ai appris à analyser, exécuter, tester et déboguer des programmes Python et des architectures MVC sous Flask. En S1, j'ai manipulé les structures de données complexes en Python (TP1 à TP10) : analyse et correction d'expressions de conversion (f-string `:.2f`, wrappers `int()`, `float()`), structures conditionnelles et boucles `for`/`while`, gestion et débogage de collections complexes (indices et tranches négatives de listes, tuples non modifiables, ensembles set avec opérations d'union `|`/intersection `&`/différence `-`, et dictionnaires clés/valeurs). J'ai également débogué des scripts utilisant des imports de modules standard comme `random` et `math`, et corrigé des fonctions en vérifiant le typage dynamique. En S2, j'ai étendu cette compétence au débogage d'applications web Flask, en corrigeant des failles de sécurité critiques telles que les injections SQL et les failles XSS.",
          pourquoi: "Savoir lire et déboguer un programme existant est une compétence quotidienne essentielle en Réseaux & Télécoms. Qu'il s'agisse de corriger un script système écrit par un prédécesseur, de déboguer un bug de routage ou de sécuriser une application Web d'entreprise (failles OWASP Top 10), la lecture critique et le diagnostic pas-à-pas de code existant évitent les pannes d'infrastructure et protègent les données sensibles contre les cyberattaques.",
          comment: "Pour les TPs de R1.07 et R2.09, j'ai exploité les débogueurs intégrés de VS Code et de Thonny pour poser des points d'arrêt (breakpoints), inspecter la valeur des variables locales pas-à-pas et analyser les tracebacks d'erreurs d'exécution (comme les IndexError ou KeyError sur les collections). Pour la sécurité (R2.09 TP4), j'ai testé des failles réelles à l'aide de payloads comme `' OR '1'='1` avant de corriger le code en remplaçant la concaténation de chaînes SQL par des requêtes préparées paramétrées robustes.",
          difficultes: "La principale difficulté résidait dans l'interprétation des erreurs sur des structures imbriquées complexes (listes 2D représentant des matrices de TP4) et des tracebacks de Jinja2 sous Flask, qui masquent parfois l'erreur Python sous-jacente. J'ai résolu cela en apprenant à isoler mes composants, en écrivant des tests unitaires minimaux et en insérant des traces ciblées via le module `logging` ou des affichages de débogage.",
          appris: "Je sais lire et interpréter la structure et le comportement d'un code Python (structures de contrôle, fonctions, conteneurs, portée des variables, shebang). Je sais utiliser un débogueur professionnel pour analyser l'état mémoire d'une application à chaud et appliquer des corrections structurelles ou de sécurité conformes aux bonnes pratiques (échappement HTML pour prévenir les failles XSS, requêtes paramétrées).",
          ferais_autrement: "J'activerais des options de linting strictes et de typage statique (`typing` en Python) dès le démarrage du code, afin de détecter les erreurs de type et les incohérences d'arguments à la volée directement dans mon EDI, sans attendre l'exécution.",
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
          ce_que_jai_fait: "Au travers des TPs du module R1.07 (Fondamentaux de la programmation) en S1 et de la SAÉ2.03 (Solution informatique pour l'entreprise) en S2, j'ai traduit de multiples algorithmes complexes en scripts Python opérationnels et structurés. En S1, j'ai développé des scripts autonomes avec Shebang `#!/usr/bin/env python3` rendus exécutables (`chmod +x`), géré des interfaces CLI dynamiques via `argparse`, et réalisé des manipulations système avancées. J'ai notamment écrit des scripts de parcours récursif de répertoires avec `os.walk` et `os.path` pour purger des fichiers vides, interagi avec des processus système à l'aide de `subprocess.run` pour lancer et décoder des pings réseau, développé des scripts de requêtes d'API REST Web avec le module `requests` (récupération de données météo JSON sur wttr.in), et conçu des filtres complexes avec les expressions régulières du module `re` (recherche de MAC, emails, numéros de téléphone dans `syslog.txt`). En S2 (SAÉ2.03), j'ai traduit les algorithmes d'une application web MVC complète sous Flask avec base de données relationnelle PostgreSQL/MySQL.",
          pourquoi: "La traduction d'un algorithme logique en un code propre et exécutable est la base du métier d'administrateur système et développeur Réseaux & Télécoms. Qu'il s'agisse de créer des scripts CLI pour automatiser des purges de disques, surveiller le statut de pings sur des serveurs distants, extraire des adresses MAC de fichiers de logs pour des pare-feux, ou interfacer une base de données avec une application Flask (SAÉ2.03), l'écriture de code structuré et modulaire permet de gagner en efficacité, fiabilité et rapidité opérationnelle.",
          comment: "Pour la partie CLI en S1, j'ai rédigé des modules Python réutilisables protégés par des blocs `if __name__ == '__main__':` pour isoler les tests unitaires. J'ai utilisé `argparse` pour documenter et structurer l'aide en ligne de commande. Les flux de fichiers texte et JSON ont été ouverts de manière sécurisée en utilisant le gestionnaire de contexte `with open()`. Pour la SAÉ2.03 en S2, j'ai écrit le schéma relationnel SQL (tables d'association) et les scripts Flask avec `psycopg2` ou `mysql.connector` pour stocker, mettre à jour et requêter les données de manière transactionnelle.",
          difficultes: "L'une des difficultés principales en S1 a été la mise en place d'expressions régulières robustes (re.compile, finditer) sans faux positifs lors de l'extraction des motifs textuels (ex: distinguer un format d'adresse IP ou MAC valide d'un simple numéro de version dans des logs). En S2, c'était la gestion des relations de bases de données et la synchronisation avec l'application Flask sous Docker. J'ai surmonté ces points en découpant méthodiquement mes expressions régulières via des outils de test (RegEx101) et en documentant soigneusement mes schémas de BDD.",
          appris: "Je sais concevoir des scripts CLI Python complets et professionnels (shebang, argparse, chmod +x). Je maîtrise la programmation système (os, shutil, subprocess), la programmation réseau de base (requests HTTP, ping), le traitement de données structurées (fichiers texte, JSON, Regex) et l'intégration de bases de données relationnelles SQL avec Flask.",
          ferais_autrement: "J'utiliserais un framework de tests unitaires (pytest) pour valider automatiquement le comportement de mes scripts système à chaque modification de code, garantissant ainsi l'absence de régression sur les scripts de production.",
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
          appris: "J'ai acquis une maîtrise approfondie des PWA et des Service Workers, de la communication temps réel WebRTC, et des contraintes réglementaires liées aux systèmes de caisse en France (NF525, FEC). Ce projet m'a aussi appris à concevoir une architecture logicielle complète couvrant le frontend, la gestion des données et la conformité légale.",
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
          appris: "J'ai appris à concevoir une architecture de données conforme au RGPD dès la conception (privacy by design), à utiliser une base de données edge (Cloudflare D1), et à intégrer un fournisseur d'identité externe (Auth0). Ce projet m'a aussi sensibilisé aux enjeux de protection des données personnelles.",
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
          ce_que_jai_fait: "Dans le cadre de la SAÉ2.03 (Solution informatique pour l'entreprise) et des TPs Docker/Docker Compose, j'ai maîtrisé l'intégration de micro-services au sein d'un environnement collaboratif conteneurisé. D'une part, j'ai géré le versionnement sous Git et GitLab/GitHub (commits atomiques, .gitignore, branches main/develop/feature, résolution manuelle des conflits de merge). D'autre part, j'ai conçu et orchestré des architectures multi-conteneurs complexes avec Docker Compose. J'ai ainsi configuré un serveur Apache PHP monté en volume (`$PWD:/app`) avec redirection des ports 80/443. De plus, j'ai déployé un blog WordPress interconnecté avec une base de données MySQL 5.7 isolée : j'ai défini un réseau privé ponté (`mon_reseau` avec subnet IPAM `10.16.0.0/24`), configuré un volume persistant (`dbdata:/var/lib/mysql`), structuré les variables d'environnement de connexion (`WORDPRESS_DB_HOST: db:3306`), et ordonnancé le démarrage des services (`depends_on`). Pour l'orchestration visuelle, j'ai intégré l'outil Portainer en montant le socket Docker de l'hôte (`/var/run/docker.sock:/var/run/docker.sock`) sur le port 9000, et j'ai enrichi mon infrastructure en ajoutant les conteneurs PostgreSQL et phpMyAdmin.",
          pourquoi: "En milieu professionnel, le développement et le déploiement s'appuient systématiquement sur du versionnement collaboratif et de la conteneurisation de micro-services. Maîtriser le multi-conteneur (Docker Compose) garantit une isolation parfaite des composants (base de données, serveur applicatif, outils d'administration) et élimine les problèmes d'incompatibilité d'environnements, tandis que des outils comme Portainer facilitent grandement la supervision et la maintenance en production.",
          comment: "J'ai utilisé Git en ligne de commande pour le versionnement. Pour la conteneurisation et l'orchestration, j'ai écrit et structuré des fichiers de configuration `docker-compose.yml` exécutés via `docker-compose up -d` ou administrés graphiquement depuis l'interface web de Portainer (port 9000) et phpMyAdmin pour la gestion des bases de données SQL.",
          difficultes: "La principale complexité a été d'assurer une communication inter-conteneurs robuste en utilisant la résolution DNS interne de Docker au lieu de localhost, notamment pour relier WordPress au service de base de données 'db:3306'. De plus, l'accès au socket système `/var/run/docker.sock` par le conteneur Portainer a requis de bien comprendre les montages de volumes Unix pour éviter les erreurs d'autorisations.",
          appris: "Je maîtrise le cycle de développement collaboratif sous Git (branches, merges, conflits). Je sais concevoir des architectures micro-services multi-conteneurs complexes sous Docker Compose avec adressage IP statique interne, persistance des données via des volumes nommés, ordonnancement des démarrages de services, et administration graphique centralisée avec Portainer.",
          ferais_autrement: "J'implémenterais un pipeline CI/CD complet (GitHub Actions / GitLab CI) pour automatiser la vérification de syntaxe des fichiers docker-compose.yml (linter) et exécuter des tests d'intégration automatisés avant le déploiement en production.",
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
