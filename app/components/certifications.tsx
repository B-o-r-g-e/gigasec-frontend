"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Certifications() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.2, once: true });

    const certs = [
        "ISO 9001 Certified Practices",
        "ISO 27001 Certified Practices",
        "NCC AVTS Licensed Service Provider",
        "Best Location-Based Technology Services Provider — Nigeria",
        "Innovation in Vehicle Monitoring Solutions (2020)",
        "100% Nigerian Company",
    ];

    return (
        <section ref={ref} className="bg-[#f8fafc] py-[64px]">
            <div className="mx-auto max-w-[1280px] px-8">
                <div
                    className={`mb-10 text-center transition-all duration-500 ${
                        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                >
                    <div className="font-['Space_Mono',monospace] text-[10px] tracking-[2px] text-[#667085]">
                        CERTIFICATIONS & PARTNERSHIPS
                    </div>
                </div>

                <div
                    className={`flex flex-wrap justify-center gap-4 transition-all duration-500 ${
                        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                >
                    {certs.map((c) => (
                        <div
                            key={c}
                            className="rounded-full border-[1.5px] border-[#e8edf3] bg-white px-5 py-[10px] font-['DM_Sans',sans-serif] text-[13px] font-semibold text-[#0d3d3d] transition-all duration-200 hover:border-[#339a99] hover:text-[#339a99]"
                        >
                            {c}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
