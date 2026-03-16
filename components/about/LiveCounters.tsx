'use client'
import {useInView} from "@/hooks/useInView";
import CounterCard from "@/components/about/CounterCard";
import {B} from "@/colors/Colors";

export default function LiveCounters() {
    const [ref, vis] = useInView(0.25);

    const counters = [
        { target: 13, suffix: "+", label: "Years in Business", icon: "award", delay: 0 },
        { target: 500, suffix: "+", label: "Installations Completed", icon: "zap", delay: 100 },
        { target: 200, suffix: "+", label: "Enterprise Clients", icon: "users", delay: 200 },
        { target: 50, suffix: "+", label: "Certified Engineers", icon: "target", delay: 300 },
        { target: 6, suffix: "", label: "Service Verticals", icon: "globe", delay: 400 },
        { target: 99, suffix: ".9%", label: "Network Uptime SLA", icon: "heart", delay: 500 },
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

            <div className="relative z-[2] max-w-[1280px] mx-auto px-10">
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
                <div className="grid grid-cols-3 gap-6">
                    {counters.map((c) => (
                        <CounterCard key={c.label} {...c} active={vis} />
                    ))}
                </div>
            </div>
        </section>
    );
}