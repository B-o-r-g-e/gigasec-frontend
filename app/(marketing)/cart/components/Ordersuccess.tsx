import {Icon} from "@/icons/Icon";
import type { IconName } from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";

export default function OrderSuccess() {
    const orderRef = `GS-ORD-${Math.floor(Math.random() * 900000) + 100000}`;
    return (
        <div className="text-center py-24 max-w-[600px] mx-auto" style={{ animation: "successReveal 0.8s cubic-bezier(0.34,1.56,0.64,1)" }}>
            <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8"
                 style={{ background: "linear-gradient(135deg,#00CCCC,#66E0E0)", boxShadow: "0 16px 48px rgba(51,154,153,0.4)" }}>
                <Icon name="check" size={52} color="#fff" />
            </div>
            <h2 className={`${syne.className} mb-4`} style={{ fontWeight: 800, fontSize: "clamp(2rem,4vw,2.8rem)", color: B.navy, letterSpacing: -0.5 }}>
                Order Confirmed!
            </h2>
            <p className={`${dMSans.className} mb-3`} style={{ fontSize: 16, color: B.gray, lineHeight: 1.7 }}>
                Thank you for your order. A confirmation email and invoice have been sent to you.
            </p>
            <div className="inline-block mt-4 mb-8 px-6 py-3 rounded-full"
                 style={{ background: "rgba(51,154,153,0.1)", border: "1px solid rgba(51,154,153,0.3)" }}>
                <span className={`${spaceMono.className}`} style={{ fontSize: 14, color: B.electric }}>Order Ref: {orderRef}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-10">
                {([
                    { icon: "truck",  title: "Delivery",     desc: "1–2 business days processing" },
                    { icon: "phone",  title: "Questions?",   desc: "+234 (0) 1 234 5678" },
                    { icon: "shield", title: "Warranty",     desc: "Full manufacturer warranty" },
                ] as const satisfies { icon: IconName; title: string; desc: string }[]).map(b => (
                    <div key={b.title} className="p-4 rounded-xl text-center" style={{ background: B.offwhite, border: `1px solid ${B.lightgray}` }}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(51,154,153,0.1)" }}>
                            <Icon name={b.icon} size={18} color={B.electric} />
                        </div>
                        <div className={`${syne.className}`} style={{ fontWeight: 700, fontSize: 14, color: B.navy, marginBottom: 4 }}>{b.title}</div>
                        <div className={`${dMSans.className}`} style={{ fontSize: 12, color: B.gray }}>{b.desc}</div>
                    </div>
                ))}
            </div>
            <div className="flex gap-4 justify-center">
                <a href="/shop" className={`${dMSans.className} inline-flex items-center gap-2 px-7 py-4 rounded-xl no-underline transition-all duration-300`}
                   style={{ fontWeight: 700, fontSize: 15, background: B.electric, color: "#fff", boxShadow: "0 8px 24px rgba(51,154,153,0.35)" }}
                   onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                    Continue Shopping <Icon name="arrow" size={16} color="#fff" />
                </a>
                <a href="/support" className={`${dMSans.className} inline-flex items-center gap-2 px-7 py-4 rounded-xl no-underline transition-all duration-200`}
                   style={{ fontWeight: 600, fontSize: 15, background: B.offwhite, color: B.charcoal, border: `1.5px solid ${B.lightgray}` }}
                   onMouseEnter={e => { e.currentTarget.style.borderColor = B.electric; e.currentTarget.style.color = B.electric; }}
                   onMouseLeave={e => { e.currentTarget.style.borderColor = B.lightgray; e.currentTarget.style.color = B.charcoal; }}>
                    Track Order
                </a>
            </div>
        </div>
    );
}
