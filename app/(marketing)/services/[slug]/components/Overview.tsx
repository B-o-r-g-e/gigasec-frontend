'use client'
import {useInView} from "@/hooks/useInView";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import type {ServiceData} from "@/app/(marketing)/services/components/services";

export default function Overview({currentService}: { currentService: ServiceData }) {
    const [ref, vis] = useInView(0.08);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section ref={ref} className="py-16 sm:py-20 lg:py-24" style={{background: B.offwhite}}>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-2 lg:gap-20">
                    {/* Left — overview text */}
                    <div className="transition-all duration-500"
                         style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-40px)"}}>
                        <div className={`${spaceMono.className}`} style={{
                            fontSize: 11,
                            color: B.electric,
                            letterSpacing: 3,
                            marginBottom: 14
                        }}>THE SERVICE
                        </div>
                        <h2 className={`${syne.className} mb-6`} style={{
                            fontWeight: 800,
                            fontSize: "clamp(2rem,4vw,3rem)",
                            color: B.navy,
                            letterSpacing: -0.5
                        }}>
                            What We Deliver
                        </h2>
                        {currentService.content.overview.split("\n\n").map((para, i) => (
                            <p key={i} className={`${dMSans.className} mb-5`}
                               style={{fontSize: 16, lineHeight: 1.8, color: B.charcoal}}>{para}</p>
                        ))}
                    </div>

                    {/* Right — capabilities list */}
                    <div className="transition-all duration-500" style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(40px)",
                        transitionDelay: "90ms"
                    }}>
                        <div className={`${spaceMono.className}`} style={{
                            fontSize: 11,
                            color: B.electric,
                            letterSpacing: 3,
                            marginBottom: 20
                        }}>CAPABILITIES
                        </div>
                        <div className="flex flex-col gap-3">
                            {currentService.content.capabilities.map((cap, i) => {
                                const isHovered = hoveredIndex === i;

                                return (
                                    <div key={cap} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}
                                         className="flex items-start gap-4 px-5 py-4 rounded-xl transition-all duration-300"
                                         style={{
                                             background: isHovered ? B.navy : "#fff",
                                             border: `1.5px solid ${isHovered ? B.electric : B.lightgray}`,
                                             opacity: vis ? 1 : 0,
                                             transform: vis ? (isHovered ? "translateX(6px)" : "none") : "translateY(20px)",
                                             transitionDelay: `${i * 40}ms`,
                                             boxShadow: isHovered ? "0 12px 32px rgba(51,51,51,0.15)" : "none"
                                         }}>
                                        <div
                                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]"
                                            style={{background: "rgba(0,204,204,0.15)"}}>
                                            <Icon name="check" size={11} color={B.electric}/>
                                        </div>
                                        <span className={`${dMSans.className}`} style={{
                                            fontSize: 14,
                                            color: isHovered ? "#fff" : B.charcoal,
                                            lineHeight: 1.55
                                        }}>{cap}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
