'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {Icon} from "@/icons/Icon";
import type {ServiceData} from "@/app/(marketing)/services/components/services";

export default function Features({currentService}: { currentService: ServiceData }) {
    const [ref, vis] = useInView(0.06);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section ref={ref} className="py-16 bg-white sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="mb-12 text-center transition-all duration-500 sm:mb-16"
                     style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(-30px)"}}>
                    <div className={`${spaceMono.className}`} style={{
                        fontSize: 11,
                        color: B.electric,
                        letterSpacing: 3,
                        marginBottom: 14
                    }}>WHAT&#39;S INCLUDED
                    </div>
                    <h2 className={`${syne.className}`} style={{
                        fontWeight: 800,
                        fontSize: "clamp(2rem,4vw,3rem)",
                        color: B.navy,
                        letterSpacing: -0.5
                    }}>
                        Everything You Need,<br/>
                        <span style={{color: B.electric}}>Nothing You Don&#39;t.</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {currentService.content.features.map((f, i) => {
                        const isHovered = hoveredIndex === i;

                        return (
                            <div key={f.title}
                                 onMouseEnter={() => setHoveredIndex(i)}
                                 onMouseLeave={() => setHoveredIndex(null)}
                                 className="rounded-[20px] p-6 transition-all duration-300 sm:p-8"
                                 style={{
                                     background: isHovered ? B.navy : B.offwhite,
                                     border: `1.5px solid ${isHovered ? B.electric : "transparent"}`,
                                     opacity: vis ? 1 : 0,
                                     transform: vis ? (isHovered ? "translateY(-8px)" : "none") : "translateY(40px)",
                                     transitionDelay: `${i * 50}ms`,
                                     boxShadow: isHovered ? "0 28px 56px rgba(51,51,51,0.18)" : "0 4px 12px rgba(0,0,0,0.04)"
                                 }}>
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                                    style={{
                                        background: isHovered ? "rgba(0,204,204,0.2)" : "rgba(0,204,204,0.1)",
                                        transform: isHovered ? "rotate(6deg) scale(1.1)" : "none"
                                    }}>
                                    <Icon name={f.icon} size={26} color={isHovered ? B.bright : B.electric}/>
                                </div>
                                <h3 className={`${syne.className} mb-3 transition-colors duration-300`}
                                    style={{
                                        fontWeight: 700,
                                        fontSize: 18,
                                        color: isHovered ? "#fff" : B.navy
                                    }}>
                                    {f.title}
                                </h3>
                                <p className={`${dMSans.className}`} style={{
                                    fontSize: 14,
                                    lineHeight: 1.72,
                                    color: isHovered ? "rgba(255,255,255,0.7)" : B.gray
                                }}>{f.desc}</p>
                                <div className="h-[3px] mt-6 rounded-sm transition-all duration-300"
                                     style={{
                                         background: `linear-gradient(90deg,${B.electric},${B.bright})`,
                                         width: isHovered ? "60%" : "0%"
                                     }}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
