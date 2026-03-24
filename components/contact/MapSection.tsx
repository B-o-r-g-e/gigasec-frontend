'use client'
import { useInView } from "@/hooks/useInView";
import { B } from "@/colors/Colors";

export default function MapSection() {
    const [ref, vis] = useInView(0.1);

    return (
        <section ref={ref} className="pb-[100px]" style={{ background: B.offwhite }}>
            <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
                <div
                    style={{
                        borderRadius: 24,
                        overflow: "hidden",
                        boxShadow: "0 8px 48px rgba(0,0,0,0.1)",
                        opacity: vis ? 1 : 0,
                        transform: vis ? "scale(1)" : "scale(0.97)",
                        transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
                    }}
                >
                    <div
                        className="relative h-[360px] sm:h-[420px]"
                        style={{ background: B.navyDark }}
                    >
                        <iframe
                            title="Gigasec coverage map"
                            className="absolute inset-0 w-full h-full"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=2.6%2C4.0%2C14.7%2C13.9&amp;layer=mapnik&amp;marker=6.5244%2C3.3792"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(6,30,30,0.2) 0%, rgba(6,30,30,0.4) 100%)",
                            }}
                        />
                        <div
                            className="absolute bottom-4 right-5 pointer-events-none"
                            style={{
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: 12,
                                color: "rgba(255,255,255,0.65)",
                                letterSpacing: 2,
                            }}
                        >
                            NIGERIA COVERAGE MAP
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
