'use client'
import {useState} from "react";

const B = {
    navy:     "#333333",
    navyDark: "#262626",
    electric: "#00CCCC",
    bright:   "#66E0E0",
    orange:   "#00B8B8",
    offwhite: "#FEFEFE",
    white:    "#FFFFFF",
    charcoal: "#333333",
    gray:     "#6B7280",
    lightgray:"#e8edf3",
};

type Milestone = {
    year: string;
    title: string;
    desc: string;
};

export default function MilestoneItem({ m, isLeft, i, vis }: {m: Milestone; isLeft: boolean; i: number; vis: boolean }) {
    const [hov, setHov] = useState(false);

    const card = (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className="rounded-2xl px-8 py-7 cursor-pointer transition-all duration-400"
            style={{
                background: hov ? B.navy : "#fff",
                border: `2px solid ${hov ? B.electric : B.lightgray}`,
                transform: hov ? (isLeft ? "translateX(-8px) scale(1.02)" : "translateX(8px) scale(1.02)") : "none",
                boxShadow: hov
                    ? "0 20px 48px rgba(13,61,61,0.18)"
                    : "0 4px 16px rgba(0,0,0,0.05)",
            }}
        >
            <div
                className="font-['Space_Mono',monospace] text-[11px] tracking-[2px] mb-2"
                style={{ color: hov ? B.bright : B.electric }}
            >
                {m.year}
            </div>

            <h3
                className="font-['Syne',sans-serif] font-bold text-[18px] mb-[10px]"
                style={{ color: hov ? "#fff" : B.navy }}
            >
                {m.title}
            </h3>

            <p
                className="font-['DM_Sans',sans-serif] text-[14px] leading-[1.65]"
                style={{ color: hov ? "rgba(255,255,255,0.7)" : B.gray }}
            >
                {m.desc}
            </p>
        </div>
    );

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] items-center mb-6 gap-4 md:gap-0"
            style={{
                opacity: vis ? 1 : 0,
                transform: vis
                    ? "none"
                    : isLeft
                        ? "translateX(-100px)"
                        : "translateX(100px)",
                transition: `opacity 0.8s ease ${i * 0.12 + 0.3}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${
                    i * 0.12 + 0.3
                }s`,
            }}
        >
            {/* Left column (desktop) */}
            <div className="hidden md:block md:col-start-1 md:justify-self-end">
                {isLeft ? card : null}
            </div>

            {/* Center dot */}
            <div className="hidden md:flex md:col-start-2 justify-center items-center z-[2]">
                <div
                    className="w-[18px] h-[18px] rounded-full border-[3px] border-white"
                    style={{
                        background: B.electric,
                        boxShadow:
                            "0 0 0 4px rgba(51,154,153,0.25), 0 0 20px rgba(51,154,153,0.5)",
                        transform: vis ? "scale(1)" : "scale(0)",
                        transition: "all 0.4s",
                        transitionDelay: `${i * 0.12 + 0.5}s`,
                    }}
                />
            </div>

            {/* Right column (desktop) */}
            <div className="hidden md:block md:col-start-3 md:justify-self-start">
                {!isLeft ? card : null}
            </div>

            {/* Mobile card */}
            <div className="md:hidden">
                {card}
            </div>

        </div>
    );
}
