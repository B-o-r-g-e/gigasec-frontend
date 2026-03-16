'use client'
import {useInView} from "@/hooks/useInView";
import {B} from "@/colors/Colors";
import ValueCard from "@/components/about/ValueCard";

export default function MissionValues() {
    const [ref, vis] = useInView(0.08);
    const values = [
        { icon: "shield",  title: "Integrity", desc: "We deliver exactly what we promise, every single project. No shortcuts, no hidden costs." },
        { icon: "zap",     title: "Excellence", desc: "World-class engineering standards applied to every installation, regardless of project size." },
        { icon: "users",   title: "Partnership",desc: "We build long-term relationships, not one-off transactions. Your success is our benchmark." },
        { icon: "globe",   title: "Innovation", desc: "We continuously adopt new technologies to give clients the most future-proof solutions available." },
    ];

    return (
        <section
            ref={ref}
            className="bg-white py-30 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left — mission text */}
                    <div
                        style={{
                            opacity: vis ? 1 : 0,
                            transform: vis ? "translateX(0)" : "translateX(-80px)",
                            transition: "all 1s cubic-bezier(0.22,1,0.36,1)",
                        }}
                    >
                        <div
                            className="font-['Space_Mono',monospace] text-[11px] tracking-[3px] mb-4"
                            style={{ color: B.electric }}
                        >
                            OUR MISSION
                        </div>

                        <h2
                            className="font-['Syne',sans-serif] font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.5px] leading-[1.2] mb-7"
                            style={{ color: B.navy }}
                        >
                            To make every space in Nigeria
                            <span style={{ color: B.electric }}> measurably safer</span> through technology.
                        </h2>

                        <p
                            className="font-['DM_Sans',sans-serif] text-[16px] leading-[1.75] mb-10"
                            style={{ color: B.gray }}
                        >
                            We believe security is a right, not a luxury. Our mission drives us to bring
                            enterprise-grade protection to businesses of every size, from a single-branch
                            retailer to a nationwide bank — with the same precision, care, and engineering rigor.
                        </p>

                        {/* Vision box */}
                        <div
                            className="rounded-xl p-8"
                            style={{
                                background: `linear-gradient(135deg, ${B.navy}, #1a5958)`,
                                opacity: vis ? 1 : 0,
                                transform: vis ? "translateY(0)" : "translateY(30px)",
                                transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s",
                            }}
                        >
                            <div
                                className="font-['Space_Mono',monospace] text-[10px] tracking-[2px] mb-3"
                                style={{ color: B.electric }}
                            >
                                OUR VISION
                            </div>

                            <p className="font-['DM_Sans',sans-serif] text-[15px] leading-[1.7] text-white/85">
                                To be West Africa&#39;s most trusted integrated security and ICT partner —
                                recognized for engineering excellence, client focus, and technology leadership.
                            </p>
                        </div>
                    </div>

                    {/* Right — value cards */}
                    <div className="flex flex-col gap-4">
                        {values.map((v, i) => (
                            <ValueCard key={v.title} v={v} i={i} vis={vis} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
