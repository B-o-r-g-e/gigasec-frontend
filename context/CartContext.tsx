'use client'
import { createContext, useContext, useEffect, useState } from "react";

import type { Product } from "@/components/shop/products";

type CartItem = Product & {
    qty: number;
};

type CartContextValue = {
    cart: CartItem[];
    addToCart: (product: Product, qty?: number) => void;
    removeFromCart: (id: CartItem["id"]) => void;
    updateQty: (id: CartItem["id"], qty: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window === "undefined") return [];
        try {
            const raw = window.localStorage.getItem("cartItem");
            return raw ? (JSON.parse(raw) as CartItem[]) : [];
        } catch {
            return [];
        }
    });

    const addToCart = (product: Product, qty = 1) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + qty }
                        : item
                );
            }

            return [...prev, { ...product, qty }];
        });
    };

    const removeFromCart = (id: CartItem["id"]) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQty = (id: CartItem["id"], qty: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cartItem");
    };

    useEffect(() => {
        try {
            window.localStorage.setItem("cartItem", JSON.stringify(cart));
        } catch {
            // ignore write failures (e.g., private mode)
        }
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

// custom hook (VERY IMPORTANT)
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
