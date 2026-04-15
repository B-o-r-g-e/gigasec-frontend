'use client'
import {useInView} from "@/hooks/useInView";
import {B} from "@/theme/Colors";
import {useState} from "react";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import type {ServiceData} from "@/app/(marketing)/services/components/services";

export default function Process({currentService}: { currentService: ServiceData }) {
    const [ref, vis] = useInView(0.06);
    const [hovIndex, setHovIndex] = useState<number | null>(null);

    return (
        <section id="process" ref={ref} className="py-16 sm:py-20 lg:py-24"
                 style={{background: "linear-gradient(135deg,#262626,#333333)"}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="mb-12 text-center transition-all duration-500 sm:mb-16"
                     style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(-30px)"}}>
                    <div className={`${spaceMono.className}`} style={{
                        fontSize: 11,
                        color: B.electric,
                        letterSpacing: 3,
                        marginBottom: 14
                    }}>HOW WE WORK
                    </div>
                    <h2 className={`${syne.className}`} style={{
                        fontWeight: 800,
                        fontSize: "clamp(2rem,4vw,3rem)",
                        color: "#fff",
                        letterSpacing: -0.5
                    }}>
                        Our Delivery Process
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {currentService.content.process.map((step, i) => {
                        const isHovered = hovIndex === i;

                        return (
                            <div key={step.step}
                                 onMouseEnter={() => setHovIndex(i)}
                                 onMouseLeave={() => setHovIndex(null)}
                                 className="rounded-[20px] p-6 transition-all duration-300 sm:p-7"
                                 style={{
                                     background: isHovered ? "rgba(0,204,204,0.12)" : "rgba(255,255,255,0.04)",
                                     border: `1px solid ${isHovered ? B.electric : "rgba(0,204,204,0.2)"}`,
                                     opacity: vis ? 1 : 0,
                                     transform: vis ? (isHovered ? "translateY(-6px)" : "none") : "translateY(30px)",
                                     transitionDelay: `${i * 50}ms`,
                                     boxShadow: isHovered ? "0 16px 40px rgba(0,0,0,0.2)" : "none"
                                 }}>
                                <div className={`${syne.className}`} style={{
                                    fontWeight: 800,
                                    fontSize: "2.8rem",
                                    color: isHovered ? B.bright : "rgba(0,204,204,0.3)",
                                    lineHeight: 1,
                                    marginBottom: 16,
                                    letterSpacing: -1
                                }}>{step.step}</div>
                                <h3 className={`${syne.className} mb-3`} style={{
                                    fontWeight: 700,
                                    fontSize: 18,
                                    color: "#fff"
                                }}>{step.title}</h3>
                                <p className={`${dMSans.className}`} style={{
                                    fontSize: 14,
                                    lineHeight: 1.7,
                                    color: "rgba(255,255,255,0.65)"
                                }}>{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
