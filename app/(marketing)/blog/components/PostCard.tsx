import {CSSProperties, RefObject, useState} from "react";
import {B} from "@/theme/Colors";
import {Icon} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {AUTHORS} from "@/app/(marketing)/blog/components/blogs";

type postStype = {
    id: number;
    slug: string;
    cat: string;
    title: string;
    excerpt: string;
    authorId: number;
    date: string;
    read: string;
    featured: boolean;
    tags: string[];
}
export default function PostCard({post, i, vis}: { vis: boolean | RefObject<null>, post: postStype, i: number }) {
    // const [hov, setHov] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const author = AUTHORS.find((entry) => entry.id === post.authorId);

    return (
        <div
            className={`group relative cursor-pointer rounded-[16px] p-[28px]
    transition-all duration-400
    ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"}
  `}
            style={{
                background: B.offwhite,
                border: `1.5px solid transparent`,
                boxShadow: "none",
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                transform: vis
                    ? "translateY(0)"
                    : "translateY(40px)",
                transitionDelay: `${i * 70}ms`,
            }}
            onMouseEnter={e => {
                e.currentTarget.style.background = B.navy;
                e.currentTarget.style.border = `1.5px solid ${B.electric}`;
                e.currentTarget.style.boxShadow = "0 24px 48px rgba(13,61,61,0.18)";
                e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = B.offwhite;
                e.currentTarget.style.border = "1.5px solid transparent";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            {/* Bookmark */}
            <button
                onClick={e => {
                    e.stopPropagation();
                    setBookmarked(b => !b);
                }}
                className="absolute top-5 right-5 bg-transparent border-none cursor-pointer transition-transform duration-300
                [--bookmark-color:var(--bookmark-base)] group-hover:[--bookmark-color:rgba(255,255,255,0.45)]"
                style={{
                    transform: bookmarked ? "scale(1.2)" : "scale(1)",
                    "--bookmark-base": B.lightgray
                } as CSSProperties}
            >
                <Icon
                    name="bookmark"
                    size={18}
                    color={bookmarked ? B.electric : "var(--bookmark-color)"}
                />
            </button>

            {/* Category & read */}
            <div className="flex items-center gap-2.5 mb-4">
    <span
        className={`${spaceMono.className} text-[9px] tracking-[2px] px-[10px] py-[3px] rounded-full`}
        style={{
            color: B.electric,
            background: "rgba(51,154,153,0.1)"
        }}
    >
      {post.cat}
    </span>
                <span
                    className={`${dMSans.className} flex items-center gap-1.5 text-[12px]
                        text-(--meta-color) group-hover:text-white/60`}
                    style={{
                        "--meta-color": B.gray
                    } as CSSProperties}
                >
      <Icon name="clock" size={12} color={B.electric}/> {post.read}
    </span>
            </div>

            {/* Title & excerpt */}
            <h3
                className={`${syne.className} text-[1.05rem] font-bold leading-[1.4] mb-3 tracking-[-0.2px] transition-colors duration-300
                    text-[color:var(--title-color)] group-hover:text-white`}
                style={{"--title-color": B.navy} as CSSProperties}
            >
                {post.title}
            </h3>
            <p
                className={`${dMSans.className} text-[13px] leading-[1.65] mb-5 transition-colors duration-300
                    text-[color:var(--excerpt-color)] group-hover:text-white/60`}
                style={{"--excerpt-color": B.gray} as CSSProperties}
            >
                {post.excerpt.slice(0, 110)}...
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.map(t => (
                    <span
                        key={t}
                        className={`${dMSans.className} text-[11px] px-2.5 py-0.75 rounded-full border transition-all duration-300
                            text-(--tag-color) bg-(--tag-bg) border-(--tag-border)
                            group-hover:text-white/70 group-hover:bg-[rgba(255,255,255,0.08)] group-hover:border-[rgba(255,255,255,0.2)]`}
                        style={{
                            "--tag-color": B.gray,
                            "--tag-bg": "#fff",
                            "--tag-border": B.lightgray
                        } as CSSProperties}
                    >
        {t}
      </span>
                ))}
            </div>

            {/* Footer */}
            <div
                className="flex justify-between items-center pt-4 border-t"
                style={{borderColor: B.lightgray}}
            >
                <div>
                    <div className={`${dMSans.className} text-[12px] font-semibold transition-colors duration-300
                        text-[color:var(--author-color)] group-hover:text-white`}
                         style={{"--author-color": B.charcoal} as CSSProperties}>
                        {author?.name ?? "Unknown Author"}
                    </div>
                    <div className={`${dMSans.className} text-[11px] transition-colors duration-300
                        text-[color:var(--date-color)] group-hover:text-white/50`}
                         style={{
                             "--date-color": B.gray,
                             marginTop: "2px"
                         } as CSSProperties}>
                        {post.date}
                    </div>
                </div>
                <div className={`${dMSans.className} flex items-center gap-1.5 text-[12px] font-semibold transition-colors duration-300
                    text-[color:var(--read-color)] group-hover:text-white`}
                     style={{"--read-color": B.electric} as CSSProperties}>
                    Read <Icon name="arrow" size={13} color="var(--read-color)"/>
                </div>
            </div>
        </div>
    )
}
