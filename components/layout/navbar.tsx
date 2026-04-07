"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dMSans } from "@/theme/fonts";
import {ArrowUpRight, ChevronRight, Menu, X} from "lucide-react";
import {Icon} from "@/icons/Icon";
import {useCart} from "@/context/CartContext";

const BRAND = {
    navy: "#0d3d3d",
    electric: "#339a99",
    charcoal: "#1A1A2E",
    gray: "#6B7280",
};
const navlinks = [
    { text: "Home", url: "/" },
    { text: "Services", url: "/services" },
    { text: "Shop", url: "/shop" },
    { text: "About", url: "/about" },
    { text: "Blog", url: "/blog" },
    { text: "Contact", url: "/contact" },
];

export function MobileMenu() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll(); // run once on mount

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`md:hidden fixed left-0 right-0 top-0 z-50 border-b px-8 py-4 transition-all duration-300 ease-in-out ${
                scrolled
                    ? "border-[#0099cc]/20 shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent bg-transparent"
            }`}
            style={{
                backgroundColor: scrolled ? BRAND.navy : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
            }}
        >
            <div className="flex justify-between items-center">
                <div className="inline-flex items-center rounded-lg px-3 py-2 backdrop-blur-sm">
                    <Link className="" href="/">
                        <Image
                            src="/gigasec white logo.png"
                            width={96}
                            height={1}
                            alt="Gigasec Logo"
                        />
                    </Link>
                </div>

                <Sidebar />
            </div>
        </nav>
    )
}

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const {cart} = useCart();
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);
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

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            const raf = requestAnimationFrame(() => {
                setIsActive(true);
            });
            return () => cancelAnimationFrame(raf);
        }

        setIsActive(false);
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 450);

        return () => clearTimeout(timeout);
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <Menu
                color="white"
                className="cursor-pointer"
                onClick={() => {
                    setIsOpen((prev) => !prev)
                }}
            />
            {isVisible && (
                <div
                    className={`fixed inset-0 z-40 transition-opacity duration-500 ease-out ${
                        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div
                        className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className={`absolute right-0 top-0 h-full w-[86vw] max-w-[360px] bg-white opacity-100 transition-transform duration-500 ease-out shadow-2xl ${
                            isActive ? "translate-x-0" : "translate-x-full"
                        }`}
                        style={{ backgroundColor: "#ffffff", opacity: 1 }}
                    >
                        <div className="px-6 py-5 flex items-center justify-between border-b border-b-gray-100">
                            <Link className="inline-flex items-center" href="/" onClick={() => setIsOpen(false)}>
                                <Image
                                    src="/gigasec white logo.png"
                                    width={96}
                                    height={1}
                                    alt="Gigasec Logo"
                                />
                            </Link>
                            <button
                                className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <div className="flex flex-col px-6 py-4">
                            {navlinks.map((link) => {
                                const isCurrent = pathname === link.url;
                                return (
                                <Link
                                    key={link.text}
                                    href={link.url}
                                    className={`py-4 text-[15px] font-semibold tracking-[0.2px] transition-colors duration-200 border-b flex justify-between items-center ${
                                        isCurrent ? "text-[#0099cc]" : "text-[#1a2332] hover:text-[#0099cc]"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.text}
                                    <ChevronRight size={15} />
                                </Link>
                                );
                            })}
                        </div>
                        <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
                            <Link href="/cart" onClick={() => setIsOpen(false)}>
                                <div className="w-full relative flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200"
                                     style={{ background: "rgba(51,154,153,0.12)", border: "1px solid rgba(51,154,153,0.3)" }}
                                     onMouseEnter={e => e.currentTarget.style.background = "rgba(51,154,153,0.2)"}
                                     onMouseLeave={e => e.currentTarget.style.background = "rgba(51,154,153,0.12)"}>
                                    <Icon name="cart" size={20} color="#339a99" />
                                    <span className={`${dMSans.className} text-[14px] font-semibold text-[#1a2332]`}>
                                        Cart
                                    </span>
                                    {cartCount > 0 && (
                                        <div className={`${dMSans.className} ml-auto w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-[11px]`}
                                             style={{ background: "#FF6600", animation: "cartBounce 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
                                            {cartCount}
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <a
                                className="inline-flex items-center justify-center gap-2 rounded-lg border-[1.5px] px-5 py-3 font-[DM_Sans] text-[14px] font-semibold tracking-[0.3px] no-underline transition-all duration-200 hover:border-[#339a99] hover:text-[#339a99]"
                                href="#"
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
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const {cart} = useCart();
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll(); // run once on mount

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <nav
            id="hero"
            className={`hidden md:block fixed left-0 right-0 top-0 z-50 border-b px-8 py-4 transition-all duration-300 ease-in-out ${
                scrolled
                        ? "border-[#0099cc]/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent bg-transparent"
            }`}
            style={{ backgroundColor: scrolled ? BRAND.navy : 'transparent' }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between ">
                <div className="inline-flex items-center rounded-lg  py-2 backdrop-blur-sm">
                    <Link className="" href="/">
                        <Image
                            src="/gigasec white logo.png"
                            width={96}
                            height={1}
                            alt="Gigasec Logo"
                        />
                    </Link>
                </div>

                <div className="md:flex hidden items-center gap-1">
                    <div className={`${dMSans.className} flex gap-1 antialiased`}>
                        {navlinks.map((link) => {
                            const isCurrent = pathname === link.url;
                            return (
                            <Link
                                key={link.text}
                                href={link.url}
                                className={`text-[14px] font-medium tracking-[0.5px] transition-all duration-200 px-4 py-2 rounded-lg border ${
                                    isCurrent
                                        ? "text-[#35c9c3] bg-[#0b2f31] border-[#1a6b6b]"
                                        : "text-white/85 border-transparent hover:text-[#0099cc]"
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
                            className={`${dMSans.className} rounded-[6px] bg-[#339a99] px-[22px] py-[10px] text-[14px] font-semibold tracking-[0.5px] text-white shadow-[0_4px_16px_rgba(0,153,204,0.35)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#007aaa]`}
                        >
                            Get a Quote
                        </Link>
                        <Link href="/cart">
                            <div className="relative ml-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200"
                                 style={{ background: "rgba(51,154,153,0.12)", border: "1px solid rgba(51,154,153,0.3)" }}
                                 onMouseEnter={e => e.currentTarget.style.background = "rgba(51,154,153,0.2)"}
                                 onMouseLeave={e => e.currentTarget.style.background = "rgba(51,154,153,0.12)"}>
                                <Icon name="cart" size={20} color="#339a99" />
                                {cartCount > 0 && (
                                    <div className={`${dMSans.className} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-[11px]`}
                                         style={{ background: "#FF6600", animation: "cartBounce 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
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
