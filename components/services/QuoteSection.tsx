'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {SERVICES} from "@/components/services/services";
import {Icon, type IconName} from "@/icons/Icon";
import {B} from "@/colors/Colors";

export default function QuoteSection() {
    const [ref, vis] = useInView(0.1);
    const [hoveredService, setHoveredService] = useState<string | null>(null);
    const services = SERVICES.map(s => s.title);

    return (
        <section id="quote" ref={ref} className="bg-[#f5f7fa] py-20 sm:py-24">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left */}
                    <div
                        className={`transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <div
                            className="font-[DM_Sans] text-[12px] tracking-widest mb-3 font-semibold uppercase"
                            style={{color: B.electric}}
                        >
                            LET'S BUILD TOMORROW TOGETHER
                        </div>
                        <h2
                            className="font-[Syne] font-extrabold text-[clamp(2rem,3.5vw,2.8rem)] -tracking-[0.5px] mb-5"
                            style={{color: B.navy}}
                        >
                            Company Profile 2025<br />Gigasec Services Limited
                        </h2>
                        <p
                            className="font-[DM_Sans] text-base leading-relaxed mb-10"
                            style={{color: B.gray}}
                        >
                            We are dedicated to advancing the convergence of IP security, industrial technology, and
                            digital innovation with ISO 9001 and 27001-aligned practices. We engineer solutions that
                            scale across borders and deliver measurable operational excellence.
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-4 mb-12">
                            {([
                                { icon: "phone", text: "+234 815 444 2732" },
                                { icon: "mail", text: "info@gigasecintl.com" },
                                { icon: "globe", text: "gigasecintl.com" },
                            ] as {icon: IconName; text: string}[]).map(({ icon, text }) => (
                                <div key={text} className="flex items-center gap-3.5">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{background: `${B.electric}20`}}
                                    >
                                        <Icon name={icon} size={18} color={B.electric} />
                                    </div>
                                    <span
                                        className="font-[DM_Sans] text-sm font-medium"
                                        style={{color: B.charcoal}}
                                    >
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Service Selector */}
                        <div>
                            <div
                                className="font-[DM_Sans] text-[13px] mb-4 font-semibold"
                                style={{color: B.gray}}
                            >
                                Quick-select a service area:
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {services.map((s, i) => (
                                    <button
                                        key={s}
                                        onMouseEnter={() => setHoveredService(s)}
                                        onMouseLeave={() => setHoveredService(null)}
                                        className="font-[DM_Sans] text-[13px] font-semibold px-4 py-2 rounded-lg border transition-all duration-300"
                                        style={{
                                            borderColor: hoveredService === s ? B.electric : "#e5e7eb",
                                            background: hoveredService === s ? `${B.electric}14` : "#ffffff",
                                            color: hoveredService === s ? B.electric : B.charcoal,
                                            transform: hoveredService === s ? "scale(1.06) translateY(-2px)" : "scale(1) translateY(0)",
                                            boxShadow: hoveredService === s
                                                ? "0 4px 16px rgba(66,153,225,0.15)"
                                                : "none",
                                            transitionDelay: `${i * 60 + 200}ms`,
                                        }}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div
                        className={`bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            vis ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-10 translate-y-5"
                        }`}
                        style={{
                            transitionDelay: "150ms",
                            borderColor: "#e5e7eb",
                            boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3 className="font-[Syne] font-bold text-lg mb-7" style={{color: B.navy}}>
                            Let’s Get Started
                        </h3>
                        <div className="flex flex-col gap-4.5">
                            {[
                                { placeholder: "Full Name *", type: "text" },
                                { placeholder: "Company Name *", type: "text" },
                                { placeholder: "Email Address *", type: "email" },
                                { placeholder: "Phone Number", type: "tel" },
                            ].map(({ placeholder, type }, i) => (
                                <input
                                    key={placeholder}
                                    type={type}
                                    placeholder={placeholder}
                                    className={`rounded-lg px-4 py-3 font-[DM_Sans] text-sm outline-none transition-all duration-250 ${
                                        vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                    }`}
                                    style={{
                                        background: "#f4f7fb",
                                        borderColor: "#e5e7eb",
                                        color: B.charcoal,
                                        borderWidth: "1px",
                                        transitionDelay: `${i * 60 + 300}ms`,
                                    }}
                                    onFocus={e => {
                                        e.currentTarget.style.borderColor = B.electric;
                                        e.currentTarget.style.background = `${B.electric}0D`;
                                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(66,153,225,0.15)";
                                    }}
                                    onBlur={e => {
                                        e.currentTarget.style.borderColor = "#e5e7eb";
                                        e.currentTarget.style.background = "#f4f7fb";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                />
                            ))}
                            <textarea
                                placeholder="Briefly describe your requirements *"
                                rows={4}
                                className={`rounded-lg px-4 py-3 font-[DM_Sans] text-sm outline-none resize-vertical transition-all duration-250 ${
                                    vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                                style={{
                                    background: "#f4f7fb",
                                    borderColor: "#e5e7eb",
                                    color: B.charcoal,
                                    borderWidth: "1px",
                                    transitionDelay: "540ms",
                                }}
                                onFocus={e => {
                                    e.currentTarget.style.borderColor = B.electric;
                                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(66,153,225,0.15)";
                                }}
                                onBlur={e => {
                                    e.currentTarget.style.borderColor = "#e5e7eb";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                            <button
                                className="w-full"
                                style={{
                                background: `linear-gradient(135deg, ${B.electric}, #227a79)`,
                                color: "#fff", border: "none", borderRadius: 10, padding: "16px",
                                fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15,
                                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                boxShadow: `0 8px 32px ${B.electric}50`,
                                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                                opacity: vis ? 1 : 0, transform: vis ? "scale(1)" : "scale(0.95) translateY(8px)",
                                transitionDelay: "600ms",
                            }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03) translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${B.electric}60`; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 8px 32px ${B.electric}50`; }}
                            >
                                Contact Us <Icon name="arrow" size={18} color="#fff" />
                            </button>
                            <p className="font-[DM_Sans] text-xs text-center mt-3" style={{color: B.gray}}>
                                Response within 24–48 hours. No spam, ever.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
