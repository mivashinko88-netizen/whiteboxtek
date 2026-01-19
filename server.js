const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Microsoft Security Technical Services Data
const securityData = {
  technologies: [
    {
      category: "Identity & Access",
      icon: "shield-lock",
      items: [
        { name: "Entra ID", description: "Identity and access management", highlight: true },
        { name: "Entra ID Protection", description: "Risk-based conditional access, identity threat detection", highlight: true },
        { name: "Entra Permissions Management", description: "Cloud permissions management (CIEM)" },
        { name: "Entra Verified ID", description: "Decentralized identity credentials" }
      ]
    },
    {
      category: "XDR (Extended Detection & Response)",
      icon: "radar",
      items: [
        { name: "Defender for Endpoint", description: "Endpoint protection (EDR)", highlight: true },
        { name: "Defender for Identity", description: "On-prem Active Directory threat detection", highlight: true },
        { name: "Defender for Office 365", description: "Email and collaboration security", highlight: true },
        { name: "Defender for Cloud Apps", description: "CASB, shadow IT discovery, app governance", highlight: true },
        { name: "Defender for IoT", description: "OT/IoT device security" }
      ]
    },
    {
      category: "Cloud Security",
      icon: "cloud-shield",
      items: [
        { name: "Defender for Cloud", description: "CSPM, CWPP across Azure/AWS/GCP", highlight: true },
        { name: "Defender for Servers", description: "Server workload protection" },
        { name: "Defender for Containers", description: "Container and Kubernetes security" },
        { name: "Defender for Storage", description: "Blob and file threat detection" },
        { name: "Defender for Databases", description: "SQL and Cosmos DB protection" },
        { name: "Defender for APIs", description: "API security posture" }
      ]
    },
    {
      category: "SIEM / SOAR",
      icon: "diagram-3",
      items: [
        { name: "Microsoft Sentinel", description: "Cloud-native SIEM + SOAR", highlight: true },
        { name: "Copilot for Security", description: "AI-assisted security operations" }
      ]
    }
  ],
  technicalServices: [
    {
      category: "Designated Engineering",
      description: "Embedded engineers assigned to your security environment",
      icon: "code-square",
      services: [
        {
          name: "Sentinel Designated Engineering",
          description: "Dedicated engineer for Sentinel deployment, content development, and optimization.",
          deliverables: [
            "Custom analytics rules",
            "Data connector configuration",
            "Workbook and dashboard builds",
            "KQL query development",
            "Playbook automation",
            "Architecture design reviews"
          ]
        },
        {
          name: "Defender Designated Engineering",
          description: "Dedicated engineer for Defender XDR deployment and policy configuration.",
          deliverables: [
            "Endpoint agent deployment",
            "Identity sensor configuration",
            "Cloud Apps policy setup",
            "Detection tuning",
            "Alert workflow design",
            "API integrations"
          ]
        },
        {
          name: "Entra Designated Engineering",
          description: "Dedicated engineer for identity infrastructure design and implementation.",
          deliverables: [
            "Conditional Access policies",
            "Identity Protection configuration",
            "PIM role setup",
            "B2B/B2C tenant configuration",
            "Hybrid identity architecture",
            "Authentication method deployment"
          ]
        }
      ]
    },
    {
      category: "Managed Detection & Response",
      description: "Security experts monitoring and responding to threats on your behalf",
      icon: "eye",
      services: [
        {
          name: "Defender Experts for Hunting",
          description: "Proactive threat hunting across your Microsoft security environment.",
          deliverables: [
            "Threat hunting campaigns",
            "Attack surface analysis",
            "Threat intelligence reports",
            "Hunting query library",
            "Emerging threat alerts",
            "Quarterly threat briefings"
          ]
        },
        {
          name: "Defender Experts for XDR",
          description: "Full managed detection and response across the Microsoft XDR stack.",
          deliverables: [
            "24/7 alert triage",
            "Incident investigation",
            "Guided response actions",
            "Remediation verification",
            "Proactive threat hunting",
            "Monthly security reviews"
          ]
        }
      ]
    },
    {
      category: "Incident Response",
      description: "Emergency response and forensic investigation for active threats",
      icon: "exclamation-triangle",
      services: [
        {
          name: "Microsoft Incident Response",
          description: "Rapid response team for active breaches and security incidents.",
          deliverables: [
            "Emergency breach response",
            "Forensic disk analysis",
            "Malware reverse engineering",
            "Attack timeline reconstruction",
            "Containment recommendations",
            "Recovery roadmap"
          ]
        },
        {
          name: "Compromise Recovery",
          description: "Post-incident identity and infrastructure recovery services.",
          deliverables: [
            "Active Directory recovery",
            "Tier 0 asset hardening",
            "Credential reset orchestration",
            "Trust restoration",
            "Root cause analysis",
            "Prevention controls"
          ]
        }
      ]
    },
    {
      category: "Security Assessments",
      description: "Technical evaluations of your security posture and configurations",
      icon: "clipboard-check",
      services: [
        {
          name: "Security Posture Assessment",
          description: "Configuration review against Microsoft security benchmarks and best practices.",
          deliverables: [
            "Secure Score analysis",
            "Configuration gap report",
            "Benchmark comparison matrix",
            "Prioritized remediation plan",
            "Quick wins checklist",
            "Executive summary"
          ]
        },
        {
          name: "Threat & Vulnerability Assessment",
          description: "Risk-based analysis of vulnerabilities and exposures across your environment.",
          deliverables: [
            "Attack surface inventory",
            "Vulnerability prioritization matrix",
            "Exposure risk scoring",
            "Exploitation likelihood ratings",
            "Mitigation recommendations",
            "Patch priority list"
          ]
        },
        {
          name: "Identity Security Assessment",
          description: "Evaluation of identity attack paths and access control weaknesses.",
          deliverables: [
            "Attack path mapping",
            "Conditional Access review",
            "Privileged access audit",
            "Legacy auth inventory",
            "MFA coverage report",
            "Identity hygiene scorecard"
          ]
        },
        {
          name: "Cloud Security Assessment",
          description: "Multi-cloud security posture evaluation across Azure, AWS, and GCP.",
          deliverables: [
            "CSPM findings analysis",
            "Compliance mapping report",
            "Workload protection gaps",
            "Network segmentation review",
            "Data exposure inventory",
            "Remediation roadmap"
          ]
        }
      ]
    },
    {
      category: "Architecture & Implementation",
      description: "Solution design and deployment of Microsoft security technologies",
      icon: "diagram-2",
      services: [
        {
          name: "Security Architecture Design",
          description: "Reference architecture and solution design for Microsoft security stack.",
          deliverables: [
            "Target state architecture",
            "Solution design document",
            "Integration specifications",
            "Data flow diagrams",
            "Deployment runbook",
            "Migration plan"
          ]
        },
        {
          name: "Sentinel Implementation",
          description: "End-to-end deployment and configuration of Microsoft Sentinel.",
          deliverables: [
            "Workspace architecture",
            "Data connector deployment",
            "Analytics rule configuration",
            "Automation playbooks",
            "Custom workbooks",
            "SOC runbook integration"
          ]
        },
        {
          name: "Defender Suite Deployment",
          description: "Phased rollout of Microsoft Defender across endpoints, identity, and cloud.",
          deliverables: [
            "Deployment wave planning",
            "Agent deployment packages",
            "Policy baseline configuration",
            "Alert tuning rules",
            "Response automation",
            "Admin training materials"
          ]
        },
        {
          name: "Zero Trust Implementation",
          description: "Zero Trust architecture deployment across identity, devices, and network.",
          deliverables: [
            "Identity verification policies",
            "Device compliance rules",
            "Network micro-segmentation",
            "Data classification framework",
            "Conditional Access matrix",
            "Continuous validation controls"
          ]
        }
      ]
    },
    {
      category: "Optimization & Tuning",
      description: "Performance optimization and operational efficiency improvements",
      icon: "sliders",
      services: [
        {
          name: "Detection Engineering",
          description: "Custom detection development and alert quality optimization.",
          deliverables: [
            "False positive reduction",
            "Detection coverage mapping",
            "Custom detection rules",
            "Alert severity calibration",
            "Threshold optimization",
            "MITRE ATT&CK alignment"
          ]
        },
        {
          name: "Sentinel Cost Optimization",
          description: "Data ingestion analysis and cost reduction strategies for Sentinel.",
          deliverables: [
            "Ingestion volume analysis",
            "Query performance tuning",
            "Cost reduction recommendations",
            "Retention policy design",
            "Archive tier strategy",
            "Workspace consolidation plan"
          ]
        },
        {
          name: "SOC Process Engineering",
          description: "Security operations workflow design and automation development.",
          deliverables: [
            "Triage workflow documentation",
            "Escalation matrix",
            "Response playbooks",
            "Automation opportunity map",
            "KPI dashboard",
            "Tool integration specs"
          ]
        }
      ]
    }
  ]
};

// API Routes
app.get('/api/products', (req, res) => {
  res.json(securityData.technologies);
});

app.get('/api/technologies', (req, res) => {
  res.json(securityData.technologies);
});

app.get('/api/services', (req, res) => {
  res.json(securityData.technicalServices);
});

app.get('/api/all', (req, res) => {
  res.json(securityData);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`
  ========================================
  Microsoft Security Technical Services
  ========================================

  Server running at: http://localhost:${PORT}

  API Endpoints:
  - GET /api/technologies  - Supported technologies
  - GET /api/services      - Technical services
  - GET /api/all           - All data

  ========================================
  `);
});
