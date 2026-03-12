"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {Check} from "lucide-react";

export default function WhySection() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.15, once: true });

    const points = [
        {
            icon: "check",
            title: "Certified Engineers",
            desc: "Our team holds internationally recognized security and ICT certifications.",
        },
        {
            icon: "check",
            title: "End-to-End Delivery",
            desc: "From survey and design through installation, commissioning, and ongoing support.",
        },
        {
            icon: "check",
            title: "Nigerian Market Expertise",
            desc: "15+ years navigating Nigeria's unique infrastructure challenges.",
        },
        {
            icon: "check",
            title: "International Standards",
            desc: "All systems designed to global best practices — ISO, IEC, and industry standards.",
        },
    ];

    return (
        <section ref={ref} className="bg-white py-[100px]">
            <div className="mx-auto max-w-[1280px] px-8">
                <div className="grid items-center gap-20 md:grid-cols-2">
                    {/* Left */}
                    <div
                        className={`relative transition-all duration-700 ease-out ${
                            inView ? "translate-x-0 opacity-100" : "-translate-x-[30px] opacity-0"
                        }`}
                    >
                        <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#0d3d3d_0%,#1c5856_100%)] p-12">
                            <div className="absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full bg-[rgba(0,153,204,0.12)]" />

                            <div className="mb-5 font-['Space_Mono',monospace] text-[10px] tracking-[3px] text-[#339a99]">
                                GIGASEC ADVANTAGE
                            </div>

                            <div className="mb-2 font-['Syne',sans-serif] text-[2.8rem] font-extrabold leading-[1.1] text-white">
                                13+
                            </div>

                            <div className="mb-8 font-['DM_Sans',sans-serif] text-[16px] text-white/70">
                                Years of industry-leading security deployments
                            </div>

                            {[
                                { label: "Lagos Projects", pct: 85 },
                                { label: "Industrial Sites", pct: 72 },
                                { label: "Government / Public", pct: 60 },
                            ].map(({ label, pct }) => (
                                <div key={label} className="mb-[18px]">
                                    <div className="mb-[6px] flex justify-between">
                    <span className="font-['DM_Sans',sans-serif] text-[13px] text-white/70">
                      {label}
                    </span>
                                        <span className="font-['Space_Mono',monospace] text-[12px] text-[#339a99]">
                      {pct}%
                    </span>
                                    </div>

                                    <div className="h-1 rounded-[2px] bg-white/10">
                                        <div
                                            className="h-full rounded-[2px] bg-[linear-gradient(90deg,#339a99,#339a99)] transition-all duration-[1200ms] ease-out"
                                            style={{
                                                width: inView ? `${pct}%` : "0%",
                                                transitionDelay: "500ms",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div
                        className={`transition-all duration-700 ease-out ${
                            inView ? "translate-x-0 opacity-100" : "translate-x-[30px] opacity-0"
                        }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <div className="mb-3 font-['Space_Mono',monospace] text-[11px] tracking-[3px] text-[#339a99]">
                            WHY CHOOSE US
                        </div>

                        <h2 className="mb-5 font-['Syne',sans-serif] text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.5px] text-[#0d3d3d]">
                            Nigeria&apos;s Most Trusted Security Technology Partner
                        </h2>

                        <p className="mb-9 font-['DM_Sans',sans-serif] text-[16px] leading-[1.7] text-[#667085]">
                            Gigasec has been engineering security and ICT infrastructure
                            solutions for Nigeria&apos;s most demanding clients across banking,
                            oil & gas, government, and commercial sectors.
                        </p>

                        <div className="flex flex-col gap-5">
                            {points.map((p, i) => (
                                <div
                                    key={p.title}
                                    className={`flex items-start gap-4 transition-all duration-500 ease-out ${
                                        inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                                    }`}
                                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[rgba(0,153,204,0.1)]">
                                        <Check size={16} color="#339a99" />
                                    </div>

                                    <div>
                                        <div className="mb-1 font-['Syne',sans-serif] text-[16px] font-bold text-[#0d3d3d]">
                                            {p.title}
                                        </div>
                                        <div className="font-['DM_Sans',sans-serif] text-[14px] leading-[1.6] text-[#667085]">
                                            {p.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}