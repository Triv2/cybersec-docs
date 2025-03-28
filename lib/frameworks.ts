import { Shield, Target, AlertTriangle, FileText, Database, Lock } from "lucide-react"

export interface Framework {
  id: string
  name: string
  description: string
  organization: string
  website: string
  type: "Threat Intelligence" | "Risk Management" | "Compliance" | "Security Controls" | "Incident Response"
  icon: any
}

export interface FrameworkDetail extends Framework {
  overview: string
  components: {
    name: string
    description: string
  }[]
  benefits: string[]
  implementation: string[]
  resources: {
    title: string
    url: string
    type: "Documentation" | "Tool" | "Guide" | "Training" | "Community"
  }[]
}

export const frameworks: Framework[] = [
  {
    id: "mitre-attack",
    name: "MITRE ATT&CK",
    description:
      "A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations",
    organization: "MITRE Corporation",
    website: "https://attack.mitre.org/",
    type: "Threat Intelligence",
    icon: Target,
  },
  {
    id: "nist-csf",
    name: "NIST Cybersecurity Framework",
    description:
      "A voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk",
    organization: "National Institute of Standards and Technology",
    website: "https://www.nist.gov/cyberframework",
    type: "Risk Management",
    icon: Shield,
  },
  {
    id: "car",
    name: "Cyber Analytics Repository (CAR)",
    description: "A knowledge base of analytics developed by MITRE based on the MITRE ATT&CK adversary model",
    organization: "MITRE Corporation",
    website: "https://car.mitre.org/",
    type: "Threat Intelligence",
    icon: Database,
  },
  {
    id: "nist-800-53",
    name: "NIST SP 800-53",
    description: "Security and Privacy Controls for Information Systems and Organizations",
    organization: "National Institute of Standards and Technology",
    website: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    type: "Security Controls",
    icon: FileText,
  },
  {
    id: "iso-27001",
    name: "ISO/IEC 27001",
    description: "International standard for information security management systems (ISMS)",
    organization: "International Organization for Standardization",
    website: "https://www.iso.org/isoiec-27001-information-security.html",
    type: "Compliance",
    icon: Lock,
  },
  {
    id: "cis-controls",
    name: "CIS Controls",
    description: "A set of prioritized actions that collectively form a defense-in-depth approach to cybersecurity",
    organization: "Center for Internet Security",
    website: "https://www.cisecurity.org/controls/",
    type: "Security Controls",
    icon: Shield,
  },
  {
    id: "nist-incident-response",
    name: "NIST Incident Response Framework",
    description: "A structured approach to handling security incidents, breaches, and cybersecurity events",
    organization: "National Institute of Standards and Technology",
    website: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
    type: "Incident Response",
    icon: AlertTriangle,
  },
]

export const frameworkDetails: Record<string, FrameworkDetail> = {
  "mitre-attack": {
    id: "mitre-attack",
    name: "MITRE ATT&CK",
    description:
      "A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations",
    organization: "MITRE Corporation",
    website: "https://attack.mitre.org/",
    type: "Threat Intelligence",
    icon: Target,
    overview: `
      <p>MITRE ATT&CK® (Adversarial Tactics, Techniques, and Common Knowledge) is a curated knowledge base and model for cyber adversary behavior, reflecting the various phases of an adversary's attack lifecycle and the platforms they are known to target. It is a comprehensive matrix of tactics and techniques used by threat actors, organized by attack stages, platforms, and domains.</p>
      
      <p>ATT&CK is useful for understanding security risk against known adversary behavior, for planning security improvements, and verifying defenses work as expected. The framework is widely used by security practitioners, vendors, and organizations of all sizes to improve their security posture and develop threat models.</p>
    `,
    components: [
      {
        name: "Tactics",
        description:
          "The tactical goals of an adversary, representing the 'why' of an ATT&CK technique (e.g., Initial Access, Execution, Persistence)",
      },
      {
        name: "Techniques",
        description:
          "The 'how' of an attack, representing the actions adversaries take to achieve their tactical goals",
      },
      {
        name: "Sub-techniques",
        description: "More specific descriptions of adversary behavior used to achieve a particular technique",
      },
      {
        name: "Procedures",
        description: "Specific implementations of techniques used by adversaries",
      },
      {
        name: "Groups",
        description: "Known adversary groups that have been tracked and documented",
      },
      {
        name: "Software",
        description: "Tools, malware, and utilities used by adversaries",
      },
      {
        name: "Mitigations",
        description:
          "Security concepts and classes of technologies that can be used to prevent techniques from being successfully executed",
      },
      {
        name: "Data Sources",
        description: "Sources of information that can be used to identify adversary activities",
      },
    ],
    benefits: [
      "Provides a common language for describing adversary behavior",
      "Helps organizations prioritize security improvements based on real-world threats",
      "Enables more effective communication between technical and non-technical stakeholders",
      "Supports the development of threat intelligence and security operations",
      "Facilitates the creation of adversary emulation plans for red team exercises",
      "Helps map defensive capabilities to specific adversary techniques",
    ],
    implementation: [
      "Identify the ATT&CK matrices relevant to your environment (Enterprise, Mobile, ICS)",
      "Map your existing security controls to ATT&CK techniques",
      "Identify gaps in your security posture",
      "Prioritize security improvements based on threat intelligence and risk assessment",
      "Develop detection and response capabilities for high-priority techniques",
      "Integrate ATT&CK into security operations, threat hunting, and incident response processes",
      "Use ATT&CK for red team exercises and adversary emulation",
    ],
    resources: [
      {
        title: "MITRE ATT&CK Website",
        url: "https://attack.mitre.org/",
        type: "Documentation",
      },
      {
        title: "ATT&CK Navigator",
        url: "https://mitre-attack.github.io/attack-navigator/",
        type: "Tool",
      },
      {
        title: "Getting Started with ATT&CK",
        url: "https://attack.mitre.org/resources/getting-started/",
        type: "Guide",
      },
      {
        title: "ATT&CK Training",
        url: "https://attack.mitre.org/resources/training/",
        type: "Training",
      },
      {
        title: "ATT&CK Community",
        url: "https://medium.com/mitre-attack",
        type: "Community",
      },
    ],
  },
  "nist-csf": {
    id: "nist-csf",
    name: "NIST Cybersecurity Framework",
    description:
      "A voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk",
    organization: "National Institute of Standards and Technology",
    website: "https://www.nist.gov/cyberframework",
    type: "Risk Management",
    icon: Shield,
    overview: `
      <p>The NIST Cybersecurity Framework (CSF) provides a policy framework of computer security guidance for how private sector organizations can assess and improve their ability to prevent, detect, and respond to cyber attacks. The framework provides a high-level taxonomy of cybersecurity outcomes and a methodology to assess and manage those outcomes.</p>
      
      <p>Originally aimed at operators of critical infrastructure, the framework is now being used by a wide range of organizations across all sectors. It provides organizations with a structure for assessing and improving their cybersecurity posture, managing risk, and enabling communication among both internal and external stakeholders.</p>
    `,
    components: [
      {
        name: "Framework Core",
        description:
          "A set of cybersecurity activities, outcomes, and references organized around five functions: Identify, Protect, Detect, Respond, and Recover",
      },
      {
        name: "Framework Implementation Tiers",
        description:
          "Provides context on how an organization views cybersecurity risk and the processes in place to manage that risk, ranging from Partial (Tier 1) to Adaptive (Tier 4)",
      },
      {
        name: "Framework Profile",
        description:
          "Represents the outcomes based on business needs that an organization has selected from the Framework Categories and Subcategories",
      },
      {
        name: "Identify Function",
        description:
          "Develop organizational understanding to manage cybersecurity risk to systems, assets, data, and capabilities",
      },
      {
        name: "Protect Function",
        description:
          "Develop and implement appropriate safeguards to ensure delivery of critical infrastructure services",
      },
      {
        name: "Detect Function",
        description: "Develop and implement appropriate activities to identify the occurrence of a cybersecurity event",
      },
      {
        name: "Respond Function",
        description:
          "Develop and implement appropriate activities to take action regarding a detected cybersecurity event",
      },
      {
        name: "Recover Function",
        description:
          "Develop and implement appropriate activities to maintain plans for resilience and to restore any capabilities or services that were impaired due to a cybersecurity event",
      },
    ],
    benefits: [
      "Provides a common language for understanding, managing, and expressing cybersecurity risk",
      "Helps organizations identify and prioritize actions for reducing cybersecurity risk",
      "Enables communication of cybersecurity requirements with stakeholders, including partners and service providers",
      "Assists in identifying gaps in an organization's cybersecurity practices",
      "Provides a flexible and risk-based approach that can be customized to different types and sizes of organizations",
      "Complements existing business and cybersecurity operations",
    ],
    implementation: [
      "Create a current profile by identifying which category and subcategory outcomes from the Framework Core are currently being achieved",
      "Conduct a risk assessment to identify and prioritize cybersecurity risks",
      "Create a target profile focused on the assessment of the Framework Categories and Subcategories describing the organization's desired cybersecurity outcomes",
      "Identify gaps between the current profile and the target profile",
      "Develop an action plan to address the gaps",
      "Implement the action plan",
      "Continuously monitor and update the profiles as the organization's risk landscape evolves",
    ],
    resources: [
      {
        title: "NIST Cybersecurity Framework Website",
        url: "https://www.nist.gov/cyberframework",
        type: "Documentation",
      },
      {
        title: "NIST CSF Reference Tool",
        url: "https://www.nist.gov/cyberframework/framework",
        type: "Tool",
      },
      {
        title: "NIST CSF Implementation Guide",
        url: "https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf",
        type: "Guide",
      },
      {
        title: "NIST CSF Online Learning",
        url: "https://www.nist.gov/cyberframework/online-learning",
        type: "Training",
      },
      {
        title: "NIST CSF Success Stories",
        url: "https://www.nist.gov/cyberframework/success-stories",
        type: "Community",
      },
    ],
  },
  car: {
    id: "car",
    name: "Cyber Analytics Repository (CAR)",
    description: "A knowledge base of analytics developed by MITRE based on the MITRE ATT&CK adversary model",
    organization: "MITRE Corporation",
    website: "https://car.mitre.org/",
    type: "Threat Intelligence",
    icon: Database,
    overview: `
      <p>The Cyber Analytics Repository (CAR) is a knowledge base of analytics developed by MITRE based on the MITRE ATT&CK® adversary model. CAR defines a data model that is leveraged in its pseudocode representations, but also includes implementations directly targeted at specific tools (e.g., Splunk, EQL) in its analytics. With respect to coverage, CAR is focused on providing a set of validated and well-explained analytics, in particular with regards to their operating theory and rationale.</p>
      
      <p>CAR analytics are designed to detect the adversary behaviors in ATT&CK. CAR is useful for defensive cyber operations, hunt teams, red teams, and security architects. It provides a framework for sharing analytics with a common notation, allowing for consistency and reducing duplication of effort.</p>
    `,
    components: [
      {
        name: "Analytics",
        description:
          "Definitions of analytics that detect specific ATT&CK techniques, including pseudocode and implementations for specific platforms",
      },
      {
        name: "Data Model",
        description:
          "A common data model that allows for the definition of pseudocode that can be implemented in different tools",
      },
      {
        name: "Sensors",
        description:
          "Definitions of data collection mechanisms that can be used to gather the data needed for analytics",
      },
      {
        name: "Fields",
        description: "Specific data fields within the data model that are used in analytics",
      },
      {
        name: "Implementations",
        description: "Specific implementations of analytics for tools like Splunk, EQL, and others",
      },
      {
        name: "ATT&CK Mappings",
        description: "Mappings between CAR analytics and ATT&CK techniques and sub-techniques",
      },
    ],
    benefits: [
      "Provides a repository of analytics that detect specific adversary behaviors",
      "Maps analytics to ATT&CK techniques for comprehensive coverage",
      "Includes pseudocode and specific implementations for various platforms",
      "Explains the theory and rationale behind each analytic",
      "Supports a common notation for sharing analytics",
      "Helps organizations prioritize detection capabilities based on ATT&CK coverage",
    ],
    implementation: [
      "Review the CAR analytics to identify those relevant to your environment and threat model",
      "Map the analytics to your existing detection capabilities to identify gaps",
      "Implement selected analytics in your security monitoring tools",
      "Test the analytics to ensure they work as expected in your environment",
      "Tune the analytics to reduce false positives and improve detection capabilities",
      "Continuously update and refine analytics based on new threat intelligence and changes in your environment",
    ],
    resources: [
      {
        title: "CAR Website",
        url: "https://car.mitre.org/",
        type: "Documentation",
      },
      {
        title: "CAR Analytics",
        url: "https://car.mitre.org/analytics/",
        type: "Tool",
      },
      {
        title: "CAR Data Model",
        url: "https://car.mitre.org/data_model/",
        type: "Documentation",
      },
      {
        title: "CAR GitHub Repository",
        url: "https://github.com/mitre-attack/car",
        type: "Community",
      },
      {
        title: "MITRE ATT&CK",
        url: "https://attack.mitre.org/",
        type: "Documentation",
      },
    ],
  },
  "nist-800-53": {
    id: "nist-800-53",
    name: "NIST SP 800-53",
    description: "Security and Privacy Controls for Information Systems and Organizations",
    organization: "National Institute of Standards and Technology",
    website: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    type: "Security Controls",
    icon: FileText,
    overview: `
      <p>NIST Special Publication 800-53 provides a catalog of security and privacy controls for federal information systems and organizations. It is published by the National Institute of Standards and Technology, which creates and promotes the standards used by federal agencies to implement the Federal Information Security Management Act (FISMA).</p>
      
      <p>While primarily designed for federal government information systems, NIST SP 800-53 is widely used in the private sector as a comprehensive framework for implementing security controls. The publication is regularly updated to address emerging threats and changing technologies.</p>
    `,
    components: [
      {
        name: "Control Families",
        description:
          "Groupings of related security controls (e.g., Access Control, Audit and Accountability, Configuration Management)",
      },
      {
        name: "Security Controls",
        description:
          "Safeguards or countermeasures prescribed to protect the confidentiality, integrity, and availability of information systems",
      },
      {
        name: "Control Enhancements",
        description:
          "Additional functionality or increased strength for a control, providing greater protection capabilities",
      },
      {
        name: "Baseline Controls",
        description:
          "Starting points for the security control selection process, representing the minimum controls required for low, moderate, and high-impact systems",
      },
      {
        name: "Control Parameters",
        description: "Parts of a control or control enhancement that provide flexibility in implementation",
      },
      {
        name: "Supplemental Guidance",
        description: "Additional information to consider when implementing security controls",
      },
    ],
    benefits: [
      "Provides a comprehensive catalog of security and privacy controls",
      "Offers flexibility in control selection and implementation",
      "Supports a risk-based approach to security",
      "Facilitates compliance with regulatory requirements",
      "Enables consistent security implementations across organizations",
      "Addresses both traditional and advanced persistent threats",
    ],
    implementation: [
      "Categorize information systems based on impact levels (low, moderate, high)",
      "Select the appropriate security control baseline based on the categorization",
      "Implement security controls with consideration for organization-specific conditions",
      "Assess the effectiveness of the implemented controls",
      "Authorize the information system for operation based on risk determination",
      "Monitor security controls on an ongoing basis",
      "Maintain documentation of the security control implementation",
    ],
    resources: [
      {
        title: "NIST SP 800-53 Rev. 5",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
        type: "Documentation",
      },
      {
        title: "NIST SP 800-53 Controls Search",
        url: "https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/release-search",
        type: "Tool",
      },
      {
        title: "NIST SP 800-53 Implementation Guide",
        url: "https://csrc.nist.gov/publications/detail/sp/800-53a/rev-5/final",
        type: "Guide",
      },
      {
        title: "NIST Risk Management Framework",
        url: "https://csrc.nist.gov/projects/risk-management/rmf-overview",
        type: "Documentation",
      },
      {
        title: "NIST Computer Security Resource Center",
        url: "https://csrc.nist.gov/",
        type: "Community",
      },
    ],
  },
  "iso-27001": {
    id: "iso-27001",
    name: "ISO/IEC 27001",
    description: "International standard for information security management systems (ISMS)",
    organization: "International Organization for Standardization",
    website: "https://www.iso.org/isoiec-27001-information-security.html",
    type: "Compliance",
    icon: Lock,
    overview: `
      <p>ISO/IEC 27001 is an international standard for managing information security. It specifies the requirements for establishing, implementing, maintaining, and continually improving an information security management system (ISMS) within the context of the organization's overall business risks.</p>
      
      <p>The standard adopts a process approach for establishing, implementing, operating, monitoring, reviewing, maintaining, and improving an organization's ISMS. It is designed to ensure the selection of adequate and proportionate security controls that protect information assets and give confidence to interested parties.</p>
    `,
    components: [
      {
        name: "ISMS Requirements",
        description: "Clauses 4-10 of the standard that specify the requirements for an ISMS",
      },
      {
        name: "Annex A Controls",
        description: "114 controls organized into 14 sections that can be implemented as part of an ISMS",
      },
      {
        name: "Risk Assessment",
        description: "Process for identifying, analyzing, and evaluating information security risks",
      },
      {
        name: "Risk Treatment",
        description: "Process for selecting and implementing measures to modify risk",
      },
      {
        name: "Statement of Applicability",
        description: "Document that describes the controls that are relevant and applicable to the organization's ISMS",
      },
      {
        name: "Management Review",
        description:
          "Regular review of the ISMS by top management to ensure its continuing suitability, adequacy, and effectiveness",
      },
    ],
    benefits: [
      "Provides a systematic approach to managing sensitive company information",
      "Helps manage information security risks in a structured manner",
      "Demonstrates commitment to information security to customers and stakeholders",
      "Facilitates compliance with legal and regulatory requirements",
      "Can lead to certification by an accredited certification body",
      "Improves organizational resilience to cyber threats",
    ],
    implementation: [
      "Define the scope of the ISMS",
      "Develop an information security policy",
      "Define a risk assessment methodology",
      "Identify and assess information security risks",
      "Select and implement controls to address identified risks",
      "Develop a Statement of Applicability",
      "Implement the selected controls",
      "Train staff on information security awareness",
      "Monitor and review the effectiveness of the ISMS",
      "Conduct internal audits and management reviews",
      "Implement corrective actions as needed",
      "Seek certification from an accredited certification body (if desired)",
    ],
    resources: [
      {
        title: "ISO/IEC 27001 Standard",
        url: "https://www.iso.org/isoiec-27001-information-security.html",
        type: "Documentation",
      },
      {
        title: "ISO 27001 Toolkit",
        url: "https://www.iso27001security.com/",
        type: "Tool",
      },
      {
        title: "ISO 27001 Implementation Guide",
        url: "https://www.iso.org/publication/PUB100440.html",
        type: "Guide",
      },
      {
        title: "ISO 27001 Training",
        url: "https://www.iso.org/iso-training.html",
        type: "Training",
      },
      {
        title: "ISO 27001 Forum",
        url: "https://www.iso27001forum.com/",
        type: "Community",
      },
    ],
  },
  "cis-controls": {
    id: "cis-controls",
    name: "CIS Controls",
    description: "A set of prioritized actions that collectively form a defense-in-depth approach to cybersecurity",
    organization: "Center for Internet Security",
    website: "https://www.cisecurity.org/controls/",
    type: "Security Controls",
    icon: Shield,
    overview: `
      <p>The CIS Controls are a prioritized set of actions that collectively form a defense-in-depth approach to cybersecurity. They are developed by a community of IT experts who apply their first-hand experience to create these globally recognized best practices for securing IT systems and data against the most pervasive attacks.</p>
      
      <p>The controls are divided into three categories (Basic, Foundational, and Organizational) based on their implementation priority. They are regularly updated to address evolving threats and technologies, with the current version being CIS Controls v8.</p>
    `,
    components: [
      {
        name: "Implementation Groups",
        description:
          "Categories that help organizations prioritize implementation based on their resources and cybersecurity expertise (IG1, IG2, IG3)",
      },
      {
        name: "Basic Controls",
        description:
          "Essential controls that should be implemented in every organization to establish a foundation for cybersecurity",
      },
      {
        name: "Foundational Controls",
        description:
          "Technical best practices that provide clear security benefits and are a step up in complexity from the Basic Controls",
      },
      {
        name: "Organizational Controls",
        description:
          "Controls focused on people and processes that ensure the success of the Basic and Foundational Controls",
      },
      {
        name: "Safeguards",
        description: "Specific actions within each control that organizations should implement",
      },
      {
        name: "CIS Benchmarks",
        description:
          "Detailed configuration guidelines for specific technologies that support the implementation of the CIS Controls",
      },
    ],
    benefits: [
      "Provides a prioritized approach to cybersecurity based on real-world threats",
      "Offers a clear roadmap for organizations of all sizes to improve their security posture",
      "Maps to major compliance frameworks and regulatory requirements",
      "Developed and maintained by a community of cybersecurity experts",
      "Regularly updated to address evolving threats and technologies",
      "Includes implementation guidance and tools to support adoption",
    ],
    implementation: [
      "Determine your organization's Implementation Group (IG1, IG2, or IG3) based on resources and risk profile",
      "Conduct a gap assessment to identify which controls are already implemented",
      "Prioritize implementation of missing controls based on your Implementation Group",
      "Develop an implementation plan with timelines and responsibilities",
      "Implement the controls, starting with the Basic Controls",
      "Measure the effectiveness of implemented controls",
      "Continuously monitor and improve your security posture",
      "Regularly reassess your implementation as threats and technologies evolve",
    ],
    resources: [
      {
        title: "CIS Controls Website",
        url: "https://www.cisecurity.org/controls/",
        type: "Documentation",
      },
      {
        title: "CIS Controls Self Assessment Tool (CSAT)",
        url: "https://www.cisecurity.org/blog/cis-csat-free-tool-assessing-implementation-of-cis-controls/",
        type: "Tool",
      },
      {
        title: "CIS Controls Implementation Guide",
        url: "https://www.cisecurity.org/white-papers/cis-controls-implementation-guide-for-small-and-medium-enterprises-smes/",
        type: "Guide",
      },
      {
        title: "CIS Controls Navigator",
        url: "https://www.cisecurity.org/controls/cis-controls-navigator/",
        type: "Tool",
      },
      {
        title: "CIS Community",
        url: "https://www.cisecurity.org/communities/",
        type: "Community",
      },
    ],
  },
  "nist-incident-response": {
    id: "nist-incident-response",
    name: "NIST Incident Response Framework",
    description: "A structured approach to handling security incidents, breaches, and cybersecurity events",
    organization: "National Institute of Standards and Technology",
    website: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
    type: "Incident Response",
    icon: AlertTriangle,
    overview: `
      <p>The NIST Incident Response Framework, detailed in NIST Special Publication 800-61, provides guidelines for incident handling, particularly for analyzing incident-related data and determining the appropriate response to each incident. The framework emphasizes the importance of establishing procedures for performing incident handling and reporting activities effectively.</p>
      
      <p>The framework is designed to help organizations minimize the damage from incidents and prevent similar incidents from occurring in the future. It provides a structured approach that can be customized to meet the specific needs and capabilities of different organizations.</p>
    `,
    components: [
      {
        name: "Preparation",
        description:
          "Establishing an incident response capability and preventing incidents by ensuring systems, networks, and applications are sufficiently secure",
      },
      {
        name: "Detection and Analysis",
        description:
          "Detecting and analyzing precursors and indicators of incidents, categorizing incidents, and prioritizing response actions",
      },
      {
        name: "Containment, Eradication, and Recovery",
        description:
          "Containing an incident to limit its damage, identifying and eliminating its components, and restoring systems to normal operation",
      },
      {
        name: "Post-Incident Activity",
        description: "Learning from incidents to improve the incident handling process and overall security posture",
      },
      {
        name: "Incident Response Team",
        description:
          "A group of individuals responsible for investigating suspicious events, determining if they are incidents, and coordinating the response",
      },
      {
        name: "Incident Documentation",
        description:
          "Records of incident details, actions taken, and lessons learned to support future incident handling and legal proceedings",
      },
    ],
    benefits: [
      "Provides a structured approach to incident handling",
      "Helps minimize the damage from incidents",
      "Enables more effective coordination during incident response",
      "Facilitates learning from incidents to prevent future occurrences",
      "Supports compliance with regulatory requirements for incident reporting",
      "Improves overall security posture through continuous improvement",
    ],
    implementation: [
      "Establish an incident response team with clearly defined roles and responsibilities",
      "Develop incident response procedures based on the NIST framework",
      "Create incident classification and prioritization schemes",
      "Implement tools and resources for incident detection and analysis",
      "Establish communication channels and reporting procedures",
      "Conduct regular training and exercises to test incident response capabilities",
      "Document lessons learned from incidents and update procedures accordingly",
      "Regularly review and update the incident response plan",
    ],
    resources: [
      {
        title: "NIST SP 800-61 Rev. 2",
        url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
        type: "Documentation",
      },
      {
        title: "NIST Incident Response Playbooks",
        url: "https://csrc.nist.gov/publications/detail/sp/800-184/final",
        type: "Guide",
      },
      {
        title: "NIST Cybersecurity Framework",
        url: "https://www.nist.gov/cyberframework",
        type: "Documentation",
      },
      {
        title: "NIST Computer Security Incident Handling Guide",
        url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf",
        type: "Guide",
      },
      {
        title: "NIST Computer Security Resource Center",
        url: "https://csrc.nist.gov/",
        type: "Community",
      },
    ],
  },
}

export function getFramework(id: string): Framework | undefined {
  return frameworks.find((framework) => framework.id === id)
}

export function getFrameworkDetail(id: string): FrameworkDetail | undefined {
  return frameworkDetails[id]
}

export function getAllFrameworks(): Framework[] {
  return frameworks
}

export function getFrameworksByType(type: string): Framework[] {
  return frameworks.filter((framework) => framework.type === type)
}

