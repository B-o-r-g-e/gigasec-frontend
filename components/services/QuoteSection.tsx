'use client'
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {SERVICES} from "@/components/services/services";
import {Icon, type IconName} from "@/icons/Icon";
import {B} from "@/colors/Colors";
import {syne} from "@/app/ui/fonts";

export default function QuoteSection() {
    const [ref, vis] = useInView(0.1);
    const [hoveredService, setHoveredService] = useState<string | null>(null);
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });
    const [touched, setTouched] = useState({
        name: false,
        company: false,
        email: false,
        phone: false,
        message: false,
    });
    const [errors, setErrors] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });
    const services = SERVICES.map(s => s.title);

    const normalizeSpaces = (value: string) => value.replace(/\s+/g, " ").trim();
    const isValidEmail = (value: string) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    const isValidName = (value: string) =>
        /^[A-Za-z][A-Za-z'\-.\s]{1,59}$/.test(value);
    const isValidCompany = (value: string) =>
        /^[A-Za-z0-9][A-Za-z0-9'&.,/\-\s]{2,79}$/.test(value);
    const isValidPhone = (value: string) => {
        const digits = value.replace(/\D/g, "");
        if (!digits) return true;
        return digits.length >= 10 && digits.length <= 15;
    };
    const validateField = (
        field: "name" | "company" | "email" | "phone" | "message",
        value: string
    ) => {
        const trimmed = normalizeSpaces(value);
        if (field !== "phone" && !trimmed) return "This field is required.";
        if (field === "name") {
            return isValidName(trimmed)
                ? ""
                : "Use 2–60 letters. Only letters, spaces, apostrophes, hyphens, and periods.";
        }
        if (field === "company") {
            return isValidCompany(trimmed)
                ? ""
                : "Use 3–80 characters. Letters, numbers, spaces, and basic punctuation only.";
        }
        if (field === "email") {
            return isValidEmail(trimmed) ? "" : "Enter a valid email address.";
        }
        if (field === "phone") {
            if (!trimmed) return "";
            return isValidPhone(trimmed) ? "" : "Phone number must be 10–15 digits.";
        }
        if (field === "message") {
            if (trimmed.length < 10) return "Please provide at least 10 characters.";
            if (trimmed.length > 500) return "Message must be 500 characters or fewer.";
            return "";
        }
        return "";
    };
    const handleChange =
        (field: "name" | "company" | "email" | "phone" | "message") =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const value = e.target.value;
                setForm((prev) => ({ ...prev, [field]: value }));
                if (touched[field]) {
                    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
                }
            };
    const handleBlur =
        (field: "name" | "company" | "email" | "phone" | "message") =>
            (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setTouched((prev) => ({ ...prev, [field]: true }));
                setErrors((prev) => ({ ...prev, [field]: validateField(field, e.target.value) }));
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.background = "#f4f7fb";
                e.currentTarget.style.boxShadow = "none";
            };
    const handleSubmit = () => {
        const nextErrors = {
            name: validateField("name", form.name),
            company: validateField("company", form.company),
            email: validateField("email", form.email),
            phone: validateField("phone", form.phone),
            message: validateField("message", form.message),
        };
        setErrors(nextErrors);
        setTouched({
            name: true,
            company: true,
            email: true,
            phone: true,
            message: true,
        });
        if (Object.values(nextErrors).some(Boolean)) return;
        setForm({
            name: normalizeSpaces(form.name),
            company: normalizeSpaces(form.company),
            email: normalizeSpaces(form.email),
            phone: normalizeSpaces(form.phone),
            message: normalizeSpaces(form.message),
        });
    };

    return (
        <section id="quote" ref={ref} className="bg-[#f5f7fa] py-20 sm:py-24">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left */}
                    <div
                        className={`transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <div
                            className="font-[DM_Sans] text-[12px] tracking-widest mb-3 font-semibold uppercase"
                            style={{color: B.electric}}
                        >
                            LET&#39;S BUILD TOMORROW TOGETHER
                        </div>
                        <h2
                            className="font-[Syne] font-extrabold text-[clamp(2rem,3.5vw,2.8rem)] -tracking-[0.5px] mb-5"
                            style={{color: B.navy}}
                        >
                            Company Profile 2025<br />Gigasec Services Limited
                        </h2>
                        <p
                            className="font-[DM_Sans] text-base leading-relaxed mb-10"
                            style={{color: B.gray}}
                        >
                            We are dedicated to advancing the convergence of IP security, industrial technology, and
                            digital innovation with ISO 9001 and 27001-aligned practices. We engineer solutions that
                            scale across borders and deliver measurable operational excellence.
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-4 mb-12">
                            {([
                                { icon: "phone", text: "+234 815 444 2732" },
                                { icon: "mail", text: "info@gigasecintl.com" },
                                { icon: "globe", text: "gigasecintl.com" },
                            ] as {icon: IconName; text: string}[]).map(({ icon, text }) => (
                                <div key={text} className="flex items-center gap-3.5">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{background: `${B.electric}20`}}
                                    >
                                        <Icon name={icon} size={18} color={B.electric} />
                                    </div>
                                    <span
                                        className="font-[DM_Sans] text-sm font-medium"
                                        style={{color: B.charcoal}}
                                    >
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Service Selector */}
                        <div>
                            <div
                                className="font-[DM_Sans] text-[13px] mb-4 font-semibold"
                                style={{color: B.gray}}
                            >
                                Quick-select a service area:
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {services.map((s, i) => (
                                    <button
                                        key={s}
                                        onMouseEnter={() => setHoveredService(s)}
                                        onMouseLeave={() => setHoveredService(null)}
                                        className="font-[DM_Sans] text-[13px] font-semibold px-4 py-2 rounded-lg border transition-all duration-300"
                                        style={{
                                            borderColor: hoveredService === s ? B.electric : "#e5e7eb",
                                            background: hoveredService === s ? `${B.electric}14` : "#ffffff",
                                            color: hoveredService === s ? B.electric : B.charcoal,
                                            transform: hoveredService === s ? "scale(1.06) translateY(-2px)" : "scale(1) translateY(0)",
                                            boxShadow: hoveredService === s
                                                ? "0 4px 16px rgba(66,153,225,0.15)"
                                                : "none",
                                            transitionDelay: `${i * 60 + 200}ms`,
                                        }}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div
                        className={`bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            vis ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-10 translate-y-5"
                        }`}
                        style={{
                            transitionDelay: "150ms",
                            borderColor: "#e5e7eb",
                            boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3 className="font-[Syne] font-bold text-lg mb-7" style={{color: B.navy}}>
                            Let’s Get Started
                        </h3>
                        <div className="flex flex-col gap-4.5">
                            {[
                                { key: "name", placeholder: "Full Name *", type: "text" },
                                { key: "company", placeholder: "Company Name *", type: "text" },
                                { key: "email", placeholder: "Email Address *", type: "email" },
                                { key: "phone", placeholder: "Phone Number", type: "tel" },
                            ].map(({ key, placeholder, type }, i) => (
                                <div key={key}>
                                    <input
                                        type={type}
                                        placeholder={placeholder}
                                        value={form[key as keyof typeof form]}
                                        onChange={handleChange(key as keyof typeof form)}
                                        onBlur={handleBlur(key as keyof typeof form)}
                                        aria-invalid={Boolean(errors[key as keyof typeof errors])}
                                        className={`w-full rounded-lg px-4 py-3 font-[DM_Sans] text-sm outline-none transition-all duration-250 ${
                                            vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                        }`}
                                        style={{
                                            background: "#f4f7fb",
                                            borderColor: errors[key as keyof typeof errors] ? "#ef4444" : "#e5e7eb",
                                            color: B.charcoal,
                                            borderWidth: "1px",
                                            transitionDelay: `${i * 60 + 300}ms`,
                                        }}
                                        onFocus={e => {
                                            e.currentTarget.style.borderColor = B.electric;
                                            e.currentTarget.style.background = `${B.electric}0D`;
                                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(66,153,225,0.15)";
                                        }}
                                    />
                                    {touched[key as keyof typeof touched] && errors[key as keyof typeof errors] && (
                                        <div className="mt-2 font-[DM_Sans] text-[12px] text-red-500">
                                            {errors[key as keyof typeof errors]}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <textarea
                                placeholder="Briefly describe your requirements *"
                                rows={4}
                                value={form.message}
                                onChange={handleChange("message")}
                                onBlur={handleBlur("message")}
                                aria-invalid={Boolean(errors.message)}
                                className={`rounded-lg px-4 py-3 font-[DM_Sans] text-sm outline-none resize-vertical transition-all duration-250 ${
                                    vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                                style={{
                                    background: "#f4f7fb",
                                    borderColor: errors.message ? "#ef4444" : "#e5e7eb",
                                    color: B.charcoal,
                                    borderWidth: "1px",
                                    transitionDelay: "540ms",
                                }}
                                onFocus={e => {
                                    e.currentTarget.style.borderColor = B.electric;
                                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(66,153,225,0.15)";
                                }}
                            />
                            {touched.message && errors.message && (
                                <div className="mt-2 font-[DM_Sans] text-[12px] text-red-500">
                                    {errors.message}
                                </div>
                            )}
                            <button
                                className={`${syne.className} w-full`}
                                style={{
                                background: `linear-gradient(135deg, ${B.electric}, #227a79)`,
                                color: "#fff", border: "none", borderRadius: 10, padding: "16px",
                                fontWeight: 700, fontSize: 15,
                                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                boxShadow: `0 8px 32px ${B.electric}50`,
                                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                                opacity: vis ? 1 : 0, transform: vis ? "scale(1)" : "scale(0.95) translateY(8px)",
                                transitionDelay: "600ms",
                            }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03) translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${B.electric}60`; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 8px 32px ${B.electric}50`; }}
                                    onClick={handleSubmit}
                            >
                                Contact Us <Icon name="arrow" size={18} color="#fff" />
                            </button>
                            <p className="font-[DM_Sans] text-xs text-center mt-3" style={{color: B.gray}}>
                                Response within 24–48 hours. No spam, ever.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
