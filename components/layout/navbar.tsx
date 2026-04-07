"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dMSans } from "@/theme/fonts";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { Icon } from "@/icons/Icon";
import { useCart } from "@/context/CartContext";

const BRAND = {
    navy: "#0d3d3d",
    electric: "#339a99",
    charcoal: "#1A1A2E",
    gray: "#6B7280",
};

const navlinks = [
    { text: "Home",         url: "/" },
    { text: "Services",     url: "/services" },
    { text: "Shop",         url: "/shop" },
    { text: "About",        url: "/about" },
    { text: "Blog",         url: "/blog" },
    { text: "Contact",      url: "/contact" },
];

/* ─────────────────────────────────────────────────────────────
   KEY FIX: initialise `scrolled` to true if the page is already
   scrolled when it first renders (e.g. on refresh mid-page).
   Also call handleScroll() *before* adding the event listener
   so the very first render is always correct.
───────────────────────────────────────────────────────────── */
function useScrolled(threshold = 40) {
    const [scrolled, setScrolled] = useState(() => {
        // During SSR `window` is undefined — default to false.
        if (typeof window === "undefined") return false;
        return window.scrollY > threshold;
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > threshold);

        // Sync immediately in case the lazy initial state above
        // ran on the server (where window is undefined).
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
}

/* ─── Mobile sidebar ──────────────────────────────────────── */
function Sidebar() {
    const [isOpen, setIsOpen]       = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive]   = useState(false);
    const pathname  = usePathname();
    const { cart }  = useCart();
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);

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
                        style={{ backgroundColor: "#ffffff" }}
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
                                <X size={18} />
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
                                                ? "text-[#339a99]"
                                                : "text-[#1a2332] hover:text-[#339a99]"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.text}
                                        <ChevronRight size={15} />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA row */}
                        <div className="flex flex-col gap-3 px-6 pb-6 pt-2">
                            <Link href="/cart" onClick={() => setIsOpen(false)}>
                                <div
                                    className="relative flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200"
                                    style={{
                                        background: "rgba(51,154,153,0.12)",
                                        border: "1px solid rgba(51,154,153,0.3)",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.background = "rgba(51,154,153,0.2)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.background =
                                            "rgba(51,154,153,0.12)")
                                    }
                                >
                                    <Icon name="cart" size={20} color="#339a99" />
                                    <span
                                        className={`${dMSans.className} text-[14px] font-semibold text-[#1a2332]`}
                                    >
                    Cart
                  </span>
                                    {cartCount > 0 && (
                                        <div
                                            className={`${dMSans.className} ml-auto flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white`}
                                            style={{ background: "#FF6600" }}
                                        >
                                            {cartCount}
                                        </div>
                                    )}
                                </div>
                            </Link>

                            <a
                                className={`${dMSans.className} inline-flex items-center justify-center gap-2 rounded-lg border-[1.5px] px-5 py-3 text-[14px] font-semibold tracking-[0.3px] no-underline transition-all duration-200 hover:border-[#339a99] hover:text-[#339a99]`}
                                href="/login"
                                onClick={() => setIsOpen(false)}
                            >
                                Log in
                                <ArrowUpRight size={15} />
                            </a>
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
                    ? "border-[#339a99]/20 shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent"
            }`}
            style={{
                backgroundColor: scrolled ? BRAND.navy : "rgba(13,61,61,0)",
                // backdropFilter: scrolled ? "blur(12px)" : "none",
                // WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
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
                <Sidebar />
            </div>
        </nav>
    );
}

/* ─── Desktop nav ─────────────────────────────────────────── */
export default function Navbar() {
    const scrolled  = useScrolled();
    const pathname  = usePathname();
    const { cart }  = useCart();
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);

    return (
        <nav
            id="hero"
            className={`fixed left-0 right-0 top-0 z-50 hidden border-b px-8 py-4 transition-all duration-300 ease-in-out md:block ${
                scrolled
                    ? "border-[#339a99]/20 shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent"
            }`}
            style={{
                /* Same fix as MobileMenu above */
                backgroundColor: scrolled ? BRAND.navy : "rgba(13,61,61,0)",
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
                    <div className={`${dMSans.className} flex gap-1 antialiased`}>
                        {navlinks.map((link) => {
                            const isCurrent = pathname === link.url;
                            return (
                                <Link
                                    key={link.text}
                                    href={link.url}
                                    className={`rounded-lg border px-4 py-2 text-[14px] font-medium tracking-[0.5px] transition-all duration-200 ${
                                        isCurrent
                                            ? "border-[#1a6b6b] bg-[#0b2f31] text-[#35c9c3]"
                                            : "border-transparent text-white/85 hover:text-[#339a99]"
                                    }`}
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-1">
                        <Link
                            href="/contact"
                            className={`${dMSans.className} rounded-[6px] bg-[#339a99] px-[22px] py-[10px] text-[14px] font-semibold tracking-[0.5px] text-white shadow-[0_4px_16px_rgba(51,154,153,0.35)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#227a79]`}
                        >
                            Get a Quote
                        </Link>

                        <Link href="/cart">
                            <div
                                className="relative ml-2 cursor-pointer rounded-md px-3 py-2 transition-all duration-200"
                                style={{
                                    background: "rgba(51,154,153,0.12)",
                                    border: "1px solid rgba(51,154,153,0.3)",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background = "rgba(51,154,153,0.2)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = "rgba(51,154,153,0.12)")
                                }
                            >
                                <Icon name="cart" size={20} color="#339a99" />
                                {cartCount > 0 && (
                                    <div
                                        className={`${dMSans.className} absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white`}
                                        style={{ background: "#FF6600" }}
                                    >
                                        {cartCount}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}