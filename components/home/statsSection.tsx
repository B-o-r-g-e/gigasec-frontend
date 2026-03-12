"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function useCountUp(target: number, duration = 2000, start = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) {
            return;
        }

        let frameId = 0;
        let startTime: number | null = null;

        const step = (timestamp: number) => {
            if (startTime === null) {
                startTime = timestamp;
            }

            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(eased * target));

            if (progress < 1) {
                frameId = window.requestAnimationFrame(step);
            }
        };

        frameId = window.requestAnimationFrame(step);

        return () => {
            window.cancelAnimationFrame(frameId);
        };
    }, [duration, start, target]);

    return count;
}

export default function StatsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    const stats = [
        { value: 13, suffix: "+", label: "Years in Business" },
        { value: 500, suffix: "+", label: "Installations Completed" },
        { value: 200, suffix: "+", label: "Enterprise Clients" },
        { value: 99, suffix: ".9%", label: "Network Uptime SLA" },
    ];

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-[linear-gradient(135deg,#0d3d3d,#0d3d3d)] py-20"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(0,153,204,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="relative mx-auto max-w-[1280px] px-8">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
                    {stats.map((s, i) => (
                        <StatCard key={s.label} {...s} inView={inView} delay={i * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({
                      value,
                      suffix,
                      label,
                      inView,
                      delay,
                  }: {
    value: number;
    suffix: string;
    label: string;
    inView: boolean;
    delay: number;
}) {
    const count = useCountUp(value, 2000, inView);

    return (
        <div
            className={`text-center transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="font-['Syne',sans-serif] text-[3.2rem] font-extrabold leading-none tracking-[-2px] text-white">
                {count}
                {suffix}
            </div>

            <div className="mt-2 font-['DM_Sans',sans-serif] text-[15px] tracking-[0.3px] text-white/55">
                {label}
            </div>

            <div className="mx-auto mt-3 h-[2px] w-10 rounded-[2px] bg-[#339a99]" />
        </div>
    );
}
