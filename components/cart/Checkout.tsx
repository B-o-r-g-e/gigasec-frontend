'use client'
import {useState} from "react";
import StepIndicator from "@/components/cart/StepIndicator";
import {B} from "@/colors/Colors";
import {dMSans, spaceMono, syne} from "@/app/ui/fonts";
import {Icon} from "@/icons/Icon";

type CheckoutFormProps = {
    onBack: () => void;
    onComplete: () => void;
    total: number;
};

type CheckoutFormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
};

type CheckoutField = keyof CheckoutFormState;

export default function CheckoutForm({ onBack, onComplete, total }: CheckoutFormProps) {
    const [form, setForm] = useState<CheckoutFormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
    });
    const [focused, setFocused] = useState<CheckoutField | null>(null);
    const set = (k: CheckoutField) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm(f => ({ ...f, [k]: e.target.value }));
    const inStyle = (k: CheckoutField) => ({
        fontSize: 14, border: `1.5px solid ${focused === k ? B.electric : B.lightgray}`,
        background: B.offwhite, color: B.charcoal, outline: "none",
        boxShadow: focused === k ? "0 0 0 3px rgba(51,154,153,0.15)" : "none", transition: "all 0.2s",
    });

    return (
        <div>
            <StepIndicator step={2} />
            <h3 className={`${syne.className} mt-6 mb-6`} style={{ fontWeight: 800, fontSize: 24, color: B.navy }}>Delivery Details</h3>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    {([
                        { k: "firstName", l: "First Name *", ph: "First name" },
                        { k: "lastName", l: "Last Name *", ph: "Last name" }
                    ] as const).map(({ k, l, ph }) => (
                        <div key={k}>
                            <label className={`${dMSans.className} block mb-2`} style={{ fontWeight: 600, fontSize: 13, color: B.charcoal }}>{l}</label>
                            <input type="text" placeholder={ph} value={form[k]} onChange={set(k)} className="w-full px-[18px] py-[13px] rounded-lg"
                                   style={inStyle(k)} onFocus={() => setFocused(k)} onBlur={() => setFocused(null)} />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {([
                        { k: "email", l: "Email *", ph: "you@company.com", type: "email" },
                        { k: "phone", l: "Phone *", ph: "+234...", type: "tel" }
                    ] as const).map(({ k, l, ph, type }) => (
                        <div key={k}>
                            <label className={`${dMSans.className} block mb-2`} style={{ fontWeight: 600, fontSize: 13, color: B.charcoal }}>{l}</label>
                            <input type={type} placeholder={ph} value={form[k]} onChange={set(k)} className="w-full px-[18px] py-[13px] rounded-lg"
                                   style={inStyle(k)} onFocus={() => setFocused(k)} onBlur={() => setFocused(null)} />
                        </div>
                    ))}
                </div>
                <div>
                    <label className={`${dMSans.className} block mb-2`} style={{ fontWeight: 600, fontSize: 13, color: B.charcoal }}>Delivery Address *</label>
                    <input type="text" placeholder="Street address, building name" value={form.address} onChange={set("address")} className="w-full px-[18px] py-[13px] rounded-lg"
                           style={inStyle("address")} onFocus={() => setFocused("address")} onBlur={() => setFocused(null)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {([
                        { k: "city", l: "City *", ph: "City" },
                        { k: "state", l: "State *", ph: "State" }
                    ] as const).map(({ k, l, ph }) => (
                        <div key={k}>
                            <label className={`${dMSans.className} block mb-2`} style={{ fontWeight: 600, fontSize: 13, color: B.charcoal }}>{l}</label>
                            <input type="text" placeholder={ph} value={form[k]} onChange={set(k)} className="w-full px-[18px] py-[13px] rounded-lg"
                                   style={inStyle(k)} onFocus={() => setFocused(k)} onBlur={() => setFocused(null)} />
                        </div>
                    ))}
                </div>

                {/* Payment button — Paystack */}
                <div className="rounded-xl p-5 mt-2" style={{ background: "rgba(51,154,153,0.05)", border: "1px solid rgba(51,154,153,0.2)" }}>
                    <div className={`${spaceMono.className}`} style={{ fontSize: 10, color: B.electric, letterSpacing: 2, marginBottom: 8 }}>PAYMENT METHOD</div>
                    <p className={`${dMSans.className}`} style={{ fontSize: 13, color: B.gray, marginBottom: 14 }}>
                        You&#39;ll be redirected to Paystack&#39;s secure payment page to complete your payment of <strong style={{ color: B.navy }}>₦{Math.round(total).toLocaleString()}</strong>.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        {["Visa", "Mastercard", "Verve", "Bank Transfer", "USSD"].map(m => (
                            <span key={m} className={`${dMSans.className} px-3 py-[4px] rounded-full`} style={{ fontSize: 11, fontWeight: 600, background: "#fff", border: `1px solid ${B.lightgray}`, color: B.charcoal }}>{m}</span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 mt-2">
                    <button onClick={onBack} className="px-6 py-4 rounded-xl border-none cursor-pointer transition-all duration-200"
                            style={{ fontWeight: 600, fontSize: 15, background: B.offwhite, color: B.gray, border: `1.5px solid ${B.lightgray}` }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = B.electric; e.currentTarget.style.color = B.navy; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = B.lightgray; e.currentTarget.style.color = B.gray; }}>
                        ← Back to Cart
                    </button>
                    <button onClick={onComplete}
                            className={`${syne.className} flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-white border-none cursor-pointer transition-all duration-300`}
                            style={{ fontWeight: 700, fontSize: 16, background: "linear-gradient(135deg,#339a99,#227a79)", boxShadow: "0 8px 32px rgba(51,154,153,0.4)" }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02) translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(51,154,153,0.55)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(51,154,153,0.4)"; }}>
                        <Icon name="lock" size={18} color="#fff" />
                        Pay ₦{Math.round(total).toLocaleString()} via Paystack
                    </button>
                </div>
            </div>
        </div>
    );
}
