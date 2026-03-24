import type { MouseEventHandler } from "react";
import { useState } from "react";
import { Icon } from "@/icons/Icon";
import { B } from "@/colors/Colors";

type FAQItemProps = {
    q: string;
    a: string;
    i: number;
    vis: boolean;
    open: boolean;
    onToggle: MouseEventHandler<HTMLDivElement>;
};

export default function FAQItem({ q, a, i, vis, open, onToggle }: FAQItemProps) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            onClick={onToggle}
            className={`transition-all duration-350 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] cursor-pointer rounded-lg overflow-hidden
    ${vis ? "opacity-100 translate-x-0" : "-translate-x-8 opacity-0"}
  `}
            style={{
                borderWidth: "1.5px",
                transitionDelay: `${i * 80}ms`,
                borderColor: open || hov ? B.electric : B.lightgray,
                background: open ? B.navy : hov ? B.offwhite : B.white,
                boxShadow: open
                    ? "0 16px 40px rgba(13,61,61,0.15)"
                    : hov
                        ? "0 8px 20px rgba(13,61,61,0.08)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
            }}
        >
            {/* Question header */}
            <div className="flex justify-between items-center p-5 gap-4">
    <span
        className={`flex-1 font-syne font-bold text-[15px] leading-[1.4] transition-colors duration-300 ${
            open ? "text-white" : "text-navy"
        }`}
        style={{ color: open ? B.white : B.navy }}
    >
      {q}
    </span>
                <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-400 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
        ${open ? "rotate-90 bg-[rgba(51,154,153,0.25)]" : "rotate-0 bg-[rgba(51,154,153,0.1)]"}
      `}
                >
                    <Icon name="chevron" size={16} color={B.electric}/>
                </div>
            </div>

            {/* Answer */}
            <div
                className={`overflow-hidden transition-[max-height] duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]`}
                style={{
                    maxHeight: open ? "320px" : "0px",
                    opacity: open ? 1 : 0,
                    transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
                }}
            >
                <p
                    className="px-6 pb-5 font-dm text-sm leading-[1.75]"
                    style={{ color: open ? "rgba(255,255,255,0.75)" : B.gray }}
                >
                    {a}
                </p>
            </div>
        </div>
    )
}
