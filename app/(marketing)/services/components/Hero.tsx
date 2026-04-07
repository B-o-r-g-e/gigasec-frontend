'use client'
import {useEffect, useState} from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Badge from "@/components/ui/Badge";
import CountBadge from "@/app/(marketing)/services/components/AnimatedCountBadge";
import ServicesBackground from "@/components/backgrounds/ServicesBackground";
import {B} from "@/theme/Colors";

export default function Hero() {
    const [vis, setVis] = useState(false);
    useEffect(() => {
        setTimeout(() => setVis(true), 100);
    }, []);
    const crumbs = ["Home", "Services"];

    return (
        <ServicesBackground>
            <section className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-20">
                <div className="max-w-7xl mx-auto pt-6 sm:pt-10 pb-12 sm:pb-24 w-full">
                    <Breadcrumb trail={crumbs}/>
                    <Badge visible={vis} text="COMPANY PROFILE 2025"/>
                    <h1
                        className={`font-[Syne] font-extrabold leading-[1.05] sm:leading-none text-white mb-7 tracking-[-1px] sm:tracking-[-2px] max-w-[640px] lg:max-w-[800px]
                        text-[clamp(2.25rem,7vw,5.5rem)]
                        transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-200
                        ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"}
                      `}
                    >
                        Every Service
                        <br/>
                        <span style={{ background: `linear-gradient(135deg, ${B.electric} 0%, ${B.bright} 50%, #ffffff 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Your Business
                        </span><br />
                        Will Ever Need.
                    </h1>
                    <p
                        className={`font-[DM_Sans] text-[0.98rem] sm:text-[1.1rem] leading-[1.7] text-white/65 max-w-[620px] mb-8 sm:mb-12
                        transition-all duration-900 ease-in-out delay-[400ms]
                        ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}
                      `}
                    >
                        Gigasec Services Limited is a global systems integration and industrial technology leader
                        founded in 2013, delivering remote monitoring, automation, and energy solutions across Africa
                        and beyond. We bridge complex industrial challenges with cutting-edge digital transformation
                        to secure assets, optimize operations, and drive sustainable growth.
                    </p>
                    <div
                        className={`flex flex-wrap gap-4 sm:gap-10 transition-all duration-1000 ease-in-out delay-[600ms]
                        max-w-[520px] sm:max-w-none
                        ${vis ? "opacity-100" : "opacity-0"}
                        `}
                    >
                        {[
                            {value: 2013, suffix: "", label: "Founded"},
                            {value: 9001, suffix: "", label: "ISO 9001 Practices"},
                            {value: 27001, suffix: "", label: "ISO 27001 Practices"},
                        ].map((s, i) => (
                            <CountBadge key={s.label} {...s} delay={i * 100} active={vis}/>
                        ))}
                    </div>
                </div>
            </section>
        </ServicesBackground>
    )
}
