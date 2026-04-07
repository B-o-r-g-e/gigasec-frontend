'use client'
import {useInView} from "@/hooks/useInView";
import {B} from "@/theme/Colors";
import ValueCard from "@/app/(marketing)/about/components/ValueCard";
import type {IconName} from "@/icons/Icon";

export default function MissionValues() {
    const [ref, vis] = useInView(0.08);
    const values: Array<{ icon: IconName; title: string; desc: string }> = [
        { icon: "zap",    title: "Innovative Technology", desc: "We deliver cutting-edge solutions that bridge industrial challenges and digital transformation." },
        { icon: "shield", title: "Quality Service Delivery", desc: "ISO 9001 and 27001-certified practices that exceed expectations." },
        { icon: "users",  title: "Quick Support", desc: "Responsive, reliable support from design through deployment and beyond." },
        { icon: "globe",  title: "Customer First", desc: "We prioritize client requirements at every stage of the journey." },
    ];

    return (
        <section
            ref={ref}
            className="bg-white py-16 sm:py-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-10">
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
                        className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.75rem,5vw,3rem)] tracking-[-0.5px] leading-[1.2] mb-6 sm:mb-7"
                            style={{ color: B.navy }}
                        >
                            To advance the convergence of IP security, industrial technology, and
                            <span style={{ color: B.electric }}> digital innovation</span>.
                        </h2>

                        <p
                            className="font-['DM_Sans',sans-serif] text-[15px] sm:text-[16px] leading-[1.7] mb-8 sm:mb-10"
                            style={{ color: B.gray }}
                        >
                            We deliver best-in-class products and services that secure assets, optimize operations,
                            and drive sustainability for industries, governments, enterprises, and smart communities.
                        </p>

                        {/* Vision box */}
                        <div
                            className="rounded-xl p-6 sm:p-8"
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
                                To lead the global transition toward intelligent, interconnected systems — where
                                security, sustainability, and technology unite to redefine what&apos;s possible.
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
