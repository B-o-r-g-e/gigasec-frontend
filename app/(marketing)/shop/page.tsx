import Hero from "@/app/(marketing)/shop/components/Hero";
import TrustBar from "@/app/(marketing)/shop/components/TrustBar";
import ProductsGrid from "@/app/(marketing)/shop/components/ProductsGrid";
import BulkCTA from "@/app/(marketing)/shop/components/BulkCTA";
import MiniFooter from "@/components/layout/MiniFooter";

export default function ShopPage(){
    return (
        <>
            <Hero />
            <TrustBar />
            <ProductsGrid />
            <BulkCTA />
            <MiniFooter />
        </>
    )
}
