"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dMSans } from "@/app/ui/fonts";
import {ArrowUpRight, ChevronRight, Menu, X} from "lucide-react";
const navlinks = [
    { text: "Services", url: "#" },
    { text: "Case Studies", url: "#" },
    { text: "About", url: "/about" },
    { text: "Blog", url: "#" },
    { text: "Shop", url: "#" },
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
            className={`md:hidden fixed left-0 right-0 top-0 z-50 border-b px-8 py-4 transition-all duration-300 ease-in-out bg-[#0d3d3d] ${
                scrolled
                    ? "border-[#0099cc]/20 shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent"
            }`}
            style={{
                backgroundColor: "#0d3d3d",
                backdropFilter: scrolled ? "blur(12px)" : "none",
            }}
        >
            <div className="flex justify-between items-center">
                <div className="inline-flex items-center rounded-lg bg-white/90 px-3 py-2 backdrop-blur-sm">
                    <Link className="" href="/">
                        <Image
                            src="/logo.jpeg"
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
    useEffect(() => {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = isOpen ? "hidden" : "auto";

        return () => {
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
                    console.log("Clicked")
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
                        className={`absolute right-0 top-0 h-full w-80 bg-white transition-transform duration-500 ease-out backdrop-blur-sm ${
                            isActive ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <div className="py-8 px-8 flex justify-end border-b border-b-gray-100 mb-5">
                            <X
                                className="cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                        <div className="flex flex-col px-5 mb-10">
                            {navlinks.map((link) => (
                                <Link
                                    key={link.text}
                                    href={link.url}
                                    className="py-6 font-bold tracking-[0.5px] transition-colors duration-200 hover:text-[#0099cc] border-b flex justify-between items-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.text}
                                    <ChevronRight size={15} />
                                </Link>
                            ))}
                        </div>
                        <div className="px-6">
                            <a
                                className="inline-flex items-center gap-2 rounded-full border-[1.5px]  px-5 py-3.75 font-[DM_Sans] text-[15px] font-semibold tracking-[0.3px] no-underline transition-all duration-200 hover:border-[#339a99] hover:text-[#339a99]"
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

const BRAND = {
    navy: "#0d3d3d",
    electric: "#339a99",
    charcoal: "#1A1A2E",
    gray: "#6B7280",
};

export default function Navbar() {
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
            id="hero"
            className={`hidden md:block fixed left-0 right-0 top-0 z-50 border-b px-8 py-4 transition-all duration-300 ease-in-out ${
                scrolled
                        ? "border-[#0099cc]/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent bg-transparent"
            }`}
            style={{ backgroundColor: scrolled ? BRAND.navy : 'transparent' }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between ">
                <div className="inline-flex items-center rounded-lg bg-white/90 px-3 py-2 backdrop-blur-sm">
                    <Link className="" href="/">
                        <Image
                            src="/logo.jpeg"
                            width={96}
                            height={1}
                            alt="Gigasec Logo"
                        />
                    </Link>
                </div>

                <div className="md:flex hidden items-center gap-10">
                    <div className={`${dMSans.className} flex gap-10 antialiased`}>
                        {navlinks.map((link) => (
                            <Link
                                key={link.text}
                                href={link.url}
                                className="text-[14px] font-medium tracking-[0.5px] text-white/85 transition-colors duration-200 hover:text-[#0099cc]"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="#contact"
                        className={`${dMSans.className} rounded-[6px] bg-[#339a99] px-[22px] py-[10px] text-[14px] font-semibold tracking-[0.5px] text-white shadow-[0_4px_16px_rgba(0,153,204,0.35)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#007aaa]`}
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
}
