'use client'
import {useInView} from "@/hooks/useInView";
import {dMSans, syne} from "@/theme/fonts";
import {B} from "@/theme/Colors";

type ArticleSectionProps = {
    section: {
        heading: string;
        body: string;
    };
    i: number;
    vis?: boolean;
    sectionId: string;
};

export default function ArticleSection({section, i, vis, sectionId}: ArticleSectionProps) {
    const [ref, inView] = useInView<HTMLDivElement>(0.15);
    return (
        <div id={sectionId} ref={ref} className="mb-12 transition-all duration-700"
             style={{
                 opacity: inView ? 1 : 0,
                 transform: inView ? "none" : "translateY(30px)",
                 transitionDelay: `${i * 60}ms`
             }}>
            <h2 className={`${syne.className} mb-5`} style={{
                fontWeight: 800,
                fontSize: "clamp(1.3rem,2.5vw,1.7rem)",
                color: B.navy,
                letterSpacing: -0.3,
                lineHeight: 1.25
            }}>
                {section.heading}
            </h2>
            {section.body.split("\n\n").map((para, pi) => (
                <p key={pi} className={`${dMSans.className} mb-5`}
                   style={{fontSize: 16, lineHeight: 1.85, color: B.charcoal}}>
                    {para}
                </p>
            ))}
        </div>
    );
}
