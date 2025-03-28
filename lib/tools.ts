import { getAllTools, getToolsByCategory } from "./domains"

export interface ToolCategory {
  id: string
  name: string
  description: string
}

export const toolCategories: ToolCategory[] = [
  {
    id: "forensics",
    name: "Forensics Tools",
    description: "Tools for digital forensics, evidence collection, and analysis",
  },
  {
    id: "pentest",
    name: "Penetration Testing Tools",
    description: "Tools for security testing, vulnerability assessment, and exploitation",
  },
  {
    id: "network",
    name: "Network Tools",
    description: "Tools for network analysis, monitoring, and security",
  },
  {
    id: "scanners",
    name: "Security Scanners",
    description: "Tools for vulnerability scanning and security assessment",
  },
  {
    id: "crypto",
    name: "Cryptography Tools",
    description: "Tools for encryption, decryption, and cryptographic operations",
  },
  {
    id: "grc",
    name: "GRC Tools",
    description: "Tools for governance, risk management, and compliance",
  },
]

export const forensicsTools = [
  {
    name: "Autopsy",
    description:
      "Digital forensics platform and graphical interface to The Sleuth Kit and other digital forensics tools",
    website: "https://www.autopsy.com/",
    commands: [
      "# Open Autopsy and create a new case",
      "# Add a disk image as a data source",
      "# Use the various analysis modules",
    ],
  },
  {
    name: "The Sleuth Kit",
    description: "Collection of command line tools that allow you to investigate disk images",
    website: "https://www.sleuthkit.org/",
    commands: [
      "# List partitions in an image",
      "mmls disk.dd",
      "",
      "# List files in a partition",
      "fls -o 2048 disk.dd",
    ],
  },
  {
    name: "Volatility",
    description: "Advanced memory forensics framework",
    website: "https://www.volatilityfoundation.org/",
    commands: [
      "# List processes",
      "volatility -f memory.dmp --profile=Win10x64 pslist",
      "",
      "# Scan for network connections",
      "volatility -f memory.dmp --profile=Win10x64 netscan",
    ],
  },
  {
    name: "FTK Imager",
    description: "Forensic imaging tool that lets you acquire data from various types of media",
    website: "https://accessdata.com/product-download/ftk-imager-version-4-5",
    commands: ["# GUI-based tool for creating forensic images", "# Supports various formats including E01, RAW (dd)"],
  },
  {
    name: "Wireshark",
    description: "Network protocol analyzer for network troubleshooting and analysis",
    website: "https://www.wireshark.org/",
    commands: [
      "# Capture packets on interface eth0",
      "tshark -i eth0 -w capture.pcap",
      "",
      "# Filter HTTP traffic",
      "tshark -r capture.pcap -Y 'http'",
    ],
  },
  {
    name: "SANS SIFT Workstation",
    description: "Collection of forensic tools designed to perform detailed digital forensic examinations",
    website: "https://digital-forensics.sans.org/community/downloads",
    commands: ["# Pre-configured Linux distribution with forensic tools", "# Available as a virtual appliance"],
  },
]

export const pentestTools = [
  {
    name: "Metasploit Framework",
    description: "Advanced open-source platform for developing, testing, and executing exploits",
    website: "https://www.metasploit.com/",
    commands: [
      "# Start Metasploit console",
      "msfconsole",
      "",
      "# Search for exploits",
      "search type:exploit cve:2021",
      "",
      "# Use an exploit",
      "use exploit/windows/smb/ms17_010_eternalblue",
    ],
  },
  {
    name: "Burp Suite",
    description: "Integrated platform for performing security testing of web applications",
    website: "https://portswigger.net/burp",
    commands: [
      "# Start Burp Suite",
      "java -jar burpsuite_pro.jar",
      "",
      "# Configure browser to use proxy",
      "# Navigate to http://burp to access Burp Suite",
    ],
  },
  {
    name: "Nmap",
    description: "Network discovery and security auditing tool",
    website: "https://nmap.org/",
    commands: [
      "# Basic scan",
      "nmap 192.168.1.1",
      "",
      "# Comprehensive scan",
      "nmap -A -T4 192.168.1.0/24",
      "",
      "# Service detection",
      "nmap -sV 192.168.1.1",
    ],
  },
  {
    name: "OWASP ZAP",
    description: "Open-source web application security scanner",
    website: "https://www.zaproxy.org/",
    commands: [
      "# Start ZAP",
      "zap.sh",
      "",
      "# Quick scan",
      "zap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' https://example.com",
    ],
  },
  {
    name: "John the Ripper",
    description: "Password cracking tool",
    website: "https://www.openwall.com/john/",
    commands: [
      "# Crack password hashes",
      "john --wordlist=/path/to/wordlist.txt hashes.txt",
      "",
      "# Show cracked passwords",
      "john --show hashes.txt",
    ],
  },
  {
    name: "Aircrack-ng",
    description: "Complete suite for auditing wireless networks",
    website: "https://www.aircrack-ng.org/",
    commands: [
      "# Capture handshake",
      "airmon-ng start wlan0",
      "airodump-ng -c 1 --bssid 00:11:22:33:44:55 -w capture wlan0mon",
      "",
      "# Crack WPA handshake",
      "aircrack-ng -w wordlist.txt capture-01.cap",
    ],
  },
]

export const networkTools = [
  {
    name: "Wireshark",
    description: "Network protocol analyzer for network troubleshooting and analysis",
    website: "https://www.wireshark.org/",
    commands: [
      "# Capture on interface",
      "wireshark -i eth0",
      "",
      "# Capture with filter",
      "wireshark -i eth0 -f 'port 80'",
    ],
  },
  {
    name: "Snort",
    description: "Network intrusion detection and prevention system",
    website: "https://www.snort.org/",
    commands: [
      "# Run in IDS mode",
      "snort -c /etc/snort/snort.conf -i eth0 -A console",
      "",
      "# Test configuration",
      "snort -T -c /etc/snort/snort.conf",
    ],
  },
  {
    name: "Nmap",
    description: "Network discovery and security auditing tool",
    website: "https://nmap.org/",
    commands: ["# Basic scan", "nmap 192.168.1.1", "", "# Network scan", "nmap 192.168.1.0/24"],
  },
  {
    name: "tcpdump",
    description: "Command-line packet analyzer",
    website: "https://www.tcpdump.org/",
    commands: ["# Capture packets", "tcpdump -i eth0", "", "# Capture with filter", "tcpdump -i eth0 'port 80'"],
  },
  {
    name: "OpenVAS",
    description: "Open Vulnerability Assessment Scanner",
    website: "https://www.openvas.org/",
    commands: ["# Start OpenVAS", "openvas-start", "", "# Access web interface", "# https://localhost:9392"],
  },
  {
    name: "pfSense",
    description: "Open source firewall and router platform",
    website: "https://www.pfsense.org/",
    commands: ["# Web-based administration", "# https://192.168.1.1"],
  },
]

export const scannerTools = [
  {
    name: "OpenVAS",
    description: "Open Vulnerability Assessment Scanner",
    website: "https://www.openvas.org/",
    commands: ["# Start OpenVAS", "openvas-start", "", "# Access web interface", "# https://localhost:9392"],
  },
  {
    name: "Nessus",
    description: "Vulnerability scanner",
    website: "https://www.tenable.com/products/nessus",
    commands: [
      "# Start Nessus service",
      "service nessusd start",
      "",
      "# Access web interface",
      "# https://localhost:8834",
    ],
  },
  {
    name: "Nikto",
    description: "Web server scanner",
    website: "https://cirt.net/Nikto2",
    commands: [
      "# Basic scan",
      "nikto -h https://example.com",
      "",
      "# Comprehensive scan",
      "nikto -h https://example.com -Tuning x",
    ],
  },
  {
    name: "OWASP ZAP",
    description: "Open-source web application security scanner",
    website: "https://www.zaproxy.org/",
    commands: [
      "# Quick scan",
      "zap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' https://example.com",
    ],
  },
  {
    name: "SQLmap",
    description: "Automatic SQL injection tool",
    website: "https://sqlmap.org/",
    commands: [
      "# Basic scan",
      'sqlmap -u "https://example.com/page.php?id=1"',
      "",
      "# Database enumeration",
      'sqlmap -u "https://example.com/page.php?id=1" --dbs',
    ],
  },
  {
    name: "Wapiti",
    description: "Web application vulnerability scanner",
    website: "https://wapiti.sourceforge.io/",
    commands: [
      "# Basic scan",
      "wapiti -u https://example.com",
      "",
      "# Scan specific modules",
      "wapiti -u https://example.com -m sql,xss",
    ],
  },
]

export function getToolsForCategory(categoryId: string) {
  switch (categoryId) {
    case "forensics":
      return forensicsTools
    case "pentest":
      return pentestTools
    case "network":
      return networkTools
    case "scanners":
      return scannerTools
    case "crypto":
      return getToolsByCategory("Cryptography").concat(
        getToolsByCategory("Encryption"),
        getToolsByCategory("PKI"),
        getToolsByCategory("Digital Signatures"),
      )
    case "grc":
      return getToolsByCategory("Compliance Scanning").concat(
        getToolsByCategory("GRC Platform"),
        getToolsByCategory("Risk Management"),
        getToolsByCategory("Policy Management"),
      )
    default:
      return getAllTools()
  }
}

export function getToolCategory(categoryId: string): ToolCategory | undefined {
  return toolCategories.find((category) => category.id === categoryId)
}

export function getAllToolCategories(): ToolCategory[] {
  return toolCategories
}

