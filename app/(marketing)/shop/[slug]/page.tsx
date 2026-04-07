import {PRODUCTS} from "@/app/(marketing)/shop/components/products";
import {slugify} from "@/app/(marketing)/blog/[slug]/components/functions";
import ProductHero from "@/app/(marketing)/shop/[slug]/components/ProductHero";
import SpecsTabs from "@/app/(marketing)/shop/[slug]/components/SpecsTabs";
import RelatedProducts from "@/app/(marketing)/shop/[slug]/components/RelatedProducts";
import MiniFooter from "@/components/layout/MiniFooter";

export default async function individualProduct({params}: { params: { slug: string } }) {
    const {slug} = await params;
    const currentProduct = PRODUCTS.find(product => slugify(product.name) === slug)
    if (!currentProduct) {
        return (
            <div>Product not Available</div>
        )
    }

    const sameCategory = PRODUCTS.filter(product => product.cat === currentProduct.cat && product.id !== currentProduct.id)
    const related = sameCategory.map(relatedProduct => {
        const matchCount = relatedProduct.tags.filter(tag =>
            currentProduct.tags.includes(tag)
        ).length

        return {...relatedProduct, matchCount}
    })


    return (
        <section>
            <ProductHero currentProduct={currentProduct}/>
            <SpecsTabs currentProduct={currentProduct} />
            <RelatedProducts relatedProduct={related} />
            <MiniFooter />
        </section>
    )
}