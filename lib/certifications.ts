import { Shield, Award, FileCheck, Server, Database, Lock, Code, Network, Briefcase } from "lucide-react"

export interface Certification {
  id: string
  title: string
  organization: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  description: string
  domains: string[]
  requirements: string
  examDetails: string
  syllabus: {
    title: string
    topics: string[]
  }[]
  icon: any
}

export const certifications: Certification[] = [
  {
    id: "cissp",
    title: "Certified Information Systems Security Professional (CISSP)",
    organization: "(ISC)²",
    level: "Advanced",
    description:
      "The CISSP is a globally recognized certification in the field of information security. It validates a professional's expertise in designing, implementing, and managing a best-in-class cybersecurity program.",
    domains: [
      "Security and Risk Management",
      "Asset Security",
      "Security Architecture and Engineering",
      "Communication and Network Security",
      "Identity and Access Management",
      "Security Assessment and Testing",
      "Security Operations",
      "Software Development Security",
    ],
    requirements:
      "Five years of cumulative, paid, full-time work experience in two or more of the eight domains of the CISSP CBK. A four-year college degree or an approved credential from the (ISC)² approved list can substitute for one year of experience.",
    examDetails:
      "The CISSP exam consists of 100-150 questions to be completed in 3 hours. The exam uses Computerized Adaptive Testing (CAT) format. The passing score is 700 out of 1000 points.",
    syllabus: [
      {
        title: "Domain 1: Security and Risk Management",
        topics: [
          "Security Concepts",
          "Security Governance",
          "Compliance",
          "Legal Regulations",
          "Professional Ethics",
          "Security Policies",
          "Risk Management",
        ],
      },
      {
        title: "Domain 2: Asset Security",
        topics: [
          "Information Classification",
          "Data Ownership",
          "Data Security Controls",
          "Privacy Protection",
          "Retention Requirements",
        ],
      },
      {
        title: "Domain 3: Security Architecture and Engineering",
        topics: [
          "Security Design Principles",
          "Security Models",
          "Security Evaluation Models",
          "Security Capabilities",
          "Cryptography",
          "Site and Facility Security",
        ],
      },
      {
        title: "Domain 4: Communication and Network Security",
        topics: ["Network Architecture", "Network Components", "Secure Communication Channels", "Network Attacks"],
      },
      {
        title: "Domain 5: Identity and Access Management",
        topics: [
          "Physical and Logical Access",
          "Identification and Authentication",
          "Identity Management",
          "Access Control Attacks",
        ],
      },
      {
        title: "Domain 6: Security Assessment and Testing",
        topics: ["Assessment and Test Strategies", "Security Control Testing", "Test Outputs", "Security Process Data"],
      },
      {
        title: "Domain 7: Security Operations",
        topics: [
          "Investigations",
          "Incident Management",
          "Disaster Recovery",
          "Resource Protection",
          "Vulnerability Management",
        ],
      },
      {
        title: "Domain 8: Software Development Security",
        topics: [
          "Security in the SDLC",
          "Development Environment Security",
          "Software Security Effectiveness",
          "Acquired Software Security",
        ],
      },
    ],
    icon: Shield,
  },
  {
    id: "ceh",
    title: "Certified Ethical Hacker (CEH)",
    organization: "EC-Council",
    level: "Intermediate",
    description:
      "The CEH certification demonstrates knowledge of ethical hacking tools, techniques, and methodologies used by malicious hackers, but with the intent to help organizations strengthen their security posture.",
    domains: ["Ethical Hacking", "Penetration Testing", "Security Analysis", "Vulnerability Assessment"],
    requirements:
      "Two years of work experience in information security or completion of an official EC-Council training program.",
    examDetails:
      "The CEH exam consists of 125 multiple-choice questions to be completed in 4 hours. The passing score is 70%.",
    syllabus: [
      {
        title: "Module 01: Introduction to Ethical Hacking",
        topics: [
          "Information Security Overview",
          "Hacking Concepts",
          "Ethical Hacking Concepts",
          "Information Security Controls",
          "Penetration Testing Concepts",
        ],
      },
      {
        title: "Module 02: Footprinting and Reconnaissance",
        topics: [
          "Footprinting Concepts",
          "Footprinting Methodologies",
          "OSINT Tools",
          "Website Footprinting",
          "Email Footprinting",
          "Competitive Intelligence",
        ],
      },
      {
        title: "Module 03: Scanning Networks",
        topics: [
          "Network Scanning Concepts",
          "Scanning Tools",
          "Scanning Techniques",
          "Banner Grabbing",
          "Vulnerability Scanning",
        ],
      },
      {
        title: "Module 04: Enumeration",
        topics: [
          "Enumeration Concepts",
          "NetBIOS Enumeration",
          "SNMP Enumeration",
          "LDAP Enumeration",
          "NTP Enumeration",
          "SMTP Enumeration",
          "DNS Enumeration",
        ],
      },
      {
        title: "Module 05: Vulnerability Analysis",
        topics: [
          "Vulnerability Assessment Concepts",
          "Vulnerability Assessment Tools",
          "Vulnerability Scoring Systems",
        ],
      },
      {
        title: "Module 06: System Hacking",
        topics: [
          "Password Cracking",
          "Privilege Escalation",
          "Executing Applications",
          "Hiding Files",
          "Covering Tracks",
        ],
      },
      {
        title: "Module 07: Malware Threats",
        topics: ["Malware Concepts", "Trojan Concepts", "Virus and Worm Concepts", "Malware Analysis"],
      },
      {
        title: "Module 08: Sniffing",
        topics: [
          "Sniffing Concepts",
          "MAC Attacks",
          "DHCP Attacks",
          "ARP Poisoning",
          "Spoofing Attacks",
          "DNS Poisoning",
          "Sniffing Tools",
        ],
      },
      {
        title: "Module 09: Social Engineering",
        topics: [
          "Social Engineering Concepts",
          "Social Engineering Types",
          "Insider Threats",
          "Impersonation",
          "Identity Theft",
          "Social Engineering Countermeasures",
        ],
      },
      {
        title: "Module 10: Denial-of-Service",
        topics: ["DoS Concepts", "DDoS Concepts", "DoS/DDoS Attack Techniques", "Botnets", "DoS/DDoS Countermeasures"],
      },
    ],
    icon: Code,
  },
  {
    id: "comptia-security-plus",
    title: "CompTIA Security+",
    organization: "CompTIA",
    level: "Beginner",
    description:
      "CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.",
    domains: [
      "Threats, Attacks, and Vulnerabilities",
      "Technologies and Tools",
      "Architecture and Design",
      "Identity and Access Management",
      "Risk Management",
      "Cryptography and PKI",
    ],
    requirements:
      "No formal prerequisites, but CompTIA recommends having the Network+ certification and at least two years of experience in IT administration with a security focus.",
    examDetails:
      "The Security+ exam (SY0-601) consists of a maximum of 90 questions to be completed in 90 minutes. The passing score is 750 on a scale of 100-900.",
    syllabus: [
      {
        title: "Domain 1.0: Threats, Attacks, and Vulnerabilities",
        topics: [
          "Malware",
          "Social Engineering",
          "Application Attacks",
          "Network Attacks",
          "Threat Actors",
          "Vulnerability Scanning",
          "Impact of Vulnerabilities",
        ],
      },
      {
        title: "Domain 2.0: Technologies and Tools",
        topics: [
          "Security Tools",
          "Security Appliances",
          "Security Applications",
          "Assessment Tools",
          "Software Tools",
          "Command Line Tools",
          "Security Assessment Methods",
        ],
      },
      {
        title: "Domain 3.0: Architecture and Design",
        topics: [
          "Enterprise Security",
          "Virtualization",
          "Cloud Computing",
          "Secure Application Development",
          "Authentication and Authorization",
          "Resilience",
          "Embedded Systems",
        ],
      },
      {
        title: "Domain 4.0: Identity and Access Management",
        topics: [
          "Identity and Access Management Concepts",
          "Identity and Access Services",
          "Identity and Access Controls",
          "Account Management",
        ],
      },
      {
        title: "Domain 5.0: Risk Management",
        topics: [
          "Policies",
          "Procedures",
          "Business Impact Analysis",
          "Risk Management Processes",
          "Incident Response",
          "Disaster Recovery",
          "Physical Security",
        ],
      },
      {
        title: "Domain 6.0: Cryptography and PKI",
        topics: [
          "Cryptography Concepts",
          "Cryptographic Algorithms",
          "Wireless Security",
          "Public Key Infrastructure",
          "Certificate Management",
          "Implementing PKI",
        ],
      },
    ],
    icon: Award,
  },
  {
    id: "oscp",
    title: "Offensive Security Certified Professional (OSCP)",
    organization: "Offensive Security",
    level: "Advanced",
    description:
      "The OSCP is a hands-on penetration testing certification that requires candidates to successfully attack and penetrate various live machines in a controlled lab environment.",
    domains: ["Penetration Testing", "Exploitation", "Vulnerability Assessment", "Network Security"],
    requirements: "No formal prerequisites, but strong knowledge of TCP/IP, networking, and Linux is recommended.",
    examDetails:
      "The OSCP exam is a 24-hour practical exam where candidates must successfully compromise a number of target machines and submit a detailed penetration test report within 24 hours after the exam.",
    syllabus: [
      {
        title: "Getting Comfortable with Kali Linux",
        topics: ["Linux Commands", "Managing Services", "Bash Scripting", "Netcat"],
      },
      {
        title: "Passive Information Gathering",
        topics: ["OSINT", "Google Hacking", "Whois", "DNS Reconnaissance", "Email Harvesting"],
      },
      {
        title: "Active Information Gathering",
        topics: ["DNS Enumeration", "Port Scanning", "SMB Enumeration", "SMTP Enumeration", "SNMP Enumeration"],
      },
      {
        title: "Vulnerability Scanning",
        topics: ["Nessus", "Nmap Scripting Engine", "Vulnerability Scanning with Metasploit"],
      },
      {
        title: "Buffer Overflows",
        topics: [
          "Stack-Based Buffer Overflows",
          "Fuzzing",
          "Controlling EIP",
          "Finding Bad Characters",
          "Generating Shellcode",
          "Exploiting Buffer Overflows",
        ],
      },
      {
        title: "Windows and Linux Exploitation",
        topics: [
          "Exploiting Windows Vulnerabilities",
          "Exploiting Linux Vulnerabilities",
          "Privilege Escalation",
          "Password Attacks",
          "Port Redirection and Tunneling",
        ],
      },
      {
        title: "Client-Side Attacks",
        topics: ["Client-Side Attack Vectors", "Browser Exploitation", "Social Engineering", "Antivirus Evasion"],
      },
      {
        title: "Web Application Attacks",
        topics: [
          "Web Application Assessment Tools",
          "XSS",
          "SQL Injection",
          "File Inclusion Vulnerabilities",
          "File Upload Vulnerabilities",
        ],
      },
      {
        title: "Password Attacks",
        topics: [
          "Password Cracking",
          "Windows Authentication",
          "Password Hash Attacks",
          "Password Cracking Countermeasures",
        ],
      },
      {
        title: "Port Redirection and Tunneling",
        topics: ["Port Forwarding", "SSH Tunneling", "Proxychains", "HTTP Tunneling"],
      },
    ],
    icon: Server,
  },
  {
    id: "cisa",
    title: "Certified Information Systems Auditor (CISA)",
    organization: "ISACA",
    level: "Advanced",
    description:
      "CISA is a globally recognized certification for IS audit, control, and security professionals. It validates expertise in auditing, controlling, monitoring, and assessing information technology and business systems.",
    domains: [
      "Information Systems Auditing",
      "Governance and Management of IT",
      "Information Systems Acquisition, Development, and Implementation",
      "Information Systems Operations and Business Resilience",
      "Protection of Information Assets",
    ],
    requirements:
      "Five years of professional information systems auditing, control, or security work experience. Substitutions and waivers for education and related work experience are available.",
    examDetails:
      "The CISA exam consists of 150 multiple-choice questions to be completed in 4 hours. The passing score is 450 out of 800 points.",
    syllabus: [
      {
        title: "Domain 1: Information Systems Auditing Process",
        topics: [
          "Audit Standards",
          "Risk-Based Audit Planning",
          "Audit Execution",
          "Reporting and Follow-up",
          "Control Self-Assessments",
        ],
      },
      {
        title: "Domain 2: Governance and Management of IT",
        topics: [
          "IT Governance",
          "IT Management",
          "IT Strategy",
          "IT Policies and Procedures",
          "Risk Management",
          "Enterprise Architecture",
        ],
      },
      {
        title: "Domain 3: Information Systems Acquisition, Development, and Implementation",
        topics: [
          "Project Management",
          "Business Case Development",
          "Systems Development Methodologies",
          "Control Requirements",
          "Testing Methods",
          "Post-implementation Review",
        ],
      },
      {
        title: "Domain 4: Information Systems Operations and Business Resilience",
        topics: [
          "IT Service Management",
          "IT Operations",
          "Database Management",
          "Network Infrastructure",
          "Business Continuity Planning",
          "Disaster Recovery Planning",
        ],
      },
      {
        title: "Domain 5: Protection of Information Assets",
        topics: [
          "Information Security Management",
          "Logical Access Controls",
          "Network Security",
          "Environmental Controls",
          "Physical Access Controls",
          "Data Classification",
        ],
      },
    ],
    icon: FileCheck,
  },
  {
    id: "ccsp",
    title: "Certified Cloud Security Professional (CCSP)",
    organization: "(ISC)²",
    level: "Advanced",
    description:
      "The CCSP certification demonstrates expertise in cloud security architecture, design, operations, and service orchestration.",
    domains: [
      "Cloud Concepts, Architecture, and Design",
      "Cloud Data Security",
      "Cloud Platform and Infrastructure Security",
      "Cloud Application Security",
      "Cloud Security Operations",
      "Legal, Risk, and Compliance",
    ],
    requirements:
      "Five years of cumulative, paid work experience in information technology, of which three years must be in information security and one year in cloud security.",
    examDetails:
      "The CCSP exam consists of 125 multiple-choice questions to be completed in 3 hours. The passing score is 700 out of 1000 points.",
    syllabus: [
      {
        title: "Domain 1: Cloud Concepts, Architecture, and Design",
        topics: [
          "Cloud Computing Concepts",
          "Cloud Reference Architecture",
          "Cloud Computing Roles",
          "Key Cloud Computing Characteristics",
          "Cloud Deployment Models",
          "Cloud Service Models",
        ],
      },
      {
        title: "Domain 2: Cloud Data Security",
        topics: [
          "Cloud Data Lifecycle",
          "Data Security Strategies",
          "Data Discovery",
          "Data Classification",
          "Data De-identification",
          "Data Rights Management",
          "Data Retention, Deletion, and Archiving",
        ],
      },
      {
        title: "Domain 3: Cloud Platform and Infrastructure Security",
        topics: [
          "Physical and Environmental Controls",
          "Network and Communications Security",
          "Virtualization Security",
          "Common Cloud Vulnerabilities",
          "Cloud Security Controls",
          "Disaster Recovery and Business Continuity",
        ],
      },
      {
        title: "Domain 4: Cloud Application Security",
        topics: [
          "Training and Awareness for Application Security",
          "Cloud Software Assurance and Validation",
          "Software Development Methodologies",
          "Secure Software Development",
          "Supply Chain Management",
        ],
      },
      {
        title: "Domain 5: Cloud Security Operations",
        topics: [
          "Data Center Operations",
          "Cloud Infrastructure Management",
          "Incident Response",
          "Security Controls Implementation",
          "Configuration and Vulnerability Management",
          "Change and Configuration Management",
        ],
      },
      {
        title: "Domain 6: Legal, Risk, and Compliance",
        topics: [
          "Legal Requirements",
          "Privacy Issues",
          "Audit Processes",
          "Risk Management",
          "Compliance Requirements",
          "Contract Design",
          "Vendor Management",
        ],
      },
    ],
    icon: Database,
  },
  {
    id: "cysa-plus",
    title: "CompTIA CySA+ (Cybersecurity Analyst)",
    organization: "CompTIA",
    level: "Intermediate",
    description:
      "CompTIA CySA+ is an IT workforce certification that applies behavioral analytics to networks and devices to prevent, detect, and combat cybersecurity threats.",
    domains: [
      "Threat and Vulnerability Management",
      "Software and Systems Security",
      "Security Operations and Monitoring",
      "Incident Response",
      "Compliance and Assessment",
    ],
    requirements:
      "No formal prerequisites, but CompTIA recommends having the Security+ certification and at least four years of hands-on information security or related experience.",
    examDetails:
      "The CySA+ exam (CS0-002) consists of a maximum of 85 questions to be completed in 165 minutes. The passing score is 750 on a scale of 100-900.",
    syllabus: [
      {
        title: "Domain 1: Threat and Vulnerability Management",
        topics: [
          "Threat Intelligence",
          "Vulnerability Management",
          "Security Assessments",
          "Penetration Testing",
          "Vulnerability Scanning",
          "SIEM Tools",
        ],
      },
      {
        title: "Domain 2: Software and Systems Security",
        topics: [
          "System Hardening",
          "Application Security",
          "Cloud Security",
          "Mobile Security",
          "IoT Security",
          "Embedded Systems",
        ],
      },
      {
        title: "Domain 3: Security Operations and Monitoring",
        topics: [
          "Network Security Monitoring",
          "Endpoint Security Monitoring",
          "Log Management",
          "Security Monitoring Tools",
          "Continuous Security Monitoring",
          "Incident Detection",
        ],
      },
      {
        title: "Domain 4: Incident Response",
        topics: [
          "Incident Response Process",
          "Digital Forensics",
          "Malware Analysis",
          "Containment Techniques",
          "Eradication Techniques",
          "Recovery Procedures",
        ],
      },
      {
        title: "Domain 5: Compliance and Assessment",
        topics: [
          "Security Controls",
          "Regulations and Standards",
          "Risk Management",
          "Privacy and Data Protection",
          "Security Frameworks",
          "Security Policies",
        ],
      },
    ],
    icon: Network,
  },
  {
    id: "gsec",
    title: "GIAC Security Essentials (GSEC)",
    organization: "GIAC",
    level: "Intermediate",
    description:
      "The GSEC certification validates a practitioner's knowledge of information security beyond simple terminology and concepts. It demonstrates hands-on security skills and an understanding of a wide range of security topics.",
    domains: [
      "Cryptography",
      "Network Security",
      "Access Control",
      "Authentication",
      "Host Security",
      "Malware",
      "Security Policy",
    ],
    requirements:
      "No formal prerequisites, but the certification is designed for professionals who want to demonstrate they are qualified for IT security roles.",
    examDetails: "The GSEC exam consists of 106-180 questions to be completed in 3 hours. The passing score is 73%.",
    syllabus: [
      {
        title: "Section 1: Networking Concepts",
        topics: [
          "Network Fundamentals",
          "IP Concepts",
          "Network Security Devices",
          "Network Security Protocols",
          "Wireless Network Security",
        ],
      },
      {
        title: "Section 2: Defense in Depth",
        topics: [
          "Defense in Depth Concepts",
          "Access Control",
          "Authentication",
          "Password Security",
          "Biometrics",
          "Physical Security",
        ],
      },
      {
        title: "Section 3: Cryptography",
        topics: [
          "Cryptography Concepts",
          "Symmetric Encryption",
          "Asymmetric Encryption",
          "Hashing",
          "Digital Signatures",
          "PKI",
          "Cryptographic Applications",
        ],
      },
      {
        title: "Section 4: Windows Security",
        topics: [
          "Windows Security Architecture",
          "Windows Authentication",
          "Windows Access Control",
          "Windows Hardening",
          "Windows Logging and Monitoring",
        ],
      },
      {
        title: "Section 5: Linux Security",
        topics: [
          "Linux Security Architecture",
          "Linux Authentication",
          "Linux Access Control",
          "Linux Hardening",
          "Linux Logging and Monitoring",
        ],
      },
      {
        title: "Section 6: Malware",
        topics: [
          "Malware Types",
          "Malware Infection Vectors",
          "Malware Detection",
          "Malware Prevention",
          "Malware Removal",
        ],
      },
      {
        title: "Section 7: Security Policy",
        topics: [
          "Security Policy Development",
          "Security Awareness",
          "Incident Response",
          "Business Continuity",
          "Disaster Recovery",
        ],
      },
    ],
    icon: Lock,
  },
  {
    id: "cism",
    title: "Certified Information Security Manager (CISM)",
    organization: "ISACA",
    level: "Expert",
    description:
      "CISM is a management-focused certification that promotes international security practices and recognizes individuals who manage, design, and oversee an enterprise's information security program.",
    domains: [
      "Information Security Governance",
      "Information Risk Management",
      "Information Security Program Development and Management",
      "Information Security Incident Management",
    ],
    requirements:
      "Five years of information security work experience, with at least three years of information security management experience. Experience substitutions and waivers are available.",
    examDetails:
      "The CISM exam consists of 150 multiple-choice questions to be completed in 4 hours. The passing score is 450 out of 800 points.",
    syllabus: [
      {
        title: "Domain 1: Information Security Governance",
        topics: [
          "Information Security Strategy",
          "Information Security Management",
          "Security Governance Frameworks",
          "Security Roles and Responsibilities",
          "Security Policies",
          "Security Standards",
        ],
      },
      {
        title: "Domain 2: Information Risk Management",
        topics: [
          "Risk Management Concepts",
          "Risk Assessment",
          "Risk Analysis",
          "Risk Treatment",
          "Risk Monitoring",
          "Risk Reporting",
        ],
      },
      {
        title: "Domain 3: Information Security Program Development and Management",
        topics: [
          "Security Program Development",
          "Security Program Management",
          "Security Controls",
          "Security Awareness",
          "Security Training",
          "Security Program Assessment",
        ],
      },
      {
        title: "Domain 4: Information Security Incident Management",
        topics: [
          "Incident Management Planning",
          "Incident Detection",
          "Incident Response",
          "Incident Recovery",
          "Incident Reporting",
          "Incident Analysis",
        ],
      },
    ],
    icon: Briefcase,
  },
]

export function getCertification(id: string): Certification | undefined {
  return certifications.find((cert) => cert.id === id)
}

export function getAllCertifications(): Certification[] {
  return certifications
}

