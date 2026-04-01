'use client'
import {useInView} from "@/hooks/useInView";
import {Icon} from "@/icons/Icon";
import type { IconName } from "@/icons/Icon";

export default function TrustBar() {
    const [ref, vis] = useInView(0.3);
    const items = [
        {icon: "check", text: "Genuine & certified products only"},
        {icon: "truck", text: "Delivery across all 36 states"},
        {icon: "shield", text: "Full manufacturer warranty"},
        {icon: "phone", text: "Engineer support on all products"},
        {icon: "tag", text: "Competitive trade pricing available"},
    ] satisfies { icon: IconName; text: string }[];

    return (
        <section
            ref={ref}
            className="py-14 border-t border-[rgba(51,154,153,0.1)] bg-[linear-gradient(135deg,#061e1e,#0d3d3d)]"
        >
            <div className="max-w-[1280px] mx-auto px-10 flex justify-around flex-wrap gap-6">
                {items.map((item, i) => (
                    <div
                        key={item.text}
                        className={`flex items-center gap-3 transition-all duration-500 ${
                            vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                        style={{transitionDelay: `${i * 80}ms`}}
                    >
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(51,154,153,0.15)]">
                            <Icon name={item.icon} size={16} color="#339a99"/>
                        </div>

                        <span className="text-sm font-medium text-white/75 font-['DM_Sans',sans-serif]">
                          {item.text}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
