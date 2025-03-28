export const networkSecurityContent = {
  theory: `
    <h2>Introduction to Network Security</h2>
    <p>
      Network security consists of policies, practices, and technologies designed to protect the integrity, confidentiality, and accessibility of computer networks and data. It covers a broad range of security measures including hardware, software, protocols, and policies to guard against unauthorized access, misuse, modification, or denial of network resources.
    </p>

    <h3>Network Security Components</h3>
    <p>A comprehensive network security strategy includes multiple layers of protection:</p>
    <ul>
      <li><strong>Perimeter Security</strong>: Firewalls, IDS/IPS, DMZs</li>
      <li><strong>Access Control</strong>: Authentication, authorization, accounting (AAA)</li>
      <li><strong>Data Protection</strong>: Encryption, VPNs, data loss prevention</li>
      <li><strong>Endpoint Security</strong>: Anti-malware, host-based firewalls, EDR solutions</li>
      <li><strong>Network Monitoring</strong>: SIEM, network traffic analysis, anomaly detection</li>
      <li><strong>Security Policies</strong>: Acceptable use, incident response, disaster recovery</li>
    </ul>

    <h3>Common Network Attacks</h3>
    <p>Networks face various types of attacks:</p>
    <ul>
      <li><strong>Denial of Service (DoS/DDoS)</strong>: Overwhelming network resources</li>
      <li><strong>Man-in-the-Middle (MitM)</strong>: Intercepting and potentially altering communications</li>
      <li><strong>Packet Sniffing</strong>: Capturing and analyzing network traffic</li>
      <li><strong>ARP Poisoning</strong>: Redirecting traffic through attacker's machine</li>
      <li><strong>DNS Attacks</strong>: Cache poisoning, tunneling, hijacking</li>
      <li><strong>VLAN Hopping</strong>: Gaining unauthorized access to VLANs</li>
      <li><strong>Wireless Attacks</strong>: Evil twin, deauthentication, WPA cracking</li>
    </ul>

    <h3>Network Security Protocols</h3>
    <p>Secure protocols protect data in transit:</p>
    <ul>
      <li><strong>TLS/SSL</strong>: Securing web traffic (HTTPS)</li>
      <li><strong>IPsec</strong>: Securing IP communications</li>
      <li><strong>SSH</strong>: Secure remote administration</li>
      <li><strong>SFTP/SCP</strong>: Secure file transfers</li>
      <li><strong>DNSSEC</strong>: Securing DNS lookups</li>
      <li><strong>802.1X</strong>: Port-based network access control</li>
      <li><strong>WPA3</strong>: Securing wireless networks</li>
    </ul>
  `,
  examples: [
    {
      title: "Firewall Configuration",
      description: "Basic iptables firewall configuration for Linux.",
      language: "bash",
      code: '#!/bin/bash\n# Basic iptables firewall setup\n\n# Flush existing rules\niptables -F\niptables -X\n\n# Set default policies\niptables -P INPUT DROP\niptables -P FORWARD DROP\niptables -P OUTPUT ACCEPT\n\n# Allow loopback traffic\niptables -A INPUT -i lo -j ACCEPT\n\n# Allow established and related connections\niptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\n\n# Allow SSH (port 22)\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\n\n# Allow HTTP and HTTPS\niptables -A INPUT -p tcp --dport 80 -j ACCEPT\niptables -A INPUT -p tcp --dport 443 -j ACCEPT\n\n# Allow ICMP (ping)\niptables -A INPUT -p icmp -j ACCEPT\n\n# Log dropped packets\niptables -A INPUT -j LOG --log-prefix "IPTABLES-DROPPED: " --log-level 4\n\n# Save rules\niptables-save > /etc/iptables/rules.v4',
    },
    {
      title: "Network Scanning and Enumeration",
      description: "Using Nmap for network discovery and service enumeration.",
      language: "bash",
      code: "# Basic network scan\nnmap -sn 192.168.1.0/24\n\n# Detailed scan of a specific host\nnmap -sV -sC -O -p- 192.168.1.10\n\n# Scan for vulnerable services\nnmap --script vuln 192.168.1.10",
    },
    {
      title: "Packet Capture and Analysis",
      description: "Using tcpdump to capture and analyze network traffic.",
      language: "bash",
      code: "# Capture traffic on interface eth0\ntcpdump -i eth0 -w capture.pcap\n\n# Capture only HTTP traffic\ntcpdump -i eth0 -n 'port 80' -w http_traffic.pcap\n\n# Analyze captured traffic\ntcpdump -r capture.pcap -n -A | grep 'User-Agent'",
    },
  ],
}

