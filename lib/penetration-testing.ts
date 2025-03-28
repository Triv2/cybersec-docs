export const penetrationTestingContent = {
  theory: `
    <h2>Introduction to Penetration Testing</h2>
    <p>
      Penetration testing, also known as pen testing or ethical hacking, is the practice of testing a computer system, network, or web application to find security vulnerabilities that an attacker could exploit. Penetration testing can be automated with software applications or performed manually.
    </p>

    <h3>Penetration Testing Methodologies</h3>
    <p>Several methodologies guide penetration testing processes:</p>
    <ul>
      <li>
        <strong>OSSTMM (Open Source Security Testing Methodology Manual)</strong>: Focuses on operational security
      </li>
      <li>
        <strong>PTES (Penetration Testing Execution Standard)</strong>: Provides technical guidelines for penetration testing
      </li>
      <li>
        <strong>OWASP (Open Web Application Security Project)</strong>: Focuses on web application security
      </li>
      <li>
        <strong>NIST SP 800-115</strong>: Guidelines for information security testing and assessment
      </li>
    </ul>

    <h3>Phases of Penetration Testing</h3>
    <ol>
      <li>
        <strong>Planning & Reconnaissance</strong>: Defining scope and gathering intelligence
      </li>
      <li>
        <strong>Scanning</strong>: Using technical tools to understand the target's vulnerabilities
      </li>
      <li>
        <strong>Gaining Access</strong>: Exploiting vulnerabilities to gain entry
      </li>
      <li>
        <strong>Maintaining Access</strong>: Determining if the vulnerability can be used for persistent access
      </li>
      <li>
        <strong>Analysis & Reporting</strong>: Compiling results and providing recommendations
      </li>
    </ol>

    <h3>Types of Penetration Tests</h3>
    <ul>
      <li>
        <strong>Black Box</strong>: Tester has no prior knowledge of the system
      </li>
      <li>
        <strong>White Box</strong>: Tester has complete knowledge of the system
      </li>
      <li>
        <strong>Gray Box</strong>: Tester has partial knowledge of the system
      </li>
      <li>
        <strong>External Testing</strong>: Focuses on externally exposed assets
      </li>
      <li>
        <strong>Internal Testing</strong>: Simulates an attack from inside the network
      </li>
    </ul>
  `,
  examples: [
    {
      title: "Network Scanning with Nmap",
      description: "Scanning networks to discover hosts and open ports.",
      language: "bash",
      code: "# Basic scan of a target\nnmap 192.168.1.1\n\n# Comprehensive scan with OS detection, version detection, script scanning, and traceroute\nnmap -A 192.168.1.0/24\n\n# Stealth scan using SYN packets\nnmap -sS 192.168.1.1",
    },
    {
      title: "Web Application Vulnerability Scanning",
      description: "Automated scanning for common web vulnerabilities.",
      language: "bash",
      code: "# Basic scan with OWASP ZAP\nzap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' https://example.com\n\n# Nikto web server scanner\nnikto -h https://example.com",
    },
    {
      title: "Exploiting Known Vulnerabilities",
      description: "Using Metasploit to exploit known vulnerabilities.",
      language: "bash",
      code: "# Start Metasploit console\nmsfconsole\n\n# Search for exploits\nsearch type:exploit platform:windows ms17-010\n\n# Use an exploit\nuse exploit/windows/smb/ms17_010_eternalblue\nset RHOSTS 192.168.1.10\nexploit",
    },
  ],
}

