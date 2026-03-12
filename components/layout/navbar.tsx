"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dMSans } from "@/app/ui/fonts";
import {Menu, X} from "lucide-react";

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
                    ? "border-[#0099cc]/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,20,51,0.18)]"
                    : "border-transparent bg-transparent"
            }`}
            style={{ backgroundColor: scrolled ? BRAND.navy : 'transparent' }}
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
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <Menu
                color="white"
                className="cursor-pointer"
                onClick={() => {
                    setIsOpen(prev => !prev)
                    console.log("Clicked")
                }}
            />
            {isOpen && (
                <div className="fixed bg-white inset-0 z-40 /*bg-white/10 backdrop-blur-xl shadow-2xl*/">
                    <div className="py-8 px-4 flex justify-end border-b border-b-gray-100">
                        <X
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                        <div>somethig </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const navlinks = [
    { text: "Services", url: "#" },
    { text: "Case Studies", url: "#" },
    { text: "About", url: "/about" },
    { text: "Blog", url: "#" },
    { text: "Shop", url: "#" },
];

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