import {useEffect, useState} from "react";
import Image from "next/image";
import {Icon} from "@/icons/Icon";
import type {Product} from "@/app/(marketing)/shop/components/products";

type ProductPreviewProps = {
    product: Product;
    onClose: () => void;
    onAddToCart: (qty: number) => void;
};

export default function ProductPreview({product: p, onClose, onAddToCart}: ProductPreviewProps) {
    const [open, setOpen] = useState(false);
    const [qty, setQty] = useState(1);
    useEffect(() => {
        setTimeout(() => setOpen(true), 20);
    }, []);
    const handleClose = () => {
        setOpen(false);
        setTimeout(onClose, 400);
    };

    return (
        <div
            onClick={handleClose}
            className={`fixed inset-0 z-[2000] flex items-center justify-center p-8
                        transition-opacity duration-500
                        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
                        bg-[rgba(6,30,30,0.85)] backdrop-blur-md
                      `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-[24px] w-full max-w-[760px] overflow-hidden
                          grid grid-cols-1 md:grid-cols-2
                          transition-all duration-500
                          ${open ? "scale-100 translate-y-0" : "scale-95 translate-y-10"}
                          shadow-[0_40px_80px_rgba(0,0,0,0.4)]
                          max-h-[88vh]
                        `}
            >
                {/* Left */}
                <div
                    className="flex items-center justify-center relative min-h-[340px] bg-[linear-gradient(135deg,#F5F7FA,#e8edf3)] overflow-hidden">
                    {p.image ? (
                        <Image
                            src={p.image}
                            width={1200}
                            height={1200}
                            className="h-full w-full object-cover"
                            alt={p.name}
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-[24px] flex items-center justify-center
                                        bg-[linear-gradient(135deg,#0d3d3d,#339a99)]
                                        shadow-[0_20px_48px_rgba(13,61,61,0.25)]
                        ">
                            <Icon name="shield" size={48} color="rgba(255,255,255,0.9)"/>
                        </div>
                    )}

                    {p.badge && (
                        <div
                            className="absolute top-5 left-5 text-white text-[9px] tracking-[1.5px] px-[10px] py-1 rounded-full font-mono bg-[#0d3d3d]">
                            {p.badge}
                        </div>
                    )}
                </div>

                {/* Right */}
                <div className="p-9 overflow-y-auto">

                    {/* Close */}
                    <button
                        onClick={handleClose}
                        className="float-right w-8 h-8 rounded-full flex items-center justify-center bg-[#F5F7FA] hover:bg-[#e8edf3] transition-colors"
                    >
                        <Icon name="close" size={16} color="#6B7280"/>
                    </button>

                    {/* Brand */}
                    <span
                        className="inline-block text-[9px] tracking-[2px] px-[10px] py-[3px] rounded-full mb-3 font-mono bg-[#339a991a] text-[#339a99]">
                        {p.brand}
                    </span>

                    {/* Title */}
                    <h2 className="font-black text-[1.2rem] leading-[1.35] tracking-[-0.3px] mt-3 mb-2 text-[#0d3d3d] font-['Syne',sans-serif]">
                        {p.name}
                    </h2>

                    {/* SKU */}
                    <div className="text-[10px] tracking-[1.5px] mb-4 text-gray-500 font-mono">
                        SKU: {p.sku}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-[6px] mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Icon
                                key={s}
                                name="star"
                                size={14}
                                color={s <= Math.round(p.rating) ? "#FFB800" : "#e8edf3"}
                            />
                        ))}
                        <span className="text-[13px] text-gray-500 font-['DM_Sans',sans-serif]">
                          {p.rating} · {p.reviews} reviews
                        </span>
                    </div>

                    {/* Price */}
                    <div className="font-black text-[1.8rem] leading-none text-[#0d3d3d] font-['Syne',sans-serif]">
                        ₦{p.price.toLocaleString()}
                    </div>

                    {p.oldPrice && (
                        <div className="text-[13px] line-through mt-1 mb-4 text-gray-500 font-['DM_Sans',sans-serif]">
                            ₦{p.oldPrice.toLocaleString()}
                        </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-[6px] mb-6 mt-4">
                        {p.tags.map((t) => (
                            <span
                                key={t}
                                className="text-[11px] px-[10px] py-[2px] rounded-full border
                                          bg-[#F5F7FA] border-[#e8edf3] text-gray-500
                                          font-['DM_Sans',sans-serif]"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Qty */}
                    <div className="flex items-center gap-3 mb-5">
                        <span className="font-semibold text-[13px] text-gray-500 font-['DM_Sans',sans-serif]">
                          Qty:
                        </span>

                        <div className="flex items-center rounded-lg overflow-hidden border-[1.5px] border-[#e8edf3]">
                            <button
                                onClick={() => setQty((q) => Math.max(1, q - 1))}
                                className="w-9 h-9 font-bold text-[16px] bg-[#F5F7FA] text-[#0d3d3d]
                                            hover:bg-[#e8edf3] transition-colors font-['Syne',sans-serif]"
                            >
                                −
                            </button>

                            <span
                                className="w-10 text-center font-bold text-[15px] text-[#0d3d3d] font-['Syne',sans-serif]">
                                {qty}
                            </span>

                            <button
                                onClick={() => setQty((q) => q + 1)}
                                className="w-9 h-9 font-bold text-[16px] bg-[#F5F7FA] text-[#0d3d3d]
                                        hover:bg-[#e8edf3] transition-colors font-['Syne',sans-serif]"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => onAddToCart(qty)}
                        className="w-full flex items-center justify-center gap-2 py-[14px] rounded-[10px]
                                  font-bold text-[15px] text-white
                                  bg-[linear-gradient(135deg,#339a99,#227a79)]
                                  shadow-[0_8px_24px_rgba(51,154,153,0.35)]
                                  hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(51,154,153,0.5)]
                                  transition-all duration-300
                                  font-['Syne',sans-serif]"
                    >
                        <Icon name="cart" size={18} color="#fff"/>
                        Add to Cart
                    </button>

                    <p className="text-[12px] text-center mt-3 text-gray-500 font-['DM_Sans',sans-serif]">
                        Or call us for bulk pricing & custom orders
                    </p>
                </div>
            </div>
        </div>
    )
}
