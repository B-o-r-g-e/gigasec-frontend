"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {dMSans} from "@/theme/fonts";
import {ArrowUpRight, ChevronRight, Menu, X} from "lucide-react";
import {Icon} from "@/icons/Icon";
import {useCart} from "@/context/CartContext";
import {useAuth} from "@/context/AuthContext";
import {B} from "@/theme/Colors";

const navlinks = [
    {text: "Home", url: "/"},
    {text: "Services", url: "/services"},
    {text: "Shop", url: "/shop"},
    {text: "About", url: "/about"},
    {text: "Blog", url: "/blog"},
    // {text: "Contact", url: "/contact"},
];

function useScrolled(threshold = 40) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        // ✅ Run immediately on mount
        handleScroll();

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return scrolled;
}

/* ─── Mobile sidebar ──────────────────────────────────────── */
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const {isLoggedIn, logout} = useAuth();
    const {cart} = useCart();
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);

    const handleAuthAction = () => {
        if (isLoggedIn) {
            logout();
            setIsOpen(false);
            return;
        }
        router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
        setIsOpen(false);
    };

    // Lock body scroll while sidebar is open
    useEffect(() => {
        document.documentElement.style.overflow = isOpen ? "hidden" : "";
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = isOpen ? "hidden" : "auto";
        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "auto";
        };
    }, [isOpen]);

    // Animate in / out
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            const raf = requestAnimationFrame(() => setIsActive(true));
            return () => cancelAnimationFrame(raf);
        }
        setIsActive(false);
        const timeout = setTimeout(() => setIsVisible(false), 450);
        return () => clearTimeout(timeout);
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <Menu
                color="white"
                className="cursor-pointer"
                onClick={() => setIsOpen((p) => !p)}
            />

            {isVisible && (
                <div
                    className={`fixed inset-0 z-40 transition-opacity duration-500 ease-out ${
                        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer */}
                    <div
                        className={`absolute right-0 top-0 h-full w-[86vw] max-w-[360px] shadow-2xl transition-transform duration-500 ease-out ${
                            isActive ? "translate-x-0" : "translate-x-full"
                        }`}
                        style={{backgroundColor: "#ffffff"}}
                    >
                        {/* Drawer header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                <Image
                                    src="/gigasec white logo.png"
                                    width={96}
                                    height={1}
                                    alt="Gigasec Logo"
                                />
                            </Link>
                            <button
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={18}/>
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col px-6 py-4">
                            {navlinks.map((link) => {
                                const isCurrent = pathname === link.url;
                                return (
                                    <Link
                                        key={link.text}
                                        href={link.url}
                                        className={`flex items-center justify-between border-b py-4 text-[15px] font-semibold tracking-[0.2px] transition-colors duration-200 ${
                                            isCurrent
                                                ? "text-[#00CCCC]"
                                                : "text-[#333333] hover:text-[#00CCCC]"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.text}
                                        <ChevronRight size={15}/>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Action cluster */}
                        <div className="px-6 pb-6 pt-2">
                            <div className="rounded-xl border border-[#e8edf3] bg-[#f8fbfd] p-2.5">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className={`${dMSans.className} mb-2 inline-flex w-full items-center justify-center rounded-lg bg-[#00CCCC] px-4 py-3 text-[14px] font-semibold tracking-[0.3px] text-white no-underline transition-all duration-200 hover:bg-[#00B8B8]`}
                                >
                                    Get a Quote
                                </Link>

                                <div className="grid grid-cols-2 gap-2">
                                    <Link href="/cart" onClick={() => setIsOpen(false)}>
                                        <div
                                            className="relative flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-3 transition-all duration-200"
                                            style={{
                                                background: "rgba(0,204,204,0.12)",
                                                border: "1px solid rgba(0,204,204,0.3)",
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.background = "rgba(0,204,204,0.2)")
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.background = "rgba(0,204,204,0.12)")
                                            }
                                        >
                                            <Icon name="cart" size={18} color="#00CCCC"/>
                                            <span className={`${dMSans.className} text-[13px] font-semibold text-[#333333]`}>
                                                Cart
                                            </span>
                                            {cartCount > 0 && (
                                                <div
                                                    className={`${dMSans.className} absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white`}
                                                    style={{background: "#00B8B8"}}
                                                >
                                                    {cartCount}
                                                </div>
                                            )}
                                        </div>
                                    </Link>

                                    <button
                                        onClick={handleAuthAction}
                                        className={`${dMSans.className} inline-flex items-center justify-center gap-2 rounded-lg border border-[#00CCCC]/45 bg-white px-3 py-3 text-[13px] font-semibold tracking-[0.3px] text-[#00AFAF] transition-all duration-200 hover:bg-[#00CCCC]/10`}
                                    >
                                        <Icon name={isLoggedIn ? "signOut" : "signIn"} size={16} color="currentColor"/>
                                        {isLoggedIn ? "Sign Out" : "Log In"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ─── Mobile nav wrapper ──────────────────────────────────── */
export function MobileMenu() {
    const scrolled = useScrolled();

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 border-b px-8 py-4 transition-all duration-300 ease-in-out md:hidden ${
                scrolled
                    ? "border-[#00CCCC]/20 shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent"
            }`}
            style={{
                backgroundColor: scrolled ? B.navy : "rgba(51,51,51,0)"
            }}
        >
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/gigasec white logo.png"
                        width={96}
                        height={1}
                        alt="Gigasec Logo"
                    />
                </Link>
                <Sidebar/>
            </div>
        </nav>
    );
}

/* ─── Desktop nav ─────────────────────────────────────────── */
export default function Navbar() {
    const scrolled = useScrolled();
    const {cart} = useCart();
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);

    const {logout, isLoggedIn} = useAuth()
    const router = useRouter()
    const pathname = usePathname();

    const handleLogout = () => {
        logout()
    }

    const handleLogIn = () => {
        if (!isLoggedIn) {
            router.push(`/login?redirect=${encodeURIComponent(pathname)}`)
        }
    }

    return (
        <nav
            id="hero"
            className={`fixed left-0 right-0 top-0 z-50 hidden border-b px-8 py-4 transition-all duration-300 ease-in-out md:block ${
                scrolled
                    ? "border-[#00CCCC]/20 shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent"
            }`}
            style={{
                /* Same fix as MobileMenu above */
                backgroundColor: scrolled ? B.navy : "rgba(51,51,51,0)",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
            }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/gigasec white logo.png"
                        width={96}
                        height={1}
                        alt="Gigasec Logo"
                    />
                </Link>

                {/* Links + CTA */}
                <div className="hidden items-center gap-1 md:flex">
                    <div className={`${dMSans.className} flex gap-0.5 lg:gap-1 antialiased`}>
                        {navlinks.map((link) => {
                            const isCurrent = pathname === link.url;
                            return (
                                <Link
                                    key={link.text}
                                    href={link.url}
                                    className={`rounded-lg border px-4 py-2 text-[14px] font-medium tracking-[0.5px] transition-all duration-200 ${
                                        isCurrent
                                            ? "border-[#00B8B8] bg-[rgba(0,204,204,0.14)] text-[#66E0E0]"
                                            : "border-transparent text-white/85 hover:text-[#00CCCC]"
                                    }`}
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="ml-3 flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-2 py-1.5">
                        <Link
                            href="/contact"
                            className={`${dMSans.className} rounded-lg bg-[#00CCCC] px-4 py-2.5 text-[13px] font-semibold tracking-[0.3px] text-white shadow-[0_4px_16px_rgba(0,204,204,0.32)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#00B8B8]`}
                        >
                            Get a Quote
                        </Link>
                        <Link href="/cart">
                            <div
                                className="relative cursor-pointer rounded-lg px-2.5 py-2 transition-all duration-200"
                                style={{
                                    background: "rgba(0,204,204,0.12)",
                                    border: "1px solid rgba(0,204,204,0.3)",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background = "rgba(0,204,204,0.2)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = "rgba(0,204,204,0.12)")
                                }
                            >
                                <Icon name="cart" size={19} color="#00CCCC"/>
                                {cartCount > 0 && (
                                    <div
                                        className={`${dMSans.className} absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white`}
                                        style={{background: "#00B8B8"}}
                                    >
                                        {cartCount}
                                    </div>
                                )}
                            </div>
                        </Link>

                        <div className="h-6 w-px bg-white/20"/>

                        {isLoggedIn ? (
                            <button
                                className={`${dMSans.className} flex items-center justify-center gap-2 rounded-lg border border-[#00CCCC]/45 bg-transparent px-3.5 py-2 text-[13px] font-semibold tracking-[0.3px] text-[#8CF6F6] transition-all duration-200 hover:border-[#00CCCC] hover:bg-[#00CCCC]/12 hover:text-[#C7FFFF]`}
                                onClick={handleLogout}
                            >
                                <Icon name="signOut" size={16} color="currentColor"/>
                                Sign Out
                            </button>
                        ) : (
                            <button
                                className={`${dMSans.className} flex items-center justify-center gap-2 rounded-lg border border-[#00CCCC]/45 bg-transparent px-3.5 py-2 text-[13px] font-semibold tracking-[0.3px] text-[#8CF6F6] transition-all duration-200 hover:border-[#00CCCC] hover:bg-[#00CCCC]/12 hover:text-[#C7FFFF]`}
                                onClick={handleLogIn}
                            >
                                <Icon name="signIn" size={16} color="currentColor"/>
                                Log In
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
