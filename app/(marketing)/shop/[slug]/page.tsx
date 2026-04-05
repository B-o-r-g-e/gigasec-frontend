import {PRODUCTS} from "@/app/(marketing)/shop/components/products";
import {slugify} from "@/app/(marketing)/blog/[slug]/components/functions";
import ProductHero from "@/app/(marketing)/shop/[slug]/components/ProductHero";

export default async function individualProduct({params}: { params: { slug: string } }) {
    const {slug} = await params;
    const currentProduct = PRODUCTS.find(product => slugify(product.name) === slug)
    if (!currentProduct) {
        return (
            <div>Product not Available</div>
        )
    }
    // console.log(currentProduct)

    return (
        <section>
            <ProductHero currentProduct={currentProduct}/>
        </section>
    )
}