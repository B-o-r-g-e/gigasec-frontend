'use client'
import {useInView} from "@/hooks/useInView";
import {B} from "@/theme/Colors";
import {Icon} from "@/icons/Icon";
import {dMSans, syne} from "@/theme/fonts";
import type {ServiceData} from "@/app/(marketing)/services/components/services";

export default function Testimonial({currenService}: { currenService: ServiceData }) {
    const [ref, vis] = useInView(0.2);
    return (
        <section ref={ref} className="py-16 bg-white sm:py-20">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 text-center transition-all duration-500"
                 style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px) scale(0.97)"}}>
                <div className="mb-6 flex justify-center gap-1 sm:mb-8">
                    {Array(currenService.content.testimonial.rating).fill(0).map((_, i) => (
                        <div key={i}
                             style={{animation: `starPop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 80}ms both`}}>
                            <Icon name="star" size={22} color="#FFB800"/>
                        </div>
                    ))}
                </div>
                <blockquote className={`${dMSans.className} mb-8`} style={{
                    fontSize: "clamp(1.1rem,2.5vw,1.35rem)",
                    color: B.charcoal,
                    lineHeight: 1.8,
                    fontStyle: "italic"
                }}>
                    &#34;{currenService.content.testimonial.quote}&#34;
                </blockquote>
                <div className={`${syne.className}`} style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: B.navy
                }}>{currenService.content.testimonial.name}</div>
                <div className={`${dMSans.className}`} style={{
                    fontSize: 13,
                    color: B.electric,
                    marginTop: 4
                }}>{currenService.content.testimonial.role}</div>
            </div>
        </section>
    );
}
