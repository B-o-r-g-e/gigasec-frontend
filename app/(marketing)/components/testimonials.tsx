"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {Quote, Star} from "lucide-react";

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.2, once: true });

    const testimonials = [
        {
            quote:
                "Gigasec transformed our security infrastructure across all our Lagos branches. Their team's professionalism and technical depth is unmatched in Nigeria.",
            name: "Adaora Okonkwo",
            role: "Head of Security, First Continental Bank",
            rating: 5,
        },
        {
            quote:
                "The fiber optic backbone Gigasec deployed for our offshore facility has performed flawlessly for over two years. Exceptional engineering and project management.",
            name: "Emeka Nwachukwu",
            role: "VP Operations, Chevron Nigeria",
            rating: 5,
        },
        {
            quote:
                "From survey to commissioning, the Gigasec team was thorough, on schedule, and delivered exactly what was specified. We won't use anyone else.",
            name: "Funmilayo Adeyemi",
            role: "Facilities Director, Shoprite Group Nigeria",
            rating: 5,
        },
    ];

    useEffect(() => {
        const t = setInterval(() => {
            setActive((a) => (a + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(t);
    }, [testimonials.length]);

    const t = testimonials[active];

    return (
        <section
            ref={ref}
    className="relative overflow-hidden bg-[linear-gradient(135deg,#000d1a,#333333)] py-[100px]"
    >
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,153,204,0.08)_0%,transparent_70%)]" />

    <div className="relative mx-auto max-w-[900px] px-8 text-center">
    <div
        className={`mb-12 font-['Space_Mono',monospace] text-[11px] tracking-[3px] text-[#00CCCC] transition-all duration-500 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`}
>
    CLIENT VOICES
    </div>

    <div
    className={`transition-all duration-500 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`}
    style={{ transitionDelay: "200ms" }}
>
    <div className="mb-8 flex justify-center gap-1">
        {Array(t.rating)
.fill(0)
        .map((_, i) => (
            <Star key={i} size={18} color="#FFB800" />
))}
    </div>

    <div className="relative mb-10">
    <div className="absolute left-1/2 top-[-20px] -translate-x-1/2 opacity-20">
        <Quote size={48} color="#00CCCC" />
        </div>

        <p
    key={active}
    className="animate-[fadeUp_0.5s_ease] font-['DM_Sans',sans-serif] text-[clamp(1.1rem,2.5vw,1.4rem)] italic leading-[1.7] text-white/90"
    >
    {t.quote}
    </p>
    </div>

    <div>
    <div className="font-['Syne',sans-serif] text-[16px] font-bold text-white">
        {t.name}
        </div>
        <div className="mt-1 font-['DM_Sans',sans-serif] text-[14px] text-[#00CCCC]">
        {t.role}
        </div>
        </div>
        </div>

        <div className="mt-12 flex justify-center gap-2.5">
        {testimonials.map((_, i) => (
                <button
                    key={i}
            onClick={() => setActive(i)}
    className={`h-2 rounded-[4px] border-none p-0 transition-all duration-300 ${
        i === active
            ? "w-7 bg-[#00CCCC]"
            : "w-2 bg-white/20"
    }`}
    />
))}
    </div>
    </div>
    </section>
);
}

