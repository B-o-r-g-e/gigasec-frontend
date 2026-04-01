'use client'
import { useState } from "react";
import { Icon, type IconName } from "@/icons/Icon";
import { B } from "@/theme/Colors";

type SocialBtnProps = {
    icon: IconName;
    label: string;
    url: string;
};

export function SocialBtn({ icon, label, url }: SocialBtnProps) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={url}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            aria-label={label}
            title={label}
            className="flex items-center gap-2 rounded-full px-3 py-2 border transition-all duration-300"
            style={{
                borderColor: hov ? B.electric : B.lightgray,
                background: hov ? "rgba(51,154,153,0.08)" : B.offwhite,
                transform: hov ? "translateY(-2px)" : "translateY(0)",
                boxShadow: hov
                    ? "0 10px 22px rgba(13,61,61,0.12)"
                    : "0 2px 6px rgba(0,0,0,0.04)",
            }}
        >
            <Icon name={icon} size={16} color={hov ? B.electric : B.gray} />
            <span
                className="text-[12px] font-semibold"
                style={{ color: hov ? B.navy : B.gray }}
            >
                {label}
            </span>
        </a>
    );
}
