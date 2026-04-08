'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {Icon} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {B} from "@/theme/Colors";
import CartItem from "@/app/(marketing)/cart/components/CartItem";
import StepIndicator from "@/app/(marketing)/cart/components/StepIndicator";
import CheckoutForm from "@/app/(marketing)/cart/components/Checkout";
import EmptyCart from "@/app/(marketing)/cart/components/EmptyCart";
import OrderSuccess from "@/app/(marketing)/cart/components/Ordersuccess";
import {useCart} from "@/context/CartContext";


export default function CartMain() {
    const [ref, vis] = useInView(0.04);
    const [coupon, setCoupon] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);
    const [couponError, setCouponError] = useState(false);
    const [checkoutStep, setCheckoutStep] = useState(1); // 1=cart, 2=details, 3=success


    const {cart, updateQty, removeFromCart} = useCart();
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const discount = couponApplied ? subtotal * 0.1 : 0;
    const shipping = subtotal > 100000 ? 0 : 5000;
    const vat = (subtotal - discount) * 0.075;
    const total = subtotal - discount + shipping + vat;

    const applyCoupon = () => {
        if (coupon.toUpperCase() === "GIGASEC10") {
            setCouponApplied(true);
            setCouponError(false);
        } else {
            setCouponError(true);
            setCouponApplied(false);
        }
    };

    return (
        <section ref={ref} className="py-12 md:py-16" style={{background: B.offwhite}}>
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
                {checkoutStep === 3 ? (
                    <OrderSuccess/>
                ) : (
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px] lg:gap-8">

                        {/* Left — Cart items or Checkout form */}
                        <div className="transition-all duration-700"
                             style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-30px)"}}>
                            {checkoutStep === 1 && (
                                <>
                                    {/* Step indicator */}
                                    <StepIndicator step={1}/>

                                    {cart.length > 0 ? (
                                        <div className="flex flex-col gap-4 mt-6">
                                            {cart.map((item, i) => (
                                                <CartItem key={item.id} item={item} vis={vis} i={i}
                                                          onIncrease={() => updateQty(item.id, item.qty + 1)}
                                                          onDecrease={() => {
                                                              if (item.qty > 1)
                                                                  updateQty(item.id, item.qty - 1);
                                                          }}
                                                          onRemove={() => removeFromCart(item.id)}/>
                                            ))}
                                        </div>
                                    ) : (
                                        <EmptyCart/>
                                    )}

                                    {/* Continue shopping */}
                                    {cart.length > 0 && (
                                        <a href="/shop"
                                           className={`${dMSans.className} inline-flex items-center gap-2 mt-6 no-underline transition-all duration-200`}
                                           style={{fontWeight: 600, fontSize: 14, color: B.electric}}
                                           onMouseEnter={e => e.currentTarget.style.gap = "12px"}
                                           onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
                                            ← Continue Shopping
                                        </a>
                                    )}
                                </>
                            )}

                            {checkoutStep === 2 && (
                                <CheckoutForm onBack={() => setCheckoutStep(1)} onComplete={() => setCheckoutStep(3)}
                                              total={total}/>
                            )}
                        </div>

                        {/* Right — Order summary */}
                        <div className="flex flex-col gap-5 transition-all duration-700"
                             style={{
                                 opacity: vis ? 1 : 0,
                                 transform: vis ? "none" : "translateX(30px)",
                                 transitionDelay: "200ms"
                             }}>

                            <div className="rounded-[20px] p-6 bg-white" style={{
                                border: `1.5px solid ${B.lightgray}`,
                                boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
                            }}>
                                <h3 className={`${syne.className} mb-6`}
                                    style={{fontWeight: 800, fontSize: 20, color: B.navy}}>Order
                                    Summary</h3>

                                {/* Line items */}
                                <div className="flex flex-col gap-3 mb-5 pb-5"
                                     style={{borderBottom: `1px solid ${B.lightgray}`}}>
                                    {cart.map(item => (
                                        <div key={item.id} className="flex justify-between items-start gap-3">
                                            <div>
                                                <span className={`${dMSans.className}`}
                                                      style={{
                                                          fontSize: 13,
                                                          color: B.charcoal,
                                                          fontWeight: 500
                                                      }}>{item.brand} — </span>
                                                <span className={`${dMSans.className}`}
                                                      style={{
                                                          fontSize: 13,
                                                          color: B.gray
                                                      }}>{item.name.slice(0, 32)}...</span>
                                                <div className={`${spaceMono.className}`}
                                                     style={{
                                                         fontSize: 10,
                                                         color: B.gray,
                                                         marginTop: 2
                                                     }}>x{item.qty}</div>
                                            </div>
                                            <span className={`${syne.className}`}
                                                  style={{
                                                      fontWeight: 700,
                                                      fontSize: 14,
                                                      color: B.navy,
                                                      whiteSpace: "nowrap"
                                                  }}>
                                                ₦{(item.price * item.qty).toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Coupon */}
                                <div className="mb-5 pb-5" style={{borderBottom: `1px solid ${B.lightgray}`}}>
                                    <div className={`${dMSans.className}`} style={{
                                        fontWeight: 600,
                                        fontSize: 13,
                                        color: B.charcoal,
                                        marginBottom: 10,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6
                                    }}>
                                        <Icon name="tag" size={15} color={B.electric}/> Promo Code
                                    </div>
                                    {couponApplied ? (
                                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg" style={{
                                            background: "rgba(16,185,129,0.1)",
                                            border: "1px solid rgba(16,185,129,0.3)"
                                        }}>
                                            <Icon name="check" size={16} color={B.green}/>
                                            <span className={`${dMSans.className}`}
                                                  style={{
                                                      fontSize: 13,
                                                      color: B.green,
                                                      fontWeight: 600
                                                  }}>GIGASEC10 applied — 10% off!</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col gap-2 sm:flex-row">
                                            <input value={coupon} onChange={e => setCoupon(e.target.value)}
                                                   placeholder="Enter promo code"
                                                   className={`${dMSans.className} flex-1 px-4 py-[10px] rounded-lg outline-none text-[13px] transition-all duration-200`}
                                                   style={{
                                                       border: `1.5px solid ${couponError ? "#ef4444" : B.lightgray}`,
                                                       background: B.offwhite,
                                                       color: B.charcoal
                                                   }}
                                                   onFocus={e => e.target.style.borderColor = B.electric}
                                                   onBlur={e => !couponError && (e.target.style.borderColor = B.lightgray)}/>
                                            <button onClick={applyCoupon}
                                                    className={`${dMSans.className} w-full sm:w-auto px-4 py-[10px] rounded-lg text-white border-none cursor-pointer transition-all duration-200`}
                                                    style={{
                                                        fontWeight: 600,
                                                        fontSize: 13,
                                                        background: B.electric
                                                    }}
                                                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                                                    onMouseLeave={e => e.currentTarget.style.transform = "none"}>Apply
                                            </button>
                                        </div>
                                    )}
                                    {couponError && <p className={`${dMSans.className} mt-2`} style={{
                                        fontSize: 12,
                                        color: "#ef4444"
                                    }}>Invalid promo code. Try GIGASEC10</p>}
                                </div>

                                {/* Totals */}
                                <div className="flex flex-col gap-3 mb-6">
                                    {(() => {
                                        const rows: { label: string; value: string; color?: string | null }[] = [
                                            {label: "Subtotal", value: `₦${subtotal.toLocaleString()}`},
                                            {
                                                label: "Shipping",
                                                value: shipping === 0 ? "FREE" : `₦${shipping.toLocaleString()}`,
                                                color: shipping === 0 ? B.green : null
                                            },
                                            {label: "VAT (7.5%)", value: `₦${Math.round(vat).toLocaleString()}`},
                                        ];

                                        if (couponApplied) {
                                            rows.splice(1, 0, {
                                                label: "Discount (10%)",
                                                value: `-₦${discount.toLocaleString()}`,
                                                color: B.green
                                            });
                                        }

                                        return rows;
                                    })().map(({label, value, color}) => (
                                        <div key={label} className="flex justify-between">
                                            <span className={`${dMSans.className}`}
                                                  style={{fontSize: 14, color: B.gray}}>{label}</span>
                                            <span className={`${dMSans.className}`} style={{
                                                fontWeight: 600,
                                                fontSize: 14,
                                                color: color || B.charcoal
                                            }}>{value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center py-5 mb-6 rounded-xl px-4"
                                     style={{background: "linear-gradient(135deg,#333333,#4d4d4d)"}}>
                                    <span className={`${syne.className}`} style={{
                                        fontWeight: 800,
                                        fontSize: 16,
                                        color: "#fff"
                                    }}>Total</span>
                                    <span className={`${syne.className}`} style={{
                                        fontWeight: 800,
                                        fontSize: 22,
                                        color: B.bright
                                    }}>₦{Math.round(total).toLocaleString()}</span>
                                </div>

                                {/* Checkout button */}
                                {checkoutStep === 1 && cart.length > 0 && (
                                    <button onClick={() => setCheckoutStep(2)}
                                            className={`${syne.className} w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white border-none cursor-pointer transition-all duration-300`}
                                            style={{
                                                fontWeight: 700,
                                                fontSize: 16,
                                                background: "linear-gradient(135deg,#00CCCC,#00b8b8)",
                                                boxShadow: "0 8px 32px rgba(51,154,153,0.4)"
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = "scale(1.02) translateY(-2px)";
                                                e.currentTarget.style.boxShadow = "0 12px 40px rgba(51,154,153,0.55)";
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = "none";
                                                e.currentTarget.style.boxShadow = "0 8px 32px rgba(51,154,153,0.4)";
                                            }}>
                                        <Icon name="lock" size={18} color="#fff"/>
                                        Proceed to Checkout
                                    </button>
                                )}

                                {/* Paystack notice */}
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <Icon name="lock" size={13} color={B.gray}/>
                                    <span className={`${dMSans.className}`} style={{fontSize: 12, color: B.gray}}>Secured by</span>
                                    <span className={`${syne.className}`} style={{
                                        fontWeight: 800,
                                        fontSize: 13,
                                        color: B.electric
                                    }}>Paystack</span>
                                </div>
                            </div>

                            {/* Accepted payment methods */}
                            <div className="rounded-[16px] p-5 bg-white" style={{border: `1.5px solid ${B.lightgray}`}}>
                                <div className={`${spaceMono.className}`} style={{
                                    fontSize: 10,
                                    color: B.gray,
                                    letterSpacing: 2,
                                    marginBottom: 12
                                }}>ACCEPTED PAYMENTS
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Visa", "Mastercard", "Verve", "Bank Transfer", "USSD"].map(m => (
                                        <span key={m} className={`${dMSans.className} px-3 py-[5px] rounded-full`}
                                              style={{
                                                  fontSize: 12,
                                                  fontWeight: 600,
                                                  background: B.offwhite,
                                                  border: `1px solid ${B.lightgray}`,
                                                  color: B.charcoal
                                              }}>{m}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Delivery info */}
                            <div className="rounded-[16px] p-5" style={{
                                background: "rgba(51,154,153,0.06)",
                                border: "1px solid rgba(51,154,153,0.2)"
                            }}>
                                <div className="flex items-start gap-3">
                                    <Icon name="info" size={18} color={B.electric}/>
                                    <div>
                                        <div className={`${dMSans.className}`} style={{
                                            fontWeight: 600,
                                            fontSize: 13,
                                            color: B.navy,
                                            marginBottom: 4
                                        }}>Delivery Information
                                        </div>
                                        <p className={`${dMSans.className}`}
                                           style={{fontSize: 12, color: B.gray, lineHeight: 1.65}}>
                                            Free delivery on orders over ₦100,000. Orders are typically processed within
                                            1–2 business days. For bulk orders, contact our sales team for expedited
                                            delivery options.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
