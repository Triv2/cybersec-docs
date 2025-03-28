import { domains } from "./domains"
import { forensicsTools, pentestTools, networkTools, scannerTools } from "./tools"
import { digitalForensicsContent } from "./digital-forensics"
import { penetrationTestingContent } from "./penetration-testing"
import { grcContent } from "./grc"
import { networkSecurityContent } from "./network-security"
import { applicationSecurityContent } from "./application-security"
import { cryptographyContent } from "./cryptography"
// import { threatModelingContent } from "./threat-modeling"
// import { riskManagementContent } from "./risk-management"
import { vulnerabilityAnalysisContent } from "./vulnerability-analysis"
import { malwareAnalysisContent } from "./malware-analysis"
import { frameworks } from "./frameworks"

export interface SearchResult {
  type: "domain" | "tool" | "example" | "framework"
  title: string
  description: string
  href: string
  category: string
}

export function performSearch(query: string): SearchResult[] {
  if (!query || query.trim() === "") {
    return []
  }

  const lowerQuery = query.toLowerCase()
  const results: SearchResult[] = []

  // Search domains
  domains.forEach((domain) => {
    if (domain.title.toLowerCase().includes(lowerQuery) || domain.description.toLowerCase().includes(lowerQuery)) {
      results.push({
        type: "domain",
        title: domain.title,
        description: domain.description,
        href: domain.href || "",
        category: "Domain",
      })
    }
  })

  // Search frameworks
  frameworks.forEach((framework) => {
    if (framework.name.toLowerCase().includes(lowerQuery) || framework.description.toLowerCase().includes(lowerQuery)) {
      results.push({
        type: "framework",
        title: framework.name,
        description: framework.description,
        href: `/frameworks/${framework.id}`,
        category: "Framework",
      })
    }
  })

  // Search tools
  const allTools = [...forensicsTools, ...pentestTools, ...networkTools, ...scannerTools]
  allTools.forEach((tool) => {
    if (tool.name.toLowerCase().includes(lowerQuery) || tool.description.toLowerCase().includes(lowerQuery)) {
      results.push({
        type: "tool",
        title: tool.name,
        description: tool.description,
        href: `/tools/${getToolCategory(tool)}#${tool.name.toLowerCase().replace(/\s+/g, "-")}`,
        category: "Tool",
      })
    }
  })

  // Search examples
  const searchExamples = (examples: any[], domainId: string) => {
    examples.forEach((example) => {
      if (
        example.title.toLowerCase().includes(lowerQuery) ||
        example.description.toLowerCase().includes(lowerQuery) ||
        example.code.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          type: "example",
          title: example.title,
          description: example.description,
          href: `/domains/${domainId}#${example.title.toLowerCase().replace(/\s+/g, "-")}`,
          category: "Example",
        })
      }
    })
  }

  searchExamples(digitalForensicsContent.examples, "digital-forensics")
  searchExamples(penetrationTestingContent.examples, "penetration-testing")
  searchExamples(grcContent.examples, "grc")
  searchExamples(networkSecurityContent.examples, "network-security")
  searchExamples(applicationSecurityContent.examples, "application-security")
  searchExamples(cryptographyContent.examples, "cryptography")
  searchExamples(threatModelingContent.examples, "threat-modeling")
  searchExamples(riskManagementContent.examples, "risk-management")
  searchExamples(vulnerabilityAnalysisContent.examples, "vulnerability-analysis")
  searchExamples(malwareAnalysisContent.examples, "malware-analysis")

  return results
}

// Helper function to determine which category a tool belongs to
function getToolCategory(tool: any): string {
  if (forensicsTools.some((t) => t.name === tool.name)) return "forensics"
  if (pentestTools.some((t) => t.name === tool.name)) return "pentest"
  if (networkTools.some((t) => t.name === tool.name)) return "network"
  if (scannerTools.some((t) => t.name === tool.name)) return "scanners"
  return "forensics" // Default fallback
}

