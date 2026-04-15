import {SERVICES, type ServiceData} from "@/app/(marketing)/services/components/services";
import {slugify} from "@/app/(marketing)/blog/[slug]/components/functions";
import ESHero from "@/app/(marketing)/services/[slug]/components/eachServiceHero";
import Overview from "@/app/(marketing)/services/[slug]/components/Overview";
import Features from "@/app/(marketing)/services/[slug]/components/Features";
import Process from "@/app/(marketing)/services/[slug]/components/Process";
import Industries from "@/app/(marketing)/services/[slug]/components/industries";
import Testimonial from "@/app/(marketing)/services/[slug]/components/Testimonials";
import FAQ from "@/app/(marketing)/services/[slug]/components/FAQ";
import RelatedServices from "@/app/(marketing)/services/[slug]/components/relatedServices";
import QuoteCTA from "@/app/(marketing)/services/[slug]/components/QuoteCTA";
import MiniFooter from "@/components/layout/MiniFooter";

export default async function EachService({params}: { params: { slug: string } }) {
    const {slug} = await params;
    const relatedServices: ServiceData[] = []
    const currentService = SERVICES.find((serv) => slugify(serv.title) === slug)

    if (!currentService) {
        return <div>Service not found</div>
    }

    SERVICES.forEach(serv => {
        const k = serv.industries.filter(industry =>
            currentService.industries.includes(industry)
        ).length

        if (k > 0 && serv.id !== currentService.id) relatedServices.push(serv)
    })

    // console.log(relatedServices.map(p => p.title))


    return (
        <section>
            <ESHero currentService={currentService} />
            <Overview currentService={currentService} />
            <Features currentService={currentService} />
            <Process currentService={currentService} />
            <Industries currentService={currentService} />
            <Testimonial currenService={currentService} />
            <FAQ currentService={currentService} />
            <RelatedServices relatedServices={relatedServices} />
            <QuoteCTA currentService={currentService} />
            <MiniFooter />
        </section>
    )
}
