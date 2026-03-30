'use client'
import {B} from "@/colors/Colors";
import {useInView} from "@/hooks/useInView";
import type {ChangeEvent} from "react";
import {useState} from "react";
import FormField from "@/components/contact/FormField";
import {Icon, type IconName} from "@/icons/Icon";
import {SidebarCard} from "@/components/contact/SideBarCard";
import {SocialBtn} from "@/components/contact/SocialBtn";
import {dMSans, spaceMono, syne} from "@/app/ui/fonts";

type FormState = {
    name: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    message: string;
};

type FocusedField = "name" | "company" | "email" | "phone" | "service" | "msg" | null;
type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
    const [ref, vis] = useInView(0.06);
    const [form, setForm] = useState<FormState>({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState<FocusedField>(null);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const normalizeSpaces = (value: string) => value.replace(/\s+/g, " ").trim();
    const isValidEmail = (value: string) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    const isValidName = (value: string) =>
        /^[A-Za-z][A-Za-z'\-.\s]{1,59}$/.test(value);
    const isValidCompany = (value: string) =>
        /^[A-Za-z0-9][A-Za-z0-9'&.,/\-\s]{2,79}$/.test(value);
    const validateField = (k: keyof FormState, value: string): string | null => {
        const trimmed = normalizeSpaces(value);
        if (k !== "phone" && !trimmed) return "This field is required.";
        if (k === "name") {
            return isValidName(trimmed)
                ? null
                : "Use 2–60 letters. Only letters, spaces, apostrophes, hyphens, and periods.";
        }
        if (k === "company") {
            if (!trimmed) return null;
            return isValidCompany(trimmed)
                ? null
                : "Use 3–80 characters. Letters, numbers, spaces, and basic punctuation only.";
        }
        if (k === "email") {
            return isValidEmail(trimmed) ? null : "Enter a valid email address.";
        }
        if (k === "phone") {
            if (!trimmed) return null;
            const digits = trimmed.replace(/\D/g, "");
            return digits.length >= 10 && digits.length <= 15
                ? null
                : "Phone number must be 10–15 digits.";
        }
        if (k === "service") {
            return trimmed ? null : "Please select a service.";
        }
        if (k === "message") {
            if (trimmed.length < 20) return "Please provide at least 20 characters.";
            if (trimmed.length > 500) return "Message must be 500 characters or fewer.";
            return null;
        }
        return null;
    };
    const validateAll = (state: FormState): FormErrors => {
        const next: FormErrors = {};
        (Object.keys(state) as (keyof FormState)[]).forEach((k) => {
            const err = validateField(k, state[k]);
            if (err) next[k] = err;
        });
        return next;
    };
    const set =
        (k: keyof FormState) =>
            (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    const handleBlur = (k: keyof FormState) => {
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

    const services = ["CCTV & Surveillance", "Access Control", "Fiber Optic", "ICT Infrastructure", "Security Engineering", "Industrial Safety", "Other / General Enquiry"];
    const socials: Array<{ icon: IconName; label: string; url: string }> = [
        {icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/company/gigasec-services/"},
        {icon: "twitter", label: "Twitter", url: "https://x.com/Gigasecintl"},
        {icon: "whatsapp", label: "WhatsApp", url: "#"},
    ];

    const handleSubmit = () => {
        setSubmitAttempted(true);
        const normalized: FormState = {
            name: normalizeSpaces(form.name),
            company: normalizeSpaces(form.company),
            email: normalizeSpaces(form.email),
            phone: normalizeSpaces(form.phone),
            service: normalizeSpaces(form.service),
            message: normalizeSpaces(form.message),
        };
        const nextErrors = validateAll(normalized);
        setErrors(nextErrors);
        setTouched({
            name: true,
            company: true,
            email: true,
            phone: true,
            service: true,
            message: true,
        });
        if (Object.keys(nextErrors).length > 0) return;
        setForm(normalized);
        setSubmitted(true);
    };
    return (
        <section
            id="form"
            ref={ref}
            className="py-[100px]"
            style={{background: B.offwhite}}
        >
            <div
                className="max-w-[1280px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">

                {/* FORM CARD */}
                <div
                    className="bg-white rounded-[24px] p-7 sm:p-10 lg:p-12 shadow-[0_8px_48px_rgba(0,0,0,0.08)] border transition-all duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                        borderColor: B.lightgray,
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateY(0)" : "translateY(50px)",
                    }}
                >
                    {/* Header */}
                    <div
                        className={`${spaceMono.className} text-[11px] tracking-[3px] mb-[10px]`}
                        style={{color: B.electric}}
                    >
                        START A CONVERSATION
                    </div>

                    <h2
                        className={`${syne.className} text-[1.8rem] font-extrabold mb-2 tracking-[-0.5px]`}
                        style={{color: B.navy}}
                    >
                        Tell Us About Your Project
                    </h2>

                    <p
                        className={`${dMSans.className} text-[14px] leading-[1.7] mb-9`}
                        style={{color: B.gray}}
                    >
                        Fill in the form below and one of our engineers will get back to you within 24 hours.
                    </p>

                    {!submitted ? (
                        <div className="flex flex-col gap-4">

                            {/* ROW 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <FormField {...{
                                        label: "Full Name *",
                                        placeholder: "e.g. Adaora Okonkwo",
                                        value: form.name,
                                        onChange: set("name"),
                                        focused: focused === "name",
                                        onFocus: () => setFocused("name"),
                                        onBlur: () => handleBlur("name"),
                                        error: errors.name,
                                        vis,
                                        delay: 0
                                    }} />
                                    {(touched.name || submitAttempted) && errors.name ? (
                                        <p className="mt-2 text-[12px] text-red-600">{errors.name}</p>
                                    ) : null}
                                </div>
                                <div>
                                    <FormField {...{
                                        label: "Company Name",
                                        placeholder: "Your organisation",
                                        value: form.company,
                                        onChange: set("company"),
                                        focused: focused === "company",
                                        onFocus: () => setFocused("company"),
                                        onBlur: () => handleBlur("company"),
                                        error: errors.company,
                                        vis,
                                        delay: 60
                                    }} />
                                    {(touched.company || submitAttempted) && errors.company ? (
                                        <p className="mt-2 text-[12px] text-red-600">{errors.company}</p>
                                    ) : null}
                                </div>
                            </div>

                            {/* ROW 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <FormField {...{
                                        label: "Email Address *",
                                        type: "email",
                                        placeholder: "you@company.com",
                                        value: form.email,
                                        onChange: set("email"),
                                        focused: focused === "email",
                                        onFocus: () => setFocused("email"),
                                        onBlur: () => handleBlur("email"),
                                        error: errors.email,
                                        vis,
                                        delay: 120
                                    }} />
                                    {(touched.email || submitAttempted) && errors.email ? (
                                        <p className="mt-2 text-[12px] text-red-600">{errors.email}</p>
                                    ) : null}
                                </div>
                                <div>
                                    <FormField {...{
                                        label: "Phone Number",
                                        type: "tel",
                                        placeholder: "+234...",
                                        value: form.phone,
                                        onChange: set("phone"),
                                        focused: focused === "phone",
                                        onFocus: () => setFocused("phone"),
                                        onBlur: () => handleBlur("phone"),
                                        error: errors.phone,
                                        vis,
                                        delay: 180
                                    }} />
                                    {(touched.phone || submitAttempted) && errors.phone ? (
                                        <p className="mt-2 text-[12px] text-red-600">{errors.phone}</p>
                                    ) : null}
                                </div>
                            </div>

                            {/* SELECT */}
                            <div
                                className="transition-all duration-500"
                                style={{
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? "translateY(0)" : "translateY(16px)",
                                    transitionDelay: "240ms",
                                }}
                            >
                                <label
                                    className={`${dMSans.className} block text-[13px] font-semibold mb-2`}
                                    style={{color: B.charcoal}}
                                >
                                    Service Required
                                </label>

                                <select
                                    value={form.service}
                                    onChange={set("service")}
                                    onFocus={() => setFocused("service")}
                                    onBlur={() => handleBlur("service")}
                                    className={`${dMSans.className} w-full px-[18px] py-[13px] rounded-lg text-[14px] outline-none transition-all cursor-pointer`}
                                    style={{
                                        border: `1.5px solid ${errors.service ? "#ef4444" : focused === "service" ? B.electric : B.lightgray}`,
                                        background: B.offwhite,
                                        color: form.service ? B.charcoal : B.gray,
                                    }}
                                    aria-invalid={Boolean(errors.service)}
                                >
                                    <option value="">Select a service...</option>
                                    {services.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                {(touched.service || submitAttempted) && errors.service ? (
                                    <p className="mt-2 text-[12px] text-red-600">{errors.service}</p>
                                ) : null}
                            </div>

                            {/* TEXTAREA */}
                            <div
                                className="transition-all duration-500"
                                style={{
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? "translateY(0)" : "translateY(16px)",
                                    transitionDelay: "300ms",
                                }}
                            >
                                <label className="block text-[13px] font-semibold mb-2" style={{color: B.charcoal}}>
                                    Project Description *
                                </label>

                                <textarea
                                    rows={5}
                                    value={form.message}
                                    onChange={set("message")}
                                    onFocus={() => setFocused("msg")}
                                    onBlur={() => handleBlur("message")}
                                    placeholder="Briefly describe your requirements — site size, number of locations, timeline, budget range..."
                                    className="w-full px-[18px] py-[13px] rounded-lg text-[14px] resize-y outline-none transition-all"
                                    style={{
                                        border: `1.5px solid ${errors.message ? "#ef4444" : focused === "msg" ? B.electric : B.lightgray}`,
                                        background: B.offwhite,
                                        color: B.charcoal,
                                        boxShadow: focused === "msg" ? "0 0 0 3px rgba(51,154,153,0.15)" : "none",
                                    }}
                                    aria-invalid={Boolean(errors.message)}
                                />
                                {(touched.message || submitAttempted) && errors.message ? (
                                    <p className="mt-2 text-[12px] text-red-600">{errors.message}</p>
                                ) : null}
                            </div>

                            {/* BUTTON */}
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="flex items-center justify-center gap-2 text-white rounded-lg py-4 font-bold text-[15px] transition-all duration-[350ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]"
                                style={{
                                    background: `linear-gradient(135deg, ${B.electric}, #227a79)`,
                                    boxShadow: "0 8px 32px rgba(51,154,153,0.4)",
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? "scale(1)" : "scale(0.9)",
                                    transitionDelay: "360ms",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = "scale(1.03) translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(51,154,153,0.55)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(51,154,153,0.4)";
                                }}
                            >
                                Send Message <Icon name="arrow" size={18} color="#fff"/>
                            </button>

                            <p className="text-center text-[12px]" style={{color: B.gray}}>
                                We&#39;ll respond within 24 hours. Your data is never shared.
                            </p>
                        </div>
                    ) : (
                        <div
                            className="text-center py-[60px] animate-[successReveal_0.7s_cubic-bezier(0.34,1.56,0.64,1)]">
                            <div
                                className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-6"
                                style={{
                                    background: `linear-gradient(135deg, ${B.electric}, ${B.bright})`,
                                    boxShadow: "0 8px 32px rgba(51,154,153,0.4)",
                                }}
                            >
                                <Icon name="check" size={32} color="#fff"/>
                            </div>

                            <h3 className="text-[1.6rem] font-extrabold mb-3" style={{color: B.navy}}>
                                Message Sent!
                            </h3>

                            <p className="text-[15px]" style={{color: B.gray}}>
                                Thank you, {form.name.split(" ")[0]}. One of our engineers will be in touch within 24
                                hours.
                            </p>
                        </div>
                    )}
                </div>

                {/* SIDEBAR */}
                <div className="flex flex-col gap-5">
                    <SidebarCard title="Office Locations" icon="pin" vis={vis} delay={200}>
                        {[
                            {
                                city: "Port Harcourt (HQ)", addr: "46 Ordinance Road, Off Trans\n" +
                                    "Amadi Industrial Layout."
                            },
                            {
                                city: "Lagos", addr: "7 Atunwa Street, Off Unity Road, Ikeja,\n" +
                                    "Lagos"
                            },
                            {city: "Abuja", addr: "27 Karaye Close, Behind Old CBN Garki, Abuja."},
                        ].map((o, i) => (
                            <div
                                key={o.city}
                                className={`pb-[14px] mb-[14px] ${i < 2 ? "border-b" : ""}`}
                                style={{borderColor: B.lightgray}}
                            >
                                <div className="font-bold text-[14px] mb-1" style={{color: B.navy}}>
                                    {o.city}
                                </div>
                                <div className="text-[13px]" style={{color: B.gray}}>
                                    {o.addr}
                                </div>
                            </div>
                        ))}
                    </SidebarCard>

                    <SidebarCard title="Business Hours" icon="clock" vis={vis} delay={300}>
                        {[["Monday – Friday", "8:00am – 6:00pm WAT"], ["Saturday", "Emergency support only"], ["Sunday & Holidays", "Emergency support only"]].map(([day, hrs]) => (
                            <div key={day} className="flex justify-between mb-2.5">
                                <span className="text-[13px]" style={{color: B.gray}}>{day}</span>
                                <span className="text-[13px] font-semibold" style={{color: B.charcoal}}>{hrs}</span>
                            </div>
                        ))}
                    </SidebarCard>

                    <SidebarCard title="Connect With Us" icon="mail" vis={vis} delay={400}>
                        <div className="flex gap-3">
                            {socials.map((s) => <SocialBtn key={s.label} {...s} />)}
                        </div>

                        <div className="mt-5 px-4 py-[14px] rounded-[10px] border"
                             style={{
                                 background: "rgba(51,154,153,0.08)",
                                 borderColor: "rgba(51,154,153,0.2)",
                             }}
                        >
                            <div className="text-[9px] tracking-[2px] mb-1" style={{color: B.electric}}>
                                24/7 EMERGENCY LINE
                            </div>
                            <div className="font-bold text-[16px]" style={{color: B.navy}}>
                                +234 (0) 815 444 2732
                            </div>
                            <div className="text-[12px] mt-1" style={{color: B.gray}}>
                                For critical system failures only
                            </div>
                        </div>
                    </SidebarCard>
                </div>
            </div>
        </section>
    )
}
