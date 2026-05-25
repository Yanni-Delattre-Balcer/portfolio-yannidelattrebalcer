const COMPETENCES = {
  administrer: {
    label: "Administrate",
    description: "Administrate networks and the Internet",
    color: "#e74c3c", // Red
    apprentissages: [
      {
        id: "AC11.01",
        intitule: "Master the fundamental laws of electricity",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R1.04 - Fundamentals of Electronic Systems course (S1), I completed 4 major practical labs in DC and AC electricity. I mastered the Analog Discovery Studio (ADS) experimentation bench controlled by Waveforms software. In DC regime (TP1), I measured actual resistances using an ohmmeter to compare them against color codes, verified Ohm's law, Kirchhoff's voltage addition law on series circuits (voltage divider) and parallel circuits, and experimentally validated the principle of impedance matching by measuring the power dissipation curve of a variable resistor. In AC regime (TP2 & TP3), I generated sinusoidal and square waves (PWM with a variable duty cycle from 20% to 100%) on the WAVEGEN output, configured the timebase and Trigger levels on the oscilloscope, and measured peak-to-peak, average, and RMS values. Finally, in TP4, I characterized the complex impedance of an RC series circuit (R=39 kΩ, C=1 nF) by calculating the module |Z| and argument (phase shift theta measured via time shift converted to degrees: theta = delta_t / T * 360) over a frequency sweep from 100 Hz to 20 kHz, modeling its low-frequency (BF) and high-frequency (HF) equivalent schematics.",
          pourquoi: "Mastering the fundamental laws of electricity is the absolute prerequisite for understanding physical data transport in networks. Concepts of impedance, load matching to maximize power transfer, phase shifts, or signal sampling lie at the core of copper cabling, optical fiber transmission, and wireless antennas. Without these core physical layers knowledge, understanding signal degradation or troubleshooting OSI Layer 1 physical faults would be impossible.",
          comment: "To carry out these experiments, I used the Analog Discovery Studio (ADS) bench connected to a PC via USB. I utilized Waveforms software tools (Supplies, Wavegen for DC/AC signal generation, Scope and Voltmeter for measurements). Circuits were wired solderless on a breadboard using MTE hookup wires, BNC coaxial cables, and desktop multimeter probes. I also completed an electrical safety study (TP3) analyzing body hazards and electrical authorization (habilitation) levels.",
          difficultes: "The primary challenge lay in configuring and synchronizing the Trigger on the Waveforms oscilloscope (specifically stabilizing AC waveforms on a falling edge at -1 V, or understanding trace freeze when the trigger was offset outside the signal range at +3.5 V). Manipulating complex numbers for theoretical RC impedance calculations and correlating them with temporal phase shift measurements (converting delta_t time offset to degrees) also required great mathematical rigor.",
          appris: "I learned how to methodically wire a circuit on a breadboard without risking a short circuit on the ADS bench, operate a virtual generator and digital oscilloscope within Waveforms, and precisely measure electrical properties (RMS, average, peak-to-peak). I assimilated the concept of complex impedance in an AC RC circuit and its frequency dependency (LF/HF filtering), while gaining vital knowledge on electrical hazards (electrisation vs electrocution).",
          ferais_autrement: "I would dedicate more time to modeling theoretical behaviors on paper before running simulations or making hardware measurements on the ADS bench. This helps immediately flag wiring errors or incorrect voltage scales instead of propagating erroneous measurements.",
          traces: [
            {
              title: "TP R1.04 - DC & AC Circuits Lab (S1)",
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
          ce_que_jai_fait: "As part of the R1.06 - Digital Systems Architecture module (S1), I studied and programmed the logical and digital foundations of computer systems using Python. I first worked on binary and hexadecimal representations, writing scripts to extract the n-th bit of an integer using bitwise shifts ('<<' and '>>') and logical AND masking with 1. I developed data compression algorithms by packing/unpacking two 4-bit numbers within a single 8-bit byte to optimize storage. For combinational logic, I simulated circuit equations in Python: a 4:1 multiplexer (MUX), a 1-bit full adder (computing sum S via XOR and carry Cout), an array-chained n-bit adder, and a 4-bit magnitude comparator. Finally, I built a symmetric key cipher utilizing bitwise XOR operations to encrypt UTF-8 character arrays using keys generated with secrets.randbits, paired with a brute-force cryptanalysis tool testing all 256 keys to recover a ciphertext message.",
          pourquoi: "Understanding data representation and fundamental logic circuits (adders, multiplexers, comparators) at the silicium level is vital for a network technician. It provides insight into hardware constraints of network appliances (router CPUs, switch ASIC chips) in terms of computational speed, memory usage optimization via bit masking, and explains the underlying bitwise mechanics of subnet masking (logical AND) and broadcast address calculations (logical OR).",
          comment: "I developed these solutions in Python 3 within Jupyter notebooks (.ipynb) on VS Code. I leveraged bitwise operators (`<<`, `>>`, `&`, `|`, `^`, `~`), the cryptographic `secrets` library (secrets.randbits), and Python's `getsizeof` function to mathematically prove memory size reductions obtained via byte packaging.",
          difficultes: "The main challenge was understanding the behavior of Python's bitwise NOT operator (`~`) which operates on signed integers, thus flipping the sign bit and producing negative values. I learned to circumvent this by using XOR masks with the maximum potential word value (e.g., `0b1111 ^ value` to invert a 4-bit word). Writing clean, deeply-nested Boolean equations for the 4-bit comparator also required rigorous parenthesis management to avoid operator priority issues.",
          appris: "I learned to precisely manipulate numbers at the bit level using shifts and masks, design and simulate complex combinational circuits (n-bit addition, data multiplexing), and build basic XOR ciphers with matching brute-force decryption. I also learned to apply these bitwise operations directly to solve practical IP networking subnetting calculations.",
          ferais_autrement: "I would include more descriptive docstrings within my Python functions from the start to clarify the significance of each bit index. I would also simulate these logic equations in Logisim-evolution CAD software to visually connect my Python models to physical schematic layouts.",
          traces: [
            {
              title: "R1.06 - Programming and Digital Systems Logic (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/digital_arch_dark.png",
              logo: "assets/img/portfolio/logo-3d.webp",
              url: null,
              tags: ["Python", "Binary", "XOR Cipher", "Adder", "Bit Shifts"],
              year: 2025
            },
            {
              title: "R1.06 - Logic Circuit Design (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/logic_gates_dark.png",
              logo: "assets/img/portfolio/logo-3d.webp",
              url: null,
              tags: ["Logisim", "Boolean Algebra", "Binary", "Hexadecimal", "Karnaugh"],
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
          ce_que_jai_fait: "As part of the SAÉ1.02 - Introduction to Computer Networks (S1) and R1.01 - Introduction to Computer Networks (S1) modules, I designed, simulated, and deployed real and virtual local network architectures. Under Cisco Packet Tracer, I configured peer-to-peer links (FastEthernet straight/crossover cabling), 2960 switches (6 machines on isolated subnets, testing /16 and /24 masks), and 2911 routers. I programmed via console CLI static inter-VLAN routing between two subnets (192.168.100.0/24 on Gig0/0 and 172.31.0.0/16 on Gig0/1) and built static routing tables across multiple transit routers (10.0.0.0/8). In the physical laboratory (TP8), I conducted physical patching by wiring J001/J009 laboratory bench ports xx.2 to central switches (Paris/Madrid/Rome). I calculated and configured optimal subnet masks (/18 i.e., 255.255.192.0) to unify and allow communication between isolated student teams (172.16.154.x/24 and 172.16.186.x/24) into a single broadcast domain (Net ID: 172.16.128.0/18, Broadcast: 172.16.191.255). Lastly, I connected this network to VLAN 800 for dynamic IP allocation through DHCP and configured the IUT proxy for internet access.",
          pourquoi: "Configuring and structuring a local area network (LAN) is the absolute core skill of a network technician. It is essential to segment a network physically and logically to optimize traffic flows, secure inter-departmental communications (by preventing broadcast storms and restricting access between corporate management and manufacturing lines), and master IP addressing (VLSM/CIDR) as well as static routing to interconnect heterogeneous infrastructures in a stable manner.",
          comment: "I modeled and simulated these architectures on Cisco Packet Tracer by analyzing the headers of the OSI model layers during ICMP ping requests. In physical labs, I wired and patched physical equipment with RJ45 connectors. For SAÉ1.02, my team structured a corporate network with 4 distinct VLANs (VLAN ADMIN hosting a static Apache web server, VLAN PERSONNEL, VLAN PRODUCTION, VLAN VIDEO) connected to a Cisco 2960 switch and a Cisco 800 router running a local DHCP server.",
          difficultes: "The biggest challenge was mathematically determining the smallest subnet mask (largest CIDR) that could integrate all student team addresses (for example, allowing 172.16.154.x and 172.16.186.x to communicate). I resolved this by converting the addresses to binary to locate the first bit of divergence (the 18th bit), allowing me to identify the /18 mask with certainty and calculate the corresponding host ranges without error.",
          appris: "I learned to design optimized IP addressing plans (VLSM), perform physical RJ45 patching in a laboratory rack, configure switches and routers in console CLI mode (Cisco IOS), and implement static routing tables. I also learned to set up VLANs and deploy essential network services (DHCP, default gateway).",
          ferais_autrement: "I would document my network topologies in Draw.io in even greater detail from the design phase, specifying all MAC and IP addresses associated with each switch port or router interface, to expedite troubleshooting during real laboratory sessions.",
          traces: [
            {
              title: "SAÉ 1.02 - Corporate Network Design and Prototyping (S1)",
              category: "BUT Project",
              image: "assets/img/portfolio/wireshark_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["VLANs", "DHCP", "Apache", "Cisco 2960", "Cisco 800", "Draw.io"],
              year: 2025
            },
            {
              title: "R1.01 - Packet Tracer Simulation and CLI Console Routing (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/cisco_topology_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Packet Tracer", "CLI Cisco", "Static Routing", "ICMP"],
              year: 2025
            },
            {
              title: "R1.01 - Physical Local Network Construction in Laboratory (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/cabling_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Patch Panel", "Subnets /18", "VLSM", "DHCP", "VLAN 800"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC11.04",
        intitule: "Master the roles of operating systems",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the operating systems (R1.08, R2.02) modules and virtualization/containerization labs, I developed a comprehensive expertise in administering physical, virtual (Type 1 and Type 2), and containerized systems. First, regarding the Linux CLI & system tools, I mastered command-line hardware/software introspection (lscpu, nproc, lshw, free -h, lsblk, df -h, sensors), Unix permissions (chmod, chown, umask), streams redirection (>, >>, 2>), and advanced filtering pipelines (grep, head, tail, cut, uniq, wc, diff). Second, under Type 2 Virtualization (VirtualBox), I deployed Ubuntu VMs by analyzing associated files (.vbox XML configuration, .vdi dynamic vs fixed size virtual disk, logs), compiled Guest Additions using the compiler suite and linux headers (`sudo ./VBoxLinuxAdditions.run`) to enable bi-directional clipboard sharing, dynamic display resizing, and mounting shared folders (/etc/fstab with uid/gid=1000 and vboxsf group), managed system security Snapshots, dynamically resized disks (`VBoxManage modifymedium disk --resize`), configured NAT and Bridge network interfaces with custom MAC addresses for SSH access, and automated VM creation via the CLI tool `VBoxManage`. Third, for Type 1 Virtualization (VMware ESXi), I administered a bare-metal hypervisor via its web dashboard (rt-vm1.univ-artois.fr), monitored system performance metrics, provisioned VMs by mapping the virtual drive to NAS ISO directories (/nas/isos), and interconnected VMs via an internal network. Last, in Containerization (Docker), I installed docker.io, configured systemd HTTP proxy parameters (/etc/systemd/system/docker.service.d/http-proxy.conf), managed container lifecycles (docker run -ti, docker ps -a, interactive bash shell), analyzed host-kernel sharing mechanisms (comparing host uname -a vs debian container /etc/os-release), audited network bridge interfaces, and inspected container modifications using docker diff.",
          pourquoi: "Mastering operating systems and their various abstraction models (Type 1 and Type 2 hypervisors, containerization) is crucial for a network administrator. It optimizes the allocation of physical hardware resources (CPU, RAM, storage), secures and isolates applications, automates server deployments, and supports the design of highly available and scalable architectures while providing deep insights into underlying kernel mechanics.",
          comment: "I configured and operated the VirtualBox Type 2 hypervisor (GUI and VBoxManage CLI) and the VMware ESXi Type 1 bare-metal hypervisor. For containerization, I deployed Docker on Debian/Ubuntu environments. Automation scripts were written in Bash and PowerShell, including mounting configurations (/etc/fstab) and systemd services.",
          difficultes: "The main challenge was configuring persistent auto-mounted shared folders in VirtualBox without restricting standard user write privileges. I resolved this by editing /etc/fstab using specific mapping options (uid/gid=1000) and adding the user to the vboxsf system group. For Docker, configuring the university proxy in systemd environment files was mandatory to allow successful image retrieval from the Docker Hub.",
          appris: "I learned to design, configure, and administer virtual machines (VirtualBox, ESXi) and isolated containers (Docker). I master hardware allocation, snapshot management, command-line disk resizing, virtual networking types (NAT, Bridge, Internal Network), guest drivers compilation, and container image diagnostics.",
          ferais_autrement: "I would automate the provisioning and deployment of these virtualization and container infrastructures by utilizing Infrastructure as Code (IaC) tools like Vagrant for VirtualBox or automated PXE/FOG deployment templates to accelerate staging setups.",
          traces: [
            {
              title: "System Virtualization and VM Administration (VirtualBox & VMware ESXi) (S1/S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/virtualization_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["VirtualBox", "VMware ESXi", "VBoxManage", "Snapshots", "Bridge Network", "fstab"],
              year: 2025
            },
            {
              title: "Application Containerization and Docker Administration (Debian/Ubuntu) (S2)",
              category: "R&T Lab",
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
        intitule: "Identify local network malfunctions",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R1.01 - Introduction to Computer Networks (S1) and SAÉ1.02 modules, I learned to methodically diagnose and resolve physical and logical malfunctions of a local area network (LAN). I tested the local loopback (ping 127.0.0.1) to isolate network card or system driver malfunctions, followed by pings to the configured interface. I diagnosed dynamic allocation issues by analyzing auto-configured APIPA addresses (169.254.x.x) obtained by the Windows station in the absence of a DHCP server. Using an RTbox2 (acting as a bridge and DHCP server), I captured and filtered (bootp filter) DHCP exchanges with Wireshark (DORA requests: Discover, Offer, Request, Acknowledge) to analyze source/destination MAC and IP addresses. I also resolved network inaccessibility issues caused by the Windows Defender Firewall (public profile blocking ICMP/ping) and tested the impact of asymmetric masks (/24 vs /25, pinging the broadcast address .255, which fails). Lastly, I verified name resolution with nslookup (nslookup j001-01 172.18.26.101) and host (host google.fr, host 8.8.8.8) and audited routing tables (ip route, route -n, netstat -nr under Linux/Mac, and route print under Windows).",
          pourquoi: "Knowing how to identify and resolve network outages is a critical operational skill in enterprises. An addressing issue (like a non-routable APIPA IP), an overly restrictive firewall blocking legitimate ICMP traffic, or misconfigured DNS immediately paralyzes company services. Applying a structured troubleshooting approach based on the OSI model layers makes it possible to target the source of the failure (hardware, addressing, filtering, or application) without wasting time.",
          comment: "I used Linux Ubuntu and Windows 10 virtual machines configured in an isolated internal network. For traffic diagnostics, I deployed the Wireshark protocol analyzer on the RTbox2 network bridge to inspect Ethernet frames and IP packets. Troubleshooting was validated by restoring two-way physical and logical connectivity (successful ping tests after targeted disabling of the Windows Defender firewall and correction of subnet masks).",
          difficultes: "The main complexity was analyzing the massive volume of frames captured by Wireshark during a DHCP lease request. The rigorous use of display filters like 'bootp' or 'arp' combined with the structured analysis of the stack (Ethernet II -> Internet Protocol -> User Datagram Protocol -> Bootstrap Protocol) allowed me to quickly isolate the targeted DORA packets.",
          appris: "I master the network diagnostic process based on the OSI model. I can interpret specific error codes and addresses (such as APIPA during DHCP failures), read and analyze network headers with Wireshark, configure application firewalls in a targeted manner, and use routing and DNS audit tools (nslookup, host, ip route, route print).",
          ferais_autrement: "I would write a quick diagnostic guide (Cheat Sheet) listing typical failure codes (APIPA, lost ICMP packets, wrong default gateway or DNS) with their corresponding verification commands, to speed up incident troubleshooting even further.",
          traces: [
            {
              title: "R1.01 - Network Diagnostics and Wireshark Packet Capture (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/wireshark_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Wireshark", "DHCP DORA", "APIPA", "Ping ICMP", "Firewall"],
              year: 2025
            },
            {
              title: "R1.01 - DNS Resolution and Routing Audit (S1)",
              category: "R&T Lab",
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
        intitule: "Install a client workstation",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R2.02 - System Administration and Virtualization module (S2) and the Windows Server project, I installed and configured client and server operating systems in an isolated internal network under VirtualBox (using the lab's MachinesVirtuelles script). I deployed a Windows Server 2016 domain controller (srv-Yanni) promoting the dom-Yanni.local forest with AD DS services, and concurrently configured a Windows 10 client workstation (client-Yanni) joined to the domain. I configured a DHCP server on the controller with dynamic scopes, dynamic exclusions, and dynamic MAC-based IP reservations for the client, defining scope options (DNS, local NTP server 172.31.25.9, domain name). I managed user accounts (etu01, prof01) and groups (eleves, Profs), structuring roaming profiles and hidden SMB shares (etu01$) on a mounted 1 GB disk partition (C:\\volume) with advanced NTFS ACL security permissions and hard storage quotas (1 GB limit, warning at 900 MB). I deployed group policies (GPOs) for password security, local logons, silent MSI package installations (Notepad++), and TCP/IP network printer configurations (HP/OKI). Finally, I wrote an automated PowerShell script (.ps1) accepting parameters to provision users, create homedirs, set NTFS permissions with icacls, create SMB shares, and configure Netlogon connection scripts (net use R:).",
          pourquoi: "Installing client workstations and integrating them into a centralized domain infrastructure is an essential daily task for systems and network administrators. Using Active Directory coupled with GPOs and PowerShell automation script execution enables industrial deployment scaling, guarantees data security (via granular NTFS ACL permissions and disk quotas), and provides users with a standardized desktop experience (roaming profiles, automated drive mappings via logon scripts) across hundreds of client workstations.",
          comment: "Deployments were executed within a virtualized VirtualBox environment. Connecting the Windows 10 client workstation required configuring its network adapter to use the Server 2016 IP address as its DNS resolver before domain join. For automated provisioning, I developed a PowerShell script utilizing Active Directory cmdlets and command-line arguments ($args[0], $args[1]) to generate the file structures, apply security via icacls, and register users.",
          difficultes: "The main challenge was resolving local logon permission blocks for newly provisioned Active Directory users on the server and client workstations. I resolved this by modifying the 'Allow log on locally' security setting within the GPO console (GPMC) for the Default Domain Controller Policy, then applying an immediate update using the gpupdate /force command.",
          appris: "I learned to promote an AD DS domain controller, install and configure enterprise DHCP services, manage NTFS file permissions and hidden SMB shares, deploy software packages and network printers centrally via GPOs, and automate administrative tasks using PowerShell scripting.",
          ferais_autrement: "I would implement automated unattended OS deployment tools (such as WDS/MDT for Windows or PXE/FOG for Linux) paired with assets tracking solutions like GLPI/OCS to fully automate hardware and software inventorying from the initial setup.",
          traces: [
            {
              title: "Windows Server 2016 Domain Controller Installation and Configuration (S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/active_directory_dark.png",
              logo: "assets/img/portfolio/logo-reseau.webp",
              url: null,
              tags: ["Windows Server 2016", "Active Directory", "DHCP Server", "GPOs", "Roaming Profiles", "NTFS ACLs"],
              year: 2026
            },
            {
              title: "Automating Active Directory Administration with PowerShell (S2)",
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
    label: "Connect",
    description: "Connect enterprises and users",
    color: "#e67e22", // Orange
    apprentissages: [
      {
        id: "AC12.01",
        intitule: "Measure, analyze, and comment on signals",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the SAÉ2.02 (Tools for Spectral Analysis) and R2.05 modules, I configured and utilized the Analog Discovery Studio experimental board paired with the Waveforms software to generate, observe, and characterize periodic signals (sinusoidal, square, triangular, and impulse/pulse). I rigorously measured their temporal properties (period, frequency, average DC value, AC RMS value, peak-to-peak) and frequency domain components using Fast Fourier Transform (FFT) spectral analysis. I analyzed the theoretical and experimental spectrum of a perfect 2.5 kHz sine wave (4 Vpp amplitude, dBVRMS scale), then quantified the distortion of a skewed sine wave (symmetry varying from 40% to 50% at 4.5 kHz) by calculating the Total Harmonic Distortion (THD) on a spreadsheet. I modeled and compared the harmonics of square waves (with and without DC component, theoretical Vmax and VRMS amplitudes vs actual experimental values) and triangular waves. I also characterized impulse signals (alpha = 25%, T = 400 µs, tau = 100 µs) by visualizing the sinc (sin(x)/x) spectral envelope. Finally, I achieved inverse Fourier synthesis (Fourier series reconstruction) in MATLAB/Simulink by summing successive harmonics to reform these periodic signals.",
          pourquoi: "Spectral analysis is an indispensable tool for networks and telecommunications professionals. It allows us to analyze the spectral occupancy of communication signals (such as the required bandwidth), verify the spectral purity of transmitters, identify parasitic noise frequencies or background noise, and design appropriate filters. Understanding how a signal decomposes into its harmonic frequencies is critical to evaluating the quality of a physical transmission line face to signal distortions.",
          comment: "I used the Analog Discovery Studio laboratory kit along with the Waveforms software for data acquisition and FFT processing (setting the Trigger to Repeated Auto, enabling trace noise reduction, adjusting RefLevel to 0 dBVRMS and configuring vertical dynamic ranges). For quantitative analysis and THD calculation (up to the 7th harmonic), I used a Calc/Excel spreadsheet. Inverse Fourier synthesis was simulated and modeled in MATLAB/Simulink by summing phase-shifted sinusoidal sources at multiple harmonic frequencies.",
          difficultes: "The main challenge was configuring the optimal Trigger settings on the oscilloscope and calculating the THD from the raw amplitudes measured in decibels. Converting temporal values to frequency values in dBVRMS requires applying the formula V_dBVRMS = 20log10(V_RMS). I overcame this by designing automatic spreadsheet conversion formulas to convert dBVRMS values to V_RMS, which then populated the distortion equation.",
          appris: "I can perfectly operate a digital oscilloscope and an FFT spectrum analyzer (Analog Discovery Studio). I master the theory of Fourier series for standard signals (square, triangular, impulse) and know how to calculate the THD. I am also fluent in using MATLAB/Simulink for periodic signal synthesis.",
          ferais_autrement: "I would like to apply this spectral analysis to actual analog and digital modulations (AM, FM, QAM) to observe channel occupancy in real time during the transmission of voice or data.",
          traces: [
            {
              title: "SAÉ2.02 - Tools for Spectral Analysis and FFT (S2)",
              category: "BUT Project",
              image: "assets/img/portfolio/electricity_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Oscilloscope", "FFT", "Signals", "Analog Discovery Studio", "Waveforms"],
              year: 2026
            },
            {
              title: "R2.05 - Spectral Analysis and Fourier Synthesis under MATLAB (S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/fourier_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Fourier", "Spectrum", "Fourier Synthesis", "MATLAB", "Simulink"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC12.02",
        intitule: "Characterize elementary transmission systems",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "As part of the R1.05 (Transmission Line) and R2.05 (Filtering) modules, I completed a comprehensive experimental study of a physical transmission support (30m and 50cm twisted-pair Ethernet copper cable) and analog filtering circuits. On one hand, I measured the primary linear parameters (r, l, c) of a 50 cm cable using a high-precision BK878B RLC bridge in open-circuit and short-circuit configurations, then computed secondary parameters (characteristic impedance Z0 ≈ 100 Ω, NVP propagation velocity, and average attenuation). I injected a narrow impulse (Ve = 5V, tau = 100 ns) to measure the propagation speed and locate a line break (calculating Lx) using Time-Domain Reflectometry (TDR) on an oscilloscope. I analyzed the impact of termination impedance Rv (perfect matching at 100 Ω with no reflection, positive reflection at 1 kΩ in open-circuit, and negative reflection at 0 Ω in short-circuit). On the other hand, I assembled and characterized passive 1st-order filters (R = 39 kΩ, C = 1 nF), including low-pass, high-pass, and band-pass filters (theoretical cutoff Fc ≈ 4 kHz). I plotted their Bode diagrams (gain and phase from 100 Hz to 100 kHz) and analyzed the distortion of square waves (integration vs derivation) at 500 Hz, 2 kHz, and 20 kHz alongside output spectrum changes.",
          pourquoi: "Physically characterizing transmission media and understanding the behavior of frequency filters is essential to guaranteeing signal integrity. A poorly matched cable generates reflections (SWR) that corrupt data. A filter cleans signals of high-frequency noise or isolates transmission channels, but introduces phase shifts and attenuation that must be modeled mathematically to design a quality transmission system.",
          comment: "I used a BK878B RLC bridge for primary parameters, a certified VDV II Pro tester for RJ45 cable qualification and troubleshooting (NVP calibration), and an oscilloscope connected via a BNC Tee to a function generator (GBF) for TDR reflectometry traces. For filters, I wired resistors and capacitors on a breadboard and measured voltages and phase differences under harmonic excitation.",
          difficultes: "The hardest part was accurately identifying reflected pulses during Time-Domain Reflectometry (TDR) tests on the oscilloscope and correlating them with load impedance. Similarly, filter phase measurements at low frequencies were noisy. I resolved this by increasing acquisition resolution, adjusting Trigger parameters precisely, and using the exact characteristic impedance (100 Ω) to eliminate parasitic rebounds.",
          appris: "I know how to calculate and measure primary/secondary transmission line parameters, perform cable diagnostics via reflectometry (TDR), calibrate a cable tester, and design/characterize passive filters (low-pass, high-pass, band-pass) by experimentally plotting their gain and phase curves.",
          ferais_autrement: "I would like to use a professional Vector Network Analyzer (VNA) to directly extract S-parameters (reflection and transmission) of the line over a much wider frequency band (up to the GHz range).",
          traces: [
            {
              title: "R1.05 - Transmission Line Characterization and Time-Domain Reflectometry (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/cabling_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Transmission Line", "Primary Parameters", "Time-Domain Reflectometry (TDR)", "RLC Bridge", "VDV II Pro"],
              year: 2025
            },
            {
              title: "R2.05 - Passive Filters Design and Characterization (Low-Pass, High-Pass, Band-Pass) (S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/bode_plot_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Passive Filters", "Bode Diagram", "Cutoff Frequency", "Harmonic Excitation", "Signal Distortion"],
              year: 2026
            }
          ]
        }
      },
      {
        id: "AC12.03",
        intitule: "Deploy transmission media",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Through the R1.05 - Transmission Media for Networks module (S1) and SAÉ1.03 - Discovering a Transmission Device, I studied and implemented the different transmission media used in networks. I learned to crimp RJ45 cables (category 5e and 6) in straight and crossover cabling, test their continuity and performances with a cable tester. I was also introduced to the connection of single-mode and multi-mode optical fibers (preparation by cleaving, connection on LC/SC connector), and performed attenuation measurements with an optical time-domain reflectometer (OTDR) and an optical power meter.",
          pourquoi: "Whatever the level of software abstraction of a network, it always rests on physical media. Knowing how to choose, deploy, and test a network cable (copper or fiber) is an indispensable field skill. In enterprises, poorly implemented cabling is a frequent source of intermittent failures that are difficult to diagnose. Mastery of qualification measurements (OTDR, certified cable tester) is also in demand during maintenance and deployment missions.",
          comment: "The cabling practical works took place in a laboratory equipped with RJ45 crimping tools, strippers, Fluke Networks cable testers, and an OTDR. For optical fiber, we used mechanical cleavers and thermal glue connection kits. OTDR measurements were performed on real fiber sections allowing to observe reflections, attenuations, and splice defects.",
          difficultes: "The main difficulty was optical fiber cleaving: it requires a precise and steady hand to obtain a perfectly flat cut face, a sine qua non condition for a quality connection. The first attempts resulted in oblique or chipped faces, visible under the verification microscope. I had to redo several cleaves before obtaining a satisfactory result. Furthermore, interpreting OTDR curves (locating events, calculating losses) required several application exercises.",
          appris: "I am able to perform RJ45 cabling compliant with TIA-568 standards (T568A and T568B), test its compliance, prepare and connect an optical fiber, and read an OTDR curve to qualify an optical link. I know the characteristics of the different cable categories (Cat5e, Cat6) and fiber types (OS1/OS2, OM1 to OM4).",
          ferais_autrement: "I would seek to practice optical fiber connection more, which requires a dexterity that is only acquired through repetition. I would also be interested in structured cabling in patch panels to understand the complete organization of enterprise cabling from the wall outlet to the switch.",
          traces: [
            {
              title: "SAÉ1.03 - Discovering a Transmission Device (S1)",
              category: "BUT Project",
              image: "assets/img/portfolio/cabling_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Optical Fiber", "RJ45", "OTDR", "Cabling", "Crimping"],
              year: 2025
            },
            {
              title: "R1.05 - Transmission Media for Networks (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/fiber_optic_dark.png",
              logo: "assets/img/portfolio/logo-telecoms.webp",
              url: null,
              tags: ["Cat5e", "Cat6", "TIA-568", "Cable Tester", "Fluke Networks"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC12.04",
        intitule: "Connect ToIP systems",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Within the framework of the R2.04 - Introduction to Corporate Telephony module (S2), I discovered and configured enterprise IP telephony architectures (ToIP/VoIP). I studied the SIP (Session Initiation Protocol) protocol and its functioning (REGISTER, INVITE, 200 OK, BYE), configured an Asterisk IPBX server on a Debian virtual machine, created SIP extensions and dial plans in the extensions.conf file, and tested calls between two Linphone softphones installed on local virtual network stations. I also analyzed SIP and RTP streams in Wireshark to understand a VoIP call flow from end to end.",
          pourquoi: "Telephony over IP has replaced almost all traditional PBXs in enterprises. Every network technician is today brought to configure, troubleshoot, or evolve ToIP systems. Knowledge of Asterisk, the SIP protocol, and the relationship between signaling streams and media streams (RTP) is therefore a directly marketable professional skill.",
          comment: "The practical works took place on VirtualBox virtual machines in an internal network. The Asterisk 20 LTS server was installed under Debian 12. The configuration was carried out by editing the sip.conf, extensions.conf, and voicemail.conf text files directly from the SSH terminal. Desktop Linphone softphones were used as SIP terminals. Wireshark analysis allowed us to observe SIP exchanges (REGISTER, INVITE methods) and RTP packets carrying voice.",
          difficultes: "Configuring Asterisk is complex because configuration files contain a specific syntax very sensitive to errors. I spent a lot of time debugging SIP registration problems (403 Forbidden errors) related to incorrect passwords in sip.conf. Understanding the relationship between SIP signaling (UDP port 5060) and RTP media streams (dynamic ports) also required a particular conceptual effort.",
          appris: "I understand the architecture of a ToIP system (softphone → IPBX → SIP trunk to operator), I am able to configure basic SIP extensions on Asterisk, create a simple dial plan, and analyze a SIP/RTP call stream with Wireshark. I also know current audio codecs (G.711, G.729) and their impact on network bandwidth.",
          ferais_autrement: "I would initiate myself into FreePBX (GUI for Asterisk) to complete my mastery of command line configuration with a GUI approach, closer to what is used in production. I would also test failover scenarios and SIP trunking to a real VoIP operator.",
          traces: [
            {
              title: "R2.04 - Introduction to Corporate Telephony (S2)",
              category: "R&T Lab",
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
        intitule: "Communicate with a third party and adapt one's speech",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "During SAÉ2.04 - Integrative Project (S2) and the R1.15 - Project Management course, I developed my technical communication skills. I wrote several technical reports and installation guides intended for readers of different levels (technician, project manager, end-user), prepared and presented group oral defenses before a panel of teachers, and participated in technical English courses (S1/S2) focused on networking and telecom vocabulary. In SAÉ2.04 (a 6-day integrative project with routers, VLANs and final oral defense), I wrote specifications, kept a logbook, presented progress during intermediate checkpoints, and defended the project during the final oral defense.",
          pourquoi: "A network technician never works alone: they must communicate with non-technical users (explaining a failure without jargon), peers (writing a precise technical documentation), and superiors (synthesizing a project in a few minutes). The quality of communication is often what differentiates a good technician from an excellent professional. Furthermore, since English is the universal language of networks (RFCs, Cisco documentation, IEEE standards), its technical mastery is essential.",
          comment: "The oral presentations of SAÉ2.04 were carried out before a jury composed of several teachers, with a presentation support (PowerPoint/Impress) and a live technical demonstration on the network mock-up. The technical reports were written under LibreOffice Writer, respecting an imposed structure (context, network architecture, addressing plan, deployment procedure, validation tests, review). Technical English courses included reading exercises of RFCs and datasheets, and role-playing games simulating technical support calls.",
          difficultes: "My main difficulty was adapting my level of technicality according to the audience: I had a tendency to systematically use technical acronyms (NAT, VLAN, DHCP) even when speaking to a mixed audience. I also had difficulty managing the stress of the oral presentation and improvising during jury questions on points that I had not prepared. I progressed by practicing reformulating the same technical concepts with more accessible vocabulary, and by preparing a list of potential Q&A before each defense.",
          appris: "I learned to structure a technical document according to professional codes (introduction, tabulated addressing plan, annotated network diagram, test procedures), to adapt my speech according to the interlocutor, to present a complex work in a synthesized manner in a constrained time, and to answer a jury's questions in a calm and argued manner. I also reinforced my technical English vocabulary (networking, troubleshooting, deployment).",
          ferais_autrement: "I would practice oral presentations more under real conditions by filming my rehearsals to identify my weak points (speech rate, posture, gaze). I would also seek to write more technical documentations in English to prepare myself for international professional environments.",
          traces: [
            {
              title: "SAÉ2.04 - Integrative Project (S2)",
              category: "BUT Project",
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
          ce_que_jai_fait: "As part of the R1.01 (Introduction to Networks & Digital Welcome) and R1.07 (Fundamentals of Programming) modules, I configured and operated my work environment in a Windows/Linux Ubuntu dual-boot setup at the IUT. I mastered the Linux command-line interface (CLI) to navigate the tree structure, configure network environment variables (system variable `https_proxy` set to `http://cache-etu.univ-artois.fr:3128`), edit files with `nano` or VS Code, and securely manage access rights to files and directories via `chmod` and `chown` commands. Additionally, I configured and utilized GitLab to version and host my R107 projects (cloning repositories via HTTPS, atomic commits, and remote synchronization using `git clone`, `git add`, `git commit -m`, and `git push`).",
          pourquoi: "Mastering a UNIX-like operating system (Linux) and its CLI terminal is fundamental for any Networks & Telecoms technician. Most web servers, routers, and network equipments are administered exclusively via command line. Furthermore, rigorous system permissions management (rwx rights via `chmod`) and network proxying are essential to secure data flows. Finally, version control with Git is the absolute industry standard for seamless collaboration and structured IT project management.",
          comment: "I configured my Ubuntu terminal with the IUT proxy via the `export https_proxy=cache-etu.univ-artois.fr:3128` instruction to allow connections to the university GitLab (https://gitlab.univ-artois.fr). I structured my lab directories (`mkdir -p R107/TP1`) and manipulated script permissions to make them executable (`chmod +x`). Codes were hosted and synchronized on my GitLab repository by inviting my instructors as developers.",
          difficultes: "The main challenge was adapting to the strictness of the Linux command line and avoiding network access errors related to the university proxy. Authenticating during the first `git push` on GitLab with my university credentials also required correct environment variable setup. I overcame these hurdles by systematically documenting my favorite system commands in my personal cheatsheet.",
          appris: "I can perfectly use basic Linux commands (mkdir, cd, ls -all, chmod, chown, cat, nano), configure network proxies via command line, and master the Git/GitLab versioning cycle. I know how to make a script executable and configure VS Code for system development.",
          ferais_autrement: "I would configure a secure SSH key for my interactions with GitLab to avoid repeatedly entering my university credentials, which speeds up the development workflow.",
          traces: [
            {
              title: "System Configuration and CLI Administration (Linux Ubuntu & GitLab) (S1)",
              category: "R&T Lab",
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
        intitule: "Read, execute, correct, and modify a program",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "In the R1.07 - Fundamentals of Programming (S1) and R2.09 - Introduction to Web Development (S2) modules, I learned to analyze, execute, test, and debug Python programs and MVC architectures under Flask. In S1, I manipulated complex data structures in Python (TP1 to TP10): analyzing and correcting conversion expressions (f-string `:.2f`, wrappers `int()`, `float()`), conditional structures, and `for`/`while` loops, and managing and debugging complex collections (negative list indexing and slicing, non-mutable tuples, set ensembles with union `|`/intersection `&`/difference `-` operations, and key/value dictionaries). I also debugged scripts using standard module imports like `random` and `math`, and corrected functions by verifying dynamic typing. In S2, I extended this skill to debugging Flask web applications, correcting critical security flaws such as SQL injections and XSS vulnerabilities.",
          pourquoi: "Knowing how to read and debug an existing program is a vital daily skill in Networks & Telecoms. Whether correcting a system script written by a predecessor, debugging a routing issue, or securing a corporate Web application (OWASP Top 10 flaws), critical reading and step-by-step code diagnosis prevent infrastructure downtime and protect sensitive data from cyberattacks.",
          comment: "For R1.07 and R2.09 labs, I exploited the built-in debuggers of VS Code and Thonny to place breakpoints, inspect local variable values step-by-step, and analyze execution error tracebacks (such as IndexError or KeyError on collections). For security (R2.09 TP4), I tested real vulnerabilities using payloads like `' OR '1'='1` before correcting the code by replacing SQL string concatenation with robust parameterized prepared queries.",
          difficultes: "The main difficulty lay in interpreting errors on complex nested structures (2D lists representing TP4 matrices) and Flask Jinja2 tracebacks, which sometimes hide the underlying Python error. I resolved this by learning to isolate my components, writing minimal unit tests, and inserting targeted trace logs via the `logging` module or debug print statements.",
          appris: "I can read and interpret the structure and behavior of Python code (control structures, functions, containers, variable scope, shebang). I know how to use a professional debugger to analyze the memory state of a running application and apply structural or security fixes aligned with best practices (HTML escaping to prevent XSS flaws, parameterized queries).",
          ferais_autrement: "I would enable strict linting options and static typing (`typing` in Python) from the start of the code to detect type errors and argument inconsistencies on the fly directly in my IDE, without waiting for execution.",
          traces: [
            {
              title: "Web Debugging and Securing (Python / Flask / MVC) (S2)",
              category: "R&T Lab",
              image: "assets/img/portfolio/python_flask_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Python Web", "Flask MVC", "Debugging", "SQL Injections", "XSS Flaws", "VS Code"],
              year: 2026
            },
            {
              title: "Analysis and Debugging of System Scripts (Python TPs 1-10) (S1)",
              category: "R&T Lab",
              image: "assets/img/portfolio/python_debugging_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Algorithms", "Debugging", "Complex Collections", "Flow Control", "Thonny"],
              year: 2025
            }
          ]
        }
      },
      {
        id: "AC13.03",
        intitule: "Translate an algorithm into a programming language",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "Through the TPs of the R1.07 module (Fundamentals of Programming) in S1 and SAÉ2.03 (IT Solution for the Enterprise) in S2, I translated multiple complex algorithms into operational and structured Python scripts. In S1, I developed self-contained scripts with Shebang `#!/usr/bin/env python3` made executable (`chmod +x`), managed dynamic CLI interfaces via `argparse`, and performed advanced system manipulations. I notably wrote recursive directory traversal scripts with `os.walk` and `os.path` to purge empty files, interacted with system processes using `subprocess.run` to launch and decode network pings, developed REST API Web request scripts with the `requests` module (fetching JSON weather data from wttr.in), and designed complex filters using regular expressions from the `re` module (searching for MAC addresses, emails, and phone numbers in `syslog.txt`). In S2 (SAÉ2.03), I translated the algorithms of a full MVC web application under Flask with PostgreSQL/MySQL relational database.",
          pourquoi: "Translating a logical algorithm into clean, executable code is the core of a system administrator and Networks & Telecoms developer's job. Whether creating CLI scripts to automate disk purges, monitoring ping statuses on remote servers, extracting MAC addresses from log files for firewalls, or interfacing a database with a Flask application (SAÉ2.03), writing structured and modular code ensures operational efficiency, reliability, and speed.",
          comment: "For the CLI part in S1, I wrote reusable Python modules protected by `if __name__ == '__main__':` blocks to isolate unit tests. I used `argparse` to document and structure command-line help. Text and JSON file streams were securely opened using the `with open()` context manager. For SAÉ2.03 in S2, I wrote the relational SQL schema (association tables) and Flask scripts with `psycopg2` or `mysql.connector` to store, update, and query data transactionally.",
          difficultes: "One of the main difficulties in S1 was implementing robust regular expressions (re.compile, finditer) without false positives during textual pattern extraction (e.g., distinguishing a valid MAC or IP address format from a simple version number in logs). In S2, it was database relationship management and synchronization with the Flask application under Docker. I overcame these points by methodically testing my regexes using testing tools (RegEx101) and carefully documenting my DB schemas.",
          appris: "I know how to design complete and professional Python CLI scripts (shebang, argparse, chmod +x). I master system programming (os, shutil, subprocess), basic network programming (HTTP requests, ping), structured data processing (text files, JSON, Regex), and database integration with Flask.",
          ferais_autrement: "I would use a unit testing framework (pytest) to automatically validate the behavior of my system scripts with each code modification, thus guaranteeing the absence of regression on production scripts.",
          traces: [
            {
              title: "SAÉ2.03 - IT Solution for the Enterprise (Flask/Docker) (S2)",
              category: "BUT Project",
              image: "assets/img/portfolio/database_dark.png",
              logo: "assets/img/portfolio/logo-heryze.webp",
              url: null,
              tags: ["Python Web", "Flask MVC", "Docker Stack", "PostgreSQL", "MySQL", "SQL Relational"],
              year: 2026
            },
            {
              title: "CLI Administration Scripts, Regex Log Parsing & Networking (R107 TPs) (S1)",
              category: "R&T Lab",
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
        intitule: "Know the architecture and technologies of a website",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "I designed and developed Heryze, a next-generation web-based cash register (POS) system for local merchants and CHR (Café-Hôtel-Restaurant). The project comprises a full point-of-sale system with categorical catalog management, a real-time analytical dashboard (revenue, average basket, charts), an inventory module with CSV import and VAT rate management, an interactive dining room layout for restaurants, a WebRTC-powered mobile scanner transforming a smartphone into a barcode reader, and a Z-Caisse log compliant with the NF525 standard.",
          pourquoi: "To create a real professional tool addressing a concrete market need: offering a modern, accessible cash register operating offline and compliant with French fiscal regulations.",
          comment: "The project was developed as a Progressive Web App (PWA) with an offline-first architecture using Service Workers to guarantee operation without internet. The interface was built using a modern JavaScript framework and Tailwind CSS. Real-time communication between the register and the mobile scanner is handled by WebRTC and WebSockets. The system integrates NF525 compliance with secure transaction signatures and FEC (Fichier des Écritures Comptables) exports.",
          difficultes: "Implementing the offline-first architecture was a major challenge: synchronizing local data with the server upon reconnection without data loss or duplicates. The WebRTC channel implementation for the mobile scanner also required handling network latency and cross-browser compatibility.",
          appris: "I acquired an in-depth mastery of PWAs and Service Workers, WebRTC real-time communication, and regulatory constraints linked to POS systems in France (NF525, FEC). This project also taught me to design a comprehensive software architecture covering the frontend, data management, and legal compliance.",
          ferais_autrement: "I would have integrated automated tests (unit and E2E) from the start of development to secure critical features like checkout and Z-Caisse generation. I would also have documented the API earlier in the process.",
          traces: [
            {
              title: "Heryze — Next-Generation Web POS System",
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
        intitule: "Choose appropriate data management mechanisms",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "I designed and developed Kdufoot, a community web matchmaking platform for amateur soccer coaches to publish, search, and schedule friendly matches and tournaments. The project includes a secure authentication system (Auth0 with Google OAuth), a personal dashboard, a bookmarking system, a filtered search by category/level/distance/format, and a robust GDPR compliance page featuring 1-click account deletion and automated data export (PDF/JSON).",
          pourquoi: "To solve a real grassroots challenge: amateur club coaches waste significant time searching for opponents for friendly games. Kdufoot centralizes all listings and simplifies scheduling.",
          comment: "The application was developed with React and Vite for the frontend, Tailwind CSS for styling (dark mode with dynamic gradients). Authentication is delegated to Auth0 (email/password + Google OAuth). Data is stored on Cloudflare D1 (edge SQLite database) with encryption at rest. GDPR compliance was implemented with a dedicated DPO, a 12-month retention policy, and automated anonymization mechanisms.",
          difficultes: "Choosing Cloudflare D1 as the database required adapting to edge computing constraints (latency, query limitations). Full GDPR compliance (right to be forgotten, portability, retention) demanded extensive research into legal obligations.",
          appris: "I learned to design a GDPR-compliant data architecture from the ground up (privacy by design), utilize an edge database (Cloudflare D1), and integrate an external identity provider (Auth0). This project also raised my awareness of personal data protection issues.",
          ferais_autrement: "I would have set up a more traditional relational database (PostgreSQL) from the start to bypass D1's limitations, and implemented a real-time notification system to alert coaches of new listings matching their criteria.",
          traces: [
            {
              title: "Kdufoot — Amateur Football Matchmaking Platform",
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
          ce_que_jai_fait: "As part of the SAÉ2.03 (IT Solution for the Enterprise) project and Docker/Docker Compose labs, I mastered micro-service integration within a collaborative containerized environment. First, I managed versioning using Git and GitLab/GitHub (atomic commits, .gitignore, main/develop/feature branches, and manual merge conflict resolution). Second, I designed and orchestrated complex multi-container architectures using Docker Compose. I configured an Apache PHP server with volume mounting (`$PWD:/app`) and ports 80/443 mapping. Furthermore, I deployed a WordPress blog interconnected with an isolated MySQL 5.7 database: I defined a private bridged network (`mon_reseau` with IPAM subnet `10.16.0.0/24`), configured a persistent volume (`dbdata:/var/lib/mysql`), structured database connection environment variables (`WORDPRESS_DB_HOST: db:3306`), and ordered service startup sequences (`depends_on`). For visual orchestration, I integrated Portainer by mounting the host Docker socket (`/var/run/docker.sock:/var/run/docker.sock`) on port 9000, and expanded my infrastructure by adding PostgreSQL and phpMyAdmin containers.",
          pourquoi: "In professional environments, development and deployment processes systematically rely on collaborative versioning and micro-services containerization. Mastering multi-container orchestrations (Docker Compose) ensures perfect isolation of individual components (databases, application servers, admin tools) and eliminates environment incompatibility issues, while tools like Portainer simplify live supervision and maintenance in production.",
          comment: "I used command-line Git for versioning. For containerization and orchestration, I wrote and structured `docker-compose.yml` configuration files executed via `docker-compose up -d`, or managed them visually from the Portainer web interface (port 9000) and phpMyAdmin for SQL database management.",
          difficultes: "The main challenge was establishing robust inter-container communications using Docker's internal DNS resolution instead of localhost, especially when linking WordPress to the 'db:3306' database service. Additionally, accessing the host system's `/var/run/docker.sock` from the Portainer container required a solid understanding of Unix volume bindings to prevent permissions errors.",
          appris: "I master the collaborative development lifecycle under Git (branches, merges, conflicts). I know how to design complex micro-service architectures under Docker Compose with static internal IP addressing, data persistence via named volumes, service startup ordering, and centralized graphical administration using Portainer.",
          ferais_autrement: "I would implement a full CI/CD pipeline (GitHub Actions / GitLab CI) to automate syntax validation for `docker-compose.yml` files (linter) and run automated integration tests before deploying to production.",
          traces: [
            {
              title: "SAÉ2.03 - IT Solution and Orchestration (Flask/Docker/Git/Portainer) (S2)",
              category: "BUT Project",
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
    label: "Other",
    description: "Miscellaneous projects outside the BUT R&T curriculum",
    color: "#8e44ad", // Purple
    apprentissages: [
      {
        id: "PERSO.01",
        intitule: "Upcoming or transverse projects",
        statut: "valide",
        detail: {
          ce_que_jai_fait: "I group here my personal and professional web development projects that demonstrate my passion for modern technologies and my versatility outside the academic subjects of the BUT R&T.",
          pourquoi: "To explore new frameworks, design solutions adapted to real clients, and consolidate my Fullstack skills.",
          comment: "These projects are based on modern web architectures, ranging from static HTML/CSS/JS showcase sites to complex dynamic React applications.",
          difficultes: "Managing time between academic and personal projects, and self-training on new cutting-edge technologies (React, D1 edge databases, Auth0).",
          appris: "I developed great technical autonomy, learned to design complete architectures and to meet actual user requirements (usability, performance, security).",
          ferais_autrement: "I would organize my work with a stricter planning (Agile methodology) to optimize the delivery of my personal projects.",
          traces: [
            {
              title: "Kdufoot — Amateur Football Matchmaking Platform",
              category: "Personal Project",
              image: "assets/img/portfolio/portfolio-5.webp",
              logo: "assets/img/portfolio/logo-kdufoot.webp",
              url: "https://kdufoot.com",
              tags: ["React", "Auth0", "Cloudflare D1"],
              year: 2025
            },
            {
              title: "Professional Website — Hairdresser Salon",
              category: "Professional Project",
              image: "assets/img/portfolio/portfolio-3.webp",
              logo: "assets/img/portfolio/logo-coiffure.webp",
              url: "assets/partie-projet/index.html",
              tags: ["HTML", "CSS", "JS"],
              year: 2025
            },
            {
              title: "3D Modeling — Housing and Expansion",
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
