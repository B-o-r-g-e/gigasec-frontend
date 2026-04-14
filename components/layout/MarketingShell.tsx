'use client'
import Navbar, {MobileMenu} from "@/components/layout/navbar";
import {CartProvider} from "@/context/CartContext";

export default function MarketingShell({children}: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <div className="relative overflow-x-hidden">
                <div><Navbar/></div>
                <MobileMenu/>
                <div id="marketing-scroll-container" className="grow overflow-x-hidden">
                    {children}
                </div>
            </div>
        </CartProvider>
    );
}
