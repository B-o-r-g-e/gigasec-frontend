import Hero from "@/components/home/hero";
import TrustedByStrip from "@/components/home/trusted-by";
import ServicesSection from "@/components/home/services";
import StatsSection from "@/components/home/statsSection";
import WhySection from "@/components/home/whyUs";
import CaseStudiesSection from "@/components/home/caseStudy";
import TestimonialsSection from "@/components/home/certifications";
import CTAStrip from "@/components/home/ctaStrip";
import BlogSection from "@/components/home/blogPreview";
import Certifications from "@/components/home/certifications";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
      <>
          <section>
              <Hero />
              <TrustedByStrip />
              <ServicesSection />
              <StatsSection />
              <WhySection />
              <CaseStudiesSection />
              <TestimonialsSection />
              <CTAStrip />
              <BlogSection />
              <Certifications />
              <Footer />
          </section>
      </>
  )
}