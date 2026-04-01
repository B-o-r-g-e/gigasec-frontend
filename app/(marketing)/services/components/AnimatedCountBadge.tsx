import {useCountUp} from "@/hooks/useCountUp";

export default function CountBadge({ value, suffix, label, delay = 0, active }: {value: number; suffix: string; label: string, delay: number, active: boolean }) {
    const n = useCountUp({ target: value, duration: 1600, active });

    return (
        <div
            className={`text-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${active ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-5"}
      `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="font-[Syne] font-extrabold text-[2.8rem] text-white leading-none tracking-[-2px]">
                {n}{suffix}
            </div>

            <div className="font-[DM_Sans] text-[13px] text-white/60 mt-[6px]">
                {label}
            </div>
        </div>
    );
}
