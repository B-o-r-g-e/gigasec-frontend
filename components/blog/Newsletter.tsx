'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import {B} from "@/colors/Colors";

export default function Newsletter() {
    const [ref, vis] = useInView(0.2);
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    return (
        <section
            ref={ref}
            className="py-16 sm:py-[80px]"
            style={{ background: `linear-gradient(135deg,${B.navyDark},${B.navy})` }}
        >
            <div className="max-w-[640px] mx-auto px-5 sm:px-8 lg:px-[2.5rem] text-center">
                <div
                    className={`transition-all duration-900`}
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)"
                    }}
                >
                    {/* Icon */}
                    <div
                        className="w-[56px] h-[56px] rounded-[16px] mx-auto mb-6 flex items-center justify-center"
                        style={{
                            background: "rgba(51,154,153,0.2)",
                            border: "1px solid rgba(51,154,153,0.3)"
                        }}
                    >
                        <Icon name="mail" size={26} color={B.electric} />
                    </div>

                    {/* Title */}
                    <h2
                        className="font-syne font-extrabold mb-3"
                        style={{
                            fontSize: "clamp(1.8rem,3.5vw,2.4rem)",
                            color: "#fff",
                            letterSpacing: -0.5
                        }}
                    >
                        Stay Ahead of the Curve
                    </h2>

                    {/* Description */}
                    <p
                        className="font-dm text-[16px] leading-[1.7] mb-9"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                        Get the latest security intelligence, technical guides, and industry news delivered to your inbox — twice a month. No spam.
                    </p>

                    {/* Form */}
                    {!sent ? (
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="your@company.com"
                                className="w-full flex-1 rounded-[8px] px-5 py-3 outline-none transition-all"
                                style={{
                                    border: "1.5px solid rgba(51,154,153,0.3)",
                                    background: "rgba(255,255,255,0.05)",
                                    color: "#fff",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "14px"
                                }}
                                onFocus={e => {
                                    e.target.style.borderColor = B.electric;
                                    e.target.style.background = "rgba(51,154,153,0.08)";
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = "rgba(51,154,153,0.3)";
                                    e.target.style.background = "rgba(255,255,255,0.05)";
                                }}
                            />
                            <button
                                onClick={() => setSent(true)}
                                className="w-full sm:w-auto rounded-[8px] px-[28px] py-[14px] font-dm font-bold text-[14px] text-white cursor-pointer transition-all"
                                style={{
                                    background: B.electric,
                                    boxShadow: "0 4px 20px rgba(51,154,153,0.4)",
                                    transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(51,154,153,0.55)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = "none";
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(51,154,153,0.4)";
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    ) : (
                        <div
                            className="rounded-[8px] px-6 py-4 font-dm text-[15px] animate-bounce"
                            style={{
                                background: "rgba(51,154,153,0.15)",
                                border: "1px solid rgba(51,154,153,0.4)",
                                color: B.bright,
                                animationTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)"
                            }}
                        >
                            ✓ You&#39;re subscribed! First issue coming soon.
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
