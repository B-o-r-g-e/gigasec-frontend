'use client'
import {useState} from "react";
import StepIndicator from "@/app/(marketing)/cart/components/StepIndicator";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {Icon} from "@/icons/Icon";
import {useCart} from "@/context/CartContext";

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
type CheckoutErrors = Partial<Record<CheckoutField, string>>;

export default function CheckoutForm({onBack, onComplete, total}: CheckoutFormProps) {
    const [form, setForm] = useState<CheckoutFormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
    });
    const {clearCart } = useCart();
    const [focused, setFocused] = useState<CheckoutField | null>(null);
    const [errors, setErrors] = useState<CheckoutErrors>({});
    const [touched, setTouched] = useState<Partial<Record<CheckoutField, boolean>>>({});
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const normalizeSpaces = (value: string) => value.replace(/\s+/g, " ").trim();
    const isValidEmail = (value: string) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    const isValidName = (value: string) =>
        /^[A-Za-z][A-Za-z'\-.\s]{1,49}$/.test(value);
    const isValidCityState = (value: string) =>
        /^[A-Za-z][A-Za-z'\-.\s]{1,59}$/.test(value);
    const validateField = (k: CheckoutField, value: string): string | null => {
        const trimmed = normalizeSpaces(value);
        if (!trimmed) return "This field is required.";
        if (k === "firstName" || k === "lastName") {
            return isValidName(trimmed)
                ? null
                : "Use 2–50 letters. Only letters, spaces, apostrophes, hyphens, and periods.";
        }
        if (k === "email") {
            return isValidEmail(trimmed) ? null : "Enter a valid email address.";
        }
        if (k === "phone") {
            const digits = trimmed.replace(/\D/g, "");
            if (digits.length < 10 || digits.length > 15) {
                return "Phone number must be 10–15 digits.";
            }
            return null;
        }
        if (k === "address") {
            if (trimmed.length < 8) return "Address must be at least 8 characters.";
            if (trimmed.length > 120) return "Address must be 120 characters or fewer.";
            return null;
        }
        if (k === "city" || k === "state") {
            return isValidCityState(trimmed)
                ? null
                : "Use 2–60 letters. Only letters, spaces, apostrophes, hyphens, and periods.";
        }
        return null;
    };
    const validateAll = (state: CheckoutFormState): CheckoutErrors => {
        const next: CheckoutErrors = {};
        (Object.keys(state) as CheckoutField[]).forEach((k) => {
            const err = validateField(k, state[k]);
            if (err) next[k] = err;
        });
        return next;
    };
    const set = (k: CheckoutField) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setForm((f) => ({...f, [k]: value}));
        if (touched[k] || submitAttempted) {
            setErrors((prev) => {
                const next = {...prev};
                const err = validateField(k, value);
                if (err) next[k] = err;
                else delete next[k];
                return next;
            });
        }
    };
    const inStyle = (k: CheckoutField) => ({
        fontSize: 14, border: `1.5px solid ${focused === k ? B.electric : B.lightgray}`,
        background: B.offwhite, color: B.charcoal, outline: "none",
        boxShadow: focused === k ? "0 0 0 3px rgba(51,154,153,0.15)" : "none", transition: "all 0.2s",
    });
    const handleBlur = (k: CheckoutField) => {
        setFocused(null);
        setTouched((t) => ({...t, [k]: true}));
        setErrors((prev) => {
            const next = {...prev};
            const err = validateField(k, form[k]);
            if (err) next[k] = err;
            else delete next[k];
            return next;
        });
    };
    const handleSubmit = () => {
        setSubmitAttempted(true);
        const normalizedForm: CheckoutFormState = {
            firstName: normalizeSpaces(form.firstName),
            lastName: normalizeSpaces(form.lastName),
            email: normalizeSpaces(form.email),
            phone: normalizeSpaces(form.phone),
            address: normalizeSpaces(form.address),
            city: normalizeSpaces(form.city),
            state: normalizeSpaces(form.state),
        };
        const nextErrors = validateAll(normalizedForm);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;
        setForm(normalizedForm);
        clearCart();
        onComplete();
    };

    return (
        <div>
            <StepIndicator step={2}/>
            <h3 className={`${syne.className} mt-6 mb-6`}
                style={{fontWeight: 800, fontSize: 24, color: B.navy}}>Delivery Details</h3>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {([
                        {k: "firstName", l: "First Name *", ph: "First name"},
                        {k: "lastName", l: "Last Name *", ph: "Last name"}
                    ] as const).map(({k, l, ph}) => (
                        <div key={k}>
                            <label className={`${dMSans.className} block mb-2`}
                                   style={{fontWeight: 600, fontSize: 13, color: B.charcoal}}>{l}</label>
                            <input type="text" placeholder={ph} value={form[k]} onChange={set(k)}
                                   className="w-full px-4.5 py-3.25 rounded-lg"
                                   style={inStyle(k)} onFocus={() => setFocused(k)} onBlur={() => handleBlur(k)}
                                   aria-invalid={Boolean(errors[k])}/>
                            {(touched[k] || submitAttempted) && errors[k] && (
                                <div className={`${dMSans.className} mt-2`} style={{fontSize: 12, color: "#ef4444"}}>
                                    {errors[k]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {([
                        {k: "email", l: "Email *", ph: "you@company.com", type: "email"},
                        {k: "phone", l: "Phone *", ph: "+234...", type: "tel"}
                    ] as const).map(({k, l, ph, type}) => (
                        <div key={k}>
                            <label className={`${dMSans.className} block mb-2`}
                                   style={{fontWeight: 600, fontSize: 13, color: B.charcoal}}>{l}</label>
                            <input type={type} placeholder={ph} value={form[k]} onChange={set(k)}
                                   className="w-full px-[18px] py-[13px] rounded-lg"
                                   style={inStyle(k)} onFocus={() => setFocused(k)} onBlur={() => handleBlur(k)}
                                   aria-invalid={Boolean(errors[k])}/>
                            {(touched[k] || submitAttempted) && errors[k] && (
                                <div className={`${dMSans.className} mt-2`} style={{fontSize: 12, color: "#ef4444"}}>
                                    {errors[k]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <label className={`${dMSans.className} block mb-2`}
                           style={{fontWeight: 600, fontSize: 13, color: B.charcoal}}>Delivery Address *</label>
                    <input type="text" placeholder="Street address, building name" value={form.address}
                           onChange={set("address")} className="w-full px-[18px] py-[13px] rounded-lg"
                           style={inStyle("address")} onFocus={() => setFocused("address")}
                           onBlur={() => handleBlur("address")} aria-invalid={Boolean(errors.address)}/>
                    {(touched.address || submitAttempted) && errors.address && (
                        <div className={`${dMSans.className} mt-2`} style={{fontSize: 12, color: "#ef4444"}}>
                            {errors.address}
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {([
                        {k: "city", l: "City *", ph: "City"},
                        {k: "state", l: "State *", ph: "State"}
                    ] as const).map(({k, l, ph}) => (
                        <div key={k}>
                            <label className={`${dMSans.className} block mb-2`}
                                   style={{fontWeight: 600, fontSize: 13, color: B.charcoal}}>{l}</label>
                            <input type="text" placeholder={ph} value={form[k]} onChange={set(k)}
                                   className="w-full px-[18px] py-[13px] rounded-lg"
                                   style={inStyle(k)} onFocus={() => setFocused(k)} onBlur={() => handleBlur(k)}
                                   aria-invalid={Boolean(errors[k])}/>
                            {(touched[k] || submitAttempted) && errors[k] && (
                                <div className={`${dMSans.className} mt-2`} style={{fontSize: 12, color: "#ef4444"}}>
                                    {errors[k]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Payment button — Paystack */}
                <div className="rounded-xl p-5 mt-2"
                     style={{background: "rgba(51,154,153,0.05)", border: "1px solid rgba(51,154,153,0.2)"}}>
                    <div className={`${spaceMono.className}`}
                         style={{fontSize: 10, color: B.electric, letterSpacing: 2, marginBottom: 8}}>PAYMENT METHOD
                    </div>
                    <p className={`${dMSans.className}`} style={{fontSize: 13, color: B.gray, marginBottom: 14}}>
                        You&#39;ll be redirected to Paystack&#39;s secure payment page to complete your payment
                        of <strong style={{color: B.navy}}>₦{Math.round(total).toLocaleString()}</strong>.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        {["Visa", "Mastercard", "Verve", "Bank Transfer", "USSD"].map(m => (
                            <span key={m} className={`${dMSans.className} px-3 py-[4px] rounded-full`} style={{
                                fontSize: 11,
                                fontWeight: 600,
                                background: "#fff",
                                border: `1px solid ${B.lightgray}`,
                                color: B.charcoal
                            }}>{m}</span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-2">
                    <button onClick={onBack}
                            className="w-full sm:w-auto px-6 py-4 rounded-xl border-none cursor-pointer transition-all duration-200"
                            style={{
                                fontWeight: 600,
                                fontSize: 15,
                                background: B.offwhite,
                                color: B.gray,
                                border: `1.5px solid ${B.lightgray}`
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = B.electric;
                                e.currentTarget.style.color = B.navy;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = B.lightgray;
                                e.currentTarget.style.color = B.gray;
                            }}>
                        ← Back to Cart
                    </button>
                    <button onClick={handleSubmit}
                            className={`${syne.className} w-full sm:flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-white border-none cursor-pointer transition-all duration-300`}
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
                        Pay ₦{Math.round(total).toLocaleString()} via Paystack
                    </button>
                </div>
            </div>
        </div>
    );
}
