'use client'
import {useInView} from "@/hooks/useInView";
import type {ChangeEvent} from "react";
import {useState} from "react";
import {B} from "@/theme/Colors";
import {Icon, type IconName} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import type {ServiceData} from "@/app/(marketing)/services/components/services";

type QuoteFormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

type QuoteField = keyof QuoteFormState;
type FocusedField = QuoteField | null;
type QuoteErrors = Partial<Record<QuoteField, string>>;
type QuoteBenefit = {
    icon: IconName;
    text: string;
};
type QuoteInputField = {
    k: "name" | "email" | "phone";
    l: string;
    ph: string;
    type: "text" | "email" | "tel";
};

export default function QuoteCTA({currentService}: { currentService: ServiceData }) {
    const [ref, vis] = useInView(0.15);
    const [form, setForm] = useState<QuoteFormState>({ name: "", email: "", phone: "", message: "" });
    const [sent, setSent] = useState(false);
    const [focused, setFocused] = useState<FocusedField>(null);
    const [errors, setErrors] = useState<QuoteErrors>({});
    const [touched, setTouched] = useState<Partial<Record<QuoteField, boolean>>>({});
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const inputFields: QuoteInputField[] = [
        { k: "name", l: "Full Name *", ph: "Your full name", type: "text" },
        { k: "email", l: "Email Address *", ph: "you@company.com", type: "email" },
        { k: "phone", l: "Phone Number", ph: "+234...", type: "tel" },
    ];
    const benefits: QuoteBenefit[] = [
        { icon: "check", text: "Free site survey for qualified projects" },
        { icon: "check", text: "No-obligation technical proposal" },
        { icon: "check", text: "Response within 24 hours" },
        { icon: "check", text: "15+ years of industry expertise" },
    ];

    const normalizeSpaces = (value: string) => value.replace(/\s+/g, " ").trim();
    const isValidEmail = (value: string) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    const isValidName = (value: string) =>
        /^[A-Za-z][A-Za-z'\-.\s]{1,59}$/.test(value);

    const validateField = (field: QuoteField, value: string): string | null => {
        const normalized = normalizeSpaces(value);

        if (field === "name") {
            if (!normalized) return "Full name is required.";
            return isValidName(normalized)
                ? null
                : "Use 2-60 letters. Only letters, spaces, apostrophes, hyphens, and periods.";
        }

        if (field === "email") {
            if (!normalized) return "Email address is required.";
            return isValidEmail(normalized) ? null : "Enter a valid email address.";
        }

        if (field === "phone") {
            if (!normalized) return null;
            const digits = normalized.replace(/\D/g, "");
            return digits.length >= 10 && digits.length <= 15
                ? null
                : "Phone number must be 10-15 digits.";
        }

        if (field === "message") {
            if (!normalized) return "Project details are required.";
            if (normalized.length < 20) return "Please provide at least 20 characters.";
            if (normalized.length > 800) return "Project details must be 800 characters or fewer.";
            return null;
        }

        return null;
    };

    const validateAll = (state: QuoteFormState): QuoteErrors => {
        const next: QuoteErrors = {};
        (Object.keys(state) as QuoteField[]).forEach((field) => {
            const error = validateField(field, state[field]);
            if (error) next[field] = error;
        });
        return next;
    };

    const set =
        (field: QuoteField) =>
            (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const value = e.target.value;
                setForm((prev) => ({ ...prev, [field]: value }));

                if (touched[field] || submitAttempted) {
                    setErrors((prev) => {
                        const next = { ...prev };
                        const error = validateField(field, value);
                        if (error) next[field] = error;
                        else delete next[field];
                        return next;
                    });
                }
            };

    const handleBlur = (field: QuoteField) => {
        setFocused(null);
        setTouched((prev) => ({ ...prev, [field]: true }));
        setErrors((prev) => {
            const next = { ...prev };
            const error = validateField(field, form[field]);
            if (error) next[field] = error;
            else delete next[field];
            return next;
        });
    };

    const handleSubmit = () => {
        setSubmitAttempted(true);
        const normalized: QuoteFormState = {
            name: normalizeSpaces(form.name),
            email: normalizeSpaces(form.email),
            phone: normalizeSpaces(form.phone),
            message: normalizeSpaces(form.message),
        };
        const nextErrors = validateAll(normalized);
        setErrors(nextErrors);
        setTouched({
            name: true,
            email: true,
            phone: true,
            message: true,
        });

        if (Object.keys(nextErrors).length > 0) return;

        setForm(normalized);
        setSent(true);
    };

    const inStyle = (field: QuoteField) => ({
        fontSize: 14,
        border: `1.5px solid ${errors[field] ? "#dc2626" : focused === field ? B.electric : B.lightgray}`,
        background: B.offwhite, color: B.charcoal, outline: "none",
        boxShadow: errors[field]
            ? "0 0 0 3px rgba(220,38,38,0.08)"
            : focused === field ? "0 0 0 3px rgba(0,204,204,0.15)" : "none",
        transition: "all 0.2s",
    });

    return (
        <section id="quote" ref={ref} className="py-16 sm:py-20 lg:py-24"
                 style={{ background: "linear-gradient(135deg,#262626,#333333)" }}>
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-2 lg:gap-20">
                    {/* Left */}
                    <div className="transition-all duration-500"
                         style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-40px)" }}>
                        <div className={`${spaceMono.className}`} style={{ fontSize: 11, color: B.electric, letterSpacing: 3, marginBottom: 16 }}>GET STARTED TODAY</div>
                        <h2 className={`${syne.className} mb-6`} style={{ fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", letterSpacing: -0.5 }}>
                            Get a Quote for<br />
                            <span style={{ color: B.bright }}>{currentService.title}</span>
                        </h2>
                        <p className={`${dMSans.className} mb-8`} style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.65)" }}>
                            Our certified engineers will review your requirements and provide a detailed proposal — usually within 24 hours.
                        </p>
                        {benefits.map(item => (
                            <div key={item.text} className="flex items-center gap-3 mb-4">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                     style={{ background: "rgba(0,204,204,0.2)" }}>
                                    <Icon name={item.icon} size={13} color={B.electric} />
                                </div>
                                <span className={dMSans.className} style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}>{item.text}</span>
                            </div>
                        ))}
                        <div className="mt-8 flex items-center gap-3 rounded-xl p-4 sm:p-5"
                             style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,204,204,0.2)" }}>
                            <div className="flex gap-1">
                                {[1,2,3,4,5].map(s => <Icon key={s} name="star" size={16} color="#FFB800" />)}
                            </div>
                            <div>
                                <div className={dMSans.className} style={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>4.9/5 average rating</div>
                                <div className={dMSans.className} style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>From 200+ client reviews across Nigeria</div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-[24px] bg-white p-6 transition-all duration-500 sm:p-8 lg:p-10"
                         style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.3)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(40px) translateY(20px)", transitionDelay: "90ms" }}>
                        {!sent ? (
                            <>
                                <h3 className={`${syne.className} mb-6`} style={{ fontWeight: 800, fontSize: 22, color: B.navy }}>Request a Quote</h3>
                                {(submitAttempted && Object.keys(errors).length > 0) ? (
                                    <div
                                        className={`${dMSans.className} mb-5 rounded-lg px-4 py-3`}
                                        style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)", color: "#991b1b", fontSize: 13, lineHeight: 1.6 }}
                                    >
                                        Please correct the highlighted fields before submitting.
                                    </div>
                                ) : null}
                                <div className="flex flex-col gap-4">
                                    {inputFields.map(({ k, l, ph, type }) => (
                                        <div key={k}>
                                            <label className={`${dMSans.className} block mb-2`} style={{ fontWeight: 600, fontSize: 13, color: B.charcoal }}>{l}</label>
                                            <input
                                                   type={type}
                                                   placeholder={ph}
                                                   value={form[k]}
                                                   onChange={set(k)}
                                                   className={`${dMSans.className} w-full px-[18px] py-[13px] rounded-lg`}
                                                   style={inStyle(k)}
                                                   onFocus={() => setFocused(k)}
                                                   onBlur={() => handleBlur(k)}
                                                   aria-invalid={Boolean(errors[k])}
                                                   aria-describedby={errors[k] ? `${k}-error` : undefined}
                                            />
                                            {(touched[k] || submitAttempted) && errors[k] ? (
                                                <p id={`${k}-error`} className={`${dMSans.className} mt-2 text-[12px]`} style={{ color: "#dc2626" }}>
                                                    {errors[k]}
                                                </p>
                                            ) : null}
                                        </div>
                                    ))}
                                    <div>
                                        <label className={`${dMSans.className} block mb-2`} style={{ fontWeight: 600, fontSize: 13, color: B.charcoal }}>Project Details</label>
                                        <textarea rows={4} placeholder={`Tell us about your ${currentService.title.toLowerCase()} requirements...`}
                                                  value={form.message} onChange={set("message")}
                                                  className={`${dMSans.className} w-full px-[18px] py-[13px] rounded-lg resize-y`}
                                                  style={inStyle("message")}
                                                  onFocus={() => setFocused("message")}
                                                  onBlur={() => handleBlur("message")}
                                                  aria-invalid={Boolean(errors.message)}
                                                  aria-describedby={errors.message ? "message-error" : "message-help"}
                                        />
                                        <div className="mt-2 flex items-start justify-between gap-4">
                                            {(touched.message || submitAttempted) && errors.message ? (
                                                <p id="message-error" className={`${dMSans.className} text-[12px]`} style={{ color: "#dc2626" }}>
                                                    {errors.message}
                                                </p>
                                            ) : (
                                                <p id="message-help" className={`${dMSans.className} text-[12px]`} style={{ color: B.gray }}>
                                                    Include scope, site count, timeline, or any technical constraints.
                                                </p>
                                            )}
                                            <span className={`${dMSans.className} shrink-0 text-[12px]`} style={{ color: B.gray }}>
                                                {normalizeSpaces(form.message).length}/800
                                            </span>
                                        </div>
                                    </div>
                                    <button onClick={handleSubmit}
                                            className={`${syne.className} flex items-center justify-center gap-2 py-4 rounded-xl text-white border-none cursor-pointer transition-all duration-300`}
                                            style={{ fontWeight: 700, fontSize: 15, background: "linear-gradient(135deg,#00CCCC,#00B8B8)", boxShadow: "0 8px 28px rgba(0,204,204,0.4)" }}
                                            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02) translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,204,204,0.55)"; }}
                                            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,204,204,0.4)"; }}>
                                        Submit Request <Icon name="arrow" size={18} color="#fff" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-14" style={{ animation: "successReveal 0.7s cubic-bezier(0.34,1.56,0.64,1)" }}>
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                                     style={{ background: "linear-gradient(135deg,#00CCCC,#66E0E0)", boxShadow: "0 8px 32px rgba(0,204,204,0.4)" }}>
                                    <Icon name="check" size={36} color="#fff" />
                                </div>
                                <h3 className={`${syne.className} mb-3`} style={{ fontWeight: 800, fontSize: "1.6rem", color: B.navy }}>Request Sent!</h3>
                                <p className={dMSans.className} style={{ fontSize: 15, color: B.gray, lineHeight: 1.7 }}>
                                    Thanks {form.name.split(" ")[0]}! An engineer will be in touch within 24 hours.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
