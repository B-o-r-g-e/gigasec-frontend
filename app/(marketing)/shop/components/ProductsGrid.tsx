'use client'
import type {Product} from "@/app/(marketing)/shop/components/products";
import {CATEGORIES, PRODUCTS} from "@/app/(marketing)/shop/components/products";
import {useEffect, useState} from "react";
import {useInView} from "@/hooks/useInView";
import ProductCard from "@/app/(marketing)/shop/components/ProductCard";
import {Icon} from "@/icons/Icon";
import ProductPreview from "@/app/(marketing)/shop/components/ProductPreview";
import {useCart} from "@/context/CartContext";

export default function ProductsGrid() {
    const {cart, addToCart} = useCart();
    const [ref, vis] = useInView(0.04);
    const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All Products");
    const [sort, setSort] = useState("Default");
    const [preview, setPreview] = useState<Product | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 639px)");
        const handleChange = () => setIsMobile(media.matches);
        handleChange();
        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", handleChange);
            return () => media.removeEventListener("change", handleChange);
        }
        media.addListener(handleChange);
        return () => media.removeListener(handleChange);
    }, []);

    let filtered = cat === "All Products" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
    if (sort === "Price: Low") filtered = [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "Price: High") filtered = [...filtered].sort((a, b) => b.price - a.price);
    if (sort === "Rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

    return (
        <section id="products" ref={ref} className="bg-[#FEFEFE] py-16 sm:py-20 pb-24 sm:pb-32">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

                {/* Filter + sort */}
                <div
                    className={`flex justify-between items-center mb-12 flex-wrap gap-4 transition-all duration-700
                                ${vis ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
                              `}
                >

                    {/* Filters */}
                    <div className="flex gap-2 flex-wrap items-center">
                        <div className="flex items-center gap-2 mr-2">
                            <Icon name="filter" size={15} color="#6B7280"/>
                            <span className="text-[10px] tracking-[1.5px] text-gray-500 font-mono">
                                FILTER
                            </span>
                        </div>

                        {CATEGORIES.map((c) => {
                            const active = cat === c;

                            return (
                                <button
                                    key={c}
                                    onClick={() => setCat(c)}
                                    className={`text-[13px] px-4 py-[7px] rounded-lg border transition-all duration-300
                                        ${active
                                        ? "bg-[#333333] text-white border-[#00CCCC] scale-105 shadow-[0_4px_16px_rgba(13,61,61,0.2)] font-bold"
                                        : "bg-white text-gray-500 border-[#e8edf3] font-medium hover:border-[#00CCCC]/40"
                                    }
                                    `}
                                >
                                    {c}
                                </button>
                            );
                        })}
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <span className="text-[13px] text-gray-500 font-['DM_Sans',sans-serif]">
                          Sort by:
                        </span>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="text-[13px] px-3 py-[7px] rounded-lg cursor-pointer
                                      border-[1.5px] border-[#e8edf3] bg-white text-[#333333]
                                      outline-none focus:border-[#00CCCC]"
                        >
                            {["Default", "Price: Low", "Price: High", "Rating"].map((s) => (
                                <option key={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Product grid */}
                <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((p, i) => (
                        <ProductCard
                            product={p}
                            key={p.id}
                            i={i}
                            vis={vis}
                            onAddToCart={() => addToCart(p, 1)}
                            onPreview={() => {
                                if (!isMobile) setPreview(p);
                            }}
                            cart={cart}
                        />
                    ))}
                </div>
            </div>

            {/* Preview modal */}
            {preview && !isMobile && (
                <ProductPreview
                    product={preview}
                    onClose={() => setPreview(null)}
                    onAddToCart={(qty) => {
                        addToCart(preview, qty);
                        setPreview(null);
                    }}
                />
            )}
        </section>
    )
}
