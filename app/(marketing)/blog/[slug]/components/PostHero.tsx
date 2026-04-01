'use client'
import {useEffect, useState} from "react";
import {Icon, IconName} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {B} from "@/theme/Colors";
import {PostSummary} from "@/app/(marketing)/blog/components/postTypes";

type AuthorType = {
    id: number;
    name: string;
    postion: string;
    avatar?: string;
}
const SHARE_OPTIONS: { icon: IconName; label: string }[] = [
    { icon: "linkedin", label: "LinkedIn" },
    { icon: "twitter", label: "Twitter" }
];
export default function PostHero({POST, author}: { POST: PostSummary, author?: AuthorType }) {
    const [vis, setVis] = useState(false);
    useEffect(() => {
        // Small delay to allow paint before animations
        const timer = setTimeout(() => setVis(true), 50);
        return () => clearTimeout(timer); // ← Important: cleanup
    }, []);

    return (
        <header className="relative overflow-hidden pt-18"
                style={{background: "linear-gradient(145deg,#061e1e 0%,#0d3d3d 60%,#1a5958 100%)", paddingBottom: 0}}>
            <div className="absolute inset-0 pointer-events-none"
                 style={{
                     backgroundImage: "linear-gradient(rgba(51,154,153,0.09) 1px,transparent 1px),linear-gradient(90deg,rgba(51,154,153,0.09) 1px,transparent 1px)",
                     backgroundSize: "56px 56px",
                     animation: "gridDrift 25s linear infinite"
                 }}/>
            <div className="absolute rounded-full pointer-events-none"
                 style={{
                     right: "-10%",
                     top: "-20%",
                     width: 700,
                     height: 700,
                     background: "radial-gradient(circle,rgba(51,154,153,0.15) 0%,transparent 65%)",
                     animation: "orbPulse 8s ease-in-out infinite"
                 }}/>

            <div className="relative z-10 max-w-225 mx-auto px-10 py-16 pb-24">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-8 transition-all duration-700"
                     style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(-16px)"}}>
                    {["Home", "Blog", POST.cat].map((c, i) => (
                        <span key={i} className="flex items-center gap-2">
                            {i > 0 && <span style={{color: "rgba(51,154,153,0.5)", fontSize: 14}}>›</span>}
                            <a href="#" className={`${dMSans.className} no-underline transition-colors duration-200`}
                               style={{
                                   fontSize: 13,
                                   color: i === 2 ? B.electric : "rgba(255,255,255,0.4)",
                                   fontWeight: i === 2 ? 600 : 400
                               }}>{c}</a>
                        </span>
                    ))}
                </div>

                {/* Category + read time */}
                <div className="flex items-center gap-3 mb-6 transition-all duration-700"
                     style={{
                         opacity: vis ? 1 : 0,
                         transform: vis ? "scale(1)" : "scale(0.8)",
                         transitionDelay: "100ms"
                     }}>
                    <span className={`${spaceMono.className} px-4 py-1.25 rounded-full`} style={{
                        fontSize: 10,
                        letterSpacing: 2,
                        background: "rgba(51,154,153,0.2)",
                        border: "1px solid rgba(51,154,153,0.4)",
                        color: B.bright
                    }}>{POST.cat.toUpperCase()}</span>
                    <span className={`${dMSans.className} flex items-center gap-2`}
                          style={{fontSize: 13, color: "rgba(255,255,255,0.5)"}}>
                        <Icon name="clock" size={14} color={B.electric}/> {POST.read}
                    </span>
                </div>

                {/* Title */}
                <h1 className={`${syne.className} text-white mb-6 transition-all duration-1100`}
                    style={{
                        fontWeight: 800,
                        fontSize: "clamp(2rem,4.5vw,3.5rem)",
                        lineHeight: 1.1,
                        letterSpacing: -1,
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateY(50px)",
                        transitionDelay: "200ms"
                    }}>
                    {POST.title}
                </h1>

                {/* Excerpt */}
                <p className={`${dMSans.className} mb-10 transition-all duration-700`}
                   style={{
                       fontSize: 18,
                       lineHeight: 1.75,
                       color: "rgba(255,255,255,0.7)",
                       opacity: vis ? 1 : 0,
                       transform: vis ? "none" : "translateY(20px)",
                       transitionDelay: "350ms"
                   }}>
                    {POST.excerpt}
                </p>

                {/* Author + share row */}
                <div className="flex items-center justify-between flex-wrap gap-4 transition-all duration-700"
                     style={{
                         opacity: vis ? 1 : 0,
                         transform: vis ? "none" : "translateY(20px)",
                         transitionDelay: "450ms",
                         paddingBottom: 24,
                         borderBottom: "1px solid rgba(51,154,153,0.2)"
                     }}>
                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                             style={{background: "linear-gradient(135deg,#339a99,#0d3d3d)"}}>
                            <span className={`${syne.className}`}
                                  style={{
                                      fontWeight: 800,
                                      fontSize: 14,
                                      color: "#fff"
                                  }}>
                                {author?.avatar}
                            </span>
                        </div>
                        <div>
                            <div className={`${syne.className}`}
                                 style={{
                                     fontWeight: 700,
                                     fontSize: 15,
                                     color: "#fff"
                                 }}>
                                {author?.name}
                            </div>
                            <div className={`${dMSans.className}`}
                                 style={{
                                     fontSize: 12,
                                     color: "rgba(255,255,255,0.5)",
                                     marginTop: 2
                                 }}>
                                {author?.postion} · {POST.date}
                            </div>
                        </div>
                    </div>
                    {/* Share buttons */}
                    <div className="flex items-center gap-3">
                        <span className={`${dMSans.className}`}
                              style={{fontSize: 12, color: "rgba(255,255,255,0.5)"}}>Share:</span>
                        {SHARE_OPTIONS.map(s => (
                            <button key={s.label}
                                    className={`${dMSans.className} flex items-center gap-2 px-4 py-2 rounded-lg border-none cursor-pointer transition-all duration-200`}
                                    style={{
                                        fontSize: 12,
                                        background: "rgba(255,255,255,0.07)",
                                        color: "rgba(255,255,255,0.7)",
                                        border: "1px solid rgba(255,255,255,0.12)"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = "rgba(51,154,153,0.2)";
                                        e.currentTarget.style.borderColor = B.electric;
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                    }}>
                                <Icon name={s.icon} size={14} color="currentColor"/> {s.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Wave bottom */}
            <div className="absolute -bottom-px left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" className="block w-full">
                    <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z" fill="#F5F7FA"/>
                </svg>
            </div>
        </header>
    )
}
