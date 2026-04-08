'use client'
import {useState} from "react";
import {B} from "@/theme/Colors";
import {Icon} from "@/icons/Icon";

type memberItem = {
    name: string;
    role: string;
    exp: string;
    spec: string;
}

export default function TeamCard({ member, i, vis }: {member:memberItem, i: number, vis: boolean}) {
    const [hov, setHov] = useState(false);
    const initials = member.name.split(" ").map(n => n[0]).join("").slice(0, 2);
    const colors = ["#00CCCC", "#00B8B8", "#66E0E0", "#333333", "#33CCCC", "#4D4D4D"];
    const bg = colors[i % colors.length];

    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className="relative overflow-hidden cursor-pointer rounded-[20px] px-6 sm:px-8 py-7 sm:py-9"
            style={{
                background: hov ? B.navy : "#fff",
                border: `1.5px solid ${hov ? B.electric : B.lightgray}`,
                transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
                transform: vis
                    ? hov
                        ? "translateY(-12px) scale(1.03)"
                        : "translateY(0)"
                    : "translateY(70px) scale(0.9)",
                opacity: vis ? 1 : 0,
                boxShadow: hov
                    ? "0 28px 56px rgba(13,61,61,0.2)"
                    : "0 4px 16px rgba(0,0,0,0.05)",
                transitionDelay: `${i * 0.08}s`,
            }}
        >
            {/* Animated top strip */}
            <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                    background: `linear-gradient(90deg, ${bg}, ${B.bright})`,
                    transform: `scaleX(${hov ? 1 : 0.3})`,
                    transformOrigin: "left",
                    transition: "transform 0.4s ease",
                }}
            />

            {/* Avatar */}
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{
                    background: `linear-gradient(135deg, ${bg}, ${B.navy})`,
                    border: `3px solid ${hov ? B.electric : "transparent"}`,
                    transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                    transform: hov ? "scale(1.12)" : "scale(1)",
                    boxShadow: hov ? `0 8px 24px rgba(51,154,153,0.4)` : "none",
                }}
            >
                <span className="font-['Syne',sans-serif] font-extrabold text-[22px] text-white tracking-[1px]">
                  {initials}
                </span>
            </div>

            {/* Name */}
            <h3
                className="font-['Syne',sans-serif] font-bold text-[17px] mb-1"
                style={{
                    color: hov ? "#fff" : B.navy,
                    transition: "color 0.3s",
                }}
            >
                {member.name}
            </h3>

            {/* Role */}
            <div
                className="font-['DM_Sans',sans-serif] text-[13px] font-semibold mb-3"
                style={{ color: B.electric }}
            >
                {member.role}
            </div>

            {/* Description */}
            <p
                className="font-['DM_Sans',sans-serif] text-[13px] leading-[1.6] mb-5"
                style={{
                    color: hov ? "rgba(255,255,255,0.65)" : B.gray,
                }}
            >
                {member.spec}
            </p>

            {/* Experience badge */}
            <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{
                    background: hov
                        ? "rgba(51,154,153,0.2)"
                        : "rgba(13,61,61,0.07)",
                    border: `1px solid ${
                        hov ? "rgba(51,154,153,0.4)" : B.lightgray
                    }`,
                    transition: "all 0.3s",
                }}
            >
                <span
                    className="font-['Space_Mono',monospace] text-[10px] tracking-[1px]"
                    style={{ color: hov ? B.bright : B.electric }}
                >
                  {member.exp}
                </span>
            </div>

            {/* LinkedIn hover icon */}
            <div
                className="absolute top-5 right-5"
                style={{
                    opacity: hov ? 1 : 0,
                    transform: hov
                        ? "scale(1) rotate(0deg)"
                        : "scale(0) rotate(-90deg)",
                    transition:
                        "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}
            >
                <Icon name="linkedin" size={18} color={B.electric} />
            </div>
        </div>
    )
}
