'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {Icon} from "@/icons/Icon";
import type {ServiceData} from "@/app/(marketing)/services/components/services";

export default function Industries({currentService}: { currentService: ServiceData }) {
    const [ref, vis] = useInView(0.1);
    const [hovIndex, setHovIndex] = useState<number | null>(null);

    return (
        <section ref={ref} className="py-16 bg-white sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="mb-10 text-center transition-all duration-500 sm:mb-12"
                     style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "scale(0.9)"}}>
                    <div className={`${spaceMono.className}`} style={{
                        fontSize: 11,
                        color: B.electric,
                        letterSpacing: 3,
                        marginBottom: 12
                    }}>SECTORS WE SERVE
                    </div>
                    <h2 className={`${syne.className}`} style={{
                        fontWeight: 800,
                        fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                        color: B.navy,
                        letterSpacing: -0.5
                    }}>Industry Experience</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {currentService.content.industries.map((ind, i) => {
                        const isHovered = hovIndex === i

                        return (
                            <div key={ind.name}
                                 onMouseEnter={() => setHovIndex(i)}
                                 onMouseLeave={() => setHovIndex(null)}
                                 className="flex items-center gap-4 px-5 py-4 rounded-xl cursor-default transition-all duration-300"
                                 style={{
                                     background: isHovered ? B.navy : B.offwhite,
                                     border: `1.5px solid ${isHovered ? B.electric : B.lightgray}`,
                                     opacity: vis ? 1 : 0,
                                     transform: vis ? (isHovered ? "translateY(-4px)" : "none") : "translateY(20px)",
                                     transitionDelay: `${i * 40}ms`,
                                     boxShadow: isHovered ? "0 12px 28px rgba(51,51,51,0.14)" : "none"
                                 }}>
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                                    style={{background: isHovered ? "rgba(0,204,204,0.2)" : "rgba(0,204,204,0.1)"}}>
                                    <Icon name={ind.icon} size={18} color={isHovered ? B.bright : B.electric}/>
                                </div>
                                <span className={`${dMSans.className}`} style={{
                                    fontWeight: 600,
                                    fontSize: 14,
                                    color: isHovered ? "#fff" : B.charcoal
                                }}>{ind.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
