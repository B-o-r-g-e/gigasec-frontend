'use client'
import {Icon, type IconName} from "@/icons/Icon";
import {useInView} from "@/hooks/useInView";
import {useCountUp} from "@/hooks/useCountUp";
import {useState} from "react";
import { dMSans,syne } from "@/theme/fonts";

interface ServiceStat {
    n: number;
    suf: string;
    label: string;
}

interface ServiceData {
    id: string;
    icon: IconName;
    filter: string;
    title: string;
    tagline: string;
    desc: string;
    features: string[];
    stats: ServiceStat[];
    industries: string[];
    accent: string;
    badge: string | null;
}

export default function ServiceBlock({svc, index, filter}: {svc: ServiceData; index: number; filter: string}) {
    const [ref, vis] = useInView<HTMLDivElement>(0.08);
    const [expanded, setExpanded] = useState(false);
    const [hov, setHov] = useState(false);

    const isVisible = filter === "All Services" || filter === svc.filter;
    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`
        ${isVisible ? "block" : "hidden"}
        mb-[2px]
        transition-all duration-900
        ${vis ? "opacity-100 translate-x-0" : `opacity-0 ${isEven ? "-translate-x-20" : "translate-x-20"}`}
      `}
            style={{
                transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: `${(index % 3) * 80}ms`,
            }}
        >
            {/* Card */}
            <div
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
                className={`
          rounded-[20px] overflow-hidden border
          transition-all duration-400
          ${hov ? "bg-white translate-y-[-6px]" : "bg-[#fafbfc]"}
        `}
                style={{
                    borderColor: hov ? svc.accent : "#e8edf3",
                    boxShadow: hov
                        ? `0 32px 64px rgba(13,61,61,0.12), 0 0 0 1px ${svc.accent}20`
                        : "0 2px 12px rgba(0,0,0,0.04)",
                }}
            >
                {/* Top bar */}
                <div className="h-[4px] bg-[#eee] relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full transition-all"
                        style={{
                            background: `linear-gradient(90deg, ${svc.accent}, ${svc.accent}88)`,
                            width: hov ? "100%" : vis ? "40%" : "0%",
                            transition: hov ? "width 0.5s ease" : "width 1.2s ease 0.3s",
                            boxShadow: `0 0 16px ${svc.accent}80`,
                        }}
                    />
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* LEFT PANEL */}
                    <div className="p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#f0f0f0]">

                        {/* Icon + badge */}
                        <div className="flex items-start justify-between mb-7">
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center border transition-all"
                                style={{
                                    background: `${svc.accent}15`,
                                    borderColor: `${svc.accent}30`,
                                    transform: hov ? "rotate(8deg) scale(1.12)" : "none",
                                    boxShadow: hov ? `0 8px 24px ${svc.accent}40` : "none",
                                }}
                            >
                                <Icon name={svc.icon} size={30} color={svc.accent}/>
                            </div>

                            {svc.badge && (
                                <span
                                    className="text-[11px] font-bold px-3 py-1 rounded-full border"
                                    style={{
                                        color: svc.accent,
                                        background: `${svc.accent}12`,
                                        borderColor: `${svc.accent}30`,
                                        transform: hov ? "scale(1.06)" : "scale(1)",
                                    }}
                                >
                  {svc.badge}
                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h2 className={`${syne.className} font-extrabold text-[1.7rem] leading-tight mb-1 text-[#0d3d3d]`}>
                            {svc.title}
                        </h2>

                        <p
                            className={`${dMSans.className} text-sm font-semibold mb-5 transition-opacity`}
                            style={{
                                color: svc.accent,
                                opacity: hov ? 1 : 0.7,
                            }}
                        >
                            {svc.tagline}
                        </p>

                        <p className={`${dMSans.className} text-[15px] leading-7 text-gray-500 mb-8`}>
                            {svc.desc}
                        </p>

                        {/* Industries */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {svc.industries.map((ind, i) => (
                                <span
                                    key={ind}
                                    className={`${dMSans.className} text-xs font-medium px-3 py-1 rounded-full border bg-[#f5f7fa] text-[#0d3d3d]`}
                                    style={{
                                        transform: hov ? `translateY(${-i}px)` : "none",
                                        transition: `transform 0.4s ease ${i * 40}ms`,
                                    }}
                                >
                                  {ind}
                                </span>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 sm:gap-8 mb-8">
                            {svc.stats.map((s) => {
                                const n = useCountUp({ target: s.n, duration: 1800, active: vis });

                                return (
                                    <div
                                        key={s.label}
                                        className={`transition-all duration-700 ${
                                            vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                        }`}
                                    >
                                        <div
                                            className={`${syne.className} text-[1.6rem] sm:text-[1.8rem] font-extrabold leading-none`}
                                            style={{color: svc.accent}}
                                        >
                                            {n}
                                            {s.suf}
                                        </div>
                                        <div className={`${dMSans.className} text-xs text-gray-500 mt-1`}>
                                            {s.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="#quote"
                                className={`${dMSans.className} inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-all w-full sm:w-auto`}
                                style={{
                                    background: svc.accent,
                                    transform: hov ? "scale(1.04)" : "scale(1)",
                                    boxShadow: hov
                                        ? `0 8px 32px ${svc.accent}60`
                                        : `0 4px 16px ${svc.accent}30`,
                                }}
                            >
                                Get a Quote <Icon name="arrow" size={16} color="#fff"/>
                            </a>

                            <button
                                onClick={() => setExpanded((x) => !x)}
                                className={`${dMSans.className} 
                                inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border text-sm font-semibold transition-all hover:border-[color:var(--accent)] w-full sm:w-auto`}
                            >
                                {expanded ? "Less" : "Details"}
                                <span
                                    className={`transition-transform ${
                                        expanded ? "rotate-45" : ""
                                    }`}
                                >
                  <Icon name="plus" size={15}/>
                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div
                        className="p-6 sm:p-8 md:p-12 transition-all"
                        style={{
                            background: hov ? `${svc.accent}04` : "transparent",
                        }}
                    >
                        <div className="text-xs uppercase tracking-[2px] text-gray-500 mb-6 font-semibold">
                            What's Included
                        </div>

                        <div className="flex flex-col gap-1">
                            {svc.features.map((f, i) => (
                                <div
                                    key={f}
                                    className={`flex items-center gap-4 p-3 sm:p-4 rounded-lg transition-all ${
                                        hov ? "bg-white border border-[#f0f0f0]" : ""
                                    } ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                                    style={{
                                        transitionDelay: `${0.2 + i * 0.06}s`,
                                    }}
                                >
                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: `${svc.accent}15`,
                                            transform: hov ? "scale(1.1)" : "scale(1)",
                                        }}
                                    >
                                        <Icon name="check" size={14} color={svc.accent}/>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">
                    {f}
                  </span>
                                </div>
                            ))}
                        </div>

                        {/* Expandable */}
                        <div
                            className="overflow-hidden transition-all duration-700"
                            style={{maxHeight: expanded ? "400px" : "0px"}}
                        >
                            <div className="pt-6 mt-6 border-t border-[#eee]">
                                <div className="text-xs uppercase tracking-[2px] text-gray-500 mb-4 font-semibold">
                                    Our Process
                                </div>

                                {[
                                    "Initial consultation & site survey",
                                    "System design & specification",
                                    "Procurement & logistics",
                                    "Installation & commissioning",
                                    "Training & handover",
                                    "Ongoing support & maintenance",
                                ].map((step, i) => (
                                    <div key={step} className="flex items-center gap-4 mb-3">
                                        <div
                                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                                            style={{background: svc.accent}}
                                        >
                                            {i + 1}
                                        </div>
                                        <span className="text-sm text-gray-700">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
