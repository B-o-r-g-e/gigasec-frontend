import {B} from "@/theme/Colors";
import type {IconName} from "@/icons/Icon";

export interface ServiceStat {
    n: number;
    suf: string;
    label: string;
}

export interface ServiceData {
    id: string;
    icon: IconName;
    filter: string;
    title: string;
    tagline: string;
    desc: string;
    features: string[];
    stats: ServiceStat[];
    industries: string[];
    accent: string;
    badge: string | null;
}

export const SERVICES: ServiceData[] = [
    {
        id: "lbs", icon: "globe", filter: "Location Based",
        title: "Location Based Services",
        tagline: "NCC AVTS Licensed Service Provider.",
        desc: "Vehicle, asset, and people tracking with GPS & IoT devices backed by a command and control center for real-time monitoring and decision support.",
        features: ["Vehicle tracking & fleet management", "Asset and personnel tracking", "Real-time monitoring dashboards", "Command & control center operations", "GPS & IoT device integration", "Alerts, reports, and compliance"],
        stats: [{n: 24, suf: "/7", label: "Monitoring"}, {n: 100, suf: "%", label: "Visibility"}],
        industries: ["Logistics", "Transport", "Security", "Government", "Utilities"],
        accent: B.electric,
        badge: "Licensed",
    },
    {
        id: "digital-oilfield", icon: "industrial", filter: "Digital Oilfield",
        title: "Digital Oilfield & Industrial Services",
        tagline: "SCADA, automation, and remote monitoring.",
        desc: "Supervisory Control and Data Acquisition, instrumentation, and automation systems that deliver real-time data acquisition and visibility across critical assets.",
        features: ["SCADA systems & integration", "Instrumentation & automation", "Real-time data acquisition", "Remote monitoring & control", "Operational dashboards", "Reliability & safety alignment"],
        stats: [{n: 1, suf: "", label: "Integrated Platform"}, {n: 24, suf: "/7", label: "Data Insight"}],
        industries: ["Oil & Gas", "Industrial", "Utilities", "Manufacturing"],
        accent: "#0e8f8d",
        badge: "Industrial",
    },
    {
        id: "ip-security", icon: "camera", filter: "IP Security",
        title: "IP Security Solutions",
        tagline: "Secure assets. Protect people.",
        desc: "End-to-end IP security systems including CCTV, access control, perimeter protection, and smart building automation — integrated for maximum safety.",
        features: ["CCTV & video surveillance", "Access control & time attendance", "Auto gates & perimeter protection", "Fire alarm systems", "Smart home/building automation", "Two-way radio systems"],
        stats: [{n: 6, suf: "+", label: "Core Systems"}, {n: 1, suf: "", label: "Unified View"}],
        industries: ["Banking", "Government", "Education", "Healthcare", "Facilities"],
        accent: "#0066aa",
        badge: "Most Popular",
    },
    {
        id: "engineering", icon: "shield", filter: "Engineering",
        title: "Engineering Services",
        tagline: "Designed for scale and durability.",
        desc: "Renewable energy, electrical installations, fabrication, and RFID solutions engineered to meet industrial standards and operational demands.",
        features: ["Renewable energy systems", "Electrical installations", "Fabrication services", "RFID deployment", "Site surveys & engineering design", "Commissioning & support"],
        stats: [{n: 1, suf: "", label: "End-to-End Delivery"}, {n: 100, suf: "%", label: "Standards Driven"}],
        industries: ["Energy", "Industrial", "Infrastructure", "Public Sector"],
        accent: "#7c3aed",
        badge: "Engineering",
    },
    {
        id: "it-consulting", icon: "network", filter: "IT Consulting",
        title: "IT Consulting & R&D",
        tagline: "Build, integrate, and optimize.",
        desc: "Consulting, help desk services, and R&D across software, hardware, networks, and systems integration to accelerate digital transformation.",
        features: ["Software & hardware solutions", "Web application development", "Network & fiber optics", "Solution design & integration", "Research and development", "Managed support & consulting"],
        stats: [{n: 1, suf: "", label: "Unified Stack"}, {n: 24, suf: "/7", label: "Support Ready"}],
        industries: ["Enterprise", "SMEs", "Public Sector", "Technology"],
        accent: B.orange,
        badge: "R&D",
    },
];
