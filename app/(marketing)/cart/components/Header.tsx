'use client'
import {useEffect, useState} from "react";
import {Icon} from "@/icons/Icon";
import type { IconName } from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, syne} from "@/theme/fonts";

export default function CartHeader({ itemCount }: { itemCount: number }) {
    const [vis, setVis] = useState(false);
    useEffect(() => {
        setTimeout(() => setVis(true), 80);
    }, []);

    return (
        <section
            className="pt-[64px] sm:pt-[72px]"
            style={{ background: "linear-gradient(145deg,#061e1e,#0d3d3d)" }}
        >
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 mb-6 transition-all duration-700"
                     style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(-16px)" }}>
                    {["Home", "Shop", "Cart"].map((c, i) => (
                        <span key={c} className="flex items-center gap-2">
              {i > 0 && <span style={{ color: "rgba(51,154,153,0.5)", fontSize: 14 }}>›</span>}
                            <a href="#" className={`${dMSans.className} no-underline`}style={{ fontSize: 13, color: i === 2 ? B.electric : "rgba(255,255,255,0.4)", fontWeight: i === 2 ? 600 : 400 }}>{c}</a>
            </span>
                    ))}
                </div>

                <div className="flex items-end justify-between flex-wrap gap-4 transition-all duration-700"
                     style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)", transitionDelay: "150ms" }}>
                    <div>
                        <h1 className={`${syne.className}`}
                            style={{ fontWeight: 800, fontSize: "clamp(2.2rem,5vw,3.5rem)", color: "#fff", letterSpacing: -1, lineHeight: 1 }}>
                            Your Cart
                        </h1>
                        <p className={`${dMSans.className} mt-3`} style={{ fontSize: 16, color: "rgba(255,255,255,0.6)" }}>
                            {itemCount} item{itemCount !== 1 ? "s" : ""} ready for checkout
                        </p>
                    </div>
                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center gap-3">
                        {([
                            { icon: "lock",  text: "Secure Checkout" },
                            { icon: "truck", text: "Nationwide Delivery" },
                            { icon: "check", text: "Genuine Products" },
                        ] as const satisfies { icon: IconName; text: string }[]).map(b => (
                            <div key={b.text} className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                                 style={{ background: "rgba(51,154,153,0.12)", border: "1px solid rgba(51,154,153,0.25)" }}>
                                <Icon name={b.icon} size={14} color={B.electric} />
                                <span className={`${dMSans.className}`} style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{b.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: -1 }}>
                <svg viewBox="0 0 1440 50" fill="none" className="block w-full">
                    <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="#F5F7FA" />
                </svg>
            </div>
        </section>
    )
}
