import {B} from "@/theme/Colors";
import type {IconName} from "@/icons/Icon";

export interface ServiceStat {
    n: number;
    suf: string;
    label: string;
}

export interface ServiceFeatureDetail {
    icon: IconName;
    title: string;
    desc: string;
}

export interface ServiceProcessStep {
    step: string;
    title: string;
    desc: string;
}

export interface ServiceIndustryDetail {
    name: string;
    icon: IconName;
}

export interface ServiceCaseStudy {
    tag: string;
    title: string;
    result: string;
    client: string;
}

export interface ServiceTestimonial {
    quote: string;
    name: string;
    role: string;
    rating: number;
}

export interface ServiceFaq {
    q: string;
    a: string;
}

export interface ServiceContent {
    subline: string;
    accentColor: string;
    heroStats: ServiceStat[];
    overview: string;
    features: ServiceFeatureDetail[];
    capabilities: string[];
    process: ServiceProcessStep[];
    industries: ServiceIndustryDetail[];
    caseStudies: ServiceCaseStudy[];
    testimonial: ServiceTestimonial;
    faqs: ServiceFaq[];
}

export interface ServiceData {
    id: string;
    icon: IconName;
    category: string;
    filter: string;
    title: string;
    tagline: string;
    desc: string;
    features: string[];
    stats: ServiceStat[];
    industries: string[];
    accent: string;
    badge: string | null;
    tag: string | null;
    content: ServiceContent;
}

export const SERVICES: ServiceData[] = [
    {
        id: "lbs", icon: "globe", category: "Tracking & Telematics", filter: "Location Based",
        title: "Location Based Services",
        tagline: "NCC AVTS Licensed Service Provider.",
        desc: "Vehicle, asset, and people tracking with GPS & IoT devices backed by a command and control center for real-time monitoring and decision support.",
        features: ["Vehicle tracking & fleet management", "Asset and personnel tracking", "Real-time monitoring dashboards", "Command & control center operations", "GPS & IoT device integration", "Alerts, reports, and compliance"],
        stats: [{n: 24, suf: "/7", label: "Monitoring"}, {n: 100, suf: "%", label: "Visibility"}],
        industries: ["Logistics", "Transport", "Security", "Government", "Utilities"],
        accent: B.electric,
        badge: "Licensed",
        tag: 'Licensed',
        content: {
            subline: "NCC AVTS licensed location intelligence for fleets, assets, and field personnel across Nigeria.",
            accentColor: B.electric,
            heroStats: [
                {n: 12000, suf: "+", label: "Assets Tracked"},
                {n: 24, suf: "/7", label: "Control Room Coverage"},
                {n: 99, suf: ".9%", label: "Platform Availability"},
            ],
            overview: `Gigasec delivers enterprise location-based services that combine GPS, IoT telemetry, and command-centre operations into one operational view.\n\nFrom route optimization and driver behavior analytics to geofence alerts and incident escalation, we help organizations reduce losses, improve visibility, and make faster operational decisions.`,
            features: [
                {
                    icon: "truck",
                    title: "Fleet Visibility",
                    desc: "Live location, route playback, idle time, and trip history across all vehicles from one dashboard."
                },
                {
                    icon: "target",
                    title: "Geofencing & Alerts",
                    desc: "Zone-based entry and exit alerts, overspeed notifications, and panic triggers with escalation workflows."
                },
                {
                    icon: "network",
                    title: "Command Platform",
                    desc: "Role-based web and mobile monitoring with maps, telemetry widgets, and dispatch-ready control tools."
                },
                {
                    icon: "clock",
                    title: "Driver & Journey Analytics",
                    desc: "Utilization, journey duration, harsh events, and SLA performance metrics for operations teams."
                },
                {
                    icon: "lock",
                    title: "Asset Protection",
                    desc: "Anti-tamper tracking, immobilization support, and layered alerting for high-value mobile assets."
                },
                {
                    icon: "check",
                    title: "Compliance Reporting",
                    desc: "Automated reports for audit trails, safety compliance, and executive-level operational reviews."
                },
            ],
            capabilities: [
                "AVTS-compliant deployment for regulated operators",
                "Vehicle, generator, and cold-chain asset tracking",
                "Panic button and emergency incident workflows",
                "Fuel monitoring and route deviation controls",
                "API integration with ERP, dispatch, and BI tools",
                "Multi-branch control room operations",
                "Driver scorecards and safety benchmarking",
                "On-site installation, training, and SLA support",
            ],
            process: [
                {
                    step: "01",
                    title: "Operational Discovery",
                    desc: "We map your routes, asset classes, escalation paths, and reporting needs before system design."
                },
                {
                    step: "02",
                    title: "Solution Design",
                    desc: "Device selection, data plan sizing, geofence architecture, and dashboard layout are defined and approved."
                },
                {
                    step: "03",
                    title: "Deployment",
                    desc: "Certified technicians install and activate trackers with validation on each route and asset profile."
                },
                {
                    step: "04",
                    title: "Control Room Setup",
                    desc: "Users, alerts, dispatch rules, and shift workflows are configured for live operations."
                },
                {
                    step: "05",
                    title: "Handover & Training",
                    desc: "Operations teams receive practical training on monitoring, analytics, and incident response procedures."
                },
                {
                    step: "06",
                    title: "Managed Support",
                    desc: "We provide proactive monitoring, device health checks, and ongoing optimization support."
                },
            ],
            industries: [
                {name: "Logistics", icon: "truck"},
                {name: "Public Transport", icon: "users"},
                {name: "Oil & Gas", icon: "industrial"},
                {name: "Banking Cash Transit", icon: "lock"},
                {name: "Utilities", icon: "zap"},
                {name: "Government", icon: "shield"},
                {name: "Healthcare", icon: "heart"},
                {name: "Retail Distribution", icon: "cart"},
            ],
            caseStudies: [
                {
                    tag: "Logistics",
                    title: "Nationwide Fleet Monitoring Rollout",
                    result: "18% fuel variance reduction in 6 months",
                    client: "PrimeRoute Logistics"
                },
                {
                    tag: "Government",
                    title: "Public Bus Tracking & Dispatch Program",
                    result: "Real-time visibility across 420 buses",
                    client: "State Transport Authority"
                },
                {
                    tag: "Oil & Gas",
                    title: "Hazmat Journey Risk Monitoring",
                    result: "42% reduction in route deviation incidents",
                    client: "DeltaPetro Services"
                },
            ],
            testimonial: {
                quote: "Gigasec gave us complete field visibility and faster incident response within weeks of rollout.",
                name: "Tunde Balogun",
                role: "Head of Operations, PrimeRoute Logistics",
                rating: 5,
            },
            faqs: [
                {
                    q: "Are you licensed for tracking services in Nigeria?",
                    a: "Yes. Gigasec is NCC AVTS licensed and deploys compliant tracking services for enterprise and regulated operations."
                },
                {
                    q: "Can we monitor fleets from mobile devices?",
                    a: "Yes. We provide secure web and mobile access with role-based permissions for executives, dispatch teams, and field supervisors."
                },
                {
                    q: "Do you support geofence and panic alerts?",
                    a: "Yes. We configure geofences, panic escalation, overspeed alerts, and route deviation alerts with custom notification rules."
                },
                {
                    q: "Can you integrate with our existing software?",
                    a: "Yes. We support API-based integration with ERP, dispatch, and business intelligence platforms."
                },
            ],
        },
    },
    {
        id: "digital-oilfield", icon: "industrial", category: "Industrial Automation", filter: "Digital Oilfield",
        title: "Digital Oilfield & Industrial Services",
        tagline: "SCADA, automation, and remote monitoring.",
        desc: "Supervisory Control and Data Acquisition, instrumentation, and automation systems that deliver real-time data acquisition and visibility across critical assets.",
        features: ["SCADA systems & integration", "Instrumentation & automation", "Real-time data acquisition", "Remote monitoring & control", "Operational dashboards", "Reliability & safety alignment"],
        stats: [{n: 1, suf: "", label: "Integrated Platform"}, {n: 24, suf: "/7", label: "Data Insight"}],
        industries: ["Oil & Gas", "Industrial", "Utilities", "Manufacturing", "Government", "Transport"],
        accent: "#00B8B8",
        badge: "Industrial",
        tag: null,
        content: {
            subline: "Industrial automation and digital oilfield systems engineered for uptime, safety, and control.",
            accentColor: "#00B8B8",
            heroStats: [
                {n: 150, suf: "+", label: "Critical Assets Connected"},
                {n: 24, suf: "/7", label: "Remote Monitoring"},
                {n: 99, suf: ".5%", label: "Telemetry Integrity"},
            ],
            overview: `We design and integrate SCADA, instrumentation, and control systems for upstream, midstream, and downstream environments.\n\nOur team combines process engineering and IT/OT integration to deliver real-time visibility, safer operations, and faster response to plant events.`,
            features: [
                {
                    icon: "industrial",
                    title: "SCADA Integration",
                    desc: "Centralized supervisory control with field telemetry, alarms, historian data, and secure operator interfaces."
                },
                {
                    icon: "network",
                    title: "OT Network Architecture",
                    desc: "Resilient industrial network design with segmentation, redundancy, and hardened communication paths."
                },
                {
                    icon: "zap",
                    title: "Instrumentation & Control",
                    desc: "Sensor, PLC, and RTU integration for process monitoring and closed-loop control."
                },
                {
                    icon: "target",
                    title: "Production Visibility",
                    desc: "Real-time production dashboards, trend analysis, and anomaly detection for operational teams."
                },
                {
                    icon: "shield",
                    title: "Safety Alignment",
                    desc: "System design aligned with industrial safety standards and documented operational procedures."
                },
                {
                    icon: "check",
                    title: "Lifecycle Support",
                    desc: "Commissioning, calibration, preventive maintenance, and troubleshooting support for field systems."
                },
            ],
            capabilities: [
                "SCADA and telemetry design for distributed assets",
                "PLC and RTU programming and integration",
                "Industrial communication protocols support",
                "Pipeline, tank farm, and process plant monitoring",
                "Alarm rationalization and incident workflows",
                "Historian setup and trend analytics",
                "Control room HMI and dashboard engineering",
                "Post-commissioning maintenance and support",
            ],
            process: [
                {
                    step: "01",
                    title: "Field Assessment",
                    desc: "We assess process assets, instrumentation gaps, and existing control systems on-site."
                },
                {
                    step: "02",
                    title: "Control Strategy",
                    desc: "Automation architecture, IO mapping, and communication protocol plans are developed."
                },
                {
                    step: "03",
                    title: "Engineering Build",
                    desc: "PLC logic, SCADA screens, and OT networking are configured and bench-tested."
                },
                {
                    step: "04",
                    title: "Installation & Wiring",
                    desc: "Field devices, panels, and communication links are deployed and verified."
                },
                {
                    step: "05",
                    title: "Commissioning",
                    desc: "Loop checks, alarm tests, and SAT are completed with operations and maintenance teams."
                },
                {
                    step: "06",
                    title: "Operational Support",
                    desc: "Continuous support covers optimization, upgrades, and incident response."
                },
            ],
            industries: [
                {name: "Oil & Gas Upstream", icon: "industrial"},
                {name: "Refining & Midstream", icon: "network"},
                {name: "Power & Utilities", icon: "zap"},
                {name: "Manufacturing", icon: "fiber"},
                {name: "Marine Operations", icon: "truck"},
                {name: "Infrastructure", icon: "shield"},
            ],
            caseStudies: [
                {
                    tag: "Upstream",
                    title: "Wellhead Telemetry and SCADA Modernization",
                    result: "Centralized visibility for 58 remote wells",
                    client: "Niger Delta Energy JV"
                },
                {
                    tag: "Midstream",
                    title: "Pipeline Monitoring and Alarm Upgrade",
                    result: "33% faster incident response time",
                    client: "Westline Transmission Co."
                },
                {
                    tag: "Industrial",
                    title: "Tank Farm Instrumentation Digitization",
                    result: "Improved inventory accuracy and reporting",
                    client: "Harbor Storage Terminals"
                },
            ],
            testimonial: {
                quote: "Gigasec delivered a robust OT platform that improved both our safety posture and process visibility.",
                name: "Ifeanyi Okeke",
                role: "Automation Manager, Westline Transmission Co.",
                rating: 5,
            },
            faqs: [
                {
                    q: "Do you work with brownfield facilities?",
                    a: "Yes. We modernize existing sites while preserving critical operations and minimizing downtime."
                },
                {
                    q: "Can you integrate legacy PLC or RTU systems?",
                    a: "Yes. We regularly integrate mixed-vendor and legacy control systems into modern SCADA platforms."
                },
                {
                    q: "Do you provide commissioning and handover documents?",
                    a: "Yes. We provide full commissioning packs including loop checks, IO lists, test logs, and as-built documentation."
                },
                {
                    q: "Do you offer ongoing maintenance?",
                    a: "Yes. We offer preventive maintenance and rapid-response support for critical industrial environments."
                },
            ],
        },
    },
    {
        id: "ip-security", icon: "camera", category: "Physical Security", filter: "IP Security",
        title: "IP Security Solutions",
        tagline: "Secure assets. Protect people.",
        desc: "End-to-end IP security systems including CCTV, access control, perimeter protection, and smart building automation — integrated for maximum safety.",
        features: ["CCTV & video surveillance", "Access control & time attendance", "Auto gates & perimeter protection", "Fire alarm systems", "Smart home/building automation", "Two-way radio systems"],
        stats: [{n: 6, suf: "+", label: "Core Systems"}, {n: 1, suf: "", label: "Unified View"}],
        industries: ["Banking", "Government", "Education", "Healthcare", "Facilities"],
        accent: "#0066aa",
        badge: "Most Popular",
        tag: 'Core',
        content: {
            subline: "Enterprise-grade IP surveillance and integrated physical security systems for high-risk environments.",
            accentColor: "#0066aa",
            heroStats: [
                {n: 5000, suf: "+", label: "Cameras Installed"},
                {n: 340, suf: "", label: "Sites Secured"},
                {n: 99, suf: ".7%", label: "System Uptime"},
            ],
            overview: `From a standalone retail camera to a nationwide multi-site rollout, Gigasec designs and deploys IP security systems that operate reliably around the clock.\n\nWe supply, install, commission, and maintain CCTV, access control, and perimeter protection platforms, and integrate them into centralized monitoring and response workflows.`,
            features: [
                {
                    icon: "camera",
                    title: "IP & Analogue Surveillance",
                    desc: "4K, 4MP, and HD-over-coax camera systems for indoor, outdoor, industrial, and low-light deployments."
                },
                {
                    icon: "zap",
                    title: "AI Video Analytics",
                    desc: "People counting, intrusion detection, line crossing, vehicle analytics, and rule-based incident alerts."
                },
                {
                    icon: "shield",
                    title: "Command-Centre Monitoring",
                    desc: "24/7 monitoring workflows with alert triage, escalation paths, and incident logs."
                },
                {
                    icon: "network",
                    title: "VMS & Storage Architecture",
                    desc: "Scalable VMS and retention design for branch, campus, and city-wide deployments."
                },
                {
                    icon: "lock",
                    title: "Access Control Integration",
                    desc: "Unified integration with card access, visitor management, and attendance controls."
                },
                {
                    icon: "check",
                    title: "Maintenance & SLA Support",
                    desc: "Preventive maintenance, remote diagnostics, and on-site response for critical outages."
                },
            ],
            capabilities: [
                "Single-site and multi-site enterprise deployments",
                "High-risk banking and government environments",
                "Perimeter security and auto-gate integration",
                "Hybrid migration from analogue to IP",
                "Video retention planning and storage optimization",
                "Centralized monitoring centre integrations",
                "Mobile and web remote access with audit trails",
                "Maintenance contracts with measurable SLAs",
            ],
            process: [
                {
                    step: "01",
                    title: "Security Survey",
                    desc: "Our engineers evaluate threat zones, blind spots, and existing infrastructure."
                },
                {
                    step: "02",
                    title: "System Design",
                    desc: "We produce camera schedules, access topology, and infrastructure BOQ."
                },
                {
                    step: "03",
                    title: "Procurement",
                    desc: "Equipment is sourced from authorized channels with full warranty documentation."
                },
                {
                    step: "04",
                    title: "Installation",
                    desc: "Cabling, mounting, configuration, and QA testing are completed with minimal disruption."
                },
                {
                    step: "05",
                    title: "Commissioning",
                    desc: "Operator training, system handover, and acceptance testing are finalized."
                },
                {
                    step: "06",
                    title: "Support",
                    desc: "Ongoing preventive maintenance, software updates, and response support."
                },
            ],
            industries: [
                {name: "Banking & Finance", icon: "lock"},
                {name: "Government", icon: "shield"},
                {name: "Retail & FMCG", icon: "cart"},
                {name: "Healthcare", icon: "heart"},
                {name: "Education", icon: "network"},
                {name: "Hospitality", icon: "camera"},
                {name: "Industrial Facilities", icon: "industrial"},
                {name: "Corporate Campuses", icon: "users"},
            ],
            caseStudies: [
                {
                    tag: "Banking",
                    title: "340-Branch Security Modernization Program",
                    result: "Completed with zero branch downtime",
                    client: "First Continental Bank"
                },
                {
                    tag: "Government",
                    title: "City Surveillance Expansion Project",
                    result: "Multi-zone monitoring with analytics enabled",
                    client: "State Security Directorate"
                },
                {
                    tag: "Retail",
                    title: "Loss Prevention Optimization",
                    result: "Significant shrinkage reduction in 90 days",
                    client: "National Retail Group"
                },
            ],
            testimonial: {
                quote: "Gigasec transformed our surveillance operations across multiple branches with strong technical execution.",
                name: "Adaora Okonkwo",
                role: "Head of Security Operations, First Continental Bank",
                rating: 5,
            },
            faqs: [
                {
                    q: "What brands do you support?",
                    a: "We deploy leading platforms including Hikvision, Dahua, Axis, Bosch, and other enterprise-grade options based on your needs."
                },
                {
                    q: "Can you upgrade existing analogue systems?",
                    a: "Yes. We support hybrid upgrades that reuse viable cabling while improving image quality and coverage."
                },
                {
                    q: "Do you provide remote monitoring?",
                    a: "Yes. We support command-centre and remote monitoring models with defined escalation procedures."
                },
                {
                    q: "Do you offer AMC and SLA support?",
                    a: "Yes. We offer annual maintenance contracts and SLA-backed support plans."
                },
            ],
        },
    },
    {
        id: "engineering", icon: "shield", category: "Engineering & Infrastructure", filter: "Engineering",
        title: "Engineering Services",
        tagline: "Designed for scale and durability.",
        desc: "Renewable energy, electrical installations, fabrication, and RFID solutions engineered to meet industrial standards and operational demands.",
        features: ["Renewable energy systems", "Electrical installations", "Fabrication services", "RFID deployment", "Site surveys & engineering design", "Commissioning & support"],
        stats: [{n: 1, suf: "", label: "End-to-End Delivery"}, {n: 100, suf: "%", label: "Standards Driven"}],
        industries: ["Energy", "Industrial", "Infrastructure", "Public Sector"],
        accent: "#7c3aed",
        badge: "Engineering",
        tag: null,
        content: {
            subline: "Engineering execution from design to commissioning for power, infrastructure, and industrial sites.",
            accentColor: "#7c3aed",
            heroStats: [
                {n: 280, suf: "+", label: "Projects Delivered"},
                {n: 96, suf: "%", label: "On-time Delivery"},
                {n: 100, suf: "%", label: "Standards Driven"},
            ],
            overview: `Gigasec engineering services cover renewable energy, electrical infrastructure, fabrication, and RFID-enabled systems for operational environments.\n\nWe combine field engineering discipline with practical project delivery to build reliable, maintainable systems that meet compliance requirements.`,
            features: [
                {
                    icon: "zap",
                    title: "Renewable Power Systems",
                    desc: "Solar and hybrid systems engineered for reliability, backup resilience, and lifecycle performance."
                },
                {
                    icon: "fiber",
                    title: "Electrical Installations",
                    desc: "Power distribution, cabling, protection systems, and testing to relevant standards."
                },
                {
                    icon: "industrial",
                    title: "Fabrication & Mounting",
                    desc: "Custom supports, enclosures, and structural accessories for field deployment."
                },
                {
                    icon: "tag",
                    title: "RFID Solutions",
                    desc: "RFID-based tracking and identification systems for inventory and access workflows."
                },
                {
                    icon: "target",
                    title: "Design & BOQ",
                    desc: "Detailed engineering drawings, load calculations, and practical material specifications."
                },
                {
                    icon: "check",
                    title: "Commissioning & Support",
                    desc: "Testing, handover documentation, and post-installation maintenance support."
                },
            ],
            capabilities: [
                "Solar and inverter system design and installation",
                "MV/LV electrical infrastructure support",
                "Industrial fabrication and site-fit assemblies",
                "RFID tagging and workflow automation",
                "Technical site surveys and engineering drawings",
                "Commissioning and acceptance test procedures",
                "Safety-focused deployment practices",
                "Long-term maintenance programs",
            ],
            process: [
                {
                    step: "01",
                    title: "Technical Discovery",
                    desc: "We capture your load profile, operational constraints, and compliance requirements."
                },
                {
                    step: "02",
                    title: "Engineering Design",
                    desc: "Detailed plans, calculations, and implementation documentation are prepared."
                },
                {
                    step: "03",
                    title: "Material Planning",
                    desc: "Approved components and fabrication requirements are procured and quality-checked."
                },
                {
                    step: "04",
                    title: "Site Execution",
                    desc: "Installation and integration are delivered with safety and quality controls."
                },
                {
                    step: "05",
                    title: "Testing & Handover",
                    desc: "Functional tests, as-built updates, and operator briefing are completed."
                },
                {
                    step: "06",
                    title: "Maintenance",
                    desc: "Periodic servicing and performance reviews sustain long-term reliability."
                },
            ],
            industries: [
                {name: "Energy", icon: "zap"},
                {name: "Manufacturing", icon: "industrial"},
                {name: "Infrastructure", icon: "network"},
                {name: "Public Sector", icon: "shield"},
                {name: "Warehousing", icon: "truck"},
                {name: "Commercial Facilities", icon: "industrial"},
            ],
            caseStudies: [
                {
                    tag: "Energy",
                    title: "Hybrid Power Upgrade for Branch Network",
                    result: "Improved uptime and reduced diesel dependency",
                    client: "National Finance Group"
                },
                {
                    tag: "Infrastructure",
                    title: "RFID Asset Tracking Deployment",
                    result: "Faster inventory audits across 14 sites",
                    client: "Metro Facilities Authority"
                },
                {
                    tag: "Industrial",
                    title: "Electrical and Fabrication Works for New Plant",
                    result: "Commissioned to schedule and specification",
                    client: "CoreSteel Manufacturing"
                },
            ],
            testimonial: {
                quote: "The engineering quality was excellent from documentation through commissioning.",
                name: "Amina Yusuf",
                role: "Projects Lead, Metro Facilities Authority",
                rating: 5,
            },
            faqs: [
                {
                    q: "Do you handle both design and installation?",
                    a: "Yes. We provide end-to-end engineering from survey and design through commissioning and support."
                },
                {
                    q: "Can you work on existing facilities?",
                    a: "Yes. We execute upgrades and retrofits for active sites with phased implementation plans."
                },
                {
                    q: "Do you provide as-built documentation?",
                    a: "Yes. Handover packs include updated drawings, test reports, and maintenance recommendations."
                },
                {
                    q: "Do you offer preventive maintenance?",
                    a: "Yes. We provide maintenance contracts based on system type and criticality."
                },
            ],
        },
    },
    {
        id: "it-consulting", icon: "network", category: "IT Consulting & R&D", filter: "IT Consulting",
        title: "IT Consulting & R&D",
        tagline: "Build, integrate, and optimize.",
        desc: "Consulting, help desk services, and R&D across software, hardware, networks, and systems integration to accelerate digital transformation.",
        features: ["Software & hardware solutions", "Web application development", "Network & fiber optics", "Solution design & integration", "Research and development", "Managed support & consulting"],
        stats: [{n: 1, suf: "", label: "Unified Stack"}, {n: 24, suf: "/7", label: "Support Ready"}],
        industries: ["Enterprise", "SMEs", "Public Sector", "Technology"],
        accent: B.orange,
        badge: "R&D",
        tag: null,
        content: {
            subline: "Advisory, integration, and managed technology services that accelerate secure digital transformation.",
            accentColor: B.orange,
            heroStats: [
                {n: 220, suf: "+", label: "Projects Delivered"},
                {n: 35, suf: "+", label: "Enterprise Clients"},
                {n: 24, suf: "/7", label: "Support Availability"},
            ],
            overview: `Gigasec IT consulting and R&D services help organizations modernize infrastructure, integrate systems, and ship practical digital solutions.\n\nFrom web applications and network modernization to managed support and architecture advisory, we build technology stacks that scale with business priorities.`,
            features: [
                {
                    icon: "network",
                    title: "Infrastructure Advisory",
                    desc: "Network and systems architecture for reliable, secure, and scalable enterprise operations."
                },
                {
                    icon: "globe",
                    title: "Web & Platform Engineering",
                    desc: "Business applications, portals, and integrations built for performance and maintainability."
                },
                {
                    icon: "fiber",
                    title: "Network & Fiber Services",
                    desc: "LAN/WAN optimization, structured cabling, and fiber deployment for resilient connectivity."
                },
                {
                    icon: "search",
                    title: "Technology Assessments",
                    desc: "Gap analysis, maturity assessments, and roadmap planning for modernization initiatives."
                },
                {
                    icon: "zap",
                    title: "R&D Prototyping",
                    desc: "Proof-of-concept development and controlled pilots for emerging technologies."
                },
                {
                    icon: "check",
                    title: "Managed Support",
                    desc: "Help desk operations, incident response, and continuous optimization for IT environments."
                },
            ],
            capabilities: [
                "Enterprise architecture and solution design",
                "System integration and middleware connectivity",
                "Web application and portal development",
                "Network refresh and connectivity optimization",
                "Help desk and managed support operations",
                "Cybersecurity-aware implementation practices",
                "Technology roadmaps and governance frameworks",
                "Pilot-to-production R&D delivery",
            ],
            process: [
                {
                    step: "01",
                    title: "Discovery & Audit",
                    desc: "We assess current systems, pain points, dependencies, and business priorities."
                },
                {
                    step: "02",
                    title: "Strategy & Roadmap",
                    desc: "A phased implementation roadmap is built around measurable outcomes."
                },
                {
                    step: "03",
                    title: "Architecture & Design",
                    desc: "Target-state architecture, integration plans, and delivery scope are finalized."
                },
                {
                    step: "04",
                    title: "Implementation",
                    desc: "Solutions are built, integrated, and validated in controlled rollout phases."
                },
                {
                    step: "05",
                    title: "Transition & Training",
                    desc: "Operational handover and team enablement ensure smooth adoption."
                },
                {
                    step: "06",
                    title: "Managed Operations",
                    desc: "Ongoing support and optimization improve reliability and user experience."
                },
            ],
            industries: [
                {name: "Enterprise", icon: "users"},
                {name: "Financial Services", icon: "lock"},
                {name: "Public Sector", icon: "shield"},
                {name: "Technology", icon: "network"},
                {name: "Healthcare", icon: "heart"},
                {name: "Education", icon: "award"},
            ],
            caseStudies: [
                {
                    tag: "Enterprise",
                    title: "Customer Portal Modernization Program",
                    result: "Reduced service response times by 38%",
                    client: "Unity Utilities Plc"
                },
                {
                    tag: "Public Sector",
                    title: "Service Desk and Network Stabilization",
                    result: "Improved uptime and incident closure metrics",
                    client: "Regional Public Agency"
                },
                {
                    tag: "Financial",
                    title: "Branch Connectivity and Systems Integration",
                    result: "Consistent service delivery across 120 locations",
                    client: "Meridian Trust Bank"
                },
            ],
            testimonial: {
                quote: "Gigasec combined strategy and execution in a way that delivered measurable technology outcomes quickly.",
                name: "Chinedu Eze",
                role: "CIO, Unity Utilities Plc",
                rating: 5,
            },
            faqs: [
                {
                    q: "Do you provide both advisory and implementation?",
                    a: "Yes. We support strategy, architecture, implementation, and managed operations."
                },
                {
                    q: "Can you work with our existing vendors and systems?",
                    a: "Yes. We design around your current environment and integrate with existing platforms where feasible."
                },
                {
                    q: "Do you support long-term managed services?",
                    a: "Yes. We offer managed support models including help desk, incident management, and optimization."
                },
                {
                    q: "Do you build custom web applications?",
                    a: "Yes. We build secure, maintainable business applications and client portals based on your workflows."
                },
            ],
        },
    },
];
