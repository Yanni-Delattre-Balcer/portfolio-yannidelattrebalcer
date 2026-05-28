const COMPETENCES = {
  administrer: {
    label: "Administer",
    description: "Administer networks and the internet",
    color: "#e74c3c", // Red
    apprentissages: [
      {
        id: "AC11.01",
        intitule: "Master the fundamental laws of electricity",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R1.04 - Fundamentals of Electronic Systems (S1) module, I conducted 4 introductory laboratory sessions in DC and AC electricity. I discovered the Analog Discovery Studio (ADS) experimentation board controlled by the Waveforms software. In DC regime (TP1), I learned to measure resistors, compare color codes, and experiment with Ohm's law, voltage addition laws on simple circuits (series and parallel), and observe the principle of impedance matching. In AC regime (TP2 & TP3), I was introduced to generating simple sinusoidal and square signals on the WAVEGEN output, learned to adjust the oscilloscope timebase and trigger, and measured peak-to-peak, average, and RMS values. Finally, in TP4, I measured the complex impedance of a series RC circuit by observing the phase shift over a frequency range from 100 Hz to 20 kHz.",
          pourquoi: "Learning the fundamental laws of electricity is essential to understand how physical data travels through media. The concepts of impedance, load matching, or signal sampling form the physical foundation necessary to grasp copper cabling, fiber optic transmission, or radio frequency antennas in networks.",
          comment: "For these beginner-level lab sessions, I used the Analog Discovery Studio (ADS) board with the Waveforms software (Supplies, Wavegen, Scope, and Voltmeter tools). I wired simple circuits on a solderless breadboard and conducted an introductory study on safety and electrical authorization levels.",
          difficultes: "The main difficulty was getting familiar with the basic settings and trigger synchronization of the virtual oscilloscope. Manipulating complex numbers to theoretically calculate the RC impedance and correlate it with physical phase shift measurements also required a lot of rigor.",
          appris: "I learned to safely wire a circuit on a breadboard, manipulate the basic functions of a virtual signal generator and oscilloscope under Waveforms, and assimilate the operation of an RC circuit while acquiring essential electrical safety concepts.",
          ferais_autrement: "I would take more time to model the theoretical behavior on paper before starting physical measurements on the board, to detect wiring anomalies faster.",
          traces: [
            {
              title: "TP R1.04 - DC & AC Regime Circuits (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/electricity_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["ADS", "Waveforms", "Impedance", "Oscilloscope", "Voltage Divider"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.02",
        intitule: "Understand the architecture of digital systems",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R1.06 - Digital Systems Architecture (S1) module, I discovered and manipulated under Python the logical and digital foundations of computers. I worked on binary and hexadecimal representation by writing simple bit extraction scripts using shifting and masking (logical AND with 1). I coded introductory algorithms to pack/unpack 4-bit numbers into a single byte to grasp memory optimization. On the combinational logic side, I translated simple Boolean equations into Python: a 4:1 multiplexer, a 1-bit adder, and a magnitude comparator. Finally, I experimented with a symmetric encryption script using bitwise XOR operations, completed by a theoretical brute-force tool to retrieve a coded message.",
          pourquoi: "Understanding information representation and the operation of basic logical circuits (adders, multiplexers) allows grasping the hardware constraints of network equipment (processors, ASIC chips) and understanding the internal calculations performed for IP addressing (AND logical masking for networks, OR logical masking for broadcast).",
          comment: "I developed these solutions under Python 3 in Jupyter notebooks (.ipynb) under VS Code. I used basic shifting operators and logical masks, along with the `getsizeof` function to observe memory space savings during data packing.",
          difficultes: "The main difficulty was understanding the behavior of the bitwise NOT operator (`~`) in Python with signed integers. I learned to bypass this by using XOR masks with the maximum value. Structuring the Boolean equations for the comparator also required special attention.",
          appris: "I learned to manipulate binary numbers using shifting and masking, to design and model simple logical circuits, and to understand the theoretical operation of XOR encryption. I assimilated how these operators apply to network address calculations.",
          ferais_autrement: "I would document my scripts in more detail from the start and try to simulate these equations under Logisim-evolution to have a better visual representation of the hardware circuits.",
          traces: [
            {
              title: "R1.06 — Programming, Logic & Digital Design (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/logic_gates_dark.png",
              logo: "assets/img/portfolio/logo-3d.webp",
              url: "assets/preuves/AC11.02/TP_binaire.ipynb",
              tags: ["Python", "Logisim", "Binary", "Boolean Algebra", "XOR Encryption"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.03",
        intitule: "Configure basic local area network functions",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of SAÉ1.02 - Introduction to Computer Networks (S1) and the R1.01 - Introduction to Networks (S1) module, I learned to design, model, and test simple local area network architectures. Under Cisco Packet Tracer, I configured basic peer-to-peer links (straight/crossover FastEthernet cabling), 2960 switches (6 machines on isolated subnets, then /16 and /24 mask tests), and 2911 routers. I was introduced in CLI console mode to static inter-VLAN routing between two subnets (192.168.100.0/24 via Gig0/0 and 172.31.0.0/16 via Gig0/1) and configured simple static routing tables. In the physical laboratory (TP8), I conducted physical patching by connecting my bench ports to the patching bay switches. I calculated and configured optimal subnet masks (/18 i.e., 255.255.192.0) to allow communication between student teams originally isolated (172.16.154.x/24 and 172.16.186.x/24) into a single broadcast domain. Finally, I connected this network to VLAN 800 for dynamic IP allocation through DHCP and configured the proxy for internet access.",
          pourquoi: "Learning to configure and structure a local area network (LAN) is fundamental for a future R&T technician. It is crucial to learn to segment a network physically and logically to optimize traffic flows, secure inter-departmental communications (by limiting broadcast propagation), and master the basics of IP addressing (VLSM/CIDR) and static routing to interconnect simple architectures.",
          comment: "I modeled and simulated these architectures on Cisco Packet Tracer by observing the layer headers of the OSI model during basic ICMP pings. In physical labs, I wired and patched physical equipment. For SAÉ1.02, as a team, we proposed a corporate network structure with 4 distinct VLANs (VLAN ADMIN, VLAN PERSONNEL, VLAN PRODUCTION, VLAN VIDEO) connected to a Cisco 2960 switch and a router configured with a local DHCP server.",
          difficultes: "The main difficulty was mathematically determining the smallest subnet mask (largest CIDR) that could integrate all student team addresses to allow communication. I resolved this by converting the addresses to binary to locate the first bit of divergence (18th bit), allowing me to identify the /18 mask with certainty.",
          appris: "I learned to design a simple IP addressing plan (VLSM), to physically patch RJ45 cables in a laboratory rack, to configure switch and router interfaces in CLI console mode (Cisco IOS), and to implement static routing tables. I also assimilated the basic structure of VLANs and DHCP server configuration.",
          ferais_autrement: "I would document my network topologies in Draw.io in even greater detail from the design phase, specifying all IP addresses associated with each port, to expedite troubleshooting during real laboratory sessions.",
          traces: []
        }
      },
      {
        id: "AC11.04",
        oralReady: true,
        intitule: "Master operating system roles",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of operating system modules (R1.08, R2.02), I was introduced to physical, virtualized, and containerized systems administration. In the first place (Linux CLI), I learned basic hardware introspection commands (lscpu, free -h, lsblk, df -h), Unix permissions management (chmod, chown), simple stream redirections (>, >>), and basic filtering utilities (grep, head, tail, cut). Secondly (Type 2 Virtualization - VirtualBox), I created and configured simple Ubuntu virtual machines, studying the role of configuration files (.vbox, .vdi virtual disks), installing Guest Additions for clipboard and folder sharing (/etc/fstab), and discovering snapshots and network modes (NAT, Bridge). Thirdly (Type 1 Virtualization - VMware ESXi), I discovered bare-metal hypervisor administration through its web GUI to provision simple virtual machines. Lastly (Containerization - Docker), I learned to install Docker, configure the proxy, and manage simple container lifecycles (docker run, docker ps).",
          pourquoi: "Understanding operating systems and introductory concepts of virtualization and containerization is essential for a network technician. It allows grasping how physical resources are shared and how to deploy services and applications in an isolated and secure manner.",
          comment: "I configured and used virtual machines under Type 2 hypervisor VirtualBox, and discovered Type 1 hypervisor VMware ESXi. For containerization, I was introduced to Docker under Linux. Basic scripts and configurations were written in Bash.",
          difficultes: "The main difficulty was setting up permanent shared folders under VirtualBox and understanding write permissions. I overcame this by learning to configure the /etc/fstab file properly and adding the user to the vboxsf system group.",
          appris: "I learned to install, configure, and administer under supervision virtual machines (VirtualBox, ESXi) and basic containers (Docker). I assimilated resource allocation, snapshots, virtual networks, and guest drivers concepts.",
          ferais_autrement: "I would like to deepen my Bash scripting skills to write more advanced scripts to automate post-installation configuration of my laboratory VMs.",
          traces: [
            {
              title: "R1.08 & R2.02 — Systems Administration, Virtualization (ESXi/VirtualBox) & Docker (S1/S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/virtualization_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: "assets/preuves/AC11.04/R202_TP4_VirtualBox.pdf",
              tags: ["VirtualBox", "VMware ESXi", "Docker", "VBoxManage", "Linux CLI", "Snapshots"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.05",
        oralReady: true,
        intitule: "Identify local area network malfunctions",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of R1.01 (Introduction to Networks) and diagnostic lab sessions, I learned to identify and diagnose under supervision simple network failures at layers 1, 2, and 3. On one hand, I simulated and resolved DHCP dynamic allocation issues by observing DORA packets in Wireshark and identifying APIPA error addresses (169.254.x.x). On the other hand, I conducted simple active diagnostics using CLI utilities under Linux and Windows: connectivity tests (ping ICMP), route tracing (traceroute/tracert), local routing table inspection (ip route), and DNS resolution auditing (nslookup / host) to identify name server issues.",
          pourquoi: "Knowing how to diagnose simple network issues is a fundamental field skill for a future technician. Faced with a malfunction, a structured approach must be applied, from the physical to the application layer, to locate the source of the problem and restore service.",
          comment: "I used the Wireshark protocol analyzer to capture real network packets, filtering for DHCP, ICMP, or DNS protocols. On my local machine or virtual machines, I executed standard system connectivity CLI commands to inspect the network.",
          difficultes: "The main difficulty was filtering out the heavy background noise of network traffic in Wireshark to isolate packets from a specific request. J'appris to combine simple logical filters.",
          appris: "I learned to apply a basic network diagnostic methodology. I know how to analyze addressing and name resolution packets, and manipulate standard system connectivity tools to isolate simple routing or firewall issues.",
          ferais_autrement: "I would compile a short checklist of common network errors to help me be even more efficient during future diagnostic tasks.",
          traces: [
            {
              title: "R1.01 — Network Diagnostics, Wireshark Packet Capture & Protocol Audit (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/wireshark_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: "assets/preuves/AC11.05/R101_TP6_diagnostic.pdf",
              tags: ["Wireshark", "DHCP DORA", "APIPA", "Ping ICMP", "nslookup", "ip route"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.06",
        intitule: "Install a client workstation",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R2.01 (Network Services) and R2.02 (System Administration) modules, I was introduced to client workstation installation and domain administration in a Windows Server / Active Directory environment. On one hand, I configured under supervision a Windows Server 2016 domain controller with the Active Directory DS role (creating Organizational Units, users, groups, basic DHCP server, and basic GPOs). On the other hand, I learned to write my first simple PowerShell automation scripts (.ps1) to import a list of users from a CSV file, create their directories, and assign simple NTFS permissions.",
          pourquoi: "For a network technician, understanding central identity and access management through an annuary (Active Directory) and group policies (GPO) is fundamental to administer a corporate IT park in a homogeneous and secure manner.",
          comment: "I used the VirtualBox hypervisor to deploy two virtual machines: a Windows Server 2016 Active Directory server and a Windows 10 client, connected in an isolated private internal network. My PowerShell script was written in VS Code using standard domain administration cmdlets.",
          difficultes: "The main difficulty was managing local logon permission blocks on client workstations for newly created AD users. I resolved this by properly configuring the security policies in the domain controller's GPOs and forcing immediate updates with `gpupdate /force`.",
          appris: "I learned the basics of configuring an AD DS domain controller, installing DHCP services, managing simple NTFS permissions and network shares, and writing basic administrative scripts in PowerShell.",
          ferais_autrement: "I would like to discover automated OS deployment tools (such as PXE or MDT) to understand how to accelerate the initial setup of workstation parks.",
          traces: [
            {
              title: "R2.01 & R2.02 — Windows Server 2016 Administration & PowerShell Automation (S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/active_directory_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: "assets/preuves/AC11.06/R201_CR_TP8_NAT.pdf",
              tags: ["Active Directory", "PowerShell", "Windows Server", "GPOs", "NTFS Permissions"],
              year: 2026
            }
          ]
        }
      }
    ]
  },
  connecter: {
    label: "Connect",
    description: "Connect enterprises and users",
    color: "#e67e22", // Orange
    apprentissages: [
      {
        id: "AC12.01",
        intitule: "Measure, analyze, and comment on signals",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of SAÉ2.02 (Tools for Spectral Analysis) and the R2.05 module, I configured and operated under supervision the Analog Discovery Studio board and Waveforms software to generate and characterize periodic signals (sine, square, triangle). I measured their time-domain (frequency, average value, AC RMS value, peak-to-peak) and frequency-domain parameters using fast Fourier transform (FFT) spectral analysis. I was also introduced to Fourier series in MATLAB/Simulink to sum successive harmonics and observe signal reconstruction.",
          pourquoi: "Basic spectral analysis is a valuable tool to understand how physical signals propagate. Understanding how a signal decomposes into harmonics helps grasp spectral occupancy (bandwidth) and the distortions that affect real transmission lines.",
          comment: "I used the Analog Discovery Studio board with the Waveforms software for time-domain measurements and FFT. The theoretical simulation was conducted in MATLAB/Simulink by sum-guiding multiple sinusoidal sources of multiple frequencies.",
          difficultes: "The main challenge was establishing the link between time-domain voltage measurements and amplitudes in decibels (dBVRMS) on the spectrum analyzer, which required getting familiar with logarithmic scales.",
          appris: "I learned to manipulate basic functions of an oscilloscope and FFT spectrum analyzer. I was introduced to basic Fourier series theory for classic periodic signals and discovered how to simulate these concepts in MATLAB/Simulink.",
          ferais_autrement: "I would spend more time doing prior manual calculations on the first few harmonics to better anticipate the spectral lines observed during measurements.",
          traces: [
            {
              title: "R2.05 & SAÉ2.02 — FFT Spectral Analysis & Fourier Synthesis under MATLAB (S2)",
              category: "R&T Project & Lab",
              image: "assets/img/portfolio/fourier_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Oscilloscope", "FFT", "Fourier Series", "MATLAB", "Waveforms", "Simulink"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC12.02",
        intitule: "Characterize basic transmission systems",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R1.05 (Transmission Line) and R2.05 (Filtering) modules, I completed introductory lab sessions to characterize physical lines (twisted pair cables) and simple analog filtering circuits. I measured basic line parameters (r, l, c) of a short cable using a precision RLC bridge, and was introduced to time-domain reflectometry (TDR) measurements on an oscilloscope to calculate propagation speed and locate a line break. On the other hand, I wired and characterized simple 1st order passive filters (low-pass, high-pass) by physically plotting their gain and phase curves (Bode diagrams) from 100 Hz to 100 kHz.",
          pourquoi: "Understanding physical transmission media basics and the role of simple analog filters is essential for any R&T technician to avoid disturbances on physical lines and ensure good transmission quality.",
          comment: "I used an RLC bridge for primary measurements and an oscilloscope connected via BNC Tee to a function generator for TDR. For filters, I wired passive components (resistors, capacitors) on a breadboard.",
          difficultes: "The main difficulty was interpreting reflected pulse echoes on the oscilloscope during TDR sessions, as well as stabilizing phase readings at lower frequencies.",
          appris: "I learned to measure the basic physical characteristics of a line, locate a defect by simple reflectometry, and wire and test passive filters by plotting their frequency responses (Bode).",
          ferais_autrement: "I would make more precise wiring diagrams on paper before laboratory sessions to avoid minor connection mistakes on the breadboard.",
          traces: [
            {
              title: "R1.05 & R2.05 — Transmission Lines Characterization & Analog Filters (S1/S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/bode_plot_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: "assets/preuves/AC12.02/R105_TP1_lignes_transmission.pdf",
              tags: ["Reflectometry (TDR)", "Bode Diagram", "Passive Filters", "RLC Bridge", "Oscilloscope"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC12.03",
        oralReady: true,
        intitule: "Deploy transmission media",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Through the R1.05 - Transmission Media (S1) module and SAÉ1.03 - Discovering a Transmission Device, I was introduced to physical media. I learned to crimp standard straight and crossover RJ45 cables and test their continuity. Additionally, I was introduced to multimode and monomode fiber optics handling (preparation by cleaving, mechanical termination) and discovered simple loss measurements with an optical power meter and basic optical time-domain reflectometry (OTDR) curve analysis.",
          pourquoi: "Physical deployment is the foundation of any network infrastructure. Knowing how to correctly crimp an RJ45 cable and understanding fiber optic splicing and qualification are valuable field skills for a Network technician.",
          comment: "We worked in a cabling lab equipped with crimping tools, continuity testers, and mechanical cleavers under the close supervision of our instructors.",
          difficultes: "Fiber optic cleaving requires a high level of consistency and dexterity to get a perfectly flat end face, which took many attempts to successfully master.",
          appris: "I learned to manufacture functional RJ45 network cables following TIA-568 standards, handle and prepare fiber optics with care, and read and interpret basic OTDR curves.",
          ferais_autrement: "I would practice fiber optic cleaving more to gain better speed and precision in my movements.",
          traces: [
            {
              title: "R1.05 & SAÉ1.03 — Physical Deployment, RJ45 Crimping and Optical Fiber Measurements (S1)",
              category: "R&T Project & Lab",
              image: "assets/img/portfolio/fiber_optic_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: "assets/preuves/AC12.03/SAE13_seance5.pdf",
              tags: ["Multimode/Monomode Fiber", "RJ45 Crimping", "OTDR", "Copper Cabling", "Fluke Networks"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC12.04",
        oralReady: true,
        intitule: "Connect ToIP systems",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R2.04 - Introduction to Enterprise Telephony (S2) module, I discovered and configured under supervision simple IP telephony (ToIP/VoIP) architectures. I studied SIP protocol basics (REGISTER, INVITE, BYE methods), configured a basic Asterisk IPBX server on a Debian virtual machine, created simple extensions and dialplans in extensions.conf, and made test calls between two virtual Linphone softphones while analyzing SIP/RTP packets in Wireshark.",
          pourquoi: "Discovering ToIP is essential as this technology is omnipresent in businesses. Understanding how to configure basic telephony services and analyze signaling streams helps become familiar with modern VoIP architectures.",
          comment: "Lab sessions were conducted on VirtualBox Debian 12 virtual machines with Asterisk 20 LTS, editing sip.conf and extensions.conf configuration files. Linphone was used as the softphone client and Wireshark for packet capture.",
          difficultes: "The main difficulty was understanding the specific syntax of Asterisk configuration files and resolving basic SIP registration issues (caused by password errors or domain setup mistakes).",
          appris: "I learned to configure SIP accounts and simple dialplans on Asterisk, install and connect a Linphone softphone, and identify the role of SIP signaling (port 5060) and RTP media streams.",
          ferais_autrement: "I would document my modified configuration files more methodically to quickly find the source of syntax errors when Asterisk fails to load.",
          traces: [
            {
              title: "R2.04 - Introduction to Enterprise Telephony (S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/voip_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: "assets/preuves/AC12.04/R204_CR_telephonie_ToIP.pdf",
              tags: ["VoIP", "ToIP", "Asterisk", "SIP", "Linphone", "RTP"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC12.05",
        intitule: "Communicate with a third party and adapt one's speech",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of SAÉ2.04 - Integrative Project (S2) and R1.15 - Project Management, I learned to structure my technical communication. I wrote technical reports and simple installation guides tailored to different profiles (technicians, project managers, or end users), prepared group oral defenses in English and French, and kept a progress log during our 6-day network integration project.",
          pourquoi: "A Network & Telecom technician must know how to communicate effectively with a variety of stakeholders. Knowing how to explain a malfunction without technical jargon to a user or present a network architecture clearly to managers is an essential corporate skill.",
          comment: "For the SAÉ2.04 project, we prepared presentation slides and conducted live demonstrations before a jury of teachers. Technical documentation was written carefully to be clear and structured.",
          difficultes: "The most difficult part was learning to balance the level of technical details when speaking to a mixed audience, and managing the stress associated with live oral defenses and Q&A sessions.",
          appris: "I learned to write structured technical documents, vulgarize complex concepts, and express myself in a calmer, more structured manner during group oral defenses.",
          ferais_autrement: "I would conduct more timed rehearsals as a group to better balance the speaking time among team members during oral presentations.",
          traces: [
            {
              title: "SAÉ2.04 - Integrative Project (S2)",
              category: "R&T Project",
              image: "assets/img/portfolio/project_management_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Oral Presentation", "Communication", "Technical Writing", "Technical English", "VLAN", "Routers"],
              year: 2026
            }
          ]
        }
      }
    ]
  },
  programmer: {
    label: "Program",
    description: "Create computer tools and applications",
    color: "#f39c12", // Gold
    apprentissages: [
      {
        id: "AC13.01",
        intitule: "Use a computer system and its tools",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R1.01 (Introduction to Networks) and R1.07 (Programming) modules, I learned to configure and use my workstation under Linux Ubuntu and Windows at the IUT. I took control of the Linux command line interface (CLI) to navigate, manage directories, edit simple text files with `nano`, and set up basic file permissions (`chmod`). I was also introduced to version control by learning basic Git and GitLab commands (clone, add, commit, push) to archive my lab codes.",
          pourquoi: "Mastering basic Linux commands and Git is essential for any future professional. The majority of network equipment and servers are administered via the terminal, and Git is the industry standard for collaborating on code.",
          comment: "I configured my terminal with the university proxy to access GitLab. I structured my lab directories and versioned my codes in an organized manner.",
          difficultes: "The main difficulty was adapting to the strict syntax of the command line interface and understanding file permissions (rwx).",
          appris: "I learned to use essential Linux CLI commands, manage personal Git repositories, and configure a simple development environment.",
          ferais_autrement: "I would set up SSH keys for GitLab to avoid entering my university credentials manually for every code sync.",
          traces: [
            {
              title: "System Configuration and CLI Administration (Linux Ubuntu & GitLab) (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/git_docker_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: "assets/preuves/AC13.01/R107_TP8.ipynb",
              tags: ["Linux CLI", "GitLab", "Bash Terminal", "Permissions chmod", "Network Proxy"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC13.02",
        intitule: "Read, execute, correct, and modify a program",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R1.07 (Fundamentals of Programming) module in S1 and R2.09 (Introduction to Web Development) in S2, I learned to analyze and debug simple programs. In S1, I manipulated basic Python structures (variables, loops, conditions, lists, dictionaries) by learning to read and correct simple scripts. In S2, I was introduced to basic MVC architecture under Flask and learned the basics of security to correct classic vulnerabilities like basic SQL injections in web forms.",
          pourquoi: "Knowing how to read and debug existing code is a daily essential skill in Networks & Telecoms. Whether understanding a simple admin script left by a coworker or correcting a minor bug, critical code reading prevents outages.",
          comment: "I used simple debuggers like the one integrated in VS Code or Thonny to step through my code and inspect variables. For security, I learned to replace risky SQL concatenations with prepared statements.",
          difficultes: "The main difficulty was fully understanding the scope of local/global variables and correctly interpreting sometimes complex Python error tracebacks.",
          appris: "I learned to decipher and correct simple Python structures, analyze error tracebacks, and secure basic web scripts against common vulnerabilities.",
          ferais_autrement: "I would use more clear debug prints or logs in my scripts from the start to better visualize my variables' state during execution.",
          traces: [
            {
              title: "R1.07 & R2.09 — Code Reading, Debugging & Securing Python / Flask Scripts (S1/S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/python_flask_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: "assets/preuves/AC13.02/R209_TP2_Flask.pdf",
              tags: ["Python Web", "Flask MVC", "Debugging", "SQL Injections", "Traceback", "VS Code"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC13.03",
        intitule: "Translate an algorithm into a programming language",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Through R1.07 (Programming) lab sessions in S1 and SAÉ2.03 (IT Solution) in S2, I learned to translate simple algorithms into structured Python code. In S1, I designed simple administration scripts accepting command line parameters (argparse), and wrote basic directory traversal codes with the `os` module, HTTP requests with `requests`, and basic text extraction with regular expressions (`re`). In S2, I participated in translating the logic of a simple Flask web application connected to a relational database under Docker.",
          pourquoi: "Knowing how to write simple system scripts and automate basic administrative tasks (searching logs, pinging servers, basic database interfacing) is a key skill for any system administrator.",
          comment: "For system programming scripts in S1, I wrote structured Python modules. I used the `with open()` context manager to read text files safely and tested my regular expressions on online helpers.",
          difficultes: "The main difficulty was building correct regular expressions without false positives and understanding how to connect Flask properly to our MySQL database container in our SAÉ project.",
          appris: "I learned to design simple Python CLI scripts, use basic system libraries (`os`, `subprocess`), process text with basic regex, and interface a simple SQL database with application code.",
          ferais_autrement: "I would split my functions more into smaller independent blocks to make my code more readable and simpler to step-debug.",
          traces: [
            {
              title: "R1.07 & SAÉ2.03 — Algorithms, CLI Administration Scripts & Database Interfacing (S1/S2)",
              category: "R&T Project & Lab",
              image: "assets/img/portfolio/database_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Python CLI", "argparse", "Regex re", "Docker Stack", "Databases", "MySQL/PostgreSQL"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC13.04",
        oralReady: true,
        intitule: "Know the architecture and technologies of a website",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "I designed and developed Heryze, a new generation cash register web application for local merchants and the CHR sector. The project includes a complete point of sale (POS) system with catalogue management by category, a real-time analytical dashboard (revenue, average cart, charts), an inventory module with CSV import and VAT rate management, an interactive room plan for catering, a mobile scanner via WebRTC transforming a smartphone into a barcode scanner, and a Z-Caisse log compliant with the NF525 standard.",
          pourquoi: "To create a real professional tool addressing a concrete market need: offering a modern, accessible cash register that runs even offline and complies with French tax requirements.",
          comment: "The project was developed as a Progressive Web App (PWA) with an offline-first architecture using Service Workers to guarantee offline operation. The interface was built with a modern JavaScript framework and Tailwind CSS. Real-time communication between the register and the mobile scanner is powered by WebRTC and WebSockets. The system integrates NF525 compliance with secure transaction signatures and FEC (Fichier des Écritures Comptables) exports.",
          difficultes: "Setting up the offline-first architecture was a major challenge: synchronizing local data with the server upon reconnection without losses or duplicates. Implementing the WebRTC channel for the mobile scanner also required handling network latency and browser compatibility issues.",
          appris: "This major personal project allowed me to discover in depth the inner workings of modern web architectures, PWA technologies, and real-time communication (WebSockets / WebRTC), while dealing with real-world regulatory constraints (NF525).",
          ferais_autrement: "I would have integrated automated tests (unit and E2E) from the start of development to secure critical features like checkout and Z-Caisse generation. I would also have documented the API earlier in the process.",
          traces: [
            {
              title: "Heryze — Next-generation cash register",
              category: "Personal Project",
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
        oralReady: true,
        intitule: "Choose appropriate data management mechanisms",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "I designed and developed Kdufoot, a community web platform allowing amateur football coaches to publish, search for, and organize friendly matches and tournaments nearby. The project includes a secure authentication system (Auth0 with Google OAuth), a personal dashboard, a favorites system, filtered search by category/level/distance/format, and a complete GDPR compliance page with 1-click account deletion and automated data export (PDF/JSON).",
          pourquoi: "To address a real field need: amateur club coaches lose considerable time searching for opponents for friendly matches. Kdufoot centralizes all listings and simplifies organization.",
          comment: "The application was developed with React and Vite for the frontend, Tailwind CSS for design (dark theme with dynamic gradients). Authentication is delegated to Auth0 (email/password + Google OAuth). Data is stored on Cloudflare D1 (SQLite database in edge computing) with encryption at rest. GDPR compliance was implemented with a dedicated DPO, a 12-month retention policy, and automatic anonymization mechanisms.",
          difficultes: "Choosing Cloudflare D1 as the database meant adapting to edge computing constraints (latency, query limitations). Full GDPR compliance (right to be forgotten, portability, retention) required in-depth research on legal obligations.",
          appris: "I learned to design a simple database structure, use SQLite in an Edge environment (Cloudflare D1), and integrate an external identity provider (Auth0) while grasping personal data protection requirements (GDPR).",
          ferais_autrement: "I would have set up a more standard relational database (PostgreSQL) from the beginning to avoid D1 limitations, and I would have implemented a real-time notification system to alert coaches of new listings matching their criteria.",
          traces: [
            {
              title: "Kdufoot — Football friendly matches platform",
              category: "Personal Project",
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
        intitule: "Integrate into a collaborative development environment",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of SAÉ2.03 (IT Solution) and Docker lab sessions, I was introduced to micro-services integration within a containerized collaborative framework. On one hand, I learned to version my code in a team under Git and GitLab/GitHub (managing branches, simple merges, and guided conflict resolution). On the other hand, I deployed simple isolated containers coordinated by Docker Compose: configuring a simple volume-mounted Apache server and a basic WordPress blog connected to a MySQL database via a private virtual bridged network.",
          pourquoi: "In professional environments, teamwork and application deployments systematically rely on Git and containerization. Discovering Docker Compose and collaborative repository management helps build excellent reflexes for future development projects.",
          comment: "I used Git on the command line for code synchronization. For containerization, I was introduced to writing simple `docker-compose.yml` files executed via the terminal or graphically monitored in the Portainer GUI.",
          difficultes: "The main difficulty was understanding how to ensure robust inter-container communication using Docker's internal DNS resolution instead of localhost (linking the application container to the 'db' service).",
          appris: "I learned the basics of collaborative development cycle under Git (branches, merges). I was introduced to writing basic Docker Compose files with basic named volumes and environment variables management.",
          ferais_autrement: "I would look to configure small automatic validation scripts (YAML file linters) to check my docker-compose syntax before executing them.",
          traces: [
            {
              title: "SAÉ2.03 - IT Solution and Orchestration (Flask/Docker/Git/Portainer) (S2)",
              category: "R&T Project",
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
    label: "Others",
    description: "Diverse projects outside the BUT R&T curriculum",
    color: "#8e44ad", // Purple
    apprentissages: [
      {
        id: "PERSO.01",
        intitule: "Upcoming or transversal projects",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "I group here my personal and professional web development projects that demonstrate my passion for modern technologies and my versatility outside academic subjects of BUT R&T.",
          pourquoi: "To explore new frameworks, design solutions adapted to real clients, and consolidate my Fullstack skills.",
          comment: "These projects are based on modern web architectures, ranging from static vitrine sites in HTML/CSS/JS to complex dynamic applications in React.",
          difficultes: "Managing time between academic and personal projects, and self-training on new cutting-edge technologies (React, edge D1 databases, Auth0).",
          appris: "I developed great technical autonomy, learned to design complete architectures, and address real users' needs (ergonomics, performance, security).",
          ferais_autrement: "I would organize my work with a stricter planning (Agile method) to optimize my personal projects' deliveries.",
          traces: [
            {
              title: "Kdufoot — Football friendly matches platform",
              category: "Personal Project",
              image: "assets/img/portfolio/portfolio-5.webp",
              logo: "assets/img/portfolio/logo-kdufoot.webp",
              url: "https://kdufoot.com",
              tags: ["React", "Auth0", "Cloudflare D1"],
              year: 2025
            },
            {
              title: "Professional website — Hair salon",
              category: "Professional Project",
              image: "assets/img/portfolio/portfolio-3.webp",
              logo: "assets/img/portfolio/logo-coiffure.webp",
              url: "assets/partie-projet/index.html",
              tags: ["HTML", "CSS", "JS"],
              year: 2025
            },
            {
              title: "3D Modeling — House and extension",
              category: "Personal Project",
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
