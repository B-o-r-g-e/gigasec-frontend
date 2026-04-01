'use client';

import { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import {ArrowRight, BriefcaseBusiness, Cctv, Globe, LensConvex, Sun} from 'lucide-react';
import Link from "next/link";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 42 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
            when: 'beforeChildren' as const,
            staggerChildren: 0.12,
        },
    },
};

const headerVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export default function ServicesSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.2, once: true });

    const services = [
        {
            icon: <Globe />,
            title: 'Location Based Services',
            desc: 'NCC AVTS licensed provider for vehicle, asset, and people tracking with command & control, GPS, and IoT devices.',
            tag: 'Licensed',
            href: '#',
        },
        {
            icon: <BriefcaseBusiness />,
            title: 'Digital Oilfield & Industrial Services',
            desc: 'SCADA, instrumentation, automation, real-time data acquisition, and remote monitoring for critical operations.',
            tag: null,
            href: '#',
        },
        {
            icon: <Cctv />,
            title: 'IP Security Solutions',
            desc: 'CCTV, access control, time & attendance, auto gate, perimeter protection, fire alarm, smart home, and building automation.',
            tag: 'Core',
            href: '#',
        },
        {
            icon: <Sun />,
            title: 'Engineering Services',
            desc: 'Renewable energy, electrical installations, fabrication, and RFID-driven systems for industrial environments.',
            tag: null,
            href: '#',
        },
        {
            icon: <LensConvex />,
            title: 'ICT & Systems Integration',
            desc: 'Software and hardware, web applications, networks, fiber optics, solution design, R&D, and consulting.',
            tag: null,
            href: '#',
        },
    ];

    function ServiceCard({
         icon,
         title,
         desc,
         tag,
         inView,
     }: {
        icon: ReactNode;
        title: string;
        desc: string;
        tag: string | null;
        inView: boolean;
    }) {
        const [hovered, setHovered] = useState(false);

        return (
            <motion.div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className={`
          group relative cursor-pointer overflow-hidden rounded-2xl border px-8 py-9
          transition-all duration-300 ease-out
          ${hovered
                    ? 'border-[#339a99] bg-[#0d3d3d] shadow-[0_24px_48px_rgba(0,51,102,0.18)]'
                    : 'border-[#e8edf3] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)]'
                }
        `}
            >
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,153,204,0.18),transparent_45%),linear-gradient(180deg,rgba(102,204,255,0.08),transparent_55%)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                />

                {tag && (
                    <motion.div
                        className={`
              absolute right-5 top-5 rounded-full border px-[10px] py-1
              text-[9px] tracking-[2px]
              font-mono text-[#339a99]
              ${hovered ? 'bg-[rgba(0,153,204,0.2)]' : 'bg-[rgba(0,153,204,0.1)]'}
            `}
                        animate={{ y: hovered ? -2 : 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                        {tag}
                    </motion.div>
                )}

                <motion.div
                    className={`
            relative mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl transition-all duration-300
            ${hovered ? 'bg-[rgba(0,153,204,0.15)]' : 'bg-[rgba(0,51,102,0.08)]'}
          `}
                    animate={{
                        rotate: hovered ? -8 : 0,
                        scale: hovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                    <div className={hovered ? 'text-[#339a99]' : 'text-[#0d3d3d]'}>
                        {icon}
                    </div>
                </motion.div>

                <motion.h3
                    className={`
            relative mb-3 text-[20px] font-bold tracking-[-0.3px]
            font-['Syne',sans-serif]
            ${hovered ? 'text-white' : 'text-[#0d3d3d]'}
          `}
                    animate={{ x: hovered ? 4 : 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                    {title}
                </motion.h3>

                <p
                    className={`
            relative text-[15px] leading-[1.65] font-['DM_Sans',sans-serif]
            ${hovered ? 'text-[rgba(255,255,255,0.72)]' : 'text-[#667085]'}
          `}
                >
                    {desc}
                </p>

                <motion.div
                    className="relative mt-6 flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.3px] text-[#339a99] font-['DM_Sans',sans-serif]"
                    animate={{ x: hovered ? 6 : 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                    <span>Learn More</span>
                    <motion.div
                        animate={{ x: hovered ? 4 : 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                        <ArrowRight size={14} />
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.section
            id="services"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="bg-[#f8fafc] py-[100px]"
        >
            <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
                <motion.div
                    variants={headerVariants}
                    className="mb-16 text-center"
                >
                    <div className="mb-3 font-mono text-[11px] tracking-[3px] text-[#339a99]">
                        OUR SERVICES
                    </div>

                    <h2 className="font-['Syne',sans-serif] text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.5px] text-[#0d3d3d]">
                        Integrated Technology Solutions
                    </h2>

                    <p className="mx-auto mt-4 max-w-[520px] font-['DM_Sans',sans-serif] text-[17px] text-[#667085]">
                        From design to deployment and ongoing support — we deliver secure, scalable systems
                        for industries, governments, enterprises, and smart communities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
                    {services.map((s) => (
                        <Link key={s.title} href={s.href}>
                            <ServiceCard {...s} inView={inView} />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
