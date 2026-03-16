'use client'
import {useInView} from "@/hooks/useInView";
import {B} from "@/colors/Colors";
import CertCard from "@/components/about/CertCard";

export default function Certifications() {
    const [ref, vis] = useInView(0.1);
    const certs = [
        { name: "Hikvision Authorized Partner", tier: "Diamond" },
        { name: "Dahua Certified Dealer", tier: "Gold" },
        { name: "Cisco Partner Network", tier: "Select" },
        { name: "Huawei Enterprise Partner", tier: "Silver" },
        { name: "ISO 9001:2015", tier: "Certified" },
        { name: "CSIA Member", tier: "Active" },
        { name: "ATEX Certified", tier: "Zone 1 & 2" },
        { name: "IEC 61511 SIL", tier: "Assessed" },
    ];
    return (
        <section
            ref={ref}
            className="bg-white py-[100px]"
        >
            <div className="max-w-[1280px] mx-auto px-10">

                {/* Header */}
                <div
                    className="text-center mb-16"
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "scale(0.8)",
                        transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                >
                    <div
                        className="font-['Space_Mono',monospace] text-[11px] tracking-[3px] mb-[14px]"
                        style={{ color: B.electric }}
                    >
                        TRUST & CREDENTIALS
                    </div>

                    <h2
                        className="font-['Syne',sans-serif] font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.5px]"
                        style={{ color: B.navy }}
                    >
                        Certifications & Partnerships
                    </h2>
                </div>

                {/* Certification grid */}
                <div className="grid grid-cols-4 gap-5">
                    {certs.map((c, i) => (
                        <CertCard key={c.name} cert={c} i={i} vis={vis} />
                    ))}
                </div>

            </div>
        </section>
    )
}