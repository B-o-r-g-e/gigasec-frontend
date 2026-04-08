'use client'
import ArticleSection from "@/app/(marketing)/blog/[slug]/components/ArticleSection";
import {useEffect, useState} from "react";
import {useInView} from "@/hooks/useInView";
import {B} from "@/theme/Colors";
import {Icon, IconName} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";

type BlogSection = {
    heading: string;
    body: string;
};

type BlogSectionWithId = BlogSection & {
    id: string;
};

type BlogType = {
    sections: BlogSection[];
    tags: string[];
};

type AuthorType = {
    name: string;
    postion: string;
};

type EachBlogBodyProps = {
    blog: BlogType;
    avatar?: string;
    author?: AuthorType;
    iDSection: BlogSectionWithId[];
};

const SHARE_OPTIONS: { icon: IconName; label: string }[] = [
    {icon: "linkedin", label: "Share"},
    {icon: "twitter", label: "Tweet"}
];

export default function EachBlogBody({blog, avatar, author, iDSection}: EachBlogBodyProps) {
    const [ref, vis] = useInView(0.05);
    const [activeSection, setActiveSection] = useState("");
    const [bookmarked, setBookmarked] = useState(false);
    const [hov, setHov] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    console.log(entry);
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                        console.log(entry)
                    }
                })
            },
            {rootMargin: "-50% 0% -50% 0%"}
        )
        iDSection.forEach(sec => {
            const el = document.getElementById(sec.id)
            if (el) observer.observe(el);
        })

        return() => observer.disconnect()
    }, [iDSection]);

    return (
        <section ref={ref} className="py-16 sm:py-20" style={{background: B.offwhite}}>
            <div className="max-w-7xl mx-auto px-5 sm:px-10">
                <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_320px]">

                    {/* Article content */}
                    <article className="transition-all duration-700"
                             style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(30px)"}}>
                        {iDSection.map((section, i) => (
                            <ArticleSection key={section.id} sectionId={section.id}
                                            section={section} i={i} vis={vis}/>
                        ))}

                        {/* Tags */}
                        <div className="mt-12 pt-8" style={{borderTop: `1px solid ${B.lightgray}`}}>
                            <div className={`${spaceMono.className}`}
                                 style={{
                                     fontSize: 10,
                                     color: B.gray,
                                     letterSpacing: 2,
                                     marginBottom: 14
                                 }}>TAGGED
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {blog.tags.map(tag => {
                                    return (
                                        <span key={tag} onMouseEnter={() => setHov(true)}
                                              onMouseLeave={() => setHov(false)}
                                              className={`${dMSans.className} px-4 py-2 rounded-full cursor-pointer transition-all duration-200`}
                                              style={{
                                                  fontSize: 13,
                                                  fontWeight: 500,
                                                  background: hov ? B.navy : "#fff",
                                                  color: hov ? "#fff" : B.charcoal,
                                                  border: `1.5px solid ${hov ? B.electric : B.lightgray}`,
                                                  transform: hov ? "translateY(-2px)" : "none"
                                              }}>
                                            #{tag}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Author card */}
                        <div className="mt-12 p-6 sm:p-8 rounded-[20px]"
                             style={{background: B.navy, border: `1.5px solid ${B.electric}30`}}>
                            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                                     style={{background: "linear-gradient(135deg,#00CCCC,#00b8b8)"}}>
                                    <span className={`${syne.className}`}
                                          style={{
                                              fontWeight: 800,
                                              fontSize: 18,
                                              color: "#fff"
                                          }}>{avatar}</span>
                                </div>
                                <div>
                                    <div className={`${spaceMono.className}`}
                                         style={{
                                             fontSize: 10,
                                             color: B.electric,
                                             letterSpacing: 2,
                                             marginBottom: 6
                                         }}>ABOUT THE AUTHOR
                                    </div>
                                    <div className={`${syne.className}`}
                                         style={{
                                             fontWeight: 700,
                                             fontSize: 18,
                                             color: "#fff",
                                             marginBottom: 4
                                         }}>{author?.name}</div>
                                    <div className={`${dMSans.className}`}
                                         style={{
                                             fontSize: 13,
                                             color: "rgba(255,255,255,0.55)",
                                             marginBottom: 12
                                         }}>{author?.postion}, Gigasec Services
                                    </div>
                                    <p className={`${dMSans.className}`}
                                       style={{
                                           fontSize: 14,
                                           lineHeight: 1.7,
                                           color: "rgba(255,255,255,0.7)"
                                       }}>
                                        {author?.name} leads Gigasec&#39;s security engineering practice, with 16 years
                                        of
                                        experience deploying surveillance systems across banking, oil & gas, and
                                        government sectors in Nigeria and West Africa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="transition-all duration-700" style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(30px)",
                        transitionDelay: "200ms"
                    }}>
                        <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:w-[320px]">
                            {/* TOC */}
                            <div className={`${spaceMono.className} bg-white rounded-[20px] p-6 hidden lg:block`}
                                 style={{border: `1.5px solid ${B.lightgray}`}}>
                                <div style={{
                                    fontSize: 10,
                                    color: B.electric,
                                    letterSpacing: 2,
                                    marginBottom: 16
                                }}>IN THIS ARTICLE
                                </div>
                                <nav className="flex flex-col gap-1">
                                    {iDSection.map((section, i) => (
                                        <button key={section.id}
                                                className={`${dMSans.className} text-left px-3 py-2 rounded-lg border-none cursor-pointer transition-all duration-200`}
                                                style={{
                                                    fontSize: 13,
                                                    background: activeSection === section.id ? "rgba(51,154,153,0.1)" : "transparent",
                                                    color: activeSection === section.id ? B.electric : B.gray,
                                                    fontWeight: activeSection === section.id ? 600 : 400,
                                                    borderLeft: `2px solid ${activeSection === section.id ? B.electric : "transparent"}`
                                                }}>
                                            <a href={`#${section.id}`}>
                                                {section.heading}
                                            </a>
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Bookmark + Share */}
                            <div className="bg-white rounded-[20px] p-6" style={{border: `1.5px solid ${B.lightgray}`}}>
                                <button onClick={() => setBookmarked(b => !b)}
                                        className={`${dMSans.className} flex items-center gap-3 w-full px-4 py-3 rounded-xl border-none cursor-pointer mb-3 transition-all duration-300`}
                                        style={{
                                            fontWeight: 600,
                                            fontSize: 14,
                                            background: bookmarked ? "rgba(51,154,153,0.1)" : B.offwhite,
                                            color: bookmarked ? B.electric : B.charcoal,
                                            border: `1.5px solid ${bookmarked ? B.electric : B.lightgray}`,
                                            transform: bookmarked ? "scale(1.02)" : "scale(1)"
                                        }}>
                                    <Icon name="bookmark" size={18} color={bookmarked ? B.electric : B.gray}/>
                                    {bookmarked ? "Bookmarked!" : "Bookmark Article"}
                                </button>
                                <div className="flex gap-2">
                                    {SHARE_OPTIONS.map(s => (
                                        <button key={s.label}
                                                className={`${dMSans.className} flex-1 flex items-center justify-center gap-2 py-[10px] rounded-xl border-none cursor-pointer transition-all duration-200`}
                                                style={{
                                                    fontWeight: 600,
                                                    fontSize: 13,
                                                    background: B.offwhite,
                                                    color: B.gray,
                                                    border: `1.5px solid ${B.lightgray}`
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.background = "rgba(51,154,153,0.08)";
                                                    e.currentTarget.style.color = B.electric;
                                                    e.currentTarget.style.borderColor = B.electric;
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.background = B.offwhite;
                                                    e.currentTarget.style.color = B.gray;
                                                    e.currentTarget.style.borderColor = B.lightgray;
                                                }}>
                                            <Icon name={s.icon} size={15} color="currentColor"/> {s.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA card */}
                            <div className="rounded-[20px] p-6" style={{
                                background: "linear-gradient(135deg,#333333,#4d4d4d)",
                                border: "1px solid rgba(51,154,153,0.3)"
                            }}>
                                <div className={`${spaceMono.className}`}
                                     style={{
                                         fontSize: 10,
                                         color: B.electric,
                                         letterSpacing: 2,
                                         marginBottom: 12
                                     }}>NEED A CCTV SYSTEM?
                                </div>
                                <p className={`${dMSans.className}`}
                                   style={{
                                       fontSize: 14,
                                       color: "rgba(255,255,255,0.75)",
                                       lineHeight: 1.65,
                                       marginBottom: 16
                                   }}>
                                    Talk to our engineers about a custom solution for your warehouse or facility.
                                </p>
                                <a href="#"
                                   className={`${dMSans.className} flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-white no-underline transition-all duration-300`}
                                   style={{
                                       fontWeight: 700,
                                       fontSize: 14,
                                       background: B.electric,
                                       boxShadow: "0 4px 16px rgba(51,154,153,0.4)"
                                   }}
                                   onMouseEnter={e => {
                                       e.currentTarget.style.transform = "translateY(-2px)";
                                       e.currentTarget.style.boxShadow = "0 8px 24px rgba(51,154,153,0.55)";
                                   }}
                                   onMouseLeave={e => {
                                       e.currentTarget.style.transform = "none";
                                       e.currentTarget.style.boxShadow = "0 4px 16px rgba(51,154,153,0.4)";
                                   }}>
                                    Get a Free Quote <Icon name="arrow" size={15} color="#fff"/>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
