import { useState } from "react";
import { Icon, type IconName } from "@/icons/Icon";
import { B } from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";

type ContactItem = {
    icon: IconName;
    label: string;
    value: string;
    sub: string;
};

type HeroContactCardProps = {
    vis: boolean;
    item: ContactItem;
    i?: number;
};

export default function HeroContactCard({ item, i = 0, vis }: HeroContactCardProps) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl cursor-pointer border transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]
  ${
                hov
                    ? "bg-[rgba(51,154,153,0.15)] border-[rgba(51,154,153,0.5)]"
                    : "bg-white/[0.06] border-white/[0.1]"
            }
  ${
                vis
                    ? hov
                        ? "translate-x-[6px] opacity-100"
                        : "translate-x-0 opacity-100"
                    : `translate-x-[${40 + i * 10}px] opacity-0`
            }`}
            style={{
                transitionDelay: `${0.5 + i * 0.08}s`,
            }}
        >
            {/* Icon box */}
            <div
                className={`w-[44px] h-[44px] rounded-xl flex items-center justify-center shrink-0 transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
    ${
                    hov
                        ? "bg-[rgba(51,154,153,0.25)] scale-[1.12] rotate-[5deg]"
                        : "bg-[rgba(51,154,153,0.12)]"
                }`}
            >
                <Icon name={item.icon} size={20} color={B.electric} />
            </div>

            {/* Text */}
            <div>
                <div
                    className={`${spaceMono.className} text-[9px] tracking-[2px] mb-[3px]`}
                    style={{ color: B.electric }}
                >
                    {item.label}
                </div>

                <div
                    className={`${syne.className} text-[14px] font-bold text-white`}
                >
                    {item.value}
                </div>

                <div
                    className={`${dMSans.className} text-[12px] text-white/50 mt-[2px]`}
                >
                    {item.sub}
                </div>
            </div>
        </div>
    )
}
