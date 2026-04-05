type ProductReview = {
    name: string;
    rating: number;
    date: string;
    text: string;
};

type ProductSpecs = Record<string, Record<string, string>>;

export type Product = {
    id: number;
    cat: string;
    brand: string;
    name: string;
    sku: string;
    price: number;
    oldPrice: number | null;
    stock: number;
    rating: number;
    reviews: number;
    badge: string | null;
    warranty: string;
    tags: string[];
    shortDesc: string;
    highlights: string[];
    specs: ProductSpecs;
    reviews_data: ProductReview[];
    image?: string;
};

type ProductInput = {
    id: number;
    cat: string;
    brand: string;
    name: string;
    sku: string;
    price: number;
    oldPrice?: number | null;
    stock?: number;
    rating?: number;
    reviews?: number;
    badge?: string | null;
    warranty?: string;
    tags?: string[];
    shortDesc?: string;
    highlights?: string[];
    specs?: ProductSpecs;
    reviews_data?: ProductReview[];
    image?: string;
};

const createProduct = (data: ProductInput): Product => {
    const reviewsData = data.reviews_data ?? [];
    const ratingFromReviews = reviewsData.length
        ? Number((reviewsData.reduce((sum, r) => sum + r.rating, 0) / reviewsData.length).toFixed(1))
        : 0;

    return {
        id: data.id,
        cat: data.cat,
        brand: data.brand,
        name: data.name,
        sku: data.sku,
        price: data.price,
        oldPrice: data.oldPrice ?? null,
        stock: data.stock ?? 0,
        rating: data.rating ?? ratingFromReviews,
        reviews: data.reviews ?? reviewsData.length,
        badge: data.badge ?? null,
        warranty: data.warranty ?? "1 Year",
        tags: data.tags ?? [],
        shortDesc: data.shortDesc ?? "",
        highlights: data.highlights ?? [],
        specs: data.specs ?? {},
        reviews_data: reviewsData,
        image: data.image
    };
};

export const PRODUCTS = [
    createProduct({
        id: 1,
        cat: "CCTV",
        brand: "Hikvision",
        name: "DS-2CD2143G2-I AcuSense 4MP Fixed Dome Network Camera",
        sku: "HIK-DS2CD2143G2",
        price: 48500,
        oldPrice: 56000,
        stock: 47,
        rating: 4.8,
        reviews: 24,
        badge: "Best Seller",
        warranty: "2 Years Hikvision",
        tags: ["4MP", "IR 40m", "IP67", "H.265+", "AcuSense", "IK10"],
        shortDesc:
            "A high-performance 4MP outdoor dome camera with AcuSense false-alarm filtering, 40m IR range, and IK10 vandal resistance — engineered for 24/7 outdoor surveillance.",
        highlights: [
            "4MP (2560×1440) resolution for sharp, detailed footage",
            "AcuSense AI — distinguishes humans and vehicles from other motion",
            "40m IR night vision, even in complete darkness",
            "IP67 weatherproofing and IK10 impact resistance",
            "H.265+ compression for up to 70% storage saving",
            "PoE powered — single cable installation"
        ],
        specs: {
            Camera: {
                "Image Sensor": "1/3\" Progressive Scan CMOS",
                "Max Resolution": "2560 × 1440 (4MP)",
                "Frame Rate": "25fps (50Hz) / 30fps (60Hz)",
                "Shutter Speed": "1/3s to 1/100,000s"
            },
            Lens: {
                "Focal Length": "2.8mm / 4mm (optional 6mm)",
                "Horizontal FOV": "103° (2.8mm)",
                "Focus Type": "Fixed"
            },
            Infrared: {
                "IR Range": "Up to 40m",
                "IR LEDs": "4 × Smart IR",
                "IR Cut Filter": "Auto-switching (ICR)"
            },
            Video: {
                "Compression": "H.265+ / H.265 / H.264+ / H.264",
                "Bitrate": "32Kbps–8Mbps (H.265+)",
                "Smart Features": "Line crossing, intrusion, face detection"
            },
            Physical: {
                Housing: "Dome, Metal",
                Protection: "IP67 + IK10",
                Dimensions: "Ø 122 mm × 87 mm",
                Weight: "0.78 kg",
                "Operating Temp": "-40°C to 60°C"
            },
            Network: {
                Interface: "RJ45 10M/100M",
                Power: "PoE IEEE802.3af (12W max)",
                Protocol: "TCP/IP, UDP, ICMP, HTTP, HTTPS, RTSP"
            }
        },
        reviews_data: [
            {
                name: "Emeka N.",
                rating: 5,
                date: "Jan 15, 2025",
                text: "Excellent image quality even in low light. Installed across 8 branches and the setup was straightforward. Gigasec's team was very helpful."
            },
            {
                name: "Funmilayo A.",
                rating: 5,
                date: "Dec 22, 2024",
                text: "IK10 rating is no joke — one got hit by a forklift and kept working. Highly recommend for industrial environments."
            },
            {
                name: "Chidi O.",
                rating: 4,
                date: "Nov 30, 2024",
                text: "Very good camera. The AcuSense feature dramatically reduced false alerts from our existing VMS. Slight learning curve on setup but manageable."
            },
            {
                name: "Adaeze E.",
                rating: 5,
                date: "Oct 14, 2024",
                text: "Bought 20 of these for a hospital project. Image quality at night is outstanding. The H.265+ compression saved us significantly on storage."
            }
        ],
        image: "/products/HD Cameras Installer Orange County.jpeg"
    }),
    createProduct({
        id: 2,
        cat: "CCTV",
        brand: "Dahua",
        name: "Dahua IPC-HDW2849H-S-IL 8MP Full-color Eyeball Camera",
        sku: "DAH-HDWF2849H",
        price: 62000,
        oldPrice: null,
        rating: 4.7,
        reviews: 18,
        badge: "New",
        tags: ["8MP", "Full Color", "AI", "IP67"],
        shortDesc: "8MP full-color eyeball camera with AI analytics and IP67 protection.",
        image: "/products/p2.jpeg",
        stock: 24
    }),
    createProduct({
        id: 3,
        cat: "Access Control",
        brand: "ZKTeco",
        name: "ZKTeco SF300 Fingerprint & RFID Door Access Reader",
        sku: "ZKT-SF300",
        price: 34500,
        oldPrice: 40000,
        rating: 4.6,
        reviews: 32,
        badge: null,
        tags: ["Fingerprint", "RFID", "Standalone"],
        shortDesc: "Compact fingerprint + RFID reader for small to mid-size access control deployments.",
        image: "/products/p3.jpeg",
        stock: 38
    }),
    createProduct({
        id: 4,
        cat: "Networking",
        brand: "Cisco",
        name: "Cisco CBS350-24T-4G Managed 24-Port Gigabit Switch",
        sku: "CSC-CBS35024T",
        price: 285000,
        oldPrice: null,
        rating: 4.9,
        reviews: 12,
        badge: "Enterprise Pick",
        tags: ["24-Port", "PoE", "Layer 3", "Managed"],
        shortDesc: "Enterprise-grade managed switch with 24 Gigabit ports and 4x1G SFP.",
        image: "/products/Xiaomi Outdoor Cw500 Dual Camera Version Ip66 Security Protection Smart Home.jpeg",
        stock: 15
    }),
    createProduct({
        id: 5,
        cat: "Fiber Optic",
        brand: "Corning",
        name: "Corning SMF-28 Ultra Single-Mode Fiber Cable (Per Metre)",
        sku: "COR-SMF28U-M",
        price: 450,
        oldPrice: 520,
        rating: 4.9,
        reviews: 56,
        badge: null,
        tags: ["Single-Mode", "OS2", "LSZH", "Per Metre"],
        shortDesc: "Low-loss OS2 single-mode fiber for campus and metro links.",
        image: "/products/Where to Place CCTV Around Your Home_ Expert Tips.jpeg",
        stock: 500
    }),
    createProduct({
        id: 6,
        cat: "CCTV",
        brand: "Axis",
        name: "Axis P3245-V Fixed Dome Camera with ARTPEC-7",
        sku: "AXS-P3245V",
        price: 195000,
        oldPrice: null,
        rating: 4.8,
        reviews: 9,
        badge: "Premium",
        tags: ["2MP", "WDR", "ARTPEC-7", "IK10"],
        shortDesc: "Premium fixed dome camera with outstanding WDR and IK10 protection.",
        image: "/products/Moderne Überwachungskameras für Zuhause.jpeg",
        stock: 12
    }),
    createProduct({
        id: 7,
        cat: "Access Control",
        brand: "HID",
        name: "HID VertX EVO V1000 Network Door Controller",
        sku: "HID-V1000",
        price: 128000,
        oldPrice: 145000,
        rating: 4.7,
        reviews: 7,
        badge: null,
        tags: ["4-Door", "Network", "OSDP", "HID"],
        shortDesc: "Networked controller for secure, scalable multi-door access.",
        image: "/products/cctv.jpeg",
        stock: 10
    }),
    createProduct({
        id: 8,
        cat: "Networking",
        brand: "Ubiquiti",
        name: "Ubiquiti UniFi U6 Pro WiFi 6 Access Point",
        sku: "UBQ-U6PRO",
        price: 89000,
        oldPrice: null,
        rating: 4.8,
        reviews: 44,
        badge: "Popular",
        tags: ["WiFi 6", "4x4 MU-MIMO", "PoE", "Indoor"],
        shortDesc: "High-performance WiFi 6 AP for dense office environments.",
        image: "/products/Moderne Überwachungskameras für Zuhause.jpeg",
        stock: 28
    }),
    createProduct({
        id: 9,
        cat: "Fiber Optic",
        brand: "AFL",
        name: "AFL Fujikura 90S+ Fusion Splicer Kit",
        sku: "AFL-90SPLUS",
        price: 1250000,
        oldPrice: null,
        rating: 4.9,
        reviews: 6,
        badge: "Pro Grade",
        tags: ["Core Alignment", "5s Splice", "Auto Mode"],
        shortDesc: "Professional core-alignment fusion splicer kit for field work.",
        image: "/products/p3.jpeg",
        stock: 5
    })
];

export const CATEGORIES = ["All Products", "CCTV", "Access Control", "Networking", "Fiber Optic"];
