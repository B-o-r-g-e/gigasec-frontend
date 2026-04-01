'use client'
import {useInView} from "@/hooks/useInView";
import MilestoneItem from "@/app/(marketing)/about/components/Milestone";
import {B} from "@/theme/Colors";

export default function OurStory() {
    const [ref, vis] = useInView(0.1);

    const milestones = [
        { year: "2013", title: "Company Founded", desc: "Established to deliver tailored engineering and technology systems for complex industrial challenges." },
        { year: "2020", title: "Innovation Recognition", desc: "Awarded Best Location-Based Technology Services Provider in Nigeria and Innovation in Vehicle Monitoring Solutions." },
        { year: "2025", title: "Global Systems Integration Leader", desc: "ISO 9001 and 27001-certified practices delivering integrated solutions across Africa and beyond." },
    ];
    return(
        <section
            ref={ref}
            className="relative overflow-hidden py-30"
            style={{ background: B.offwhite }}
        >
            <div className="max-w-7xl mx-auto px-10">

                {/* Section header */}
                <div
                    className="text-center mb-24"
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateY(0)" : "translateY(-50px)",
                        transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
                    }}
                >
                    <div
                        className="font-['Space_Mono',monospace] text-[11px] tracking-[3px] mb-[14px]"
                        style={{ color: B.electric }}
                    >
                        OUR JOURNEY
                    </div>

                    <h2
                        className="font-['Syne',sans-serif] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] tracking-[-1px] leading-[1.1]"
                        style={{ color: B.navy }}
                    >
                        From Local Roots
                        <br />

                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: `linear-gradient(135deg, ${B.electric}, ${B.bright})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                          to Global Systems Integration
                        </span>

                        <br />
                        and Industrial Technology Leadership.
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Center line */}
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block"
                        style={{
                            background: `linear-gradient(to bottom, ${B.electric}, rgba(51,154,153,0.1))`,
                            transformOrigin: "top",
                            transform: vis ? "scaleY(1)" : "scaleY(0)",
                            animation: vis ? "lineGrow 1.5s ease forwards" : "none",
                        }}
                    />

                    <div className="flex flex-col">
                        {milestones.map((m, i) => {
                            const isLeft = i % 2 === 0;

                            return (
                                <MilestoneItem
                                    key={m.year}
                                    m={m}
                                    isLeft={isLeft}
                                    i={i}
                                    vis={vis}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
