'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {Icon} from "@/icons/Icon";

const SUGGESTED = [
    {id: 4, brand: "Ubiquiti", name: "UniFi U6 Pro WiFi 6 Access Point", price: 89000, rating: 4.8},
    {id: 5, brand: "Dahua", name: "IPC-HDW2849H-S-IL 8MP Full-color Camera", price: 62000, rating: 4.7},
    {id: 6, brand: "Corning", name: "SMF-28 Ultra Single-Mode Fiber (Per Metre)", price: 450, rating: 4.9},
];

export default function Suggested() {
    const [ref, vis] = useInView(0.1);
    return (
        <section ref={ref} className="py-14 md:py-20" style={{background: "#fff"}}>
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
                <div className={`${spaceMono.className}`} style={{
                    fontSize: 11,
                    color: B.electric,
                    letterSpacing: 3,
                    marginBottom: 12
                }}>YOU MAY ALSO NEED
                </div>
                <h2 className={`${syne.className} mb-10`} style={{
                    fontWeight: 800,
                    fontSize: "clamp(1.8rem,3.5vw,2.4rem)",
                    color: B.navy,
                    letterSpacing: -0.5
                }}>Frequently Bought Together</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SUGGESTED.map((p, i) => {
                        const [hov, setHov] = useState(false);
                        return (
                            <div key={p.id} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                                 className="rounded-[16px] overflow-hidden transition-all duration-300"
                                 style={{
                                     background: hov ? B.navy : B.offwhite,
                                     border: `1.5px solid ${hov ? B.electric : "transparent"}`,
                                     opacity: vis ? 1 : 0,
                                     transform: vis ? (hov ? "translateY(-6px)" : "none") : "translateY(30px)",
                                     transitionDelay: `${i * 100}ms`,
                                     boxShadow: hov ? "0 20px 48px rgba(13,61,61,0.18)" : "none"
                                 }}>
                                {/* Image */}
                                <div className="h-30 flex items-center justify-center"
                                     style={{background: "linear-gradient(135deg,#0d3d3d,#339a99)"}}>
                                    <Icon name="shield" size={36} color="rgba(255,255,255,0.8)"/>
                                </div>
                                <div className="p-5">
                                    <div className={`${spaceMono.className}`} style={{
                                        fontSize: 9,
                                        color: hov ? B.bright : B.electric,
                                        letterSpacing: 2,
                                        marginBottom: 6
                                    }}>{p.brand}</div>
                                    <h3 className={`${syne.className} mb-3`} style={{
                                        fontWeight: 700,
                                        fontSize: 14,
                                        color: hov ? "#fff" : B.navy,
                                        lineHeight: 1.35
                                    }}>{p.name}</h3>
                                    <div className="flex items-center gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" size={12}
                                                                        color={s <= Math.round(p.rating) ? "#FFB800" : B.lightgray}/>)}
                                        <span className={`${dMSans.className}`} style={{
                                            fontSize: 11,
                                            color: hov ? "rgba(255,255,255,0.5)" : B.gray,
                                            marginLeft: 4
                                        }}>{p.rating}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className={`${syne.className}`} style={{
                                            fontWeight: 800,
                                            fontSize: 17,
                                            color: hov ? "#fff" : B.navy
                                        }}>₦{p.price.toLocaleString()}</span>
                                        <button
                                            className={`${dMSans.className} flex items-center gap-2 px-4 py-2 rounded-lg text-white border-none cursor-pointer transition-all duration-300`}
                                            style={{
                                                fontWeight: 600,
                                                fontSize: 12,
                                                background: hov ? B.electric : B.navy
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                                            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                                            <Icon name="plus" size={14} color="#fff"/> Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
