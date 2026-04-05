export const CATEGORIES = ["All Topics", "Surveillance", "Fiber Optic", "ICT Infrastructure", "Access Control", "Industrial Safety", "Industry News"];

export const AUTHORS = [
    {id: 1, name: "Babatunde Adewale", postion: "Security Systems Lead",},
    {id: 2, name: "Ngozi Okafor", postion: "Network Infrastructure Analyst",},
    {id: 3, name: "Amaka Nweze", postion: "ICT Solutions Architect"},
    {id: 4, name: "Segun Afolabi", postion: "Industrial Safety Specialist"},
    {id: 5, name: "Chukwuemeka Obi", postion: "Public Safety Researcher"}
];

const DEFAULT_SECTIONS = [
    {
        heading: "Understanding Warehouse Surveillance Challenges",
        body: "Warehouses are among the most demanding environments for CCTV systems. The combination of high ceilings (often 8–15 metres), large floor plates, variable lighting, fast-moving forklifts, and 24/7 operations creates a perfect storm of technical demands that generic CCTV designs simply cannot meet.\n\nThe primary challenges are field-of-view coverage at height, managing contrast between bright dock doors and darker internal aisles, maintaining sharp footage of moving vehicles, and ensuring robust network infrastructure across large, often metal-heavy, buildings.",
    },
    {
        heading: "Camera Types for Warehouses",
        body: "For high-ceiling aisles (8m+), you need cameras with long focal lengths — typically 4mm–8mm varifocal lenses — or dedicated long-range cameras. PTZ (Pan-Tilt-Zoom) cameras are excellent for large open areas where a single camera needs to cover wide ground and zoom in on incidents.\n\nFisheye (360°) cameras work extremely well for floor-level monitoring at intersections and entry/exit points. For dock doors and loading bays, wide dynamic range (WDR) cameras with 120dB+ WDR are essential to handle the extreme contrast between the bright exterior and darker interior.",
    },
    {
        heading: "Resolution & Frame Rate Requirements",
        body: "For general surveillance in a warehouse, 2MP (1080p) cameras provide adequate detail for most applications. However, if you need to read licence plates on forklift trucks or identify faces, you'll want 4MP or 8MP cameras at those specific points.\n\nFrame rate matters more than resolution for moving subjects. A minimum of 15fps is acceptable for general coverage, but 25fps is recommended for areas with fast-moving forklifts or conveyor systems. H.265+ compression is essential to keep storage costs manageable at these resolutions.",
    },
    {
        heading: "Lighting Considerations",
        body: "Warehouses often have skylights, strip lighting, and shadow-heavy racking aisles. Standard cameras struggle in these conditions. Specify cameras with StarLight or ColorVu technology for low-light aisles, and WDR cameras for any position that may see direct sunlight or bright dock light.\n\nFor total darkness scenarios (night shifts in unlit areas), infrared (IR) cameras with appropriate IR range — calculated based on ceiling height and aisle depth — are required. Thermal cameras are a premium option for perimeter and external yard coverage.",
    },
    {
        heading: "Storage & Network Architecture",
        body: "Storage requirements depend on retention period, camera count, resolution, and frame rate. As a rough guide, a 2MP camera recording 24/7 at 15fps with H.265+ compression requires approximately 7–10GB per day. A 50-camera warehouse with 30-day retention needs 10–15TB of usable NVR storage.\n\nFor network architecture, a dedicated CCTV VLAN on a managed PoE switch infrastructure is the standard approach. Long cable runs (over 90m) require fibre-to-switch links. Wireless cameras are generally not recommended for primary warehouse CCTV due to interference from racking and machinery.",
    },
    {
        heading: "AI Analytics for Warehouses",
        body: "Modern warehouse CCTV platforms offer analytics that go well beyond motion detection. Perimeter intrusion detection can trigger alerts when personnel enter exclusion zones around machinery. People counting at entry points supports occupancy management and post-incident analysis.\n\nForklift detection and behaviour analytics can identify unsafe driving or near-miss incidents. Line crossing analytics at dock doors can log every vehicle and pallet movement. These analytics run on the camera or NVR/VMS and, depending on your platform, can integrate with your WMS or access control system.",
    },
    {
        heading: "Budget Guidance",
        body: "For a mid-size warehouse (5,000–10,000 sqm), a professional CCTV system including cameras, NVR, network switches, cabling, installation, and commissioning typically costs between ₦4,000,000 and ₦12,000,000 depending on camera count and specification.\n\nBudget systems using domestic-grade cameras and DVRs will cost less but will not meet the performance requirements for high-ceiling or fast-movement environments. Always specify commercial-grade equipment from brands with local warranty support.",
    },
    {
        heading: "Final Recommendations",
        body: "Start with a proper site survey. Camera positions on paper rarely survive contact with a real warehouse. A professional surveyor will walk the site, measure ceiling heights, assess lighting, and produce camera position plans with field-of-view overlays.\n\nSpecify your storage retention period upfront — this drives your NVR specification more than any other factor. Plan for 30% expansion headroom in camera count and storage. And choose a VMS platform that can grow with your business, even if you're starting with a simple NVR setup.",
    },
];

export const POSTS = [
    {
        id: 1,
        cat: "Surveillance",
        title: "How to Choose the Right CCTV System for a Warehouse in 2025",
        excerpt: "Warehouses pose unique surveillance challenges — high ceilings, low light, large open areas, and multiple entry points. Here's how to architect the right solution.",
        authorId: 1,
        date: "Feb 18, 2025",
        read: "6 min",
        featured: true,
        tags: ["CCTV", "Warehousing", "IP Cameras"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 2,
        cat: "Fiber Optic",
        title: "Fiber vs. Copper: What Nigerian Enterprises Need to Know in 2025",
        excerpt: "The case for fiber has never been stronger — but legacy copper still dominates many Nigerian enterprise networks. We break down the real cost of staying behind.",
        authorId: 2,
        date: "Feb 5, 2025",
        read: "8 min",
        featured: true,
        tags: ["Fiber Optic", "Networking", "Enterprise IT"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 3,
        cat: "ICT Infrastructure",
        title: "Building a Resilient Office Network: A Practical Guide for Lagos Businesses",
        excerpt: "From structured cabling to managed WiFi — the building blocks of a network that doesn't let you down during Nigeria's most demanding business days.",
        authorId: 3,
        date: "Jan 22, 2025",
        read: "7 min",
        featured: true,
        tags: ["Networking", "LAN/WAN", "Lagos"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 4,
        cat: "Access Control",
        title: "Biometric vs. RFID Access Control: Which Is Right for Your Business?",
        excerpt: "Both systems have clear strengths. The right choice depends on your threat model, budget, and how many people you're controlling access for.",
        authorId: 1,
        date: "Jan 10, 2025",
        read: "5 min",
        featured: false,
        tags: ["Access Control", "Biometrics", "RFID"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 5,
        cat: "Industrial Safety",
        title: "ATEX Certification Explained: What Oil & Gas Companies Must Know",
        excerpt: "Operating in Zone 1 or Zone 2 hazardous areas demands ATEX-certified equipment. We demystify the certification process and what it means for your safety systems.",
        authorId: 4,
        date: "Dec 28, 2024",
        read: "9 min",
        featured: false,
        tags: ["ATEX", "Oil & Gas", "IEC 61511"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 6,
        cat: "Industry News",
        title: "Nigeria's Smart City Surveillance Market: 2025 Outlook",
        excerpt: "Federal and state government investment in public safety infrastructure is accelerating. Here's what the data says about where the market is heading.",
        authorId: 5,
        date: "Dec 15, 2024",
        read: "6 min",
        featured: false,
        tags: ["Smart Cities", "Market Analysis", "Nigeria"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 7,
        cat: "Surveillance",
        title: "Video Analytics: Moving Beyond Basic Motion Detection",
        excerpt: "Modern AI-powered video analytics can recognize faces, count occupancy, detect anomalies, and trigger automated responses. Here's the practical guide.",
        authorId: 1,
        date: "Nov 28, 2024",
        read: "7 min",
        featured: false,
        tags: ["AI", "Video Analytics", "CCTV"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 8,
        cat: "ICT Infrastructure",
        title: "Data Center Design for Nigerian SMEs: What You Actually Need",
        excerpt: "You don't need a hyperscale facility. You need the right power, cooling, cabling, and network architecture for your scale — and a realistic budget to do it right.",
        authorId: 3,
        date: "Nov 12, 2024",
        read: "10 min",
        featured: false,
        tags: ["Data Center", "SME", "Infrastructure"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 9,
        cat: "Surveillance",
        title: "Retail CCTV Placement: Cutting Shrink Without Blind Spots",
        excerpt: "Bad camera angles miss the most expensive theft patterns. Learn the placement strategy that covers entrances, aisles, and checkout lanes.",
        authorId: 1,
        date: "Oct 30, 2024",
        read: "6 min",
        featured: false,
        tags: ["CCTV", "Retail", "Loss Prevention"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 10,
        cat: "Surveillance",
        title: "Perimeter Security Cameras: A Practical Guide for Large Compounds",
        excerpt: "Perimeter monitoring fails when lighting and distance are ignored. Here's how to balance lens choice, IR range, and analytics.",
        authorId: 5,
        date: "Oct 16, 2024",
        read: "7 min",
        featured: false,
        tags: ["CCTV", "Perimeter", "Security"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 11,
        cat: "Fiber Optic",
        title: "When to Upgrade to Single-Mode Fiber in Campus Networks",
        excerpt: "Distance, bandwidth, and future-proofing all point toward single-mode. We outline the signals that your campus is ready.",
        authorId: 2,
        date: "Oct 3, 2024",
        read: "8 min",
        featured: false,
        tags: ["Fiber Optic", "Campus Networks", "Upgrade"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 12,
        cat: "Fiber Optic",
        title: "Fiber Termination Errors That Kill Performance",
        excerpt: "Tiny mistakes at termination points cause big losses. Avoid the common missteps that drive attenuation and intermittent faults.",
        authorId: 2,
        date: "Sep 18, 2024",
        read: "6 min",
        featured: false,
        tags: ["Fiber Optic", "Testing", "Installation"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 13,
        cat: "ICT Infrastructure",
        title: "Managed WiFi for Multi-Floor Offices: What Actually Matters",
        excerpt: "Coverage isn't the same as capacity. We explain AP density, channel planning, and controller sizing for busy offices.",
        authorId: 3,
        date: "Sep 4, 2024",
        read: "7 min",
        featured: false,
        tags: ["WiFi", "Office Networks", "Infrastructure"],
        sections: DEFAULT_SECTIONS
    },
    {
        id: 14,
        cat: "Access Control",
        title: "Access Control for Mixed-Use Buildings: Zoning Best Practices",
        excerpt: "Different tenants require different access zones. Learn how to map doors, schedules, and permissions without chaos.",
        authorId: 1,
        date: "Aug 22, 2024",
        read: "5 min",
        featured: false,
        tags: ["Access Control", "Zoning", "Buildings"],
        sections: DEFAULT_SECTIONS
    },
];
