export const digitalForensicsContent = {
  theory: `
    <h2>Introduction to Digital Forensics</h2>
    <p>
      Digital forensics involves the recovery and investigation of material found in digital devices, often in
      relation to computer crime. The term digital forensics was originally used as a synonym for computer
      forensics but has expanded to cover investigation of all devices capable of storing digital data.
    </p>

    <h3>The Digital Forensics Process</h3>
    <p>The digital forensics process typically follows these steps:</p>
    <ol>
      <li>
        <strong>Identification</strong>: Identifying potential sources of evidence
      </li>
      <li>
        <strong>Preservation</strong>: Isolating, securing and preserving the data
      </li>
      <li>
        <strong>Analysis</strong>: Reconstructing fragments of data and drawing conclusions
      </li>
      <li>
        <strong>Documentation</strong>: Creating a record of all visible data
      </li>
      <li>
        <strong>Presentation</strong>: Summarizing and providing explanation of conclusions
      </li>
    </ol>

    <h3>Types of Digital Forensics</h3>
    <ul>
      <li>
        <strong>Computer Forensics</strong>: Examination of computer systems and data
      </li>
      <li>
        <strong>Mobile Device Forensics</strong>: Recovery of digital evidence from mobile devices
      </li>
      <li>
        <strong>Network Forensics</strong>: Monitoring and analysis of computer network traffic
      </li>
      <li>
        <strong>Database Forensics</strong>: Study of databases and their metadata
      </li>
      <li>
        <strong>Email Forensics</strong>: Recovery and analysis of email evidence
      </li>
      <li>
        <strong>Memory Forensics</strong>: Analysis of volatile memory dumps
      </li>
      <li>
        <strong>Cloud Forensics</strong>: Investigation of data stored in cloud services
      </li>
    </ul>

    <h3>Legal Considerations</h3>
    <p>Digital forensics investigations must adhere to legal requirements to ensure evidence admissibility:</p>
    <ul>
      <li>
        <strong>Chain of Custody</strong>: Documenting who handled the evidence and when
      </li>
      <li>
        <strong>Data Privacy Laws</strong>: Compliance with regulations like GDPR, HIPAA, etc.
      </li>
      <li>
        <strong>Search and Seizure</strong>: Proper legal authorization before acquiring digital evidence
      </li>
      <li>
        <strong>Expert Testimony</strong>: Qualification requirements for presenting digital evidence in court
      </li>
    </ul>

    <h3>Anti-Forensics Techniques</h3>
    <p>Investigators must be aware of anti-forensics techniques that may be employed to hide evidence:</p>
    <ul>
      <li>
        <strong>Data Hiding</strong>: Steganography, alternate data streams, hidden partitions
      </li>
      <li>
        <strong>Data Obfuscation</strong>: Encryption, password protection
      </li>
      <li>
        <strong>Data Destruction</strong>: Secure deletion, physical destruction
      </li>
      <li>
        <strong>Timestomping</strong>: Manipulation of file metadata timestamps
      </li>
      <li>
        <strong>Trail Obfuscation</strong>: Use of proxies, VPNs, and anonymizing networks
      </li>
    </ul>

    <h3>Digital Forensics Tools</h3>
    <p>A variety of tools are used in digital forensics investigations:</p>
    <ul>
      <li>
        <strong>Disk Imaging Tools</strong>: FTK Imager, dd, dcfldd
      </li>
      <li>
        <strong>Forensic Analysis Suites</strong>: EnCase, Autopsy, The Sleuth Kit
      </li>
      <li>
        <strong>Memory Analysis Tools</strong>: Volatility, Rekall
      </li>
      <li>
        <strong>Network Forensics Tools</strong>: Wireshark, NetworkMiner
      </li>
      <li>
        <strong>Mobile Forensics Tools</strong>: Cellebrite UFED, Oxygen Forensic Detective
      </li>
      <li>
        <strong>Password Recovery Tools</strong>: Hashcat, John the Ripper
      </li>
    </ul>
  `,
  examples: [
    {
      title: "Disk Imaging",
      description:
        "Creating a forensic image of a disk is a fundamental step in digital forensics. Here's an example using the `dd` command:",
      language: "bash",
      code: "# Create a bit-by-bit copy of a disk\ndd if=/dev/sda of=/path/to/evidence.dd bs=4M status=progress\n\n# Create a forensic image with dcfldd (enhanced version of dd)\ndcfldd if=/dev/sda hash=sha256,md5 hashlog=hashes.txt of=/path/to/evidence.dd bs=4M",
    },
    {
      title: "File Carving",
      description:
        "File carving is the process of extracting data from a disk image without relying on the file system. Here's an example using Foremost:",
      language: "bash",
      code: "# Extract files from a disk image\nforemost -i evidence.dd -o recovered_files\n\n# Extract specific file types\nforemost -t jpg,pdf,doc -i evidence.dd -o recovered_files",
    },
    {
      title: "Memory Analysis",
      description:
        "Analyzing RAM can reveal running processes, network connections, and other volatile data. Here's an example using Volatility:",
      language: "bash",
      code: "# List running processes\nvolatility -f memory.dmp --profile=Win10x64_19041 pslist\n\n# Display network connections\nvolatility -f memory.dmp --profile=Win10x64_19041 netscan\n\n# Extract command history\nvolatility -f memory.dmp --profile=Win10x64_19041 cmdscan",
    },
    {
      title: "Timeline Analysis",
      description: "Creating a timeline of system events can help reconstruct user activity.",
      language: "bash",
      code: "# Create a bodyfile from a disk image\nfls -r -m / -o 2048 evidence.dd > bodyfile.txt\n\n# Generate a timeline from the bodyfile\nmactime -b bodyfile.txt -d > timeline.csv",
    },
    {
      title: "Steganography Detection",
      description: "Detecting hidden data within files using steganography detection tools.",
      language: "bash",
      code: "# Analyze an image for hidden data using Steghide\nsteghide info suspicious.jpg\n\n# Extract hidden data if found\nsteghide extract -sf suspicious.jpg -p password\n\n# Use StegDetect to detect steganography in JPEG images\nstegdetect -t jphs suspicious.jpg",
    },
  ],
}

