'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {B} from "@/theme/Colors";
import {Icon} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import type {ServiceData} from "@/app/(marketing)/services/components/services";
import {slugify} from "@/app/(marketing)/blog/[slug]/components/functions";

export default function RelatedServices({relatedServices}: { relatedServices: ServiceData[] }) {
    const [ref, vis] = useInView(0.1);
    const [hovIndex, setHovIndex] = useState<number | null>(null);

    return (
        <section ref={ref} className="py-16 bg-white sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className={`${spaceMono.className}`} style={{
                    fontSize: 11,
                    color: B.electric,
                    letterSpacing: 3,
                    marginBottom: 12
                }}>EXPLORE MORE
                </div>
                <h2 className={`${syne.className} mb-10`} style={{
                    fontWeight: 800,
                    fontSize: "clamp(1.8rem,3vw,2.4rem)",
                    color: B.navy,
                    letterSpacing: -0.5
                }}>Related Services</h2>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {relatedServices.map((s, i) => {
                        const isHovered = hovIndex === i;
                        const serviceHref = `/services/${slugify(s.title)}`;

                        return (
                            <a key={s.id}
                               href={serviceHref}
                               onMouseEnter={() => setHovIndex(i)}
                               onMouseLeave={() => setHovIndex(null)}
                               className="block rounded-[20px] p-6 no-underline transition-all duration-300 sm:p-7"
                               style={{
                                   background: isHovered ? B.navy : B.offwhite,
                                   border: `1.5px solid ${isHovered ? B.electric : B.lightgray}`,
                                   opacity: vis ? 1 : 0,
                                   transform: vis ? (isHovered ? "translateY(-6px)" : "none") : "translateY(30px)",
                                   transitionDelay: `${i * 60}ms`,
                                   boxShadow: isHovered ? "0 20px 48px rgba(51,51,51,0.18)" : "none"
                               }}>
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                                    style={{
                                        background: isHovered ? "rgba(0,204,204,0.2)" : "rgba(0,204,204,0.08)",
                                        transform: isHovered ? "rotate(5deg) scale(1.1)" : "none"
                                    }}>
                                    <Icon name={s.icon} size={22} color={isHovered ? B.bright : B.electric}/>
                                </div>
                                <h3 className={`${syne.className} mb-2 transition-colors duration-300`}
                                    style={{
                                        fontWeight: 700,
                                        fontSize: 18,
                                        color: isHovered ? "#fff" : B.navy
                                    }}>{s.title}</h3>
                                <p className={`${dMSans.className}`} style={{
                                    fontSize: 14,
                                    color: isHovered ? "rgba(255,255,255,0.65)" : B.gray,
                                    lineHeight: 1.65
                                }}>{s.desc}</p>
                                <div className="flex items-center gap-2 mt-5 transition-all duration-300"
                                     style={{
                                         opacity: isHovered ? 1 : 0,
                                         transform: isHovered ? "none" : "translateX(-6px)",
                                         color: B.electric
                                     }}>
                                    <span className={`${dMSans.className}`}
                                          style={{fontWeight: 600, fontSize: 13, color: B.electric}}>Learn More</span>
                                    <Icon name="arrow" size={14} color={B.electric}/>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
