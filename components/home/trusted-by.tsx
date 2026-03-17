"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { spaceMono } from "@/app/ui/fonts";

const partners = [
    { name: "C&I Leasing", src: "/partners/c-n-i_leasing-01.jpg" },
    { name: "Halliburton", src: "/partners/HALLIBURTON.png" },
    { name: "Mudiame", src: "/partners/mudiame-01.jpg" },
    { name: "NPDC", src: "/partners/npdc-01.jpg" },
    { name: "Rivers University", src: "/partners/rivers_university-01.jpg" },
    { name: "Seflam SGL", src: "/partners/seflam_SGL-01.jpg" },
    { name: "Telos Energy", src: "/partners/telos_energy-01.jpg" },
    { name: "Weatherford", src: "/partners/weatherford-01.jpg" },
];

export default function TrustedByStrip() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-black/8 bg-white py-7"
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8 lg:flex-row lg:items-center lg:justify-between">
                <motion.span
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`${spaceMono.className} text-center text-[10px] tracking-[0.32em] text-slate-500 lg:text-left`}
                >
                    OEM PARTNERS
                </motion.span>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:justify-end">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 0.45,
                                delay: 0.16 + index * 0.07,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative flex h-14 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 px-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-cyan-50/50"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                width={105}
                                height={104}
                                className="h-8 w-auto object-contain opacity-60 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                            />
                            <span className="pointer-events-none absolute -bottom-8 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
//image={p.image}
