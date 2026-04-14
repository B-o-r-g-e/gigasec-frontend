'use client'
import {useState} from "react";
import {dMSans, syne} from "@/theme/fonts";
import AuthInput from "@/app/(auth)/login/components/authInput";
import {Icon} from "@/icons/Icon";
import {B} from "@/theme/Colors";

type ForgotFormProps = {
    onBack: () => void;
};

export default function ForgotForm({onBack}: ForgotFormProps) {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
    const [focused, setFocused] = useState(false);

    return (
        <div style={{animation: "fadeIn 0.5s ease"}}>
            <button onClick={onBack}
                    className={`${dMSans.className} flex items-center gap-2 border-none bg-transparent cursor-pointer mb-8 transition-colors duration-200`}
                    style={{fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500}}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                ← Back to Sign In
            </button>

            {!sent ? (
                <>
                    <h2 className={`${syne.className} mb-2`} style={{
                        fontWeight: 800,
                        fontSize: "1.8rem",
                        color: "#fff",
                        letterSpacing: -0.5
                    }}>Reset Password</h2>
                    <p className={`${dMSans.className} mb-8`}
                       style={{fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65}}>
                        Enter your registered email address and we&#39;ll send you a link to reset your password.
                    </p>
                    <AuthInput label="Email Address" type="email" placeholder="you@company.com" value={email}
                               onChange={e => setEmail(e.target.value)} icon="mail"
                               focused={focused} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
                    <button onClick={() => {
                        if (email) setSent(true);
                    }}
                            className={`${syne.className} w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white border-none cursor-pointer transition-all duration-300 mt-4`}
                            style={{
                                fontWeight: 700,
                                fontSize: 16,
                                background: "linear-gradient(135deg,#339a99,#227a79)",
                                boxShadow: "0 8px 32px rgba(51,154,153,0.4)"
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                        Send Reset Link <Icon name="arrow" size={18} color="#fff"/>
                    </button>
                </>
            ) : (
                <div className="text-center py-8"
                     style={{animation: "successReveal 0.7s cubic-bezier(0.34,1.56,0.64,1)"}}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                         style={{
                             background: "linear-gradient(135deg,#339a99,#4dbdbc)",
                             boxShadow: "0 8px 24px rgba(51,154,153,0.4)"
                         }}>
                        <Icon name="mail" size={28} color="#fff"/>
                    </div>
                    <h3 className={`${syne.className} mb-3`}
                        style={{fontWeight: 800, fontSize: "1.5rem", color: "#fff"}}>Check Your
                        Email</h3>
                    <p className={`${dMSans.className} mb-6`}
                       style={{fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7}}>
                        We&#39;ve sent a password reset link to <strong style={{color: B.electric}}>{email}</strong>.
                        Check
                        your inbox and spam folder.
                    </p>
                    <button className={`${dMSans.className}`}
                            onClick={onBack}
                            style={{
                                fontWeight: 600,
                                fontSize: 14,
                                color: B.electric,
                                background: "transparent",
                                border: "none",
                                cursor: "pointer"
                            }}>
                        ← Return to Sign In
                    </button>
                </div>
            )}
        </div>
    );
}
