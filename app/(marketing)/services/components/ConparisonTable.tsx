'use client'
import {useInView} from "@/hooks/useInView";
import {Icon} from "@/icons/Icon";
import {B} from "@/theme/Colors";

export default function ComparisonTable() {
    const [ref, vis] = useInView(0.1);
    const rows = [
        {feature: "Review & Analyze Requirement", m1: true, m2: false, m3: false},
        {feature: "Solution Design & Approvals", m1: true, m2: false, m3: false},
        {feature: "Design, Implementation & Configuration", m1: false, m2: true, m3: false},
        {feature: "Project Signing (Milestone 1)", m1: true, m2: false, m3: false},
        {feature: "Change Management & Deployment (Milestone 2)", m1: false, m2: true, m3: false},
        {feature: "Simulation, Testing & Training", m1: false, m2: false, m3: true},
        {feature: "Handover & Support (Milestone 3)", m1: false, m2: false, m3: true},
        {feature: "Process Development & Approval", m1: true, m2: false, m3: false},
    ] as const;

    return (
        <section
            ref={ref}
            className="bg-white py-24"
        >
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
                <div
                    className={`text-center mb-16 transition-all duration-800 ${
                        vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
                    }`}
                >
                    <div
                        className="font-[DM_Sans] text-[12px] tracking-widest mb-3 font-semibold uppercase"
                        style={{color: B.electric}}
                    >
                        OUR METHOD
                    </div>
                    <h2
                        className="font-[Syne] font-extrabold text-[clamp(2rem,4vw,3rem)] -tracking-[0.5px]"
                        style={{color: B.navy}}
                    >
                        Delivery Milestones
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] border-separate border-spacing-0">
                        <thead>
                        <tr>
                            <th
                                className="py-5 px-6 text-left font-[Syne] font-bold text-[14px] border-b-2 border-gray-200"
                                style={{color: B.gray}}
                            >
                                Activity
                            </th>
                            {["Milestone 1", "Milestone 2", "Milestone 3"].map((tier, i) => (
                                <th
                                    key={tier}
                                    className={`py-5 px-6 text-center font-[Syne] font-extrabold text-[16px] relative transition-all duration-600 border-b-2 ${
                                        tier === "Milestone 3" ? "rounded-t-xl" : "border-gray-200"
                                    }`}
                                    style={{
                                        transitionDelay: `${i * 100}ms`,
                                        transform: vis ? "none" : "translateY(-20px)",
                                        opacity: vis ? 1 : 0,
                                        borderColor: tier === "Milestone 3" ? B.electric : undefined,
                                        background: tier === "Milestone 3" ? `${B.electric}14` : undefined,
                                        color: tier === "Milestone 3" ? B.electric : B.navy,
                                    }}
                                >
                                    {tier === "Milestone 3" && (
                                        <div
                                            className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-[DM_Sans] font-bold px-3 py-0.5 rounded-full tracking-wide"
                                            style={{background: B.electric}}
                                        >
                                            FINAL
                                        </div>
                                    )}
                                    {tier}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {rows.map((row, ri) => (
                            <tr
                                key={row.feature}
                                className={`transition-all duration-600 ${
                                    vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                                }`}
                                style={{transitionDelay: `${ri * 60 + 200}ms`}}
                            >
                                <td
                                    className="py-4 px-6 font-[DM_Sans] text-[14px] border-b border-gray-100 font-medium"
                                    style={{color: B.charcoal}}
                                >
                                    {row.feature}
                                </td>
                                {(["m1", "m2", "m3"] as const).map((tier) => {
                                    const val = row[tier];
                                    const isEnt = tier === "m3";
                                    return (
                                        <td
                                            key={tier}
                                            className="py-4 px-6 text-center border-b border-gray-100"
                                            style={{
                                                background: isEnt ? `${B.electric}0A` : "transparent",
                                            }}
                                        >
                                            {val === true ? (
                                                <div
                                                    className="w-6 h-6 rounded-full flex items-center justify-center mx-auto transition-transform duration-300"
                                                    style={{background: isEnt ? B.electric : `${B.electric}12`}}
                                                >
                                                    <Icon
                                                        name="check"
                                                        size={13}
                                                        color={isEnt ? "#fff" : B.electric}
                                                    />
                                                </div>
                                            ) : val === false ? (
                                                <span className="text-gray-300 text-lg">—</span>
                                            ) : (
                                                <span
                                                    className="font-[DM_Sans] font-bold text-[13px]"
                                                    style={{color: isEnt ? B.electric : B.navy}}
                                                >
                                                    {val}
                                                </span>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
