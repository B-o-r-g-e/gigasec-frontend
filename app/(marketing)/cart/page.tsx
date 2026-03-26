'use client'
import CartHeader from "@/components/cart/Header";
import {useCart} from "@/context/CartContext";
import CartMain from "@/components/cart/CartMain";
import {dMSans} from "@/app/ui/fonts";
import Suggested from "@/components/cart/Suggested";

export default function CartPage() {
    const {cart } = useCart();
    const cartCount = cart.reduce((total, item) => total + item.qty, 0)

    return (
        <div className={`${dMSans.className} overflow-x-hidden`}>
            <CartHeader itemCount={cartCount} />
            <CartMain />
            <Suggested />
        </div>
    )
}