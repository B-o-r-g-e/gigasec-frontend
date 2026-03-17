'use client'
import {B} from "@/colors/Colors";
import {useInView} from "@/hooks/useInView";
import TeamCard from "@/components/about/TeamCard";

export default function Team() {
    const [ref, vis] = useInView(0.06);
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
            className="py-[120px]"
            style={{ background: B.offwhite }}
        >
            <div className="max-w-[1280px] mx-auto px-6 sm:px-10">

                {/* Header */}
                <div
                    className="text-center mb-20"
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateY(0)" : "translateY(-40px)",
                        transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
                    }}
                >
                    <div
                        className="font-['Space_Mono',monospace] text-[11px] tracking-[3px] mb-[14px]"
                        style={{ color: B.electric }}
                    >
                        THE PEOPLE
                    </div>

                    <h2
                        className="font-['Syne',sans-serif] font-extrabold text-[clamp(2.2rem,5vw,3.5rem)] tracking-[-0.5px]"
                        style={{ color: B.navy }}
                    >
                        Our People<br />
                        <span style={{ color: B.electric }}>
          Engineering, Technology, and Operations Leaders.
        </span>
                    </h2>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((m, i) => (
                        <TeamCard key={m.name} member={m} i={i} vis={vis} />
                    ))}
                </div>

            </div>
        </section>
    )
}
