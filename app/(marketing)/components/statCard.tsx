'use client'
import { useEffect, useState } from "react";
import { spaceMono } from "@/theme/fonts";

const stats = [
  { val: "500+", label: "INSTALLATIONS", delayClass: "[animation-delay:0s]" },
  { val: "99.9%", label: "UPTIME SLA", delayClass: "[animation-delay:0.5s]" },
  { val: "13+ YRS", label: "EXPERIENCE", delayClass: "[animation-delay:1s]" },
  { val: "24/7", label: "MONITORING", delayClass: "[animation-delay:1.5s]" },
];

export default function StatCard() {
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVis(true), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`mt-[72px] flex flex-wrap gap-5 transition-all duration-700 ${
        vis ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`${spaceMono.className} animate-floatCard border border-cyan-300/15 bg-cyan-300/4 px-6 py-[14px] [animation-fill-mode:both] [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%_-_10px))] ${stat.delayClass}`}
        >
          <div className="text-[22px] leading-none font-bold text-cyan-400 drop-shadow-[0_0_18px_rgba(0,200,255,0.65)]">
            {stat.val}
          </div>
          <div className="mt-1 text-[8px] tracking-[2px] text-slate-100/25">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
