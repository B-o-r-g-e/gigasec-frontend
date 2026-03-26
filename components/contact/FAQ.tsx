'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {B} from "@/colors/Colors";
import FAQItem from "@/components/contact/FAQItem";
import {spaceMono, syne} from "@/app/ui/fonts";

export default function FAQ() {
    const [ref, vis] = useInView(0.1);
    const [open, setOpen] = useState<number | null>(null);
    const faqs = [
        {
            q: "How quickly can you respond to a new enquiry?",
            a: "We aim to respond to all enquiries within 24 hours on business days. For urgent requests, call our main line directly and we'll fast-track your case."
        },
        {
            q: "Do you offer free site surveys?",
            a: "Yes — we offer free site surveys for qualified projects. This includes an initial site visit, risk assessment, and a no-obligation preliminary design proposal."
        },
        {
            q: "Do you work outside Lagos?",
            a: "Yes. We operate across Nigeria from our Lagos HQ, Abuja, and Port Harcourt offices, and have experience on projects across West Africa."
        },
        {
            q: "Can you handle both design and installation?",
            a: "Absolutely. We provide end-to-end services from initial survey and system design through procurement, installation, commissioning, and ongoing maintenance."
        },
        {
            q: "What industries do you specialise in?",
            a: "Our core sectors are banking & finance, oil & gas, government, education, healthcare, retail, and manufacturing. We also serve residential estates and mixed-use developments."
        },
    ];

    return (
        <section
            ref={ref}
            className="py-[100px] bg-white"
        >
            <div className="max-w-[800px] mx-auto px-10">

                {/* Header */}
                <div
                    className="text-center mb-14 transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateY(-30px)",
                    }}
                >
                    <div
                        className={`${spaceMono.className} text-[11px] tracking-[3px] mb-3`}
                        style={{
                            color: B.electric,
                        }}
                    >
                        COMMON QUESTIONS
                    </div>

                    <h2
                        className={`${syne.className} font-extrabold text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-[-0.5px]`}
                        style={{
                            color: B.navy,
                        }}
                    >
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-3">
                    {faqs.map((f, i) => (
                        <FAQItem
                            key={f.q}
                            {...f}
                            i={i}
                            vis={vis}
                            open={open === i}
                            onToggle={() => setOpen(open === i ? null : i)}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
