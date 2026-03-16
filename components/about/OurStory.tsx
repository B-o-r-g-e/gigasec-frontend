'use client'
import {useRef} from "react";
import {useInView} from "framer-motion";
import MilestoneItem from "@/components/about/Milestone";

const B = {
    navy:     "#0d3d3d",
    navyDark: "#061e1e",
    electric: "#339a99",
    bright:   "#4dbdbc",
    orange:   "#FF6600",
    offwhite: "#F5F7FA",
    white:    "#FFFFFF",
    charcoal: "#1a2332",
    gray:     "#6B7280",
    lightgray:"#e8edf3",
};

export default function OurStory() {
    const ref = useRef(null);
    const vis = useInView(ref, { amount: 0.1, once: true });

    const milestones = [
        { year: "2009", title: "Company Founded", desc: "Gigasec Services incorporated in Rivers with a focus on CCTV and access control systems." },
        { year: "2012", title: "Fiber Optic Division", desc: "Expanded into enterprise fiber optic installation following growing demand from telecoms operators." },
        { year: "2016", title: "Oil & Gas Certified", desc: "Achieved ATEX and IEC 61511 certification, opening the door to offshore and upstream energy clients." },
        { year: "2019", title: "ICT Infrastructure", desc: "Launched full ICT division covering structured cabling, LAN/WAN, and data center services." },
        { year: "2022", title: "Pan-West Africa", desc: "Extended operations to Ghana and Côte d'Ivoire. Client base grew past 150 active accounts." },
        { year: "2025", title: "Smart Cities", desc: "Lead integrator for a 2,400-camera smart city deployment across Greater Lagos." },
    ];
    return(
        <section
            ref={ref}
            className="relative overflow-hidden py-30"
            style={{ background: B.offwhite }}
        >
            <div className="max-w-7xl mx-auto px-10">

                {/* Section header */}
                <div
                    className="text-center mb-24"
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateY(0)" : "translateY(-50px)",
                        transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
                    }}
                >
                    <div
                        className="font-['Space_Mono',monospace] text-[11px] tracking-[3px] mb-[14px]"
                        style={{ color: B.electric }}
                    >
                        OUR JOURNEY
                    </div>

                    <h2
                        className="font-['Syne',sans-serif] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] tracking-[-1px] leading-[1.1]"
                        style={{ color: B.navy }}
                    >
                        From One Office in Lagos
                        <br />

                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: `linear-gradient(135deg, ${B.electric}, ${B.bright})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
          to West Africa&#39;s Largest
        </span>

                        <br />
                        Security Integrator.
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Center line */}
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
                        style={{
                            background: `linear-gradient(to bottom, ${B.electric}, rgba(51,154,153,0.1))`,
                            transformOrigin: "top",
                            scaleY: vis ? 1 : 0,
                            animation: vis ? "lineGrow 1.5s ease forwards" : "none",
                        }}
                    />

                    <div className="flex flex-col">
                        {milestones.map((m, i) => {
                            const isLeft = i % 2 === 0;

                            return (
                                <MilestoneItem
                                    key={m.year}
                                    m={m}
                                    isLeft={isLeft}
                                    i={i}
                                    vis={vis}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
