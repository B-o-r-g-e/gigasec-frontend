'use client'
import Hero from "@/app/(marketing)/services/components/Hero";
import {useState} from "react";
import FilterBar from "@/app/(marketing)/services/components/ServiceFilterBar";
import ServiceBlock from "@/app/(marketing)/services/components/ServiceBlock";
import TestimonialsSection from "@/app/components/testimonials";
import ComparisonTable from "@/app/(marketing)/services/components/ConparisonTable";
import {SERVICES} from "@/app/(marketing)/services/components/services";
import QuoteSection from "@/app/(marketing)/services/components/QuoteSection";
import Footer from "@/app/(marketing)/about/components/Footer";

export default function ServicesPage() {
    const [filter, setFilter] = useState("All Services");

    return (
        <section>
            <Hero />
            <FilterBar active={filter} setActive={setFilter} />
            <section className="bg-[#f5f7fa] py-16 sm:py-20">
                <div className="max-w-325 mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-6">
                    {SERVICES.map((svc, i) => (
                        <ServiceBlock key={svc.id} svc={svc} index={i} filter={filter} />
                    ))}
                </div>
            </section>
            <ComparisonTable />
            <TestimonialsSection />
            <QuoteSection />
            <Footer />
        </section>
    );
}
