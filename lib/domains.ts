import { Database, Terminal, FileText, Server, Shield, Lock, Target, BarChart, Search, Bug } from "lucide-react"

export interface Tool {
  name: string
  description: string
  website: string
  commands: string[]
  category: string[]
}

export interface Example {
  title: string
  description: string
  language: string
  code: string
}

export interface Domain {
  id: string
  title: string
  description: string
  icon: any
  href?: string
  theory?: {
    introduction: string
    sections: {
      title: string
      content: string
    }[]
  }
  examples?: Example[]
  tools?: Tool[]
}

export const domains: Domain[] = [
  {
    id: "digital-forensics",
    title: "Digital Forensics",
    description: "Techniques and tools for investigating digital evidence",
    icon: Database,
    href: "/domains/digital-forensics",
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    description: "Methods and tools for security testing and vulnerability assessment",
    icon: Terminal,
    href: "/domains/penetration-testing",
  },
  {
    id: "grc",
    title: "GRC",
    description: "Governance, Risk Management, and Compliance frameworks",
    icon: FileText,
    href: "/domains/grc",
  },
  {
    id: "network-security",
    title: "Network Security",
    description: "Protecting network infrastructure and communications",
    icon: Server,
    href: "/domains/network-security",
  },
  {
    id: "application-security",
    title: "Application Security",
    description: "Securing applications against threats and vulnerabilities",
    icon: Shield,
    href: "/domains/application-security",
  },
  {
    id: "cryptography",
    title: "Cryptography",
    description: "Encryption, hashing, and secure communication protocols",
    icon: Lock,
    href: "/domains/cryptography",
  },
  {
    id: "threat-modeling",
    title: "Threat Modeling",
    description: "Structured approach to identifying and addressing security risks",
    icon: Target,
    href: "/domains/threat-modeling",
  },
  {
    id: "risk-management",
    title: "Risk Management",
    description: "Process of identifying, assessing, and responding to security risks",
    icon: BarChart,
    href: "/domains/risk-management",
  },
  {
    id: "vulnerability-analysis",
    title: "Vulnerability Analysis",
    description: "Identifying, quantifying, and prioritizing security vulnerabilities",
    icon: Search,
    href: "/domains/vulnerability-analysis",
  },
  {
    id: "malware-analysis",
    title: "Malware Analysis",
    description: "Studying malicious software to understand its functionality and impact",
    icon: Bug,
    href: "/domains/malware-analysis",
  },
]

export function getDomain(id: string): Domain | undefined {
  return domains.find((domain) => domain.id === id)
}

export function getAllDomains(): Domain[] {
  return domains
}

export function getAllTools(): Tool[] {
  const allTools: Tool[] = []
  domains.forEach((domain) => {
    if (domain.tools) {
      domain.tools.forEach((tool) => {
        allTools.push(tool)
      })
    }
  })
  return allTools
}

export function getToolsByCategory(category: string): Tool[] {
  const tools = getAllTools()
  return tools.filter((tool) => tool.category.includes(category))
}

export function searchContent(query: string): {
  domains: Domain[]
  tools: Tool[]
  examples: { domainId: string; example: Example }[]
} {
  const lowerQuery = query.toLowerCase()

  const matchedDomains = domains.filter(
    (domain) =>
      domain.title.toLowerCase().includes(lowerQuery) || domain.description.toLowerCase().includes(lowerQuery),
  )

  const matchedTools: Tool[] = []
  const matchedExamples: { domainId: string; example: Example }[] = []

  domains.forEach((domain) => {
    // Search tools
    if (domain.tools) {
      domain.tools.forEach((tool) => {
        if (tool.name.toLowerCase().includes(lowerQuery) || tool.description.toLowerCase().includes(lowerQuery)) {
          matchedTools.push(tool)
        }
      })
    }

    // Search examples
    if (domain.examples) {
      domain.examples.forEach((example) => {
        if (
          example.title.toLowerCase().includes(lowerQuery) ||
          example.description.toLowerCase().includes(lowerQuery) ||
          example.code.toLowerCase().includes(lowerQuery)
        ) {
          matchedExamples.push({ domainId: domain.id, example })
        }
      })
    }
  })

  return {
    domains: matchedDomains,
    tools: matchedTools,
    examples: matchedExamples,
  }
}

