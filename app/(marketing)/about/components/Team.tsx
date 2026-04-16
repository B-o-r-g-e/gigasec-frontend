'use client'
import {B} from "@/theme/Colors";
import {useInView} from "@/hooks/useInView";
import TeamCard from "@/app/(marketing)/about/components/TeamCard";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Icon} from "@/icons/Icon";
import {dMSans} from "@/theme/fonts";

export default function Team() {
    const [ref, vis] = useInView(0.06);
    const [expanded, setExpanded] = useState(false)

    const members = [
        {
            name: "Engr. Dr. Obi Okoroafor",
            role: "Executive Chairman",
            exp: "Fellow, Nigerian Society of Engineers",
            spec: "Hobark Group",
        },
        {
            name: "Engr. Babajide Odulaja",
            role: "Managing Director",
            exp: "20+ yrs",
            spec: "Engineering & Technology, ITIL, CompTIA, DOE PMI ACP",
        },
        {
            name: "Emma Jumbo",
            role: "Quality Health Safety & Environment",
            exp: "15+ yrs",
            spec: "HSE Professional, Hobark Group",
        },
        {
            name: "Dorathy Zegere",
            role: "Finance Analyst",
            exp: "ICAN Certified",
            spec: "Financial Analysis",
        },
        {
            name: "Bolade Obat-Olowu",
            role: "Company Secretary & Legal Adviser",
            exp: "Hobark Group",
            spec: "Legal & Corporate Affairs",
        },
        {
            name: "Regina Ikpo",
            role: "Operations Analyst",
            exp: "10 yrs",
            spec: "Operations, Schlumberger Nigeria",
        },
    ];

    return (
        <section
            ref={ref}
            className="py-16 sm:py-24"
            style={{background: B.offwhite}}
        >
            <div className="max-w-[1280px] mx-auto px-6 sm:px-10 mb-12">

                {/* Header */}
                <div
                    className="text-center mb-12 sm:mb-20"
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateY(0)" : "translateY(-40px)",
                        transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
                    }}
                >
                    <div
                        className="font-['Space_Mono',monospace] text-[11px] tracking-[3px] mb-[14px]"
                        style={{color: B.electric}}
                    >
                        THE PEOPLE
                    </div>

                    <h2
                        className="font-['Syne',sans-serif] font-extrabold text-[clamp(1.9rem,6vw,3.5rem)] tracking-[-0.5px]"
                        style={{color: B.navy}}
                    >
                        Our People<br/>
                        <span style={{color: B.electric}}>
                            Engineering, Technology, and Operations Leaders.
                        </span>
                    </h2>
                </div>

                {/* Team grid */}
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {members.slice(0, 3).map((m, i) => (
                            <TeamCard key={m.name} member={m} i={i} vis={vis}/>
                        ))}
                    </div>

                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden w-full"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 w-full">
                                    {members.slice(3, 6).map((m, i) => (
                                        <TeamCard key={m.name} member={m} i={i + 3} vis={vis}/>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mt-12">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className={`${dMSans.className} 
                                inline-flex cursor-pointer items-center justify-center gap-2 px-8 py-3.5 rounded-full border text-sm font-bold transition-all hover:bg-white w-full sm:w-auto`}
                            style={{
                                color: B.navy,
                                borderColor: B.lightgray,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                            }}
                        >
                            {expanded ? "Show Less" : "See More Team"}
                            <span
                                className={`transition-transform duration-500 ${
                                    expanded ? "rotate-45" : ""
                                }`}
                            >
                                <Icon name="plus" size={16} color={B.electric}/>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
