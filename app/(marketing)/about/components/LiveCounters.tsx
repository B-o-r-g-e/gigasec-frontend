'use client'
import {useInView} from "@/hooks/useInView";
import CounterCard from "@/app/(marketing)/about/components/CounterCard";
import type {IconName} from "@/icons/Icon";
import {B} from "@/theme/Colors";

export default function LiveCounters() {
    const [ref, vis] = useInView(0.25);

    const counters: Array<{ target: number; suffix: string; label: string; icon: IconName; delay: number }> = [
        { target: 2013, suffix: "", label: "Founded", icon: "award", delay: 0 },
        { target: 2, suffix: "", label: "ISO Certifications", icon: "shield", delay: 100 },
        { target: 5, suffix: "", label: "Nigeria Hubs", icon: "globe", delay: 200 },
        { target: 2020, suffix: "", label: "Innovation Award", icon: "target", delay: 300 },
    ];

    return (
        <section
            ref={ref}
            className="relative overflow-hidden py-[100px]"
            style={{
                background: `linear-gradient(135deg, ${B.navyDark} 0%, ${B.navy} 50%, #1a5958 100%)`,
            }}
        >
            {/* Background grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(51,154,153,0.12) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative z-[2] max-w-[1280px] mx-auto px-6 sm:px-10">
                {/* Header */}
                <div
                    className="text-center mb-[72px]"
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "scale(1)" : "scale(0.85)",
                        transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                >
                    <h2 className="font-['Syne',sans-serif] font-extrabold text-[clamp(2rem,4vw,3rem)] text-white tracking-[-0.5px]">
                        The Numbers That Define Us
                    </h2>
                </div>

                {/* Counters grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {counters.map((c) => (
                        <CounterCard key={c.label} {...c} active={vis} />
                    ))}
                </div>
            </div>
        </section>
    );
}
