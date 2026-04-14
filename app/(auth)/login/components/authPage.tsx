'use client'
import {useState} from "react";
import {Icon, type IconName} from "@/icons/Icon";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import {B} from "@/theme/Colors";
import LoginForm from "@/app/(auth)/login/components/loginForm";
import RegisterForm from "@/app/(auth)/login/components/registerForm";
import ForgotForm from "@/app/(auth)/login/components/forgotForm";
import {useAuth} from "@/context/AuthContext";

export default function AuthPage() {
    const [tab, setTab] = useState("login"); // login | register | forgot
    const { login } = useAuth();
    const featureItems: Array<{icon: IconName; text: string}> = [
        {icon: "ticket", text: "Submit and track support tickets"},
        {icon: "cart", text: "View and manage your orders"},
        {icon: "shield", text: "Access system documentation"},
        {icon: "bell", text: "Real-time project status updates"},
    ];

    const handleLogin = () => {
        login
    }

    return (
        <div className="min-h-screen flex"
             style={{background: "linear-gradient(145deg,#061e1e 0%,#0d3d3d 55%,#1a5958 100%)"}}>
            {/* Left — branding panel */}
            <div
                className="hidden lg:flex flex-col justify-between w-[480px] flex-shrink-0 px-12 py-16 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none"
                     style={{
                         backgroundImage: "linear-gradient(rgba(51,154,153,0.09) 1px,transparent 1px),linear-gradient(90deg,rgba(51,154,153,0.09) 1px,transparent 1px)",
                         backgroundSize: "56px 56px",
                         animation: "gridDrift 25s linear infinite"
                     }}/>
                <div className="absolute rounded-full pointer-events-none"
                     style={{
                         right: "-20%",
                         top: "20%",
                         width: 500,
                         height: 500,
                         background: "radial-gradient(circle,rgba(51,154,153,0.18) 0%,transparent 65%)",
                         animation: "orbPulse 7s ease-in-out infinite"
                     }}/>

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                         style={{
                             background: "linear-gradient(135deg,#339a99,#0d3d3d)",
                             boxShadow: "0 0 24px rgba(51,154,153,0.5)"
                         }}>
                        <Icon name="shield" size={24} color="#fff"/>
                    </div>
                    <div>
                        <div className={`${syne.className}`}
                             style={{
                                 fontWeight: 800,
                                 fontSize: 20,
                                 color: "#fff",
                                 letterSpacing: 1,
                                 lineHeight: 1
                             }}>GIGASEC
                        </div>
                        <div className={`${spaceMono.className}`}
                             style={{fontSize: 9, color: B.electric, letterSpacing: 2.5}}>CLIENT
                            PORTAL
                        </div>
                    </div>
                </div>

                {/* Hero text */}
                <div className="relative z-10">
                    <h1 className={`${syne.className} mb-6`}
                        style={{
                            fontWeight: 800,
                            fontSize: "2.8rem",
                            color: "#fff",
                            lineHeight: 1.1,
                            letterSpacing: -1
                        }}>
                        Your Security,<br/>
                        <span style={{
                            background: "linear-gradient(90deg,#339a99,#4dbdbc)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
              Managed Online.
            </span>
                    </h1>
                    <p className={`${dMSans.className}`}
                       style={{
                           fontSize: 16,
                           lineHeight: 1.75,
                           color: "rgba(255,255,255,0.65)",
                           marginBottom: 32
                       }}>
                        Track your projects, manage support tickets, view your orders, and access system documentation —
                        all in one place.
                    </p>
                    <div className="flex flex-col gap-4">
                        {featureItems.map(item => (
                            <div key={item.text} className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                     style={{background: "rgba(51,154,153,0.15)"}}>
                                    <Icon name={item.icon} size={18} color={B.electric}/>
                                </div>
                                <span className={`${dMSans.className}`}
                                      style={{
                                          fontSize: 14,
                                          color: "rgba(255,255,255,0.8)"
                                      }}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom contact */}
                <div className="relative z-10">
                    <div className={`${dMSans.className}`}
                         style={{fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 6}}>Need
                        access? Contact us:
                    </div>
                    <div className={`${dMSans.className}`}
                         style={{fontSize: 14, color: B.electric}}>hello@gigasecintl.com
                    </div>
                </div>
            </div>

            {/* Right — auth form */}
            <div className="flex-1 flex items-center justify-center px-6 py-16">
                <div className="w-full max-w-[440px]">
                    {/* Tabs */}
                    {tab !== "forgot" && (
                        <div className="flex mb-8 rounded-xl overflow-hidden"
                             style={{background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)"}}>
                            {[{id: "login", label: "Sign In"}, {id: "register", label: "Register"}].map(t => (
                                <button key={t.id} onClick={() => setTab(t.id)}
                                        className={`${dMSans.className} flex-1 py-4 border-none cursor-pointer transition-all duration-300`}
                                        style={{
                                            fontWeight: 700,
                                            fontSize: 15,
                                            background: tab === t.id ? B.electric : "transparent",
                                            color: tab === t.id ? "#fff" : "rgba(255,255,255,0.55)",
                                            boxShadow: tab === t.id ? "0 4px 16px rgba(51,154,153,0.4)" : "none"
                                        }}>
                                    {t.label}
                                </button>
                            ))}

                        </div>
                    )}

                    {tab === "login" &&
                        <LoginForm onLogin={handleLogin} onForgot={() => setTab("forgot")}/>}
                    {tab === "register" && <RegisterForm onDone={() => setTab("login")}/>}
                    {tab === "forgot" && <ForgotForm onBack={() => setTab("login")}/>}
                </div>
            </div>
        </div>
    );
}
