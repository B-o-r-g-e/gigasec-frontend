'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {slugify} from "@/app/(marketing)/blog/[slug]/components/functions";

// type topRelatedProps = {
//     matchCount: number
//     id: number
//     cat: string
//     title: string
//     excerpt: string
//     authorId: number
//     date: string
//     read: string
//     featured: boolean
//     tags: string[]
//     sections: {
//         heading: string
//         body: string
//     }[]
// }

export default function RelatedPosts({topRelated}) {
    const [ref, vis] = useInView(0.1);
    const [hov, setHov] = useState(false);

    return (
        <section ref={ref} className="py-20" style={{ background: "#fff" }}>
            <div className="max-w-7xl mx-auto px-10">
                <div className={`${spaceMono.className}`} style={{ fontSize: 11, color: B.electric, letterSpacing: 3, marginBottom: 12 }}>KEEP READING</div>
                <h2 className={`${syne.className} mb-10`} style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.4rem)", color: B.navy, letterSpacing: -0.5 }}>Related Articles</h2>
                <div className="grid grid-cols-3 gap-6">
                    {topRelated.map((p, i) => {
                        return (
                            <a key={p.title} href={`/blog/${slugify(topRelated[i].title)}`} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                               className="rounded-[16px] overflow-hidden no-underline transition-all duration-400 block"
                               style={{ background: hov ? B.navy : B.offwhite, border: `1.5px solid ${hov ? B.electric : "transparent"}`, opacity: vis ? 1 : 0, transform: vis ? (hov ? "translateY(-6px)" : "none") : "translateY(30px)", transitionDelay: `${i * 100}ms`, boxShadow: hov ? "0 20px 48px rgba(13,61,61,0.18)" : "none" }}>
                                {/* Image area */}
                                <div className="h-35 flex items-center justify-center"
                                     style={{ background: `linear-gradient(135deg,${B.navy},${B.electric})`, position: "relative", overflow: "hidden" }}>
                                    <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(51,154,153,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(51,154,153,0.12) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
                                    <span className={`${spaceMono.className} px-3 py-1 rounded-full absolute top-4 left-4`} style={{ fontSize: 9, background: "rgba(51,154,153,0.4)", color: "#fff", letterSpacing: 1.5 }}>{p.cat}</span>
                                </div>
                                <div className="p-5">
                                    <h3 className={`${syne.className} mb-3 transition-colors duration-300`} style={{ fontWeight: 700, fontSize: 15, color: hov ? "#fff" : B.navy, lineHeight: 1.4 }}>{p.title}</h3>
                                    <div className={`${dMSans.className} flex items-center gap-3`} style={{ fontSize: 12, color: hov ? "rgba(255,255,255,0.5)" : B.gray }}>
                                        <Icon name="clock" size={12} color={B.electric} />
                                        {p.read} read · {p.date}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
