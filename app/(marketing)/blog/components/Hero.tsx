'use client'
import {useEffect, useState} from "react";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {Icon} from "@/icons/Icon";

type HeroProps = {
    query: string;
    onQueryChange: (value: string) => void;
};

export default function Hero({query, onQueryChange}: HeroProps) {
    const [vis, setVis] = useState(false);
    useEffect(() => {
        setTimeout(() => setVis(true), 80);
    }, []);

    return (
        <section
            className="min-h-[58vh] relative flex items-center overflow-hidden pt-[72px]"
            style={{
                background: `linear-gradient(145deg,${B.navyDark} 0%,${B.navy} 55%,#1a5958 100%)`
            }}
        >
            {/* Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(51,154,153,0.09) 1px,transparent 1px),linear-gradient(90deg,rgba(51,154,153,0.09) 1px,transparent 1px)`,
                    backgroundSize: "56px 56px",
                    animation: "gridDrift 25s linear infinite"
                }}
            />

            {/* Glow Orb */}
            <div
                className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle,rgba(51,154,153,0.18) 0%,transparent 65%)",
                    animation: "orbPulse 7s ease-in-out infinite"
                }}
            />

            {/* Content */}
            <div className="relative z-[5] max-w-[1280px] mx-auto w-full text-center px-[2.5rem] pt-[80px] pb-[100px]">

                <div
                    className={`inline-flex items-center gap-2 rounded-full px-[18px] py-[6px] mb-7 border transition-all duration-[800ms] ${
                        vis ? "opacity-100 scale-100" : "opacity-0 scale-[0.7]"
                    }`}
                    style={{
                        background: "rgba(51,154,153,0.12)",
                        borderColor: "rgba(51,154,153,0.4)",
                        transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)"
                    }}
                >
                    <div
                        className="w-[7px] h-[7px] rounded-full"
                        style={{
                            background: B.electric,
                            animation: "blink 2s infinite"
                        }}
                    />
                    <span
                        className={`${spaceMono.className} text-[11px] tracking-[2px] font-mono`}
                        style={{
                            color: B.electric
                        }}
                    >
                      INSIGHTS & RESOURCES
                    </span>
                </div>
                <h1
                    className={`${syne.className} font-extrabold leading-[1] text-white mb-6 tracking-[-2px]
                    text-[clamp(2.8rem,6.5vw,5rem)]
                    transition-all duration-[1100ms]
                    ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"}
                `}
                    style={{
                        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                        transitionDelay: "0.2s"
                    }}
                >
                    Security Intelligence,<br/>
                    <span
                        style={{
                            background: `linear-gradient(90deg,${B.electric},${B.bright},#99dddd)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        Practical Insights.
                    </span>
                </h1>
                <p
                    className={`${dMSans.className} text-[1.1rem] leading-[1.75] max-w-[520px] mx-auto mb-10
                    transition-all duration-[900ms] ease
                    ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}
                `}
                    style={{
                        color: "rgba(255,255,255,0.65)",
                        transitionDelay: "0.4s"
                    }}
                >
                    Practical guides, industry analysis, and technical deep-dives from Gigasec's team of engineers and
                    security specialists.
                </p>
                <div
                    className={`max-w-[540px] mx-auto relative
                    transition-all duration-[900ms]
                    ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}
                `}
                    style={{
                        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                        transitionDelay: "0.55s"
                    }}
                >
                    <input
                        value={query}
                        onChange={e => onQueryChange(e.target.value)}
                        placeholder="Search articles, topics, or keywords..."
                        className={`${dMSans.className} w-full py-[18px] pl-[24px] pr-[56px] rounded-[12px] outline-none text-[15px] text-white
                            border border-[rgba(51,154,153,0.25)]
                            bg-[rgba(8,45,48,0.45)] backdrop-blur-[10px]
                            placeholder:text-[rgba(255,255,255,0.45)]
                            shadow-[0_10px_30px_rgba(0,0,0,0.22)]
                            focus:shadow-[0_10px_30px_rgba(0,0,0,0.22),0_0_0_3px_rgba(51,154,153,0.35)]
                            transition-shadow duration-300`}
                        style={{
                            color: "rgba(255,255,255,0.85)"
                        }}
                    />
                    <div className="absolute right-[18px] top-1/2 -translate-y-1/2">
                        <Icon name="search" size={20} color="rgba(255,255,255,0.55)"/>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[-1px] left-0 right-0">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    className="block w-full"
                >
                    <path
                        d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z"
                        fill="#F5F7FA"
                    />
                </svg>
            </div>
        </section>
    )
}
