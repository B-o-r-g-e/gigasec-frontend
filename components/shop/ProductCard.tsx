'use client'
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import Image from "next/image";
import type { Product } from "@/components/shop/products";

type CartEntry = {
    id: string | number;
    qty: number;
};

type ProductCardProps = {
    product: Product;
    i: number;
    vis: boolean;
    onAddToCart: () => void;
    onPreview: () => void;
    cart?: CartEntry[];
};

export default function ProductCard({product: p, i, vis, onAddToCart, onPreview, cart = []}: ProductCardProps) {
    const [hov, setHov] = useState(false);
    const [adding, setAdding] = useState(false);
    const inCart = cart.find(c => c.id === p.id);
    const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;

    const handleAdd = () => {
        onAddToCart();
        setAdding(true);
        setTimeout(() => setAdding(false), 1200);
    };

    const badgeBg: Record<string, string> = {
        "Best Seller": "#FF6600",
        "New": "#10b981",
        "Enterprise Pick": "#0d3d3d",
        "Premium": "#7c3aed",
        "Popular": "#0d3d3d",
        "Pro Grade": "#0d3d3d"
    };

    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className={`group bg-white rounded-[20px] overflow-hidden relative transition-all duration-500
                        ${vis ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-[50px] scale-[0.92]"}
                        ${hov ? "shadow-[0_28px_56px_rgba(13,61,61,0.15)] border-[#339a99]" : "shadow-[0_4px_16px_rgba(0,0,0,0.05)] border-[#e8edf3]"}
                        border-[1.5px]
                      `}
            style={{transitionDelay: `${i * 60}ms`}}
        >
            {/* Image area */}
            <div
                className="h-[200px] relative flex items-center justify-center bg-[linear-gradient(135deg,#F5F7FA,#e8edf3)]">

                {/* Icon */}
                <div
                    className={` flex items-center justify-center transition-all duration-500
                                bg-[linear-gradient(135deg,#0d3d3d,#339a99)]
                                ${hov ? "scale-110 rotate-[5deg] shadow-[0_16px_40px_rgba(51,154,153,0.3)]" : "shadow-[0_8px_20px_rgba(0,0,0,0.1)]"}
                              `}
                >
                    {p.image
                        ? <Image
                            src={p.image}
                            width={96}
                            height={1}
                            alt="Gigasec Logo"
                            />
                        : <Icon name="shield" size={36} color="rgba(255,255,255Kevin O'Leary20%,0.9)"/>
                    }
                </div>

                {/* Badge */}
                {p.badge && (
                    <div
                        className="absolute top-[14px] left-[14px] text-white text-[9px] tracking-[1.5px] px-[10px] py-1 rounded-full font-mono"
                        style={{background: badgeBg[p.badge] || "#0d3d3d"}}
                    >
                        {p.badge}
                    </div>
                )}

                {/* Discount */}
                {discount && (
                    <div
                        className="absolute top-[14px] right-[14px] bg-red-500 text-white font-bold text-[12px] px-[10px] py-1 rounded-full font-['Syne',sans-serif]">
                        -{discount}%
                    </div>
                )}

                {/* Quick View */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onPreview();
                    }}
                    className={`absolute bottom-3 right-3 flex items-center gap-[6px] px-3 py-[7px] rounded-lg font-semibold text-[12px]
                                bg-white/90 text-[#0d3d3d] shadow-md transition-all duration-300
                                ${hov ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                              `}
                >
                    <Icon name="eye" size={14} color="#0d3d3d"/>
                    Quick View
                </button>
            </div>

            {/* Content */}
            <div className="p-6">

                {/* Brand + Category */}
                <div className="flex items-center gap-2 mb-[10px]">
                  <span
                      className="text-[9px] tracking-[1.5px] px-[10px] py-[3px] rounded-full font-mono text-[#339a99] bg-[#339a991a]">
                    {p.brand}
                  </span>
                    <span className="text-[9px] tracking-[1px] font-mono text-gray-500">
                        {p.cat}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-[14px] leading-[1.4] mb-[10px] tracking-[-0.2px] text-[#0d3d3d] font-['Syne',sans-serif]">
                    {p.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-[6px] mb-[14px]">
                    <div className="flex gap-[2px]">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Icon
                                key={s}
                                name="star"
                                size={13}
                                color={s <= Math.round(p.rating) ? "#FFB800" : "#e8edf3"}
                            />
                        ))}
                    </div>
                    <span className="text-[12px] text-gray-500 font-['DM_Sans',sans-serif]">
                        {p.rating} ({p.reviews})
                    </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-[6px] mb-[18px]">
                    {p.tags.map((t) => (
                        <span
                            key={t}
                            className="text-[11px] px-[9px] py-[2px] rounded-full border bg-[#F5F7FA] border-[#e8edf3] text-gray-500 font-['DM_Sans',sans-serif]"
                        >
                          {t}
                        </span>
                    ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[#e8edf3]">

                    {/* Price */}
                    <div>
                        <div className="font-black text-[1.3rem] leading-none text-[#0d3d3d] font-['Syne',sans-serif]">
                            ₦{p.price.toLocaleString()}
                        </div>
                        {p.oldPrice && (
                            <div className="text-[12px] mt-1 line-through text-gray-500 font-['DM_Sans',sans-serif]">
                                ₦{p.oldPrice.toLocaleString()}
                            </div>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleAdd}
                        className={`flex items-center gap-[6px] px-4 py-[9px] rounded-lg font-bold text-[13px] transition-all duration-300
                                  ${adding ? "bg-emerald-500 text-white scale-105 border-emerald-500" :
                                        inCart ? "bg-[#339a991a] text-[#339a99] border-[#339a99]" :
                                        "bg-[#339a99] text-white border-[#339a99]"
                                  }
                                  border-[1.5px]
                       `}
                    >
                        {adding ? (
                            <>
                                <Icon name="check" size={15} color="#fff"/> Added!
                            </>
                        ) : (
                            <>
                                <Icon name="cart" size={15} color="currentColor"/>
                                {inCart ? "Add More" : "Add to Cart"}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
