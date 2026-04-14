'use client'
import {type ChangeEvent, useState} from "react";
import {Icon} from "@/icons/Icon";
import {dMSans, syne} from "@/theme/fonts";
import {B} from "@/theme/Colors";
import AuthInput from "@/app/(auth)/login/components/authInput";
import {useRouter, useSearchParams} from "next/navigation";
import {useAuth} from "@/context/AuthContext";

type LoginFormProps = {
    onLogin: () => void;
    onForgot: () => void;
};

type LoginFormState = {
    email: string;
    password: string;
};

export default function LoginForm({onLogin, onForgot}: LoginFormProps) {
    const [form, setForm] = useState({email: "", password: ""});
    const [showPw, setShowPw] = useState(false);
    const [focused, setFocused] = useState<keyof LoginFormState | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { login } = useAuth();

    const set = (k: keyof LoginFormState) => (e: ChangeEvent<HTMLInputElement>) =>
        setForm((f) => ({...f, [k]: e.target.value}));

    const searchParams = useSearchParams();
    const router = useRouter();

    const redirect = searchParams.get("redirect") || "/";

    const handleLogin = () => {
        if (!form.email || !form.password) {
            setError("Please fill in all fields.");
            return;
        }
        setLoading(true);
        setError("");
        setTimeout(() => {
            setLoading(false);
            onLogin();
        }, 1500);

        login()

        router.push(redirect)
    };

    return (
        <div style={{animation: "fadeIn 0.5s ease"}}>
            <h2 className={`${syne.className} mb-2`}
                style={{fontWeight: 800, fontSize: "1.8rem", color: "#fff", letterSpacing: -0.5}}>Welcome Back</h2>
            <p className={`${dMSans.className} mb-8`} style={{fontSize: 15, color: "rgba(255,255,255,0.55)"}}>Sign in to
                your Gigasec client portal.</p>

            <AuthInput label="Email Address" type="email" placeholder="you@company.com" value={form.email}
                       onChange={set("email")} icon="mail"
                       focused={focused === "email"} onFocus={() => setFocused("email")}
                       onBlur={() => setFocused(null)}/>

            <AuthInput label="Password" type={showPw ? "text" : "password"} placeholder="Your password"
                       value={form.password} onChange={set("password")} icon="lock"
                       rightEl={
                           <button onClick={() => setShowPw(s => !s)}
                                   className="border-none bg-transparent cursor-pointer">
                               <Icon name={showPw ? "eyeOff" : "eye"} size={17} color="rgba(255,255,255,0.4)"/>
                           </button>
                       }
                       focused={focused === "password"} onFocus={() => setFocused("password")}
                       onBlur={() => setFocused(null)}/>

            {error && <p className={`${dMSans.className} mb-4 text-[13px]`} style={{color: "#f87171"}}>{error}</p>}

            <div className="flex justify-between items-center mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded" style={{accentColor: B.electric}}/>
                    <span className={`${dMSans.className}`}
                          style={{fontSize: 13, color: "rgba(255,255,255,0.6)"}}>Remember me</span>
                </label>
                <button onClick={onForgot}
                        className={`${dMSans.className} border-none bg-transparent cursor-pointer transition-colors duration-200`}
                        style={{fontSize: 13, color: B.electric, fontWeight: 600}}
                        onMouseEnter={e => e.currentTarget.style.color = B.bright}
                        onMouseLeave={e => e.currentTarget.style.color = B.electric}>
                    Forgot password?
                </button>
            </div>

            <button onClick={handleLogin} disabled={loading}
                    className={`${syne.className} w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white border-none cursor-pointer transition-all duration-300`}
                    style={{
                        fontWeight: 700,
                        fontSize: 16,
                        background: loading ? "#227a79" : "linear-gradient(135deg,#339a99,#227a79)",
                        boxShadow: "0 8px 32px rgba(51,154,153,0.4)"
                    }}
                    onMouseEnter={e => {
                        if (!loading) {
                            e.currentTarget.style.transform = "scale(1.02)";
                            e.currentTarget.style.boxShadow = "0 12px 40px rgba(51,154,153,0.55)";
                        }
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(51,154,153,0.4)";
                    }}
            >
                {loading ? (
                    <>
                        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent"
                             style={{animation: "spin 0.8s linear infinite"}}/>
                        Signing In...</>
                ) : (
                    <><Icon name="lock" size={18} color="#fff"/> Sign In to Portal</>
                )}
            </button>

            <p className={`${dMSans.className} text-center mt-6`}
               style={{fontSize: 13, color: "rgba(255,255,255,0.4)"}}>
                Don&#39;t have an account?{" "}
                <span style={{color: B.electric, cursor: "pointer", fontWeight: 600}}>Contact us to get access</span>
            </p>
        </div>
    );
}
