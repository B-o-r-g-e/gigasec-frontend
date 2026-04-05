'use client'
import {CSSProperties, RefObject, useState} from "react";
import {B} from "@/theme/Colors";
import {Icon} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {AUTHORS} from "@/app/(marketing)/blog/components/blogs";

type postStype = {
    id: number;
    cat: string;
    title: string;
    excerpt: string;
    authorId: number;
    date: string;
    read: string;
    featured: boolean;
    tags: string[];
}

export function FeaturedCardBig({vis, post, delay}: {
    vis: boolean | RefObject<null>,
    post: postStype,
    delay?: number
}) {
    const [hov, setHov] = useState(false);
    const author = AUTHORS.find((entry) => entry.id === post.authorId);

    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className={`rounded-[20px] overflow-hidden cursor-pointer
            transition-all duration-[400ms]
            ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[60px]"}
            ${hov && vis ? "-translate-y-[8px]" : ""}
        `}
            style={{
                background: hov ? B.navy : "#fff",
                border: `1.5px solid ${hov ? B.electric : B.lightgray}`,
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                transitionDelay: `${delay}ms`,
                boxShadow: hov
                    ? "0 32px 64px rgba(13,61,61,0.2)"
                    : "0 4px 16px rgba(0,0,0,0.05)"
            }}
        >
            {/* Image */}
            <div
                className="h-[240px] relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg,${B.navy},${B.electric})`
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(51,154,153,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(51,154,153,0.1) 1px,transparent 1px)`,
                        backgroundSize: "32px 32px"
                    }}
                />

                <div
                    className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle,rgba(51,154,153,0.25),transparent 65%)"
                    }}
                />

                <div
                    className={`${spaceMono.className} absolute top-[20px] left-[20px] px-[14px] py-[5px] rounded-full text-[10px] tracking-[1.5px]`}
                    style={{
                        background: "rgba(51,154,153,0.9)",
                        color: "#fff"
                    }}
                >
                    {post.cat}
                </div>
            </div>

            {/* Content */}
            <div className="p-8">
                <h3
                    className={`${syne.className} font-bold text-[1.3rem] leading-[1.35] mb-[14px] tracking-[-0.3px] transition-colors duration-300`}
                    style={{
                        color: hov ? "#fff" : B.navy
                    }}
                >
                    {post.title}
                </h3>

                <p
                    className={`${dMSans.className} text-[14px] leading-[1.7] mb-6`}
                    style={{
                        color: hov ? "rgba(255,255,255,0.65)" : B.gray
                    }}
                >
                    {post.excerpt}
                </p>

                <div className="flex justify-between items-center">
                    <div>
                        <div
                            className={`${dMSans.className} text-[13px] font-semibold`}
                            style={{
                                color: hov ? "#fff" : B.charcoal
                            }}
                        >
                            {author?.name ?? "Unknown Author"}
                        </div>

                        <div
                            className={`${dMSans.className} flex items-center gap-[6px] text-[12px] mt-[2px]`}
                            style={{
                                color: hov
                                    ? "rgba(255,255,255,0.5)"
                                    : B.gray
                            }}
                        >
                            {post.date} ·
                            <Icon name="clock" size={12} color={B.electric}/>
                            {post.read} read
                        </div>
                    </div>

                    <div
                        className={`${dMSans.className} flex items-center gap-[6px] text-[13px] font-semibold
                          transition-transform duration-300
                          ${hov ? "translate-x-[4px]" : ""}
                    `}
                        style={{
                            color: B.electric
                        }}
                    >
                        Read <Icon name="arrow" size={14} color={B.electric}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function FeaturedCardSmall({delay, vis, post}: { delay: number, vis: boolean, post: postStype }) {
    const [hov, setHov] = useState(false);
    return (
        <div
            className={`group flex rounded-[16px] overflow-hidden cursor-pointer
    transition-all duration-[400ms]
    ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[60px]"}
    hover:translate-x-[6px]
  `}
            style={{
                background: "#fff",
                border: `1.5px solid ${B.lightgray}`,
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                transitionDelay: `${delay}ms`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
            onMouseEnter={e => {
                e.currentTarget.style.background = B.navy;
                e.currentTarget.style.border = `1.5px solid ${B.electric}`;
                e.currentTarget.style.boxShadow =
                    "0 20px 48px rgba(13,61,61,0.18)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.border = `1.5px solid ${B.lightgray}`;
                e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.05)";
            }}
        >
            {/* Accent bar */}
            <div
                className="w-[8px] flex-shrink-0 origin-top transition-transform duration-300
               scale-y-[0.3] group-hover:scale-y-100"
                style={{
                    background: `linear-gradient(to bottom,${B.electric},${B.bright})`
                }}
            />

            {/* Content */}
            <div className="flex-1 px-[24px] py-[24px] pl-[20px]">

    <span
        className={`${spaceMono.className} text-[9px] tracking-[2px] px-[10px] py-[3px] rounded-full
            group-hover:text-[color:var(--bright)]`}
        style={{
            color: B.electric,
            background: "rgba(51,154,153,0.08)"
        }}
        onMouseEnter={e => {
            e.currentTarget.style.color = B.bright;
            e.currentTarget.style.background =
                "rgba(51,154,153,0.15)";
        }}
        onMouseLeave={e => {
            e.currentTarget.style.color = B.electric;
            e.currentTarget.style.background =
                "rgba(51,154,153,0.08)";
        }}
    >
      {post.cat}
    </span>

                <h3
                    className={`${syne.className} font-bold text-[1rem] leading-[1.4] my-[12px] mb-[8px]
                        tracking-[-0.2px] transition-colors duration-300
                        text-[color:var(--navy)]
                        group-hover:text-white`}
                    style={{
                        "--navy": B.navy
                    } as CSSProperties}
                >
                    {post.title}
                </h3>

                <div
                    className={`${dMSans.className} flex items-center gap-1.5 text-[12px]
                        text-[color:var(--gray)]
                        group-hover:text-white/50`}
                    style={{
                        "--gray": B.gray
                    } as CSSProperties}
                >
                    <Icon name="clock" size={12} color={B.electric}/>
                    {post.read} read · {post.date}
                </div>
            </div>
        </div>
    )
}
