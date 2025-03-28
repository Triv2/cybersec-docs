export const grcContent = {
  theory: `
    <h2>Introduction to GRC</h2>
    <p>
      Governance, Risk Management, and Compliance (GRC) is an integrated approach to organizational governance that ensures an entity acts ethically and in accordance with its risk appetite, internal policies, and external regulations.
    </p>

    <h3>Governance</h3>
    <p>
      Governance involves establishing policies, processes, and controls to ensure effective management and oversight:
    </p>
    <ul>
      <li><strong>Corporate Governance</strong>: Board structure, executive responsibilities, and oversight mechanisms</li>
      <li><strong>IT Governance</strong>: Frameworks like COBIT (Control Objectives for Information and Related Technologies)</li>
      <li><strong>Data Governance</strong>: Policies for data quality, management, and protection</li>
      <li><strong>Security Governance</strong>: Security policies, standards, and procedures</li>
    </ul>

    <h3>Risk Management</h3>
    <p>
      Risk management is the process of identifying, assessing, and controlling threats to an organization:
    </p>
    <ul>
      <li><strong>Risk Assessment</strong>: Identifying and evaluating potential risks</li>
      <li><strong>Risk Treatment</strong>: Accepting, avoiding, transferring, or mitigating identified risks</li>
      <li><strong>Risk Monitoring</strong>: Continuous tracking of risk indicators</li>
      <li><strong>Frameworks</strong>: ISO 31000, NIST Risk Management Framework, FAIR (Factor Analysis of Information Risk)</li>
    </ul>

    <h3>Compliance</h3>
    <p>
      Compliance ensures adherence to laws, regulations, standards, and internal policies:
    </p>
    <ul>
      <li><strong>Regulatory Compliance</strong>: GDPR, HIPAA, SOX, PCI DSS, etc.</li>
      <li><strong>Industry Standards</strong>: ISO 27001, NIST Cybersecurity Framework</li>
      <li><strong>Internal Policies</strong>: Company-specific rules and procedures</li>
      <li><strong>Compliance Monitoring</strong>: Audits, assessments, and continuous monitoring</li>
    </ul>
  `,
  examples: [
    {
      title: "Risk Assessment Matrix",
      description: "A simple risk assessment matrix for evaluating and prioritizing risks.",
      language: "markdown",
      code: "# Risk Assessment Matrix\n\n| Risk ID | Risk Description | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Strategy |\n|---------|------------------|-----------------|--------------|------------|---------------------|\n| R001    | Data breach      | 3               | 5            | 15         | Implement encryption, access controls, and regular security testing |\n| R002    | System downtime  | 4               | 4            | 16         | Implement redundancy, backup systems, and disaster recovery plans |\n| R003    | Regulatory non-compliance | 2 | 5 | 10 | Regular compliance audits, staff training, policy updates |",
    },
    {
      title: "Compliance Checklist",
      description: "A sample compliance checklist for PCI DSS requirements.",
      language: "markdown",
      code: "# PCI DSS Compliance Checklist\n\n## Requirement 1: Install and maintain a firewall configuration\n- [ ] 1.1 Establish firewall and router configuration standards\n- [ ] 1.2 Build firewall configuration that restricts connections\n- [ ] 1.3 Prohibit direct public access to DMZ\n- [ ] 1.4 Implement personal firewall software\n\n## Requirement 2: Do not use vendor-supplied defaults\n- [ ] 2.1 Change vendor defaults before installing system on network\n- [ ] 2.2 Develop configuration standards for all system components\n- [ ] 2.3 Encrypt all non-console administrative access\n- [ ] 2.4 Maintain inventory of system components",
    },
    {
      title: "Security Policy Template",
      description: "A template for creating an information security policy.",
      language: "markdown",
      code: "# Information Security Policy\n\n## 1. Purpose\nThis policy establishes guidelines for protecting the confidentiality, integrity, and availability of company information and systems.\n\n## 2. Scope\nThis policy applies to all employees, contractors, consultants, temporary staff, and other workers at Company XYZ.\n\n## 3. Policy Statements\n\n### 3.1 Access Control\n- Access to information systems must be granted based on the principle of least privilege\n- All access must be reviewed quarterly\n- Privileged access requires additional approval and monitoring\n\n### 3.2 Data Classification\n- Data must be classified as Public, Internal, Confidential, or Restricted\n- Each classification requires specific handling procedures\n\n### 3.3 Incident Response\n- All security incidents must be reported to the Security Team immediately\n- The Incident Response Plan must be followed for all security incidents",
    },
  ],
}

