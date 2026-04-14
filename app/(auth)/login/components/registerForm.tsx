'use client'
import {Icon, type IconName} from "@/icons/Icon";
import AuthInput from "@/app/(auth)/login/components/authInput";
import {type ChangeEvent, useState} from "react";
import {dMSans, syne} from "@/theme/fonts";
import {B} from "@/theme/Colors";

type RegisterFormProps = {
    onDone: () => void;
};

type RegisterFormState = {
    name: string;
    company: string;
    email: string;
    phone: string;
    password: string;
};

export default function RegisterForm({onDone}: RegisterFormProps) {
    const [form, setForm] = useState({name: "", company: "", email: "", phone: "", password: ""});
    const [focused, setFocused] = useState<keyof RegisterFormState | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const set = (k: keyof RegisterFormState) => (e: ChangeEvent<HTMLInputElement>) =>
        setForm((f) => ({...f, [k]: e.target.value}));

    if (submitted) {
        return (
            <div className="text-center py-10" style={{animation: "successReveal 0.7s cubic-bezier(0.34,1.56,0.64,1)"}}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                     style={{
                         background: "linear-gradient(135deg,#339a99,#4dbdbc)",
                         boxShadow: "0 8px 32px rgba(51,154,153,0.4)"
                     }}>
                    <Icon name="check" size={36} color="#fff"/>
                </div>
                <h3 className={`${syne.className} mb-3`}
                    style={{fontWeight: 800, fontSize: "1.6rem", color: "#fff"}}>Request
                    Submitted!</h3>
                <p className={`${dMSans.className} mb-6`}
                   style={{fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7}}>
                    Our team will review your request and send your login credentials within 1–2 business days.
                </p>
                <button className={`${dMSans.className}`}
                        onClick={onDone}
                        style={{
                            fontWeight: 600,
                            fontSize: 14,
                            color: B.electric,
                            background: "transparent",
                            border: "none",
                            cursor: "pointer"
                        }}>
                    ← Back to Sign In
                </button>
            </div>
        );
    }

    return (
        <div style={{animation: "fadeIn 0.5s ease"}}>
            <h2 className={`${syne.className} mb-2`} style={{
                fontWeight: 800,
                fontSize: "1.8rem",
                color: "#fff",
                letterSpacing: -0.5
            }}>Request Access</h2>
            <p className={`${dMSans.className} mb-7`} style={{fontSize: 15, color: "rgba(255,255,255,0.55)"}}>Portal
                access
                is for Gigasec clients. Complete the form and we&#39;ll set up your account.</p>

            {([
                {k: "name", l: "Full Name *", ph: "Your full name", type: "text", icon: "user"},
                {k: "company", l: "Company Name *", ph: "Your organisation", type: "text", icon: "shield"},
                {k: "email", l: "Work Email *", ph: "you@company.com", type: "email", icon: "mail"},
                {k: "phone", l: "Phone Number *", ph: "+234...", type: "tel", icon: "phone"},
            ] as Array<{k: keyof RegisterFormState; l: string; ph: string; type: string; icon: IconName}>).map(({k, l, ph, type, icon}) => (
                <AuthInput key={k} label={l} type={type} placeholder={ph} value={form[k]} onChange={set(k)} icon={icon}
                           focused={focused === k} onFocus={() => setFocused(k)} onBlur={() => setFocused(null)}/>
            ))}

            <button onClick={() => {
                if (form.name && form.email && form.company) setSubmitted(true);
            }}
                    className={`${syne.className} w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white border-none cursor-pointer transition-all duration-300 mt-2`}
                    style={{
                        fontWeight: 700,
                        fontSize: 16,
                        background: "linear-gradient(135deg,#339a99,#227a79)",
                        boxShadow: "0 8px 32px rgba(51,154,153,0.4)"
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 12px 40px rgba(51,154,153,0.55)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(51,154,153,0.4)";
                    }}>
                Submit Access Request <Icon name="arrow" size={18} color="#fff"/>
            </button>
        </div>
    );
}
