'use client'
import {Icon} from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {useEffect, useState} from "react";
import {useInView} from "@/hooks/useInView";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import type {ServiceData, ServiceStat} from "@/app/(marketing)/services/components/services";

function useCountUp(target: number, dur = 1800, active = false) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!active) return;
        let t0: number | null = null;
        const raf = (ts: number) => {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / dur, 1);
            setN(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }, [active, target, dur]);
    return n;
}

function StatCard({stat, active, visible, index}: {
    stat: ServiceStat,
    active: boolean,
    visible: boolean,
    index: number
}) {
    const n = useCountUp(stat.n, 1800, active);

    return (
        <div
            className="flex flex-col gap-4 rounded-xl px-5 py-5 transition-all duration-500 sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-6"
            style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,204,204,0.2)",
                backdropFilter: "blur(10px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateX(30px)",
                transitionDelay: `${0.22 + index * 0.06}s`
            }}>
            <div className={`${syne.className}`} style={{
                fontWeight: 800,
                fontSize: "3rem",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: -2,
                minWidth: 120
            }}>
                {n}{stat.suf}
            </div>
            <div>
                <div className={`${dMSans.className}`} style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)"
                }}>{stat.label}</div>
                <div className="h-1 mt-3 rounded-sm transition-all duration-[800ms]"
                     style={{
                         background: `linear-gradient(90deg,${B.electric},${B.bright})`,
                         width: active ? "100%" : "0%",
                         transitionDelay: `${0.28 + index * 0.08}s`
                     }}/>
            </div>
        </div>
    );
}

export default function ESHero({currentService}: {currentService: ServiceData}) {
    const [vis, setVis] = useState(false);
    const [statRef, statVis] = useInView<HTMLDivElement>(0.3);
    useEffect(() => {
        setTimeout(() => setVis(true), 80);
    }, []);

    return (
        <section className="relative overflow-hidden pt-[72px] flex items-center"
                 style={{minHeight: "82vh", background: "linear-gradient(145deg,#262626 0%,#333333 55%,#4d4d4d 100%)"}}>
            <div className="absolute inset-0 pointer-events-none"
                 style={{
                     backgroundImage: "linear-gradient(rgba(0,204,204,0.09) 1px,transparent 1px),linear-gradient(90deg,rgba(0,204,204,0.09) 1px,transparent 1px)",
                     backgroundSize: "56px 56px",
                     animation: "gridDrift 25s linear infinite"
                 }}/>
            <div className="absolute rounded-full pointer-events-none"
                 style={{
                     right: "-5%",
                     top: "5%",
                     width: "min(600px, 70vw)",
                     height: "min(600px, 70vw)",
                     background: "radial-gradient(circle,rgba(0,204,204,0.18),transparent 65%)",
                     animation: "orbPulse 7s ease-in-out infinite"
                 }}/>

            <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
                {/* Breadcrumb */}
                <div className="mb-6 flex flex-wrap items-center gap-2 transition-all duration-500 sm:mb-8"
                     style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(-16px)"}}>
                    {["Home", "Services", currentService.title].map((c, i) => (
                        <span key={c} className="flex items-center gap-2">
                            {i > 0 && <Icon name="chevron" size={14} color="rgba(0,204,204,0.5)"/>}
                            <a href="#" className={`${dMSans.className} no-underline`} style={{
                                fontSize: 13,
                                color: i === 2 ? B.electric : "rgba(255,255,255,0.4)",
                                fontWeight: i === 2 ? 600 : 400
                            }}>{c}</a>
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12 xl:gap-20">
                    {/* Left */}
                    <div className="min-w-0">
                        {/* Category badge */}
                        <div
                            className="inline-flex items-center gap-2 px-[18px] py-[6px] rounded-full mb-6 transition-all duration-500"
                            style={{
                                background: "rgba(0,204,204,0.12)",
                                border: "1px solid rgba(0,204,204,0.4)",
                                opacity: vis ? 1 : 0,
                                transform: vis ? "scale(1)" : "scale(0.7) translateX(-20px)",
                                transitionDelay: "60ms"
                            }}>
                            <Icon name={currentService.icon} size={14} color={B.electric}/>
                            <span className={`${spaceMono.className}`} style={{
                                fontSize: 11,
                                color: B.electric,
                                letterSpacing: 2
                            }}>
                                {currentService.category.toUpperCase()}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className={`${syne.className} mb-3 text-white transition-all duration-[700ms]`}
                            style={{
                                fontWeight: 800,
                                fontSize: "clamp(2.8rem,5.5vw,4.5rem)",
                                letterSpacing: "-2px",
                                lineHeight: 1.0,
                                maxWidth: "12ch",
                                overflowWrap: "anywhere",
                                opacity: vis ? 1 : 0,
                                transform: vis ? "none" : "translateY(60px)",
                                transitionDelay: "120ms"
                            }}>
                            {currentService.title}
                        </h1>

                        {/* Headline */}
                        <p className={`${syne.className} mb-5 transition-all duration-500`}
                           style={{
                               fontWeight: 700,
                               fontSize: "clamp(1.1rem,2vw,1.45rem)",
                               color: B.bright,
                               opacity: vis ? 1 : 0,
                               transform: vis ? "none" : "translateY(20px)",
                               transitionDelay: "180ms"
                           }}>
                            {currentService.tagline}
                        </p>

                        {/* Subline */}
                        <p className={`${dMSans.className} mb-10 transition-all duration-500`}
                           style={{
                               fontSize: 17,
                               lineHeight: 1.75,
                               color: "rgba(255,255,255,0.68)",
                               maxWidth: 520,
                               opacity: vis ? 1 : 0,
                               transform: vis ? "none" : "translateX(-40px)",
                               transitionDelay: "240ms"
                           }}>
                            {currentService.desc}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3 transition-all duration-500 sm:flex-row sm:flex-wrap sm:gap-4"
                             style={{
                                 opacity: vis ? 1 : 0,
                                 transform: vis ? "none" : "translateY(20px)",
                                 transitionDelay: "300ms"
                             }}>
                            <a href="#quote"
                               className={`${dMSans.className} inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-white no-underline transition-all duration-300 sm:w-auto sm:px-8`}
                               style={{
                                   fontWeight: 700,
                                   fontSize: 15,
                                   background: B.electric,
                                   boxShadow: "0 8px 28px rgba(0,204,204,0.45)"
                               }}
                               onMouseEnter={e => {
                                   e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                                   e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,204,204,0.6)";
                               }}
                               onMouseLeave={e => {
                                   e.currentTarget.style.transform = "none";
                                   e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,204,204,0.45)";
                               }}>
                                Get a Free Quote <Icon name="arrow" size={16} color="#fff"/>
                            </a>
                            <a href="#process"
                               className={`${dMSans.className} inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-white no-underline transition-all duration-200 sm:w-auto sm:px-8`}
                               style={{
                                   fontWeight: 600,
                                   fontSize: 15,
                                   background: "transparent",
                                   border: "1.5px solid rgba(255,255,255,0.3)"
                               }}
                               onMouseEnter={e => {
                                   e.currentTarget.style.borderColor = B.electric;
                                   e.currentTarget.style.color = B.electric;
                               }}
                               onMouseLeave={e => {
                                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                                   e.currentTarget.style.color = "#fff";
                               }}>
                                <Icon name="play" size={16} color="currentColor"/> How It Works
                            </a>
                            <a href="#"
                               className={`${dMSans.className} inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 no-underline transition-all duration-200 sm:w-auto`}
                               style={{
                                   fontWeight: 600,
                                   fontSize: 14,
                                   color: B.bright,
                                   background: "rgba(0,204,204,0.1)",
                                   border: "1px solid rgba(0,204,204,0.3)"
                               }}
                               onMouseEnter={e => {
                                   e.currentTarget.style.background = "rgba(0,204,204,0.18)";
                                   e.currentTarget.style.transform = "translateY(-2px)";
                               }}
                               onMouseLeave={e => {
                                   e.currentTarget.style.background = "rgba(0,204,204,0.1)";
                                   e.currentTarget.style.transform = "none";
                               }}>
                                <Icon name="download" size={15} color={B.bright}/> Brochure
                            </a>
                        </div>
                    </div>

                    {/* Right — stat cards */}
                    <div ref={statRef} className="min-w-0 w-full flex flex-col gap-4 transition-all duration-500 lg:max-w-[540px] lg:justify-self-end"
                         style={{
                             opacity: vis ? 1 : 0,
                             transform: vis ? "none" : "translateX(60px)",
                             transitionDelay: "200ms"
                         }}>
                        {currentService.content.heroStats.map((s, i) => (
                            <StatCard key={s.label} stat={s} active={statVis} visible={vis} index={i} />
                        ))}

                        {/* Download brochure */}
                        <button
                            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-none cursor-pointer transition-all duration-300"
                            style={{background: "rgba(0,204,204,0.08)", border: "1px solid rgba(0,204,204,0.25)"}}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "rgba(0,204,204,0.18)";
                                e.currentTarget.style.borderColor = B.electric;
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "rgba(0,204,204,0.08)";
                                e.currentTarget.style.borderColor = "rgba(0,204,204,0.25)";
                                e.currentTarget.style.transform = "none";
                            }}>
                            <Icon name="download" size={18} color={B.electric}/>
                            <span className={`${dMSans.className}`}
                                  style={{fontWeight: 600, fontSize: 14, color: B.electric}}>Download Service Brochure (PDF)</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Wave */}
            {/*<div className="absolute -bottom-px left-0 right-0">*/}
            {/*    <svg viewBox="0 0 1440 80" fill="none" className="block w-full">*/}
            {/*        <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z" fill="#FEFEFE"/>*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </section>
    );
}
