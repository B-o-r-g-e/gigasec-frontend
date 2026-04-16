'use client'

import { motion } from 'framer-motion'
import { B } from '@/theme/Colors'
import { syne, spaceMono } from '@/theme/fonts'

const oemPartners = [
    { name: "ACCEL INSTRUMENTS", color: "#003399" },
    { name: "AFRIIPOWER", color: "#008000" },
    { name: "ALPHA TECHNOLOGIES", color: "#CC0000" },
    { name: "ANVIZ", color: "#000000" },
    { name: "ASSETLINK", color: "#006666" },
    { name: "AUS GLOBAL", color: "#FF9900" },
    { name: "CANADIAN SOLAR", color: "#CC3300" },
    { name: "AIRLIVE", color: "#0033CC" },
    { name: "APTONOMY", color: "#333333" },
    { name: "BARTEC", color: "#FF6600" },
    { name: "BATLV", color: "#000000" },
    { name: "CASS PARKING", color: "#990000" },
    { name: "FST", color: "#003366" },
    { name: "CIPIA", color: "#0066FF" },
    { name: "COGNITE", color: "#330099" },
    { name: "DIBVISION", color: "#009933" },
    { name: "ESCENE", color: "#003399" },
    { name: "FLIR", color: "#003366" },
    { name: "FORTINET", color: "#EE0000" },
    { name: "GALILEOSKY", color: "#003399" },
    { name: "HIKVISION", color: "#EE0000" },
    { name: "HIPERDIST", color: "#FF9900" },
    { name: "HOWEN", color: "#003399" },
    { name: "FOUR-FAITH", color: "#003366" },
    { name: "GALLAGHER", color: "#CC3300" },
    { name: "GRANDSTREAM", color: "#003399" },
    { name: "GUYISA", color: "#333333" },
]

export default function OEMPartners() {
    // Duplicate for seamless loop
    const duplicatedPartners = [...oemPartners, ...oemPartners]

    return (
        <section className="py-20 overflow-hidden bg-white">
            <div className="max-w-[1280px] mx-auto px-6 sm:px-10 mb-12 text-center">
                <div
                    className={`${spaceMono.className} text-[11px] tracking-[3px] mb-4`}
                    style={{ color: B.electric }}
                >
                    GLOBAL ALLIANCES
                </div>
                <h2 className={`${syne.className} font-extrabold text-[clamp(1.5rem,5vw,2.5rem)] text-slate-900`}>
                    Our OEM Partners
                </h2>
                <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
                    Collaborating with world-class technology leaders to deliver cutting-edge security and industrial solutions.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="flex items-center justify-center px-8 py-4 mx-4 min-w-[180px] sm:min-w-[220px] h-20 sm:h-24 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-200 transition-colors group"
                        >
                            <span 
                                className={`${syne.className} font-bold text-sm sm:text-base tracking-tight text-center transition-all group-hover:scale-105`}
                                style={{ color: partner.color }}
                            >
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Second row moving opposite */}
            <div className="relative flex overflow-x-hidden mt-8">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: [-1920, 0],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        },
                    }}
                >
                    {[...duplicatedPartners].reverse().map((partner, index) => (
                        <div
                            key={`${partner.name}-rev-${index}`}
                            className="flex items-center justify-center px-8 py-4 mx-4 min-w-[180px] sm:min-w-[220px] h-20 sm:h-24 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-200 transition-colors group"
                        >
                            <span 
                                className={`${syne.className} font-bold text-sm sm:text-base tracking-tight text-center transition-all group-hover:scale-105`}
                                style={{ color: partner.color }}
                            >
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
