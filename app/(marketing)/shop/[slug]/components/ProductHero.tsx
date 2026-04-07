'use client'
import {useEffect, useState} from "react";
import {Icon} from "@/icons/Icon";
import type {IconName} from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {useCart} from "@/context/CartContext";
import Image from "next/image";
import type {Product} from "@/app/(marketing)/shop/components/products";

type ProductHeroProps = {
    currentProduct: Product;
};

export default function ProductHero({currentProduct}: ProductHeroProps) {
    const {addToCart} = useCart();
    const [vis, setVis] = useState(false);
    const [qty, setQty] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    const [wishlist, setWishlist] = useState(false);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        setTimeout(() => setVis(true), 80);
    }, []);

    const images = [
        "/products/cctv.jpeg",
        "/products/HD Cameras Installer Orange County.jpeg",
        "/products/Moderne Überwachungskameras für Zuhause.jpeg",
        "/products/Xiaomi Outdoor Cw500 Dual Camera Version Ip66 Security Protection Smart Home.jpeg"
    ]

    const oldPrice = currentProduct.oldPrice ?? currentProduct.price;
    const discount = oldPrice > currentProduct.price
        ? Math.round((1 - currentProduct.price / oldPrice) * 100)
        : 0;

    const handleAddToCart = (p: Product) => {
        addToCart(p, qty)
        setAdding(true);
        setTimeout(() => setAdding(false), 1200);
    };

    return (
        <section className="pt-[64px] sm:pt-[72px] pb-0" style={{background: B.offwhite}}>
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-10">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 transition-all duration-700"
                     style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(-16px)"}}>
                    {["Home", "Shop", "CCTV Cameras", currentProduct.brand].map((c, i) => (
                        <span key={c} className="flex items-center gap-2">
                            {i > 0 && <Icon name="chevron" size={14} color={B.gray}/>}
                            <a href="#" className={`${dMSans.className} no-underline transition-colors duration-200`}
                               style={{
                                   fontSize: 13,
                                   color: i === 3 ? B.electric : B.gray,
                                   fontWeight: i === 3 ? 600 : 400
                               }}
                               onMouseEnter={e => {
                                   if (i < 3) e.currentTarget.style.color = B.electric;
                               }} onMouseLeave={e => {
                                if (i < 3) e.currentTarget.style.color = B.gray;
                            }}>
                                {c}
                            </a>
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left — Image gallery */}
                    <div className="transition-all duration-700"
                         style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-40px)"}}>
                        {/* Main image */}
                        <div className={`bg-cover relative rounded-[24px] overflow-hidden mb-4 flex items-center justify-center h-[280px] sm:h-[360px] lg:h-[420px]`}
                             style={{
                                 backgroundImage: `url("${encodeURI(images[activeImg])}")`,
                                 boxShadow: "0 16px 48px rgba(13,61,61,0.18)"
                             }}
                        >
                            {/* Badges */}
                            {currentProduct.badge && (
                                <div
                                    className={`${spaceMono.className} absolute top-5 left-5 text-white px-4 py-2 rounded-full`}
                                    style={{fontSize: 10, letterSpacing: 2, background: B.orange}}>
                                    {currentProduct.badge}
                                </div>

                            )}
                            {discount > 0 && (
                                <div
                                    className={`${syne.className} absolute top-5 right-5 bg-red-500 text-white font-bold px-3 py-1 rounded-full`}
                                    style={{fontSize: 13}}>-{discount}%
                                </div>
                            )}
                            {/* Wishlist button */}
                            <button onClick={() => setWishlist(w => !w)}
                                    className="absolute bottom-5 right-5 w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer transition-all duration-300"
                                    style={{
                                        background: wishlist ? "rgba(239,68,68,0.9)" : "rgba(255,255,255,0.85)",
                                        transform: wishlist ? "scale(1.12)" : "scale(1)",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                                    }}>
                                <Icon name="heart" size={20} color={wishlist ? "#fff" : B.gray}/>
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-2 sm:gap-3">
                            {images.map((img, i) => (
                                <button key={i} onClick={() => setActiveImg(i)}
                                        className="rounded-xl border-none cursor-pointer overflow-hidden transition-all duration-300 flex items-center justify-center h-16 sm:h-20"
                                        style={{
                                            border: `2px solid ${activeImg === i ? B.electric : "transparent"}`,
                                            opacity: activeImg === i ? 1 : 0.6,
                                            transform: activeImg === i ? "scale(1.05)" : "scale(1)"
                                        }}>
                                    <Image src={img} alt={"product"} width={150} height={100}/>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right — currentProduct info */}
                    <div className="transition-all duration-700" style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(40px)",
                        transitionDelay: "150ms"
                    }}>
                        {/* Brand + SKU */}
                        <div className="flex items-center gap-4 mb-3">
                            <span className={`${spaceMono.className}`}
                                  style={{
                                      fontSize: 11,
                                      color: B.electric,
                                      letterSpacing: 2,
                                      background: "rgba(51,154,153,0.1)",
                                      padding: "4px 12px",
                                      borderRadius: 100,
                                      border: "1px solid rgba(51,154,153,0.25)"
                                  }}>{currentProduct.brand}</span>
                            <span className={`${spaceMono.className}`}
                                  style={{
                                      fontSize: 10,
                                      color: B.gray,
                                      letterSpacing: 1
                                  }}>SKU: {currentProduct.sku}</span>
                        </div>

                        {/* Name */}
                        <h1 className={`${syne.className} mb-4`}
                            style={{
                                fontWeight: 800,
                                fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                                color: B.navy,
                                lineHeight: 1.25,
                                letterSpacing: -0.5
                            }}>
                            {currentProduct.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex flex-wrap items-center gap-3 mb-5 pb-5"
                             style={{borderBottom: `1px solid ${B.lightgray}`}}>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" size={16}
                                                                color={s <= Math.round(currentProduct.rating) ? "#FFB800" : B.lightgray}/>)}
                            </div>
                            <span className={`${syne.className}`}
                                  style={{
                                      fontWeight: 700,
                                      fontSize: 15,
                                      color: B.navy
                                  }}>{currentProduct.rating}</span>
                            <a href="#reviews"
                               className={`${dMSans.className}`}
                               style={{
                                   fontSize: 13,
                                   color: B.electric,
                                   textDecoration: "none"
                               }}>({currentProduct.reviews} reviews)</a>
                            <span className={`${dMSans.className} flex items-center gap-1 ml-2`}
                                  style={{fontSize: 13, color: B.green, fontWeight: 600}}>
                                <div className="w-2 h-2 rounded-full" style={{background: B.green}}/>
                                {currentProduct.stock} in stock
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-end gap-4 mb-1">
                                <span className={`${syne.className}`}
                                      style={{
                                          fontWeight: 800,
                                          fontSize: "clamp(1.6rem,6vw,2.2rem)",
                                          color: B.navy,
                                          lineHeight: 1,
                                          letterSpacing: -1
                                      }}>
                                  ₦{currentProduct.price.toLocaleString()}
                                </span>
                                {discount > 0 && (
                                    <>
                                        <span className={`${dMSans.className}`}
                                              style={{
                                                  fontSize: 16,
                                                  color: B.gray,
                                                  textDecoration: "line-through"
                                              }}>
                                            {/*₦{currentProduct.oldPrice.toLocaleString()}*/}
                                            ₦{oldPrice.toLocaleString()}
                                        </span>
                                        <span className={`${syne.className} px-3 py-1 rounded-full text-white`}
                                              style={{
                                                  fontWeight: 700,
                                                  fontSize: 14,
                                                  background: "#ef4444"
                                              }}>
                                            Save {discount}%
                                        </span>
                                    </>
                                )}
                            </div>
                            <div className={`${dMSans.className}`}
                                 style={{fontSize: 13, color: B.gray}}>Excl. VAT (7.5%). Free delivery
                                on this order.
                            </div>
                        </div>

                        {/* Short description */}
                        <p className={`${dMSans.className} mb-6`} style={{
                            fontSize: 15,
                            lineHeight: 1.75,
                            color: B.charcoal
                        }}>{currentProduct.shortDesc}</p>

                        {/* Highlights */}
                        <div className="mb-7 flex flex-col gap-3">
                            {currentProduct.highlights.map(h => (
                                <div key={h} className="flex items-start gap-3">
                                    <div
                                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]"
                                        style={{background: "rgba(51,154,153,0.15)"}}>
                                        <Icon name="check" size={11} color={B.electric}/>
                                    </div>
                                    <span className={`${dMSans.className}`}
                                          style={{fontSize: 14, color: B.charcoal}}>{h}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {currentProduct.tags.map(t => (
                                <span key={t}
                                      className={`${dMSans.className} px-3 py-[5px] rounded-full`}
                                      style={{
                                          fontSize: 12,
                                          fontWeight: 600,
                                          background: B.offwhite,
                                          border: `1px solid ${B.lightgray}`,
                                          color: B.charcoal
                                      }}>{t}</span>
                            ))}
                        </div>

                        {/* Qty + Add to Cart */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:items-center mb-5">
                            <div className="flex items-center justify-between gap-3 sm:gap-4">
                                <div className="flex items-center rounded-xl overflow-hidden"
                                     style={{border: `1.5px solid ${B.lightgray}`}}>
                                    <button onClick={() => setQty(q => Math.max(1, q - 1))}
                                            className="w-12 h-12 flex items-center justify-center border-none cursor-pointer transition-all duration-200"
                                            style={{background: B.offwhite, color: B.charcoal}}
                                            onMouseEnter={e => e.currentTarget.style.background = B.lightgray}
                                            onMouseLeave={e => e.currentTarget.style.background = B.offwhite}>
                                        <Icon name="minus" size={16} color={B.charcoal}/>
                                    </button>
                                    <span className={`${syne.className} w-12 text-center`}
                                          style={{
                                              fontWeight: 700,
                                              fontSize: 16,
                                              color: B.navy
                                          }}>{qty}</span>
                                    <button onClick={() => setQty(q => q + 1)}
                                            className="w-12 h-12 flex items-center justify-center border-none cursor-pointer transition-all duration-200"
                                            style={{background: B.offwhite, color: B.charcoal}}
                                            onMouseEnter={e => e.currentTarget.style.background = B.lightgray}
                                            onMouseLeave={e => e.currentTarget.style.background = B.offwhite}>
                                        <Icon name="plus" size={16} color={B.charcoal}/>
                                    </button>
                                </div>

                                <button
                                    className="w-12 h-12 rounded-xl flex items-center justify-center border-none cursor-pointer transition-all duration-200 flex-shrink-0"
                                    style={{background: B.offwhite, border: `1.5px solid ${B.lightgray}`}}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = B.electric;
                                        e.currentTarget.style.background = "rgba(51,154,153,0.05)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = B.lightgray;
                                        e.currentTarget.style.background = B.offwhite;
                                    }}>
                                    <Icon name="share" size={18} color={B.gray}/>
                                </button>
                            </div>

                            <button onClick={() => handleAddToCart(currentProduct)}
                                    className={`${syne.className} w-full sm:flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-white border-none cursor-pointer transition-all duration-300`}
                                    style={{
                                        fontWeight: 700,
                                        fontSize: 16,
                                        background: adding ? B.green : "linear-gradient(135deg,#339a99,#227a79)",
                                        boxShadow: adding ? "0 8px 28px rgba(16,185,129,0.4)" : "0 8px 28px rgba(51,154,153,0.4)",
                                        transform: adding ? "scale(1.02)" : "scale(1)"
                                    }}
                                    onMouseEnter={e => {
                                        if (!adding) {
                                            e.currentTarget.style.transform = "scale(1.02) translateY(-2px)";
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!adding) {
                                            e.currentTarget.style.transform = "none";
                                        }
                                    }}>
                                {adding ? <><Icon name="check" size={20} color="#fff"/> adding to Cart!</> : <><Icon
                                    name="cart" size={20} color="#fff"/> Add to Cart</>}
                            </button>
                        </div>

                        {/* Buy now */}
                        <a href="/checkout"
                           className={`${syne.className} flex items-center justify-center gap-2 py-4 rounded-xl no-underline mb-6 transition-all duration-200`}
                           style={{
                               fontWeight: 700,
                               fontSize: 15,
                               background: B.navy,
                               color: "#fff"
                           }}
                           onMouseEnter={e => {
                               e.currentTarget.style.transform = "translateY(-2px)";
                               e.currentTarget.style.boxShadow = "0 8px 24px rgba(13,61,61,0.25)";
                           }}
                           onMouseLeave={e => {
                               e.currentTarget.style.transform = "none";
                               e.currentTarget.style.boxShadow = "none";
                           }}>
                            Buy Now — Proceed to Checkout
                        </a>

                        {/* Trust row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {([
                                {icon: "truck", text: "Free Delivery"},
                                {icon: "lock", text: `${currentProduct.warranty}`},
                                {icon: "info", text: "Datasheet (PDF)"},
                            ] satisfies {icon: IconName; text: string}[]).map(b => (
                                <div key={b.text}
                                     className="flex items-center gap-3 p-4 rounded-xl text-left"
                                     style={{background: B.offwhite, border: `1px solid ${B.lightgray}`}}>
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center"
                                         style={{background: "rgba(51,154,153,0.12)"}}>
                                        <Icon name={b.icon} size={16} color={B.electric}/>
                                    </div>
                                    <span className={`${dMSans.className}`}
                                          style={{
                                              fontSize: 13,
                                              color: B.gray,
                                              fontWeight: 600
                                          }}>{b.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
