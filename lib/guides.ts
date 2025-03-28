export interface Guide {
  slug: string
  title: string
  content: string
}

export const guides: Record<string, Guide> = {
  introduction: {
    slug: "introduction",
    title: "Introduction to Cybersecurity",
    content: `
    <h2>What is Cybersecurity?</h2>
    <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.</p>
    
    <h2>Why is Cybersecurity Important?</h2>
    <p>In today's connected world, everyone benefits from advanced cyber defense programs. At an individual level, a cybersecurity attack can result in everything from identity theft, to extortion attempts, to the loss of important data like family photos. Everyone relies on critical infrastructure like power plants, hospitals, and financial service companies. Securing these and other organizations is essential to keeping our society functioning.</p>
    
    <h2>Core Areas of Cybersecurity</h2>
    <ul>
      <li><strong>Network Security:</strong> Protecting network infrastructure from unauthorized access, misuse, or theft.</li>
      <li><strong>Application Security:</strong> Keeping software and devices free of threats by designing secure applications.</li>
      <li><strong>Information Security:</strong> Protecting the integrity and privacy of data, both in storage and in transit.</li>
      <li><strong>Operational Security:</strong> Processes and decisions for handling and protecting data assets.</li>
      <li><strong>Disaster Recovery:</strong> How an organization responds to a cyber-security incident or any other event that causes the loss of operations or data.</li>
      <li><strong>End-user Education:</strong> Teaching users to delete suspicious email attachments, not plug in unidentified USB drives, and various other important lessons.</li>
    </ul>
    
    <h2>Common Cybersecurity Threats</h2>
    <ul>
      <li><strong>Malware:</strong> Malicious software such as viruses, trojans, and ransomware.</li>
      <li><strong>Phishing:</strong> Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.</li>
      <li><strong>Man-in-the-Middle Attacks:</strong> Eavesdropping on communication between two parties.</li>
      <li><strong>Denial-of-Service Attacks:</strong> Flooding systems, servers, or networks with traffic to exhaust resources and bandwidth.</li>
      <li><strong>SQL Injection:</strong> Inserting malicious code into SQL statements via web page input.</li>
      <li><strong>Zero-day Exploits:</strong> Attacking vulnerabilities before developers have had an opportunity to create a patch.</li>
    </ul>
    
    <h2>Cybersecurity Best Practices</h2>
    <ul>
      <li><strong>Use Strong Passwords:</strong> Create unique, complex passwords for different accounts.</li>
      <li><strong>Multi-Factor Authentication:</strong> Add an extra layer of security beyond just a password.</li>
      <li><strong>Keep Software Updated:</strong> Regularly update operating systems and applications to patch vulnerabilities.</li>
      <li><strong>Use Encryption:</strong> Encrypt sensitive data both in transit and at rest.</li>
      <li><strong>Regular Backups:</strong> Maintain regular backups of important data.</li>
      <li><strong>Security Awareness Training:</strong> Educate users about security risks and safe practices.</li>
    </ul>
    
    <h2>About This Documentation</h2>
    <p>This documentation aims to provide comprehensive information on various cybersecurity domains, tools, and techniques. Whether you're a beginner looking to understand the basics or an experienced professional seeking specific technical details, you'll find valuable resources throughout these pages.</p>
    `,
  },
  "how-to-use": {
    slug: "how-to-use",
    title: "How to Use This Documentation",
    content: `
    <h2>Navigation</h2>
    <p>This documentation is organized into several key sections:</p>
    <ul>
      <li><strong>Domains:</strong> Core cybersecurity areas like Digital Forensics, Penetration Testing, etc.</li>
      <li><strong>Tools:</strong> Categorized collections of cybersecurity tools with usage examples.</li>
      <li><strong>Guides:</strong> Instructional content on various cybersecurity topics.</li>
    </ul>
    
    <h2>Search Functionality</h2>
    <p>Use the search bar at the top of the page to quickly find specific content. You can search for domains, tools, techniques, or any keyword relevant to your needs. Press <kbd>⌘K</kbd> (Mac) or <kbd>Ctrl+K</kbd> (Windows/Linux) to quickly access the search dialog from anywhere in the documentation.</p>
    
    <h2>Domain Pages</h2>
    <p>Each domain page is divided into three main sections:</p>
    <ul>
      <li><strong>Theory:</strong> Comprehensive explanations of concepts and principles.</li>
      <li><strong>Examples:</strong> Practical code snippets and command examples.</li>
      <li><strong>Tools:</strong> Relevant tools for the domain with usage instructions.</li>
    </ul>
    
    <h2>Tool Pages</h2>
    <p>Tool pages provide:</p>
    <ul>
      <li>Tool descriptions and capabilities</li>
      <li>Installation instructions</li>
      <li>Common usage examples</li>
      <li>Links to official documentation</li>
    </ul>
    
    <h2>Code Examples</h2>
    <p>Throughout the documentation, you'll find code examples that you can copy and use. Each code block includes:</p>
    <ul>
      <li>Syntax highlighting for better readability</li>
      <li>A copy button to easily copy the code</li>
      <li>Comments explaining key parts of the code</li>
    </ul>
    
    <h2>Dark/Light Mode</h2>
    <p>Toggle between dark and light mode using the theme switcher in the top right corner of the sidebar. Your preference will be remembered for future visits.</p>
    
    <h2>Mobile Usage</h2>
    <p>This documentation is fully responsive and works well on mobile devices. The sidebar can be accessed by tapping the menu icon in the top left corner.</p>
    `,
  },
  contributing: {
    slug: "contributing",
    title: "Contributing to the Documentation",
    content: `
    <h2>How to Contribute</h2>
    <p>We welcome contributions from the cybersecurity community to help improve and expand this documentation. Here's how you can contribute:</p>
    
    <h3>GitHub Contributions</h3>
    <p>This documentation is maintained in a GitHub repository. You can contribute by:</p>
    <ol>
      <li>Forking the repository</li>
      <li>Creating a new branch for your changes</li>
      <li>Making your changes and committing them</li>
      <li>Submitting a pull request</li>
    </ol>
    
    <h3>Types of Contributions</h3>
    <ul>
      <li><strong>Content Additions:</strong> Add new domains, tools, or examples.</li>
      <li><strong>Content Improvements:</strong> Enhance existing content with more details or better explanations.</li>
      <li><strong>Code Examples:</strong> Add or improve code examples and commands.</li>
      <li><strong>Bug Fixes:</strong> Fix errors in content or code examples.</li>
      <li><strong>UI Improvements:</strong> Enhance the user interface and experience.</li>
    </ul>
    
    <h2>Content Guidelines</h2>
    <p>When contributing content, please follow these guidelines:</p>
    <ul>
      <li>Ensure accuracy and factual correctness of all information.</li>
      <li>Write clear, concise, and easy-to-understand content.</li>
      <li>Include practical examples where applicable.</li>
      <li>Properly cite sources and references.</li>
      <li>Follow the existing structure and formatting.</li>
    </ul>
    
    <h2>Code Example Guidelines</h2>
    <p>When contributing code examples:</p>
    <ul>
      <li>Ensure the code is functional and tested.</li>
      <li>Include comments to explain complex parts.</li>
      <li>Follow best practices and security guidelines.</li>
      <li>Specify the language or environment required.</li>
    </ul>
    
    <h2>Review Process</h2>
    <p>All contributions will go through a review process:</p>
    <ol>
      <li>Initial review by maintainers</li>
      <li>Feedback and requested changes (if necessary)</li>
      <li>Final approval and merging</li>
    </ol>
    
    <h2>Recognition</h2>
    <p>Contributors will be acknowledged in the documentation. Significant contributors may be invited to become maintainers.</p>
    
    <h2>Contact</h2>
    <p>If you have questions about contributing, please open an issue on GitHub or contact the maintainers directly.</p>
    `,
  },
}

export function getGuide(slug: string): Guide | undefined {
  return guides[slug]
}

export function getAllGuides(): Guide[] {
  return Object.values(guides)
}

