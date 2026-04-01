import Hero from "@/app/components/hero";
import TrustedByStrip from "@/app/components/trusted-by";
import ServicesSection from "@/app/components/services";
import StatsSection from "@/app/components/statsSection";
import WhySection from "@/app/components/whyUs";
import CaseStudiesSection from "@/app/components/caseStudy";
import CTAStrip from "@/app/components/ctaStrip";
import BlogSection from "@/app/components/blogPreview";
import Certifications from "@/app/components/certifications";
import Footer from "@/app/components/footer";
import TestimonialsSection from "@/app/components/testimonials";

export default function Home() {
  return (
      <>
          <section className="w-full overflow-x-hidden">
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
