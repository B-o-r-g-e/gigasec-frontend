'use client'
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import type {IconName} from "@/icons/Icon";
import {B} from "@/colors/Colors";

type ValueItem = {
    icon: IconName;
    title: string;
    desc: string;
};

export default function ValueCard({ v, i, vis }: {v: ValueItem; i: number; vis: boolean}) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className="flex items-start gap-5 px-7 py-6 rounded-[14px] cursor-pointer"
            style={{
                background: hov ? B.navy : B.offwhite,
                border: `1.5px solid ${hov ? B.electric : B.lightgray}`,
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                transform: vis ? (hov ? "translateX(10px)" : "translateX(0)") : "translateX(80px)",
                opacity: vis ? 1 : 0,
                transitionDelay: `${i * 0.1 + 0.2}s`,
                boxShadow: hov ? "0 16px 40px rgba(13,61,61,0.14)" : "none",
            }}
        >
            {/* Icon box */}
            <div
                className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
                style={{
                    background: hov
                        ? "rgba(51,154,153,0.2)"
                        : "rgba(13,61,61,0.08)",
                    transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                    transform: hov ? "rotate(-8deg) scale(1.15)" : "none",
                }}
            >
                <Icon
                    name={v.icon}
                    size={24}
                    color={hov ? B.bright : B.electric}
                />
            </div>

            {/* Text */}
            <div>
                <h3
                    className="font-['Syne',sans-serif] font-bold text-[17px] mb-[6px]"
                    style={{
                        color: hov ? "#fff" : B.navy,
                        transition: "color 0.3s",
                    }}
                >
                    {v.title}
                </h3>

                <p
                    className="font-['DM_Sans',sans-serif] text-[14px] leading-[1.65]"
                    style={{
                        color: hov
                            ? "rgba(255,255,255,0.7)"
                            : B.gray,
                    }}
                >
                    {v.desc}
                </p>
            </div>
        </div>
    )
}
