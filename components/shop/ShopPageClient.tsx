'use client'
import Hero from "@/components/shop/Hero";
import TrustBar from "@/components/shop/TrustBar";
import ProductsGrid from "@/components/shop/ProductsGrid";
import BulkCTA from "@/components/shop/BulkCTA";
import Footer from "@/components/home/footer";

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
