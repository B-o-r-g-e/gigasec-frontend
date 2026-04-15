'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {Icon} from "@/icons/Icon";
import type {ServiceData} from "@/app/(marketing)/services/components/services";

export default function FAQ({currentService}: {currentService: ServiceData}) {
    const [ref, vis] = useInView(0.08);
    const [open, setOpen] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section ref={ref} className="py-16 sm:py-20 lg:py-24" style={{background: B.offwhite}}>
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="mb-10 text-center transition-all duration-500 sm:mb-14"
                     style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(-20px)"}}>
                    <div className={`${spaceMono.className}`} style={{
                        fontSize: 11,
                        color: B.electric,
                        letterSpacing: 3,
                        marginBottom: 12
                    }}>COMMON QUESTIONS
                    </div>
                    <h2 className={`${syne.className}`} style={{
                        fontWeight: 800,
                        fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                        color: B.navy,
                        letterSpacing: -0.5
                    }}>
                        {currentService.title} FAQs
                    </h2>
                </div>
                <div className="flex flex-col gap-3">
                    {currentService.content.faqs.map((f, i) => {
                        const isHovered = hoveredIndex === i;

                        return (
                            <div key={f.q} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}
                                 onClick={() => setOpen(open === i ? -1 : i)}
                                 className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                                 style={{
                                     background: open === i ? B.navy : (isHovered ? B.offwhite : "#fff"),
                                     border: `1.5px solid ${open === i ? B.electric : (isHovered ? B.electric : B.lightgray)}`,
                                     opacity: vis ? 1 : 0,
                                     transform: vis ? "none" : "translateX(-30px)",
                                     transitionDelay: `${i * 45}ms`,
                                     boxShadow: open === i ? "0 16px 40px rgba(51,51,51,0.15)" : "none"
                                 }}>
                                <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
                                    <span className={`${syne.className}`} style={{
                                        fontWeight: 700,
                                        fontSize: 16,
                                        color: open === i ? "#fff" : B.navy,
                                        flex: 1,
                                        lineHeight: 1.4
                                    }}>{f.q}</span>
                                    <div
                                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                        style={{
                                            background: open === i ? "rgba(0,204,204,0.25)" : "rgba(0,204,204,0.1)",
                                            transform: `rotate(${open === i ? 90 : 0}deg)`
                                        }}>
                                        <Icon name="chevron" size={16} color={B.electric}/>
                                    </div>
                                </div>
                                <div className="overflow-hidden transition-all duration-500"
                                     style={{maxHeight: open === i ? "300px" : "0px"}}>
                                    <p className={`${dMSans.className} px-4 pb-4 sm:px-6 sm:pb-5`} style={{
                                        fontSize: 15,
                                        lineHeight: 1.75,
                                        color: open === i ? "rgba(255,255,255,0.78)" : B.gray
                                    }}>{f.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
