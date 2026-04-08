'use client'
import Image from "next/image";
import {Icon} from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {useState} from "react";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import type { Product } from "@/app/(marketing)/shop/components/products";

type CartItemData = Product & {
    qty: number;
};

type CartItemProps = {
    item: CartItemData;
    vis: boolean;
    i: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onRemove: () => void;
};

export default function CartItem({item, vis, i, onIncrease, onDecrease, onRemove}: CartItemProps) {
    const [hov, setHov] = useState(false);
    return (
        <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
             className="bg-white rounded-[16px] p-5 transition-all duration-300"
             style={{
                 border: `1.5px solid ${hov ? B.electric : B.lightgray}`,
                 opacity: vis ? 1 : 0,
                 transform: vis ? "none" : "translateY(20px)",
                 transitionDelay: `${i * 80}ms`,
                 boxShadow: hov ? "0 12px 32px rgba(13,61,61,0.1)" : "none"
             }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 sm:items-start">
                {/* Product image placeholder */}
                <div
                    className="w-[80px] h-[80px] rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                    style={{background: "linear-gradient(135deg,#333333,#00CCCC)"}}
                >
                    {item.image ? (
                        <Image
                            src={item.image}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                            alt={item.name}
                        />
                    ) : (
                        <Icon name="shield" size={32} color="rgba(255,255,255,0.8)"/>
                    )}
                </div>

                {/* Product info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <div className={`${spaceMono.className}`} style={{
                                fontSize: 9,
                                color: B.electric,
                                letterSpacing: 2,
                                marginBottom: 4
                            }}>{item.brand}</div>
                            <h4 className={`${syne.className}`} style={{
                                fontWeight: 700,
                                fontSize: 15,
                                color: B.navy,
                                lineHeight: 1.3,
                                marginBottom: 4
                            }}>{item.name}</h4>
                            <div className={`${spaceMono.className}`} style={{
                                fontSize: 10,
                                color: B.gray,
                                marginBottom: 8
                            }}>SKU: {item.sku}</div>
                            <div className="flex gap-2 flex-wrap">
                                {item.tags.map(t => (
                                    <span className={`${dMSans.className} px-2 py-[2px] rounded-full`} key={t} style={{
                                        fontSize: 11,
                                        background: B.offwhite,
                                        border: `1px solid ${B.lightgray}`,
                                        color: B.gray
                                    }}>{t}</span>
                                ))}
                            </div>
                        </div>
                        {/* Remove button */}
                        <button onClick={onRemove}
                                className="p-2 rounded-lg border-none cursor-pointer transition-all duration-200"
                                style={{background: "rgba(239,68,68,0.06)", color: "#ef4444"}}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "rgba(239,68,68,0.15)";
                                    e.currentTarget.style.transform = "scale(1.1)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "rgba(239,68,68,0.06)";
                                    e.currentTarget.style.transform = "none";
                                }}>
                            <Icon name="trash" size={16} color="#ef4444"/>
                        </button>
                    </div>

                    {/* Qty + Price row */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-4 pt-4"
                         style={{borderTop: `1px solid ${B.lightgray}`}}>
                        {/* Qty control */}
                        <div className="flex items-center rounded-lg overflow-hidden w-full sm:w-auto"
                             style={{border: `1.5px solid ${B.lightgray}`}}>
                            <button onClick={onDecrease}
                                    className="w-9 h-9 flex items-center justify-center border-none cursor-pointer transition-all duration-200"
                                    style={{background: B.offwhite}}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = B.lightgray;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = B.offwhite;
                                    }}>
                                <Icon name="minus" size={14} color={B.charcoal}/>
                            </button>
                            <span className={`${syne.className} w-10 text-center`} style={{
                                fontWeight: 700,
                                fontSize: 15,
                                color: B.navy
                            }}>{item.qty}</span>
                            <button onClick={onIncrease}
                                    className="w-9 h-9 flex items-center justify-center border-none cursor-pointer transition-all duration-200"
                                    style={{background: B.offwhite}}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = B.lightgray;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = B.offwhite;
                                    }}>
                                <Icon name="plus" size={14} color={B.charcoal}/>
                            </button>
                        </div>

                        {/* Price */}
                        <div className="text-left sm:text-right">
                            <div className={`${syne.className}`} style={{
                                fontWeight: 800,
                                fontSize: 20,
                                color: B.navy,
                                letterSpacing: -0.5
                            }}>
                                ₦{(item.price * item.qty).toLocaleString()}
                            </div>
                            {item.qty > 1 && (
                                <div className={`${dMSans.className}`} style={{
                                    fontSize: 12,
                                    color: B.gray,
                                    marginTop: 2
                                }}>₦{item.price.toLocaleString()} each</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
