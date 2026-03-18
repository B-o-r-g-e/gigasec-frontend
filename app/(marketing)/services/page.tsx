'use client'
import Hero from "@/components/services/Hero";
import {useState} from "react";
import FilterBar from "@/components/services/ServiceFilterBar";
import ServiceBlock from "@/components/services/ServiceBlock";
import TestimonialsSection from "@/components/home/testimonials";
import ComparisonTable from "@/components/services/ConparisonTable";
import {SERVICES} from "@/components/services/services";
import QuoteSection from "@/components/services/QuoteSection";
import Footer from "@/components/about/Footer";

export default function ServicesPage() {
    const [filter, setFilter] = useState("All Services");

    return (
        <section>
            <Hero />
            <FilterBar active={filter} setActive={setFilter} />
            <section className="bg-[#f5f7fa] py-16 sm:py-20">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-6">
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
