'use client'
import Hero from "@/app/(marketing)/shop/components/Hero";
import TrustBar from "@/app/(marketing)/shop/components/TrustBar";
import ProductsGrid from "@/app/(marketing)/shop/components/ProductsGrid";
import BulkCTA from "@/app/(marketing)/shop/components/BulkCTA";
import Footer from "@/app/components/footer";

export default function ShopPageClient() {
    return (
        <>
            <Hero />
            <TrustBar />
            <ProductsGrid />
            <BulkCTA />
            <Footer />
        </>
    );
}
