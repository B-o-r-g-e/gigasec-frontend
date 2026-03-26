'use client'
import {useInView} from "@/hooks/useInView";
import {Icon} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/app/ui/fonts";

export default function BulkCTA() {
    const [ref, vis] = useInView(0.2);

    return (
        <section ref={ref} id="contact" className="bg-[#F5F7FA] py-20">
            <div className="max-w-[900px] mx-auto px-10">
                <div
                    className="rounded-[24px] px-16 py-16 text-center relative overflow-hidden transition-all duration-[900ms]"
                    style={{
                        background: "linear-gradient(135deg,#0d3d3d,#1a5958)",
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)"
                    }}>
                    <div className="absolute inset-0 pointer-events-none" style={{
                        backgroundImage: "linear-gradient(rgba(51,154,153,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(51,154,153,0.07) 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                        animation: "gridDrift 20s linear infinite"
                    }}/>
                    <div className="absolute rounded-full pointer-events-none" style={{
                        right: -60,
                        top: -60,
                        width: 350,
                        height: 350,
                        background: "radial-gradient(circle,rgba(51,154,153,0.2),transparent 65%)",
                        animation: "orbPulse 6s ease-in-out infinite"
                    }}/>
                    <div className="relative z-[2]">
                        <div className={`${spaceMono.className} text-[11px] tracking-[3px] mb-4`}
                             style={{color: "#339a99"}}>TRADE & BULK ORDERS
                        </div>
                        <h2 className={`${syne.className} font-black text-white tracking-[-0.5px] mb-4`}
                            style={{fontSize: "clamp(1.8rem,4vw,2.8rem)"}}>Ordering for
                            a Project or Business?</h2>
                        <p className={`${dMSans.className} text-[16px] leading-[1.7] mb-9 max-w-[560px] mx-auto`}
                           style={{color: "rgba(255,255,255,0.7)"}}>
                            We offer trade pricing, volume discounts, credit facilities, and dedicated account
                            management for contractors, integrators, and enterprise buyers.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a href="#"
                               className={`${dMSans.className} inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-[15px] text-white no-underline transition-all duration-300`}
                               style={{
                                   background: "#339a99",
                                   boxShadow: "0 8px 28px rgba(51,154,153,0.4)"
                               }}
                               onMouseEnter={e => {
                                   e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                                   e.currentTarget.style.boxShadow = "0 12px 36px rgba(51,154,153,0.55)";
                               }}
                               onMouseLeave={e => {
                                   e.currentTarget.style.transform = "none";
                                   e.currentTarget.style.boxShadow = "0 8px 28px rgba(51,154,153,0.4)";
                               }}>
                                Request Trade Account <Icon name="arrow" size={16} color="#fff"/>
                            </a>
                            <a href="tel:+2341234567"
                               className={`${dMSans.className} inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-[15px] text-white no-underline transition-all duration-200`}
                               style={{
                                   background: "transparent",
                                   border: "1.5px solid rgba(255,255,255,0.3)"
                               }}
                               onMouseEnter={e => {
                                   e.currentTarget.style.borderColor = "#339a99";
                                   e.currentTarget.style.color = "#339a99";
                               }}
                               onMouseLeave={e => {
                                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                                   e.currentTarget.style.color = "#fff";
                               }}>
                                <Icon name="phone" size={16} color="currentColor"/> Call Sales Team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}