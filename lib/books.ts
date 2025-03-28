import { Code, Shield, Lock, FileText, Network, Briefcase } from "lucide-react"

export interface Book {
  id: string
  title: string
  author: string
  description: string
  coverImage: string
  pdfPath: string
  categories: string[]
  tags: string[]
  publishYear: number
  icon: any
}

export const books: Book[] = [
  {
    id: "practical-malware-analysis",
    title: "Practical Malware Analysis",
    author: "Michael Sikorski & Andrew Honig",
    description:
      "A comprehensive guide to malware analysis, covering both basic and advanced techniques for analyzing malicious software. The book includes hands-on labs and exercises to practice reverse engineering skills.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/practical-malware-analysis.pdf",
    categories: ["Malware Analysis", "Reverse Engineering"],
    tags: ["malware", "reverse engineering", "assembly", "debugging"],
    publishYear: 2012,
    icon: Code,
  },
  {
    id: "hacking-art-of-exploitation",
    title: "Hacking: The Art of Exploitation",
    author: "Jon Erickson",
    description:
      "This book introduces the fundamentals of C programming from a hacker's perspective, explaining how to exploit common programming vulnerabilities. It covers topics like stack overflows, shellcode, and cryptography.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/hacking-art-of-exploitation.pdf",
    categories: ["Exploitation", "Programming"],
    tags: ["exploitation", "programming", "C", "assembly", "shellcode"],
    publishYear: 2008,
    icon: Code,
  },
  {
    id: "web-application-hackers-handbook",
    title: "The Web Application Hacker's Handbook",
    author: "Dafydd Stuttard & Marcus Pinto",
    description:
      "A comprehensive guide to finding and exploiting security flaws in web applications. The book covers the core concepts of web application security and provides a structured methodology for identifying vulnerabilities.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/web-application-hackers-handbook.pdf",
    categories: ["Web Security", "Penetration Testing"],
    tags: ["web security", "penetration testing", "OWASP", "SQL injection", "XSS"],
    publishYear: 2011,
    icon: Network,
  },
  {
    id: "blue-team-handbook",
    title: "Blue Team Handbook: Incident Response Edition",
    author: "Don Murdoch",
    description:
      "A practical guide for cybersecurity incident response teams. The book provides a collection of tools, techniques, and procedures for effectively responding to security incidents.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/blue-team-handbook.pdf",
    categories: ["Incident Response", "Blue Team"],
    tags: ["incident response", "blue team", "SIEM", "forensics", "threat hunting"],
    publishYear: 2014,
    icon: Shield,
  },
  {
    id: "rtfm-red-team-field-manual",
    title: "RTFM: Red Team Field Manual",
    author: "Ben Clark",
    description:
      "A concise reference guide for red team members, containing practical commands for penetration testing and security assessments. The book covers Linux, Windows, networking, and various security tools.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/rtfm-red-team-field-manual.pdf",
    categories: ["Red Team", "Penetration Testing"],
    tags: ["red team", "penetration testing", "commands", "cheat sheet"],
    publishYear: 2014,
    icon: FileText,
  },
  {
    id: "btfm-blue-team-field-manual",
    title: "BTFM: Blue Team Field Manual",
    author: "Alan J. White & Ben Clark",
    description:
      "A companion to the Red Team Field Manual, this book provides defensive security professionals with commands and techniques for defending systems and networks.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/btfm-blue-team-field-manual.pdf",
    categories: ["Blue Team", "Defense"],
    tags: ["blue team", "defense", "commands", "cheat sheet", "incident response"],
    publishYear: 2017,
    icon: FileText,
  },
  {
    id: "applied-cryptography",
    title: "Applied Cryptography: Protocols, Algorithms, and Source Code in C",
    author: "Bruce Schneier",
    description:
      "A comprehensive reference on cryptography, covering algorithms, protocols, and their implementation. The book explains both the theory and practical applications of cryptography.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/applied-cryptography.pdf",
    categories: ["Cryptography"],
    tags: ["cryptography", "algorithms", "protocols", "encryption"],
    publishYear: 1996,
    icon: Lock,
  },
  {
    id: "threat-hunting",
    title: "The Practice of Network Security Monitoring: Understanding Incident Detection and Response",
    author: "Richard Bejtlich",
    description:
      "A guide to network security monitoring and threat detection. The book covers the deployment, configuration, and use of open source tools for capturing and analyzing network traffic.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/network-security-monitoring.pdf",
    categories: ["Network Security", "Threat Hunting"],
    tags: ["network security", "monitoring", "threat hunting", "incident detection"],
    publishYear: 2013,
    icon: Network,
  },
  {
    id: "social-engineering",
    title: "Social Engineering: The Science of Human Hacking",
    author: "Christopher Hadnagy",
    description:
      "An exploration of social engineering techniques and how they can be used to manipulate people. The book covers psychological principles, social engineering frameworks, and defensive strategies.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/social-engineering.pdf",
    categories: ["Social Engineering"],
    tags: ["social engineering", "psychology", "manipulation", "human hacking"],
    publishYear: 2018,
    icon: Briefcase,
  },
  {
    id: "practical-packet-analysis",
    title: "Practical Packet Analysis: Using Wireshark to Solve Real-World Network Problems",
    author: "Chris Sanders",
    description:
      "A guide to using Wireshark for network analysis and troubleshooting. The book covers packet capture, protocol analysis, and identifying network problems and security issues.",
    coverImage: "/placeholder.svg?height=300&width=200",
    pdfPath: "/books/practical-packet-analysis.pdf",
    categories: ["Network Analysis"],
    tags: ["wireshark", "packet analysis", "network troubleshooting", "protocol analysis"],
    publishYear: 2017,
    icon: Network,
  },
]

export function getBook(id: string): Book | undefined {
  return books.find((book) => book.id === id)
}

export function getAllBooks(): Book[] {
  return books
}

export function getBooksByCategory(category: string): Book[] {
  return books.filter((book) => book.categories.includes(category))
}

export function getBooksByTag(tag: string): Book[] {
  return books.filter((book) => book.tags.includes(tag))
}

