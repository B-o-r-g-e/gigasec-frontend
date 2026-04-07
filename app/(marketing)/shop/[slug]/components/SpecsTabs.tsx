'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import type {IconName} from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, syne} from "@/theme/fonts";
import type {Product} from "@/app/(marketing)/shop/components/products";

type SpecsTabsProps = {
    currentProduct: Product;
};

export default function SpecsTabs({currentProduct}: SpecsTabsProps) {
    const [ref, vis] = useInView(0.05);
    const [activeTab, setActiveTab] = useState("specs");
    const tabs = ["specs", "reviews", "delivery"];

    return (
        <section ref={ref} className="py-16 sm:py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
                {/* Tab bar */}
                <div className="flex flex-wrap gap-2 mb-10 sm:mb-12 border-b pb-4 transition-all duration-700"
                     style={{
                         borderColor: B.lightgray,
                         opacity: vis ? 1 : 0,
                         transform: vis ? "none" : "translateY(-20px)"
                     }}
                >
                    {[
                        {id: "specs", label: "Technical Specifications"},
                        {id: "reviews", label: `Reviews (${currentProduct.reviews})`},
                        {id: "delivery", label: "Delivery & Warranty"},
                    ].map(t => (
                        <button key={t.id} onClick={() => setActiveTab(t.id)}
                                className={`${dMSans.className} px-6 py-3 rounded-lg border-none cursor-pointer transition-all duration-300`}
                                style={{
                                    fontWeight: activeTab === t.id ? 700 : 500,
                                    fontSize: 14,
                                    background: activeTab === t.id ? B.navy : "transparent",
                                    color: activeTab === t.id ? "#fff" : B.gray,
                                    boxShadow: activeTab === t.id ? "0 4px 16px rgba(13,61,61,0.2)" : "none"
                                }}>
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Specs */}
                {activeTab === "specs" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500" style={{opacity: vis ? 1 : 0}}>
                        {Object.entries(currentProduct.specs).map(([section, attrs], si) => (
                            <div key={section} className="rounded-[16px] overflow-hidden"
                                 style={{border: `1.5px solid ${B.lightgray}`}}>
                                <div className="px-6 py-4" style={{background: B.navy}}>
                                    <span className={`${syne.className}`}
                                          style={{
                                              fontWeight: 700,
                                              fontSize: 14,
                                              color: "#fff"
                                          }}>{section}</span>
                                </div>
                                <div className="flex flex-col">
                                    {Object.entries(attrs).map(([key, val], i) => (
                                        <div key={key} className="flex px-6 py-3"
                                             style={{
                                                 background: i % 2 === 0 ? B.offwhite : "#fff",
                                                 borderBottom: i < Object.entries(attrs).length - 1 ? `1px solid ${B.lightgray}` : "none"
                                             }}>
                                            <span className={`${dMSans.className} w-[45%]`}
                                                  style={{
                                                      fontWeight: 600,
                                                      fontSize: 13,
                                                      color: B.charcoal
                                                  }}>{key}</span>
                                            <span className={`${dMSans.className}`}
                                                  style={{fontSize: 13, color: B.gray}}>{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Reviews */}
                {activeTab === "reviews" && (
                    <div id="reviews" className="transition-all duration-500" style={{opacity: vis ? 1 : 0}}>
                        {/* Rating summary */}
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 mb-10 sm:mb-12 p-6 sm:p-8 rounded-[20px]"
                             style={{background: B.offwhite, border: `1.5px solid ${B.lightgray}`}}>
                            <div className="text-center">
                                <div className={`${syne.className}`}
                                     style={{
                                         fontWeight: 800,
                                         fontSize: "4rem",
                                         color: B.navy,
                                         lineHeight: 1,
                                         letterSpacing: -2
                                     }}>{currentProduct.rating}</div>
                                <div className="flex gap-1 justify-center my-2">
                                    {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" size={18}
                                                                    color={s <= Math.round(currentProduct.rating) ? "#FFB800" : B.lightgray}/>)}
                                </div>
                                <div className={`${dMSans.className}`}
                                     style={{fontSize: 13, color: B.gray}}>{currentProduct.reviews} verified
                                    reviews
                                </div>
                            </div>
                            {/* Bar chart */}
                            <div className="w-full flex-1 flex flex-col gap-3">
                                {[5, 4, 3, 2, 1].map(s => {
                                    const pct = s === 5 ? 70 : s === 4 ? 20 : s === 3 ? 7 : 2;
                                    return (
                                        <div key={s} className="flex items-center gap-3">
                                            <div className="flex gap-[2px] w-20 flex-shrink-0">
                                                {[1, 2, 3, 4, 5].map(i => <Icon key={i} name="star" size={11}
                                                                                color={i <= s ? "#FFB800" : B.lightgray}/>)}
                                            </div>
                                            <div className="flex-1 h-2 rounded-full overflow-hidden"
                                                 style={{background: B.lightgray}}>
                                                <div className="h-full rounded-full transition-all duration-[1200ms]"
                                                     style={{background: "#FFB800", width: vis ? `${pct}%` : "0%"}}/>
                                            </div>
                                            <span className={`${dMSans.className}`}
                                                  style={{
                                                      fontSize: 12,
                                                      color: B.gray,
                                                      width: 36,
                                                      textAlign: "right"
                                                  }}>{pct}%</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Review cards */}
                        <div className="flex flex-col gap-5">
                            {currentProduct.reviews_data.map((r, i) => (
                                <div key={r.name} className="rounded-[16px] p-6 transition-all duration-700"
                                     style={{
                                         background: "#fff",
                                         border: `1.5px solid ${B.lightgray}`,
                                         opacity: vis ? 1 : 0,
                                         transform: vis ? "none" : "translateX(-20px)",
                                         transitionDelay: `${i * 80}ms`
                                     }}>
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{background: "linear-gradient(135deg,#339a99,#0d3d3d)"}}>
                                                <span className={`${syne.className}`}
                                                      style={{
                                                          fontWeight: 800,
                                                          fontSize: 13,
                                                          color: "#fff"
                                                      }}>{r.name[0]}</span>
                                            </div>
                                            <div>
                                                <div className={`${syne.className}`}
                                                     style={{
                                                         fontWeight: 700,
                                                         fontSize: 15,
                                                         color: B.navy
                                                     }}>{r.name}</div>
                                                <div className={`${dMSans.className}`}
                                                     style={{
                                                         fontSize: 12,
                                                         color: B.gray,
                                                         marginTop: 1
                                                     }}>{r.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" size={14}
                                                                            color={s <= r.rating ? "#FFB800" : B.lightgray}/>)}
                                        </div>
                                    </div>
                                    <p className={`${dMSans.className}`}
                                       style={{
                                           fontSize: 14,
                                           lineHeight: 1.72,
                                           color: B.charcoal
                                       }}>{r.text}</p>
                                    <div className="flex items-center gap-2 mt-4">
                    <span className={`${dMSans.className} px-3 py-1 rounded-full`}
                          style={{
                              fontSize: 11,
                              fontWeight: 600,
                              background: "rgba(51,154,153,0.08)",
                              color: B.electric
                          }}>
                      ✓ Verified Purchase
                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Delivery & Warranty */}
                {activeTab === "delivery" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500" style={{opacity: vis ? 1 : 0}}>
                        {([
                            {
                                icon: "truck", title: "Delivery Information", content: [
                                    "Free delivery on all orders over ₦100,000",
                                    "Standard delivery: 3–5 business days (Lagos & Abuja)",
                                    "Express delivery: 1–2 business days — ₦7,500",
                                    "Nationwide delivery across all 36 states",
                                    "Bulk orders: contact sales for dedicated logistics",
                                ]
                            },
                            {
                                icon: "lock", title: "Warranty & Returns", content: [
                                    `${currentProduct.warranty} manufacturer warranty`,
                                    "Warranty covers manufacturing defects only",
                                    "30-day return policy for unopened items",
                                    "Technical support available for all Hikvision products",
                                    "Replacement parts available from our Lagos warehouse",
                                ]
                            },
                            {
                                icon: "zap", title: "Installation Support", content: [
                                    "Our certified engineers can install this product",
                                    "Professional installation from ₦15,000/camera",
                                    "Full system commissioning and testing included",
                                    "Request an installation quote alongside this purchase",
                                ]
                            },
                            {
                                icon: "phone", title: "Technical Support", content: [
                                    "Pre-sales technical advice: +234 (0) 1 234 5678",
                                    "Post-purchase support: support@gigasecintl.com",
                                    "Hikvision product training available on request",
                                    "Remote configuration support available",
                                ]
                            },
                        ] satisfies {icon: IconName; title: string; content: string[]}[]).map(section => (
                            <div key={section.title} className="rounded-[16px] overflow-hidden"
                                 style={{border: `1.5px solid ${B.lightgray}`}}>
                                <div className="flex items-center gap-3 px-6 py-4"
                                     style={{background: B.offwhite, borderBottom: `1px solid ${B.lightgray}`}}>
                                    <Icon name={section.icon} size={20} color={B.electric}/>
                                    <span className={`${syne.className}`}
                                          style={{
                                              fontWeight: 700,
                                              fontSize: 15,
                                              color: B.navy
                                          }}>{section.title}</span>
                                </div>
                                <div className="px-6 py-5 flex flex-col gap-3">
                                    {section.content.map(line => (
                                        <div key={line} className="flex items-start gap-3">
                                            <div
                                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]"
                                                style={{background: "rgba(51,154,153,0.1)"}}>
                                                <Icon name="check" size={11} color={B.electric}/>
                                            </div>
                                            <span className={`${dMSans.className}`}
                                                  style={{
                                                      fontSize: 14,
                                                      color: B.charcoal
                                                  }}>{line}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
