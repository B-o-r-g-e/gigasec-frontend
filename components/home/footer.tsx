"use client";

import { ArrowRight, Mail, Phone, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const contactItems = [
        { icon: Phone, text: "+234 (0) 815 444 2732" },
        { icon: Mail, text: "hello@gigasecintl.com" },
    ];

    return (
        <footer id="contact" className="bg-[#050f1a] text-white">
            {/* Contact strip */}
            <div className="border-b border-white/10 py-16">
                <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
                    <div>
                        <div className="mb-4 font-['Space_Mono',monospace] text-[10px] tracking-[3px] text-[#339a99]">
                            CONTACT US
                        </div>

                        <h2 className="mb-6 font-['Syne',sans-serif] text-[2.2rem] font-extrabold tracking-[-0.5px] text-white">
                            Start a Conversation
                        </h2>

                        <div className="flex flex-col gap-[14px]">
                            {contactItems.map(({ icon: ContactIcon, text }) => (
                                <div key={text} className="flex items-center gap-3">
                                    <ContactIcon size={18} color="#339a99" />
                                    <span className="font-['DM_Sans',sans-serif] text-[15px] text-white/70">
                    {text}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick form */}
                    <div className="flex flex-col gap-[14px]">
                        {["Your Name", "Email Address", "Service Interest"].map((placeholder) => (
                            <input
                                key={placeholder}
                                placeholder={placeholder}
                                className="rounded-[8px] border border-white/10 bg-white/5 px-[18px] py-[14px] font-['DM_Sans',sans-serif] text-[14px] text-white outline-none transition-colors duration-200 placeholder:text-white/40 focus:border-[#339a99]"
                            />
                        ))}

                        <button className="flex items-center justify-center gap-2 rounded-[8px] bg-[#339a99] px-4 py-[15px] font-['DM_Sans',sans-serif] text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(0,153,204,0.35)] transition-all duration-200 hover:-translate-y-[2px]">
                            Send Message
                            <ArrowRight size={16} color="#fff" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer links */}
            <div className="py-12 pb-8">
                <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-8 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
                    <div>
                        <div className="-ml-5">
                            <Link href="/">
                                <Image
                                    src="/logo.jpeg"
                                    width={150}
                                    height={1000}
                                    alt="Gigasec Logo"
                                />
                            </Link>
                        </div>

                        <p className="max-w-[260px] font-['DM_Sans',sans-serif] text-[14px] leading-[1.7] text-white/50">
                            Nigeria&apos;s leading security technology and ICT infrastructure
                            partner. Building safer, smarter environments since 2009.
                        </p>
                    </div>

                    {[
                        {
                            title: "Services",
                            links: [
                                "CCTV & Surveillance",
                                "Access Control",
                                "Fiber Optic",
                                "ICT Infrastructure",
                                "Security Engineering",
                            ],
                        },
                        {
                            title: "Company",
                            links: ["About Us", "Case Studies", "Blog", "Careers", "Contact"],
                        },
                        {
                            title: "Support",
                            links: [
                                "Submit Ticket",
                                "Knowledge Base",
                                "Downloads",
                                "Privacy Policy",
                                "Terms of Service",
                            ],
                        },
                    ].map((col) => (
                        <div key={col.title}>
                            <div className="mb-5 font-['Syne',sans-serif] text-[13px] font-bold tracking-[1px] text-white">
                                {col.title}
                            </div>

                            {col.links.map((l) => (
                                <div key={l} className="mb-[10px]">
                                    <a
                                        href="#"
                                        className="font-['DM_Sans',sans-serif] text-[14px] text-white/50 no-underline transition-colors duration-200 hover:text-[#339a99]"
                                    >
                                        {l}
                                    </a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-8 flex max-w-[1280px] flex-wrap items-center justify-between gap-3 border-t border-white/10 px-8 pt-6">
          <span className="font-['DM_Sans',sans-serif] text-[13px] text-white/35">
            © 2025 Gigasec Services Ltd. All rights reserved.
          </span>

                    <span className="font-['Space_Mono',monospace] text-[11px] tracking-[1px] text-white/25">
            gigasecintl.com
          </span>
                </div>
            </div>
        </footer>
    );
}
