'use client'
import { B } from "@/colors/Colors";
import { useEffect, useState } from "react";
import HeroContactCard from "@/components/contact/HeroContactCard";
import type { IconName } from "@/icons/Icon";

export default function ContactHero() {
    const [vis, setVis] = useState(false);
    useEffect(() => { setTimeout(() => setVis(true), 80); }, []);

    return (
        <section className="min-h-[52vh] relative flex items-center overflow-hidden pt-[72px]"
                 style={{background: `linear-gradient(145deg, ${B.navyDark} 0%, ${B.navy} 55%, #1a5958 100%)`}}
        >
            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none animate-[gridDrift_25s_linear_infinite]"
                style={{
                    backgroundImage: `
        linear-gradient(rgba(51,154,153,0.09) 1px, transparent 1px),
        linear-gradient(90deg, rgba(51,154,153,0.09) 1px, transparent 1px)
      `,
                    backgroundSize: "56px 56px",
                }}
            />

            {/* Orb */}
            <div
                className="absolute right-[-5%] top-[5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-[orbPulse_7s_ease-in-out_infinite]"
                style={{
                    background: "radial-gradient(circle, rgba(51,154,153,0.18) 0%, transparent 65%)",
                }}
            />
            <div
                className="relative z-[5] max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-6 sm:px-10 pt-[80px] pb-[100px]"
            >
                {/* LEFT */}
                <div>
                    {/* Badge */}
                    <div
                        className={`inline-flex items-center gap-2 bg-[rgba(51,154,153,0.12)] border border-[rgba(51,154,153,0.4)] rounded-full px-[18px] py-[6px] mb-7 transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
      ${vis ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-[0.7] -translate-x-[30px]"}`}
                    >
                        <div className="w-[7px] h-[7px] rounded-full bg-[#00d97e] animate-[blink_2s_infinite]"/>
                        <span
                            className="text-[11px] tracking-[2px]"
                            style={{fontFamily: "'Space Mono', monospace", color: B.electric}}
                        >
        READY TO TALK
      </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className={`font-extrabold leading-[1] text-white mb-6 tracking-[-2px] transition-all duration-[1100ms] delay-[200ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
      ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"}`}
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(2.5rem,5.5vw,4.5rem)",
                        }}
                    >
                        Let's Build<br/>
                        <span
                            style={{
                                background: `linear-gradient(90deg, ${B.electric}, ${B.bright})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
        Something
      </span>
                        <br/>
                        Together.
                    </h1>

                    {/* Paragraph */}
                    <p
                        className={`text-[1.1rem] leading-[1.75] text-white/65 transition-all duration-[900ms] delay-[450ms]
      ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[40px]"}`}
                        style={{fontFamily: "'DM Sans', sans-serif"}}
                    >
                        Whether you need a quote, have a technical question, or want to explore a partnership — our team
                        is ready to help.
                    </p>
                </div>

                {/* RIGHT */}
                <div
                    className={`flex flex-col gap-4 transition-all duration-[900ms] delay-[400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
    ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[60px]"}`}
                >
                    {([
                        {
                            icon: "phone",
                            label: "Call Us",
                            value: "+234 (0) 815 444 2732",
                            sub: "Mon – Fri, 8am – 4pm WAT",
                        },
                        { icon: "mail", label: "Email Us", value: "info@gigasecintl.com", sub: "Response within 24hrs" },
                        {
                            icon: "whatsapp",
                            label: "WhatsApp",
                            value: "+234 (0) 801 234 5678",
                            sub: "Quick questions & quotes",
                        },
                        { icon: "pin", label: "Head Office", value: "Port Harcourt, Rivers", sub: "By appointment" },
                    ] as Array<{ icon: IconName; label: string; value: string; sub: string }>).map((item, i) => (
                        <HeroContactCard key={item.label} item={item} i={i} vis={vis}/>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-[-1px] left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" className="block w-full">
                    <path
                        d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z"
                        fill="#F5F7FA"
                    />
                </svg>
            </div>
        </section>
    )
}
