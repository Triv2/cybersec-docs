export const applicationSecurityContent = {
  theory: `
    <h2>Introduction to Application Security</h2>
    <p>
      Application security encompasses measures taken throughout an application's lifecycle to prevent security vulnerabilities through secure design, development practices, tools, and methods. It focuses on protecting applications from threats by identifying and fixing vulnerabilities in code and architecture.
    </p>

    <h3>Secure Development Lifecycle</h3>
    <p>Integrating security throughout the development process:</p>
    <ul>
      <li><strong>Requirements Phase</strong>: Security requirements, threat modeling</li>
      <li><strong>Design Phase</strong>: Secure architecture, design reviews</li>
      <li><strong>Implementation Phase</strong>: Secure coding, code reviews</li>
      <li><strong>Testing Phase</strong>: Security testing, vulnerability scanning</li>
      <li><strong>Deployment Phase</strong>: Secure configuration, hardening</li>
      <li><strong>Maintenance Phase</strong>: Patch management, incident response</li>
      <li><strong>DevSecOps</strong>: Integrating security into CI/CD pipelines</li>
    </ul>

    <h3>Common Application Vulnerabilities</h3>
    <p>Understanding key vulnerabilities helps in prevention:</p>
    <ul>
      <li><strong>Injection Flaws</strong>: SQL, NoSQL, OS command, LDAP injection</li>
      <li><strong>Broken Authentication</strong>: Session management, credential stuffing</li>
      <li><strong>Sensitive Data Exposure</strong>: Insufficient encryption, data leakage</li>
      <li><strong>XML External Entities (XXE)</strong>: Processing untrusted XML</li>
      <li><strong>Broken Access Control</strong>: Improper authorization checks</li>
      <li><strong>Security Misconfiguration</strong>: Default settings, verbose errors</li>
      <li><strong>Cross-Site Scripting (XSS)</strong>: Reflected, stored, DOM-based</li>
      <li><strong>Insecure Deserialization</strong>: Processing untrusted data</li>
      <li><strong>Using Components with Known Vulnerabilities</strong>: Outdated libraries</li>
      <li><strong>Insufficient Logging & Monitoring</strong>: Lack of detection capabilities</li>
    </ul>

    <h3>Security Testing Approaches</h3>
    <p>Various testing methodologies ensure application security:</p>
    <ul>
      <li><strong>Static Application Security Testing (SAST)</strong>: Analyzing source code</li>
      <li><strong>Dynamic Application Security Testing (DAST)</strong>: Testing running applications</li>
      <li><strong>Interactive Application Security Testing (IAST)</strong>: Combining SAST and DAST</li>
      <li><strong>Software Composition Analysis (SCA)</strong>: Identifying vulnerable components</li>
      <li><strong>Penetration Testing</strong>: Simulating attacks on applications</li>
      <li><strong>Fuzz Testing</strong>: Providing invalid, unexpected inputs</li>
      <li><strong>Security Code Review</strong>: Manual inspection of code</li>
    </ul>
  `,
  examples: [
    {
      title: "Input Validation",
      description: "Example of proper input validation in JavaScript.",
      language: "javascript",
      code: "// Simple input validation function\nfunction validateInput(input) {\n  // Check if input is empty\n  if (!input || input.trim() === '') {\n    return { valid: false, error: 'Input cannot be empty' };\n  }\n  \n  // Check for SQL injection patterns\n  const sqlPatterns = ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', '--', ';'];\n  const containsSqlPattern = sqlPatterns.some(pattern => \n    input.toUpperCase().includes(pattern)\n  );\n  \n  if (containsSqlPattern) {\n    return { valid: false, error: 'Input contains potentially malicious SQL patterns' };\n  }\n  \n  // Check for XSS patterns\n  if (input.includes('<script>') || input.includes('javascript:')) {\n    return { valid: false, error: 'Input contains potentially malicious script patterns' };\n  }\n  \n  return { valid: true };\n}",
    },
    {
      title: "Secure Password Storage",
      description: "Example of secure password hashing in Python.",
      language: "python",
      code: "import hashlib\nimport os\nimport binascii\n\ndef hash_password(password):\n    \"\"\"Hash a password for storing.\"\"\"\n    # Generate a random salt\n    salt = os.urandom(32)\n    # Use PBKDF2 with HMAC-SHA256, 100,000 iterations\n    password_hash = hashlib.pbkdf2_hmac(\n        'sha256',\n        password.encode('utf-8'),\n        salt,\n        100000\n    )\n    # Return salt and hash as hex strings\n    return {\n        'salt': binascii.hexlify(salt).decode('utf-8'),\n        'hash': binascii.hexlify(password_hash).decode('utf-8')\n    }\n\ndef verify_password(stored_password, provided_password):\n    \"\"\"Verify a stored password against one provided by user\"\"\"\n    # Convert hex strings back to bytes\n    salt = binascii.unhexlify(stored_password['salt'])\n    stored_hash = binascii.unhexlify(stored_password['hash'])\n    # Hash the provided password with the same salt\n    password_hash = hashlib.pbkdf2_hmac(\n        'sha256',\n        provided_password.encode('utf-8'),\n        salt,\n        100000\n    )\n    # Compare the hashes\n    return password_hash == stored_hash",
    },
    {
      title: "Content Security Policy",
      description: "Example of implementing Content Security Policy headers.",
      language: "javascript",
      code: "// Express.js middleware for setting CSP headers\nconst helmet = require('helmet');\nconst express = require('express');\nconst app = express();\n\n// Basic CSP configuration\napp.use(helmet.contentSecurityPolicy({\n  directives: {\n    defaultSrc: [\"'self'\"],  // Default to only allowing content from same origin\n    scriptSrc: [\"'self'\", \"'unsafe-inline'\", 'trusted-cdn.com'],  // Scripts from same origin and trusted CDN\n    styleSrc: [\"'self'\", \"'unsafe-inline'\", 'trusted-cdn.com'],  // Styles from same origin and trusted CDN\n    imgSrc: [\"'self'\", 'data:', 'trusted-cdn.com'],  // Images from same origin, data URIs, and trusted CDN\n    connectSrc: [\"'self'\", 'api.example.com'],  // Connect to same origin and API\n    fontSrc: [\"'self'\", 'trusted-cdn.com'],  // Fonts from same origin and trusted CDN\n    objectSrc: [\"'none'\"],  // Don't allow any object sources\n    mediaSrc: [\"'self'\"],  // Media from same origin\n    frameSrc: [\"'none'\"],  // Don't allow any frames\n    reportUri: '/csp-violation-report'  // Endpoint for CSP violation reports\n  }\n}));",
    },
  ],
}

