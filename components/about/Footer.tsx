'use client'
import {Icon} from "@/icons/Icon";
import {B} from "@/colors/Colors";

export default function Footer() {
    return (
        <footer className="bg-[#060e0e] border-t border-white/10 py-12">
            <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-[7px] flex items-center justify-center"
                             style={{ background: `linear-gradient(135deg,${B.electric},${B.navy})` }}>
                            <Icon name="shield" size={16} color="#fff" />
                        </div>
                        <div>
                            <div className="font-['Syne',sans-serif] font-extrabold text-[15px] text-white tracking-[1px]">
                                GIGASEC
                            </div>
                            <div className="font-['Space_Mono',monospace] text-[8px] tracking-[2px]"
                                 style={{ color: B.electric }}>
                                SERVICES
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {["Home", "Services", "About", "Case Studies", "Blog", "Contact"].map(l => (
                            <a
                                key={l}
                                href="#"
                                className="font-['DM_Sans',sans-serif] text-[13px] text-white/50 no-underline transition-colors hover:text-white"
                            >
                                {l}
                            </a>
                        ))}
                    </div>

                    <div className="font-['DM_Sans',sans-serif] text-[12px] text-white/40">
                        © 2025 Gigasec Services Ltd.
                    </div>
                </div>
            </div>
        </footer>
    )
}
