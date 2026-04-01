'use client'
import type { ReactNode } from "react";
import { useState } from "react";
import { Icon, type IconName } from "@/icons/Icon";
import { B } from "@/theme/Colors";
import {syne} from "@/theme/fonts";

type SidebarCardProps = {
    title: string;
    icon: IconName;
    children: ReactNode;
    vis: boolean;
    delay: number;
};

export function SidebarCard({ title, icon, children, vis, delay }: SidebarCardProps) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className="bg-white rounded-2xl p-7 transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
            style={{
                border: `1.5px solid ${hov ? B.electric : B.lightgray}`,
                transform: vis
                    ? hov
                        ? "translateX(6px)"
                        : "translateX(0)"
                    : "translateX(40px)",
                opacity: vis ? 1 : 0,
                transitionDelay: `${delay}ms`,
                boxShadow: hov
                    ? "0 16px 40px rgba(13,61,61,0.12)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
            }}
        >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5">
                <div
                    className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center transition-all duration-300"
                    style={{
                        background: hov
                            ? "rgba(51,154,153,0.15)"
                            : "rgba(51,154,153,0.08)",
                    }}
                >
                    <Icon name={icon} size={18} color={B.electric} />
                </div>

                <h3
                    className={`${syne.className} text-[15px] font-bold`}
                    style={{ color: B.navy }}
                >
                    {title}
                </h3>
            </div>

            {children}
        </div>
    )
}
