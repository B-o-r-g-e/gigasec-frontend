'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {CATEGORIES, POSTS} from "@/components/blog/blogs";
import {B} from "@/colors/Colors";
import PostCard from "@/components/blog/PostCard";
import {dMSans} from "@/app/ui/fonts";

type AllPostsProps = {
    query: string;
};

export default function AllPosts({query}: AllPostsProps) {
    const [ref, vis] = useInView(0.05);
    const [cat, setCat] = useState("All Topics");
    const normalizedQuery = query.trim().toLowerCase();
    const byCategory = cat === "All Topics" ? POSTS : POSTS.filter(p => p.cat === cat);
    const filtered = normalizedQuery
        ? byCategory.filter(p => {
            const haystack = [
                p.title,
                p.excerpt,
                p.author,
                p.cat,
                ...p.tags
            ]
                .join(" ")
                .toLowerCase();
            return haystack.includes(normalizedQuery);
        })
        : byCategory;

    return (
        <section
            ref={ref}
            className="py-16 sm:py-[80px] pb-20 sm:pb-[120px]"
            style={{ background: "#fff" }}
        >
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[2.5rem]">

                {/* Category tabs */}
                <div
                    className={`flex flex-wrap gap-2.5 mb-10 sm:mb-14 pb-5 border-b-2 transition-all duration-700 ease
                                ${vis ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[20px]"}
                              `}
                    style={{ borderColor: B.lightgray }}
                >
                    {CATEGORIES.map((c, i) => (
                        <button
                            key={c}
                            onClick={() => setCat(c)}
                            className={`${dMSans.className} text-[13px] sm:text-[14px] px-[14px] sm:px-[18px] py-[7px] sm:py-[8px] rounded-[8px] border-none cursor-pointer
                                        transition-all duration-300
                                        ${cat === c ? "font-bold scale-[1.05] shadow-[0_4px_16px_rgba(51,154,153,0.35)]" : "font-medium scale-100"}
                                      `}
                            style={{
                                background: cat === c ? B.electric : "transparent",
                                color: cat === c ? "#fff" : B.gray,
                                opacity: vis ? 1 : 0,
                                transitionDelay: `${i * 50}ms`,
                                transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)"
                            }}
                            onMouseEnter={e => {
                                if (cat !== c) {
                                    e.currentTarget.style.background = B.offwhite;
                                    e.currentTarget.style.color = B.navy;
                                }
                            }}
                            onMouseLeave={e => {
                                if (cat !== c) {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = B.gray;
                                }
                            }}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div
                    className="grid gap-6"
                    style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}
                >
                    {filtered.map((p, i) => (
                        <PostCard key={p.id} post={p} i={i} vis={vis} />
                    ))}
                </div>

            </div>
        </section>
    )
}
