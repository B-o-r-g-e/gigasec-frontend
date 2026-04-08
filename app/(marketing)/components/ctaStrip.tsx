"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {ArrowRight, Phone} from "lucide-react";

export default function CTAStrip() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    return (
        <section ref={ref} className="bg-[#00CCCC] py-[72px]">
            <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8 px-8">
                <div
                    className={`transition-all duration-500 ${
                        inView ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                    }`}
                >
                    <h2 className="mb-2 font-['Syne',sans-serif] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.5px] text-white">
                        Let&apos;s Build Tomorrow Together
                    </h2>

                    <p className="font-['DM_Sans',sans-serif] text-[16px] text-white/85">
                        Discover how Gigasec&apos;s engineering excellence and digital innovation can
                        transform your operations.
                    </p>
                </div>

                <div
                    className={`flex flex-wrap gap-4 transition-all duration-500 ${
                        inView ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                >
                    <a
                        href="#contact"
                        className="flex items-center gap-2 rounded-[8px] bg-white px-[30px] py-[15px] font-['DM_Sans',sans-serif] text-[15px] font-bold text-[#333333] no-underline shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-[2px]"
                    >
                        Contact Us
                        <ArrowRight size={16} color="#333333" />
                    </a>

                    <a
                        href="tel:+2348154442732"
                        className="flex items-center gap-2 rounded-[8px] border-[1.5px] border-white/50 bg-transparent px-[30px] py-[15px] font-['DM_Sans',sans-serif] text-[15px] font-semibold text-white no-underline transition-all duration-200 hover:border-white"
                    >
                        <Phone size={16} color="#fff" />
                        Call +234 815 444 2732
                    </a>
                </div>
            </div>
        </section>
    );
}
