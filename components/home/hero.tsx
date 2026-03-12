'use client'
import {useEffect, useState} from "react";
import {ShieldCheck} from "lucide-react";
import {syne} from "@/app/ui/fonts";
import Typewriter from "@/components/home/typewriter";
import Badge from "@/components/ui/Badge";
import Subheading from "@/components/ui/Subheading";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import SecurityBackground from "@/components/backgrounds/SecurityBackround";

export default function Hero() {
    const [visible, setVisible] = useState(false);
    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

    return (
        <>
            <SecurityBackground>
                <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-30 pb-20">
                    <div className="max-w-190">
                        <div className="max-w-190">
                            {/* Badge */}
                            <Badge visible={visible} text="TRUSTED SECURITY TECHNOLOGY PARTNER" />

                            {/* H1 */}
                            <h1
                                className={`${syne.className} antialiased mb-6 text-[clamp(2.5rem,5.5vw,4.2rem)] font-extrabold leading-[1.1] tracking-[-1px] text-white transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[150ms] ${
                                    visible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                            >
                                Tailored{" "}
                                <span className="bg-[linear-gradient(135deg,#0099cc,#66ccff)] bg-clip-text text-transparent">
                                    engineering & technology solutions
                                </span>{" "}
                                with <Typewriter words={["Control", "Insight", "Precision", "Safety", "Focus", "Trust"]} />
                            </h1>

                            {/* Subheading */}
                            <Subheading visible={visible} text="Gigasec Services delivers IP-based systems for monitoring and controlling
                                assets from anywhere, with every solution tailored to the client&apos;s
                                exact needs and built to reduce operational risk."
                            />

                            {/* CTAs */}
                            <div
                                className={`flex flex-wrap gap-4 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[450ms] ${
                                    visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                                }`}
                            >
                                <PrimaryButton link={"#"} text="Get a Free Quote" />
                                <SecondaryButton link={"#"} text="View Our Services" />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`absolute right-8 top-1/2 hidden max-w-[320px] -translate-y-1/2 lg:flex
                          flex-col gap-5 rounded-2xl border border-cyan-400/20 bg-white/5 p-7
                          backdrop-blur-xl shadow-[0_24px_64px_rgba(0,0,0,0.4)]
                          transition-all duration-1000 delay-700
                          ${visible ? "translate-y-[-50%] opacity-100" : "translate-y-[-40%] opacity-0"}
                          `}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/20">
                                <ShieldCheck size={20} color="#22d3ee" />
                            </div>

                            <div>
                                <p className="font-[DM_Sans] text-sm font-semibold text-white">
                                    Tailored Systems
                                </p>
                                <p className="font-[DM_Sans] text-xs text-white/60">
                                    Designed around client requirements
                                </p>
                            </div>
                        </div>

                        <div className="h-px w-full bg-white/10" />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                                <p className="font-[Syne] text-2xl font-bold text-white">IP</p>
                                <p className="mt-1 text-xs tracking-wide text-white/60">
                                    Remote Monitoring
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/10 p-4">
                                <p className="font-[Syne] text-2xl font-bold text-white">Fit</p>
                                <p className="mt-1 text-xs tracking-wide text-white/60">
                                    Client Specific Design
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-cyan-400/15 bg-cyan-500/10 p-4">
                            <p className="text-sm font-medium text-cyan-300">
                                Monitoring • Control • Virtual Boundaries
                            </p>
                        </div>
                    </div>
                </div>
            </SecurityBackground>
            <div className="absolute bottom-0 left-0 right-0 h-25 bg-linear-to-t from-[#f5f7fa] to-transparent" />
        </>
    )
}
