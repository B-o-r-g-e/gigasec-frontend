"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const sectionVariants = {
    hidden: { opacity: 0, y: 42 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            when: "beforeChildren",
            staggerChildren: 0.12,
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function CaseStudiesSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.2, once: true });

    const cases = [
        {
            tag: "Banking",
            title: "Nationwide CCTV Upgrade for Tier-1 Bank",
            result: "340 branches secured in 8 months",
            color: "#003366",
            href: "#",
        },
        {
            tag: "Oil & Gas",
            title: "Fiber Optic Backbone — Offshore Platform",
            result: "99.99% uptime over 24 months",
            color: "#004080",
            href: "#",
        },
        {
            tag: "Government",
            title: "Smart City Surveillance Network — Lagos",
            result: "2,400 IP cameras deployed",
            color: "#002244",
            href: "#",
        },
    ];

    return (
        <motion.section
            id="case-studies"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-[#f8fafc] py-[100px]"
        >
            <div className="mx-auto max-w-[1280px] px-8">
                <div className="mb-14 flex items-end justify-between">
                    <motion.div
                        variants={headerVariants}
                    >
                        <div className="mb-3 font-['Space_Mono',monospace] text-[11px] tracking-[3px] text-[#0099CC]">
                            PROVEN RESULTS
                        </div>

                        <h2 className="font-['Syne',sans-serif] text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.5px] text-[#003366]">
                            Case Studies
                        </h2>
                    </motion.div>

                    <motion.a
                        href="#"
                        variants={headerVariants}
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="flex items-center gap-1.5 font-['DM_Sans',sans-serif] text-[14px] font-semibold text-[#0099CC]"
                    >
                        View All Projects
                        <ArrowRight size={16} color="#0099CC" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    {cases.map((c) => (
                        <Link key={c.title} href={c.href}>
                            <CaseCard {...c} inView={inView} />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function CaseCard({
                      tag,
                      title,
                      result,
                      color,
                      href,
                      inView,
                  }: {
    tag: string;
    title: string;
    result: string;
    color: string;
    href: string;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -10, scale: 1.015 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ease-out"
            style={{
                background: hovered ? color : "#fff",
                border: `1.5px solid ${hovered ? "transparent" : "#e8edf3"}`,
                boxShadow: hovered
                    ? "0 24px 48px rgba(0,0,0,0.2)"
                    : "0 2px 8px rgba(0,0,0,0.05)",
            }}
        >
            <motion.div
                className="h-2"
                animate={{
                    opacity: hovered ? 1 : 0.92,
                    scaleX: hovered ? 1 : 0.98,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                    background: hovered
                        ? "linear-gradient(90deg, #0099CC, rgba(0,153,204,0.4))"
                        : "linear-gradient(90deg, #003366, #0099CC)",
                }}
            />

            <div className="p-8">
                <motion.div
                    className="mb-5 inline-block rounded-full border px-3 py-1 font-['Space_Mono',monospace] text-[10px] tracking-[2px]"
                    animate={{ y: hovered ? -2 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    style={{
                        color: "#0099CC",
                        background: hovered
                            ? "rgba(0,153,204,0.15)"
                            : "rgba(0,51,102,0.07)",
                        borderColor: hovered
                            ? "rgba(0,153,204,0.4)"
                            : "rgba(0,51,102,0.12)",
                    }}
                >
                    {tag}
                </motion.div>

                <motion.h3
                    className="mb-6 font-['Syne',sans-serif] text-[19px] font-bold leading-[1.3] tracking-[-0.3px]"
                    animate={{ x: hovered ? 4 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    style={{ color: hovered ? "#fff" : "#003366" }}
                >
                    {title}
                </motion.h3>

                <motion.div
                    className="flex items-center gap-2.5 rounded-[10px] px-4 py-[14px]"
                    animate={{ x: hovered ? 4 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    style={{
                        background: hovered ? "rgba(0,153,204,0.12)" : "#f8fafc",
                    }}
                >
                    <Check size={16} color="#0099CC" />
                    <span
                        className="font-['DM_Sans',sans-serif] text-[14px] font-semibold"
                        style={{ color: hovered ? "#fff" : "#003366" }}
                    >
            {result}
          </span>
                </motion.div>

                <motion.div
                    className="mt-5 flex items-center gap-1.5 font-['DM_Sans',sans-serif] text-[13px] font-semibold text-[#0099CC]"
                    animate={{ x: hovered ? 6 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                >
                    Read Case Study
                    <motion.div
                        animate={{ x: hovered ? 4 : 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                        <ArrowRight size={14} color="#0099CC" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
