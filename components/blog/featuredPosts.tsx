'use client'
import {useInView} from "@/hooks/useInView";
import {POSTS} from "@/components/blog/blogs";
import {B} from "@/colors/Colors";
import {FeaturedCardBig, FeaturedCardSmall} from "@/components/blog/blogCards";

export default function FeaturedPosts() {
    const [ref, vis] = useInView(0.08);
    const featured = POSTS.filter(p => p.featured);

    return (
        <section
            ref={ref}
            className="py-16 sm:py-20"
            style={{ background: B.offwhite }}
        >
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[2.5rem]">

                {/* Header */}
                <div
                    className={`flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-10 sm:mb-12 transition-all duration-700 ease
        ${vis ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[20px]"}
      `}
                >
                    <div>
                        <div
                            className="text-[11px] tracking-[3px] mb-[10px]"
                            style={{
                                fontFamily: "'Space Mono', monospace",
                                color: B.electric
                            }}
                        >
                            EDITOR&#39;S PICKS
                        </div>

                        <h2
                            className="font-extrabold tracking-[-0.5px]
                     text-[clamp(1.8rem,3.5vw,2.6rem)]"
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                color: B.navy
                            }}
                        >
                            Featured Articles
                        </h2>
                    </div>
                </div>

                {/* Featured layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">

                    {/* Big featured */}
                    <FeaturedCardBig post={featured[0]} vis={vis} delay={0} />

                    {/* Two side cards */}
                    <div className="flex flex-col gap-6">
                        {featured.slice(1, 3).map((p, i) => (
                            <FeaturedCardSmall
                                key={p.id}
                                post={p}
                                vis={vis}
                                delay={(i + 1) * 120}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
