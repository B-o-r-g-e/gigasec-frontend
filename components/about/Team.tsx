'use client'
import {B} from "@/colors/Colors";
import {useInView} from "@/hooks/useInView";
import TeamCard from "@/components/about/TeamCard";

export default function Team() {
    const [ref, vis] = useInView(0.06);
    const members = [
        { name: "Chukwuemeka Obi",    role: "Chief Executive Officer",          exp: "22yrs", spec: "Security Engineering & Business Strategy" },
        { name: "Amaka Nweze",        role: "Chief Operations Officer",         exp: "18yrs", spec: "ICT Infrastructure & Project Delivery" },
        { name: "Babatunde Adewale",  role: "Director, Security Engineering",   exp: "16yrs", spec: "CCTV, Access Control & System Design" },
        { name: "Ngozi Okafor",       role: "Director, Fiber Optic Division",   exp: "14yrs", spec: "OSP/ISP Fiber & Network Infrastructure" },
        { name: "Segun Afolabi",      role: "Head of Industrial Safety",        exp: "15yrs", spec: "Oil & Gas, ATEX, IEC 61511" },
        { name: "Adaeze Eze",         role: "Head of Client Success",           exp: "10yrs", spec: "Enterprise Account Management" },
    ];

    return (
        <section
            ref={ref}
            className="py-[120px]"
            style={{ background: B.offwhite }}
        >
            <div className="max-w-[1280px] mx-auto px-10">

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
                        Leadership Built on<br />
                        <span style={{ color: B.electric }}>
          30+ Years of Combined Experience.
        </span>
                    </h2>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-3 gap-6">
                    {members.map((m, i) => (
                        <TeamCard key={m.name} member={m} i={i} vis={vis} />
                    ))}
                </div>

            </div>
        </section>
    )
}