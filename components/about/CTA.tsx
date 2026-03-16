'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import {B} from "@/colors/Colors";

export default function AboutCTA(){
    const [ref, vis] = useInView(0.3);
    const [hov1, setHov1] = useState(false);
    const [hov2, setHov2] = useState(false);
    return (
        <section
            ref={ref}
            className="py-[80px] md:py-[100px]"
            style={{ background: B.offwhite }}
        >
            <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
                <div
                    className="relative overflow-hidden rounded-[24px] md:rounded-[28px] px-6 sm:px-10 lg:px-[72px] py-12 sm:py-16 lg:py-[80px]"
                    style={{
                        background: `linear-gradient(135deg, ${B.navy}, #1a5958)`,
                        opacity: vis ? 1 : 0,
                        transform: vis
                            ? "translateY(0) scale(1)"
                            : "translateY(40px) scale(0.96)",
                        transition: "all 1s cubic-bezier(0.22,1,0.36,1)",
                    }}
                >
                    {/* Orb */}
                    <div
                        className="absolute rounded-full"
                        style={{
                            right: -60,
                            top: -60,
                            width: 400,
                            height: 400,
                            background:
                                "radial-gradient(circle, rgba(51,154,153,0.2) 0%, transparent 65%)",
                            animation: "orbPulse 6s ease-in-out infinite",
                        }}
                    />

                    {/* Grid background */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(rgba(51,154,153,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(51,154,153,0.07) 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                            animation: "gridDrift 20s linear infinite",
                        }}
                    />

                    <div className="relative z-[2] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">

                        {/* Left text */}
                        <div
                            className="text-center lg:text-left w-full lg:w-auto"
                            style={{
                                opacity: vis ? 1 : 0,
                                transform: vis ? "translateX(0)" : "translateX(-40px)",
                                transition:
                                    "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s",
                            }}
                        >
                            <div
                                className="font-['Space_Mono',monospace] text-[11px] tracking-[3px] mb-4"
                                style={{ color: B.electric }}
                            >
                                WORK WITH US
                            </div>

                            <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.5px] text-white mb-4">
                                Let&#39;s Build Something
                                <br />
                                Exceptional Together.
                            </h2>

                            <p className="font-['DM_Sans',sans-serif] text-[16px] text-white/70 max-w-[480px] mx-auto lg:mx-0">
                                Whether you&#39;re securing a single site or engineering
                                infrastructure for a national rollout — Gigasec has the
                                team, technology, and track record to deliver.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div
                            className="flex flex-col gap-[14px] w-full sm:w-auto"
                            style={{
                                opacity: vis ? 1 : 0,
                                transform: vis ? "translateX(0)" : "translateX(40px)",
                                transition:
                                    "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.35s",
                            }}
                        >
                            {/* Start project */}
                            <a
                                href="#contact"
                                onMouseEnter={() => setHov1(true)}
                                onMouseLeave={() => setHov1(false)}
                                className="inline-flex items-center justify-center gap-[10px] whitespace-nowrap rounded-[10px] px-[36px] py-[17px] font-['DM_Sans',sans-serif] font-bold text-[16px] text-white no-underline w-full sm:w-auto"
                                style={{
                                    background: B.electric,
                                    transform: hov1
                                        ? "translateY(-4px) scale(1.04)"
                                        : "none",
                                    transition:
                                        "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                                    boxShadow: hov1
                                        ? "0 16px 40px rgba(51,154,153,0.6)"
                                        : "0 8px 24px rgba(51,154,153,0.35)",
                                }}
                            >
                                Start a Project
                                <Icon name="arrow" size={20} color="#fff" />
                            </a>

                            {/* Call */}
                            <a
                                href="tel:+2341234567"
                                onMouseEnter={() => setHov2(true)}
                                onMouseLeave={() => setHov2(false)}
                                className="inline-flex items-center justify-center gap-[10px] whitespace-nowrap rounded-[10px] px-[36px] py-[17px] font-['DM_Sans',sans-serif] font-semibold text-[16px] no-underline border w-full sm:w-auto"
                                style={{
                                    background: "transparent",
                                    border: "1.5px solid rgba(255,255,255,0.3)",
                                    borderColor: hov2
                                        ? B.electric
                                        : "rgba(255,255,255,0.3)",
                                    color: hov2 ? B.electric : "#fff",
                                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                                }}
                            >
                                <Icon name="phone" size={18} color="currentColor" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
