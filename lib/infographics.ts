export interface Infographic {
  id: string
  title: string
  description: string
  imagePath: string
  domain: string
  tags: string[]
}

export const infographics: Infographic[] = [
  {
    id: "digital-forensics-process",
    title: "Digital Forensics Investigation Process",
    description:
      "A visual representation of the digital forensics investigation process, from identification to presentation.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "digital-forensics",
    tags: ["forensics", "investigation", "process"],
  },
  {
    id: "forensics-tools-comparison",
    title: "Digital Forensics Tools Comparison",
    description: "A comparison of popular digital forensics tools and their capabilities.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "digital-forensics",
    tags: ["forensics", "tools", "comparison"],
  },
  {
    id: "penetration-testing-methodology",
    title: "Penetration Testing Methodology",
    description: "An overview of the penetration testing methodology, from planning to reporting.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "penetration-testing",
    tags: ["penetration testing", "methodology", "process"],
  },
  {
    id: "common-vulnerabilities",
    title: "Common Web Application Vulnerabilities",
    description: "A visual guide to common web application vulnerabilities and their impact.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "penetration-testing",
    tags: ["vulnerabilities", "web applications", "OWASP"],
  },
  {
    id: "risk-assessment-matrix",
    title: "Risk Assessment Matrix",
    description:
      "A visual representation of a risk assessment matrix, showing the relationship between likelihood and impact.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "grc",
    tags: ["risk assessment", "matrix", "risk management"],
  },
  {
    id: "compliance-frameworks",
    title: "Comparison of Compliance Frameworks",
    description: "A comparison of popular compliance frameworks and their requirements.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "grc",
    tags: ["compliance", "frameworks", "regulations"],
  },
  {
    id: "network-security-architecture",
    title: "Network Security Architecture",
    description: "A visual representation of a secure network architecture, including security controls and zones.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "network-security",
    tags: ["network security", "architecture", "zones"],
  },
  {
    id: "common-network-attacks",
    title: "Common Network Attacks",
    description: "A visual guide to common network attacks and their impact.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "network-security",
    tags: ["network security", "attacks", "threats"],
  },
  {
    id: "secure-sdlc",
    title: "Secure Software Development Lifecycle",
    description:
      "A visual representation of the secure software development lifecycle, including security activities at each phase.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "application-security",
    tags: ["application security", "SDLC", "development"],
  },
  {
    id: "owasp-top-10",
    title: "OWASP Top 10 Web Application Vulnerabilities",
    description: "A visual guide to the OWASP Top 10 web application vulnerabilities and their impact.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "application-security",
    tags: ["application security", "OWASP", "vulnerabilities"],
  },
  {
    id: "encryption-algorithms",
    title: "Comparison of Encryption Algorithms",
    description: "A comparison of popular encryption algorithms and their characteristics.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "cryptography",
    tags: ["cryptography", "encryption", "algorithms"],
  },
  {
    id: "pki-infrastructure",
    title: "Public Key Infrastructure (PKI)",
    description:
      "A visual representation of a public key infrastructure, including certificate authorities and trust relationships.",
    imagePath: "/placeholder.svg?height=600&width=800",
    domain: "cryptography",
    tags: ["cryptography", "PKI", "certificates"],
  },
]

export function getInfographicsByDomain(domain: string): Infographic[] {
  return infographics.filter((infographic) => infographic.domain === domain)
}

export function getInfographic(id: string): Infographic | undefined {
  return infographics.find((infographic) => infographic.id === id)
}

export function getAllInfographics(): Infographic[] {
  return infographics
}

