'use client'
import {RefObject, useState} from "react";
import {Icon} from "@/icons/Icon";
import {B} from "@/colors/Colors";

type certItem = {
    name: string;
    tier: string;
}

export default function CertCard({cert, i, vis}: {cert: certItem, i: number, vis: boolean|RefObject<null>}) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className="text-center cursor-default rounded-2xl px-6 py-7"
            style={{
                background: hov ? B.navy : B.offwhite,
                border: `1.5px solid ${hov ? B.electric : B.lightgray}`,
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                transform: vis
                    ? hov
                        ? "translateY(-8px) scale(1.05)"
                        : "translateY(0)"
                    : "translateY(40px) scale(0.85)",
                opacity: vis ? 1 : 0,
                boxShadow: hov ? "0 20px 48px rgba(13,61,61,0.18)" : "none",
                transitionDelay: `${i * 0.06}s`,
            }}
        >
            {/* Icon circle */}
            <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                    background: hov
                        ? "rgba(51,154,153,0.2)"
                        : "rgba(13,61,61,0.08)",
                    transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                    transform: hov ? "rotateY(180deg)" : "none",
                }}
            >
                <Icon name="award" size={22} color={hov ? B.bright : B.electric} />
            </div>

            {/* Certification name */}
            <div
                className="font-['Syne',sans-serif] font-bold text-[14px] mb-[6px]"
                style={{
                    color: hov ? "#fff" : B.navy,
                    transition: "color 0.3s",
                }}
            >
                {cert.name}
            </div>

            {/* Tier */}
            <div
                className="font-['Space_Mono',monospace] text-[10px] tracking-[1.5px]"
                style={{ color: B.electric }}
            >
                {cert.tier}
            </div>
        </div>
    )
}