'use client'
import {useEffect, useState} from "react";
import {Icon} from "@/icons/Icon";
import type { IconName } from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, syne} from "@/theme/fonts";

export default function Hero() {
    const [vis, setVis] = useState(false);
    useEffect(() => {
        setTimeout(() => setVis(true), 80);
    }, []);

    return (
        <section
            className="relative flex items-center overflow-hidden pt-[64px] sm:pt-[72px] min-h-[56vh]"
            style={{
                background: `linear-gradient(145deg, ${B.navyDark} 0%, ${B.navy} 55%, #1a5958 100%)`,
            }}
        >
            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none animate-gridDrift"
                style={{
                    backgroundImage: `linear-gradient(rgba(51,154,153,0.09) 1px,transparent 1px),
      linear-gradient(90deg,rgba(51,154,153,0.09) 1px,transparent 1px)`,
                    backgroundSize: "56px 56px",
                }}
            />

            {/* Orb */}
            <div
                className="absolute rounded-full pointer-events-none animate-orbPulse"
                style={{
                    right: "-5%",
                    top: "5%",
                    width: 600,
                    height: 600,
                    background:
                        "radial-gradient(circle,rgba(51,154,153,0.18) 0%,transparent 65%)",
                }}
            />

            {/* Content */}
            <div
                className="relative z-[5] max-w-[1280px] mx-auto w-full px-5 sm:px-8 lg:px-10 py-14 sm:py-[80px] pb-16 sm:pb-[100px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-center">

                {/* Left */}
                <div>
                    {/* Badge */}
                    <div
                        className={`inline-flex items-center gap-2 rounded-full px-[14px] py-[6px] sm:px-[18px] mb-6 sm:mb-7 border
        bg-[rgba(51,154,153,0.12)] border-[rgba(51,154,153,0.4)]
        transition-all duration-[800ms]`}
                        style={{
                            opacity: vis ? 1 : 0,
                            transform: vis
                                ? "scale(1)"
                                : "scale(0.7) translateX(-30px)",
                        }}
                    >
                        <div
                            className="w-[7px] h-[7px] rounded-full animate-blink"
                            style={{background: B.electric}}
                        />
                        <span className="font-mono text-[10px] sm:text-[11px] tracking-[2px]" style={{color: B.electric}}>
          OFFICIAL DISTRIBUTOR — NIGERIA
        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className={`${syne.className} font-extrabold leading-none text-white mb-6 tracking-[-2px]
                            text-[clamp(2.5rem,5.5vw,4.2rem)]
                            transition-all duration-[1100ms]`}
                        style={{
                            opacity: vis ? 1 : 0,
                            transform: vis ? "none" : "translateY(60px)",
                        }}
                    >
                        Professional <br/>
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: `linear-gradient(90deg,${B.electric},${B.bright},#99dddd)`,
                                WebkitBackgroundClip: "text",
                            }}
                        >
          Security Equipment
        </span>
                        <br/>
                        Delivered Nationwide.
                    </h1>

                    {/* Paragraph */}
                    <p
                        className={`${dMSans.className} text-[1rem] sm:text-[1.05rem] leading-[1.75] mb-8 sm:mb-9 text-white/65
                            transition-all duration-900`}
                        style={{
                            opacity: vis ? 1 : 0,
                            transform: vis ? "none" : "translateX(-40px)",
                        }}
                    >
                        Genuine Hikvision, Dahua, Cisco, Axis, and more — sourced directly from authorised distributors
                        with full warranty and local support.
                    </p>

                    {/* Buttons */}
                    <div
                        className="flex gap-3 flex-wrap transition-all duration-900"
                        style={{opacity: vis ? 1 : 0}}
                    >
                        {/* Primary */}
                        <a
                            href="#products"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-7 py-[14px] rounded-md text-white font-bold text-sm transition-all duration-300 shadow-lg"
                            style={{
                                background: B.electric,
                                boxShadow: "0 8px 28px rgba(51,154,153,0.4)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                                e.currentTarget.style.boxShadow =
                                    "0 12px 36px rgba(51,154,153,0.55)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "none";
                                e.currentTarget.style.boxShadow =
                                    "0 8px 28px rgba(51,154,153,0.4)";
                            }}
                        >
                            Browse Products <Icon name="arrow" size={16} color="#fff"/>
                        </a>

                        {/* Secondary */}
                        <a
                            href="#contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-7 py-[14px] rounded-md text-white font-semibold text-sm border border-white/30 transition-all duration-200"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = B.electric;
                                e.currentTarget.style.color = B.electric;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                                e.currentTarget.style.color = "#fff";
                            }}
                        >
                            <Icon name="phone" size={16} color="currentColor"/>
                            Request Bulk Quote
                        </a>
                    </div>
                </div>

                {/* Right (badges) */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-900"
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(60px)",
                    }}
                >
                    {(
                        [
                            {icon: "check", title: "Genuine Products", sub: "100% authentic, factory-sealed"},
                            {icon: "truck", title: "Nationwide Delivery", sub: "Lagos, Abuja, PH & more"},
                            {icon: "shield", title: "Warranty Backed", sub: "Full manufacturer warranty"},
                            {icon: "phone", title: "Technical Support", sub: "Engineer support included"},
                        ] satisfies { icon: IconName; title: string; sub: string }[]
                    ).map((b, i) => (
                        <div
                            key={b.title}
                            className="rounded-[14px] p-5 backdrop-blur-md border
          bg-white/5 border-[rgba(51,154,153,0.2)]"
                            style={{
                                animation: vis
                                    ? `floatBadge 4s ease-in-out ${i * 0.3}s infinite`
                                    : "none",
                            }}
                        >
                            <div
                                className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-3 bg-[rgba(51,154,153,0.15)]">
                                <Icon name={b.icon} size={18} color={B.electric}/>
                            </div>
                            <div className={`${syne.className} font-bold text-[13px] text-white mb-1`}>
                                {b.title}
                            </div>
                            <div className="text-[12px] text-white/50">
                                {b.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom wave */}
            {/*<div className="absolute bottom-[-1px] left-0 right-0">*/}
            {/*    <svg viewBox="0 0 1440 80" fill="none" className="block w-full">*/}
            {/*        <path*/}
            {/*            d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z"*/}
            {/*            fill="#F5F7FA"*/}
            {/*        />*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </section>
    )
}
