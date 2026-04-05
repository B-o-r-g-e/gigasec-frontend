'use client'
import CartHeader from "@/app/(marketing)/cart/components/Header";
import {useCart} from "@/context/CartContext";
import CartMain from "@/app/(marketing)/cart/components/CartMain";
import {dMSans} from "@/theme/fonts";
import Suggested from "@/app/(marketing)/cart/components/Suggested";
import MiniFooter from "@/components/layout/MiniFooter";

export default function CartPage() {
    const {cart } = useCart();
    const cartCount = cart.reduce((total, item) => total + item.qty, 0)

    return (
        <div className={`${dMSans.className} overflow-x-hidden`}>
            <CartHeader itemCount={cartCount} />
            <CartMain />
            <Suggested />
            <MiniFooter />
        </div>
    )
}