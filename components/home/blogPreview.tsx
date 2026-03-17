"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Image from "next/image";

function BlogSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1, once: true });

    const posts = [
        {
            cat: "Step 1",
            title: "Review & Analyze the Requirement",
            date: "Discovery",
            read: "Milestone 1",
            image: undefined,
        },
        {
            cat: "Step 2",
            title: "Process Development & Approval",
            date: "Planning",
            read: "Milestone 1",
            image: undefined,
        },
        {
            cat: "Step 3",
            title: "Solution Design & Approvals",
            date: "Design",
            read: "Milestone 1",
            image: undefined,
        },
        {
            cat: "Step 4",
            title: "Design, Implementation & Configuration",
            date: "Execution",
            read: "Milestone 2",
            image: undefined,
        },
        {
            cat: "Step 5",
            title: "Change Management & Deployment",
            date: "Deployment",
            read: "Milestone 2",
            image: undefined,
        },
        {
            cat: "Step 6",
            title: "Simulation, Testing, Training & Handover",
            date: "Delivery",
            read: "Milestone 3",
            image: undefined,
        },
    ];

    return (
        <section ref={ref} className="bg-white py-25">
            <div className="mx-auto max-w-7xl px-8">
                <div
                    className={`mb-14 flex items-center md:items-end justify-between transition-all duration-500 ${
                        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                >
                    <div>
                        <div className="mb-3 font-['Space_Mono',monospace] text-[11px] tracking-[3px] text-[#339a99]">
                            OUR METHOD
                        </div>

                        <h2 className="font-['Syne',sans-serif] text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.5px] text-[#0d3d3d]">
                            From Requirement to Handover
                        </h2>
                    </div>

                    <a
                        href="#"
                        className="flex items-center gap-1.5 font-['DM_Sans',sans-serif] text-[14px] font-semibold text-[#339a99] no-underline"
                    >
                        See the Process
                        <ArrowRight size={16} color="#339a99" />
                    </a>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    {posts.map((p, i) => (
                        <BlogCard key={p.title} {...p} delay={i * 100} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BlogCard({
    cat,
    title,
    date,
    read,
    delay,
    inView,
    image,
}: {
    cat: string;
    title: string;
    date: string;
    read: string;
    delay: number;
    inView: boolean;
    image?: string;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${
                inView ? "opacity-100" : "opacity-0"
            }`}
            style={{
                background: "#f8fafc",
                border: `1.5px solid ${hovered ? "#339a99" : "transparent"}`,
                transform: hovered ? "translateY(-4px)" : "none",
                boxShadow: hovered ? "0 16px 40px rgba(0,51,102,0.12)" : "none",
                transitionDelay: `${delay}ms`,
            }}
        >
            <div className="relative flex h-40 items-center justify-center bg-[linear-gradient(135deg,#0d3d3d,#339a99)]">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(min-width: 1024px) 360px, 100vw"
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                        <Shield size={28} color="rgba(255,255,255,0.7)" />
                    </div>
                )}
            </div>

            <div className="p-7">
                <div className="mb-[14px] flex items-center justify-between">
                    <span className="rounded-full bg-[rgba(0,153,204,0.1)] px-[10px] py-[3px] font-['Space_Mono',monospace] text-[10px] tracking-[2px] text-[#339a99]">
                      {cat}
                    </span>

                    <span className="font-['DM_Sans',sans-serif] text-[12px] text-[#667085]">
                        {read}
                    </span>
                    </div>

                    <h3 className="mb-4 font-['Syne',sans-serif] text-[16px] font-bold leading-[1.4] tracking-[-0.2px] text-[#0d3d3d]">
                        {title}
                    </h3>

                    <div className="font-['DM_Sans',sans-serif] text-[13px] text-[#667085]">
                        {date}
                    </div>
            </div>
        </div>
    );
}

export default BlogSection;
