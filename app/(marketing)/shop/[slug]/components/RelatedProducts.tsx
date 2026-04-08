'use client'
import {useInView} from "@/hooks/useInView";
import {B} from "@/theme/Colors";
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {useCart} from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import {slugify} from "@/app/(marketing)/blog/[slug]/components/functions";
import type {Product} from "@/app/(marketing)/shop/components/products";

type RelatedProductsProps = {
    relatedProduct: Product[];
};

export default function RelatedProducts({relatedProduct}: RelatedProductsProps) {
    const [ref, vis] = useInView(0.1);
    const [hov, setHov] = useState<number | null>(null);
    const [addedId, setAddedId] = useState<number | null>(null);
    const {addToCart} = useCart();

    const handleAddToCart = (p: Product) => {
        addToCart(p, 1)
        setAddedId(p.id);
        setTimeout(() => setAddedId(null), 1200);
    };

    return (
        <section ref={ref} className="py-16 sm:py-20" style={{background: B.offwhite}}>
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className={`${spaceMono.className}`}
                     style={{
                         fontSize: 11,
                         color: B.electric,
                         letterSpacing: 3,
                         marginBottom: 12
                     }}>YOU MAY ALSO LIKE
                </div>
                <h2 className={`${syne.className} mb-10`}
                    style={{
                        fontWeight: 800,
                        fontSize: "clamp(1.8rem,3.5vw,2.4rem)",
                        color: B.navy,
                        letterSpacing: -0.5
                    }}>Related Products</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedProduct.map((p, i) => {
                        return (
                            <div key={p.id}
                                 onMouseEnter={() => setHov(p.id)}
                                 onMouseLeave={() => setHov(null)}
                                 className="cursor-pointer rounded-[20px] overflow-hidden transition-all duration-400"
                                 style={{
                                     background: "#fff",
                                     border: `1.5px solid ${hov === p.id ? B.electric : B.lightgray}`,
                                     opacity: vis ? 1 : 0,
                                     transform: vis ? (hov === p.id ? "translateY(-8px)" : "none") : "translateY(40px)",
                                     transitionDelay: `${i * 100}ms`,
                                     boxShadow: hov ? "0 28px 56px rgba(13,61,61,0.15)" : "0 4px 16px rgba(0,0,0,0.04)"
                                 }}>
                                <div className="h-45 flex items-center justify-center transition-all duration-400"
                                     style={{background: `linear-gradient(135deg,#333333,#00CCCC)`}}>
                                    {/*<Icon name="shield" size={60} color="rgba(255,255,255,0.8)"/>*/}
                                    <Image className="h-full w-full object-cover object-fit"
                                           src={p.image ?? "/products/cctv.jpeg"}
                                           alt={p.name}
                                           height={1000}
                                           width={1000}
                                    />
                                </div>
                                <Link href={`/shop/${slugify(p.name)}`}>
                                    <div className="p-6">
                                        <div className={`${spaceMono.className}`}
                                             style={{
                                                 fontSize: 9,
                                                 color: B.electric,
                                                 letterSpacing: 2,
                                                 marginBottom: 6
                                             }}>{p.brand}</div>
                                        <h3 className={`${syne.className} mb-3`}
                                            style={{
                                                fontWeight: 700,
                                                fontSize: 14,
                                                color: B.navy,
                                                lineHeight: 1.35
                                            }}>{p.name}</h3>
                                        <div className="flex gap-1 mb-4">
                                            {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" size={13}
                                                                            color={s <= Math.round(p.rating) ? "#FFB800" : B.lightgray}/>)}
                                        </div>
                                        <div className="flex items-center justify-between pt-4"
                                             style={{borderTop: `1px solid ${B.lightgray}`}}>
                                        <span className={`${syne.className}`}
                                              style={{
                                                  fontWeight: 800,
                                                  fontSize: 18,
                                                  color: B.navy
                                              }}>₦{p.price.toLocaleString()}</span>
                                            <button onClick={() => handleAddToCart(p)}
                                                    className={`${dMSans.className} flex items-center gap-2 px-4 py-2 rounded-lg text-white border-none cursor-pointer transition-all duration-300`}
                                                    style={{
                                                        fontWeight: 700,
                                                        fontSize: 13,
                                                        background: addedId === p.id ? B.green : B.electric,
                                                        transform: addedId === p.id ? "scale(1.06)" : "scale(1)"
                                                    }}
                                            >
                                                {addedId === p.id
                                                    ? <Icon name="check" size={14} color="#fff"/>
                                                    : <Icon name="cart" size={14} color="#fff"/>}
                                                {
                                                    addedId === p.id
                                                        ? "Added!"
                                                        : "Add"
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
