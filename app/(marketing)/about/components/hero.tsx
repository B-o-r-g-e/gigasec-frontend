"use client"
import AboutBackground from "@/components/backgrounds/AboutBackground";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Badge from "@/components/ui/Badge";
import {useEffect, useState} from "react";
import StatPills from "@/app/(marketing)/about/components/StatPills";
import WaveBottom from "@/app/(marketing)/about/components/WaveBottom";

export default function AboutHero() {
    const [vis, setVis] = useState(false);
    useEffect(() => { setTimeout(() => setVis(true), 100); }, []);

    const trail = ["Home", "About Us"]
    return (
        <AboutBackground>
            <div className="relative z-5 w-full">
                <div className="max-w-7xl mx-auto px-5 sm:px-10 pt-24 sm:pt-40 pb-16 sm:pb-24 w-full">
                    <Breadcrumb trail={trail} />
                    <Badge visible={vis} text="EST. 2013 — NIGERIA" />
                    <h1
                        className={`font-[Syne] font-extrabold text-[clamp(2rem,7vw,5.2rem)] leading-[1.05] sm:leading-none text-white mb-6 sm:mb-8 tracking-[-1px] sm:tracking-[-2px] max-w-205 transition-all duration-1100 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            vis
                                ? "opacity-100 translate-y-0 skew-y-0"
                                : "opacity-0 translate-y-20 skew-y-3"
                        }`}
                    >
                        Empowering Operational
                        <br />

                        <span
                            className="bg-[linear-gradient(90deg,#339a99_0%,#339a99_50%,#99ddff_100%)] bg-clip-text text-transparent"
                        >
                            Excellence
                        </span>

                        <br />
                        Through Integrated Technology.
                    </h1>

                    <p
                        className={`font-[DM_Sans] text-[1rem] sm:text-[1.2rem] leading-[1.7] text-white/70 max-w-140 transition-all duration-900 delay-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-15"
                        }`}
                    >
                        Gigasec Services Limited is a global systems integration and industrial technology leader,
                        empowering industries, governments, enterprises, and individuals with innovative remote monitoring,
                        automation, and energy solutions since 2013.
                    </p>
                    <StatPills vis={vis} />
                </div>
                <WaveBottom />
            </div>
        </AboutBackground>
    )
}
