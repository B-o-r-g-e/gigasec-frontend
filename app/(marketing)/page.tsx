import Hero from "@/app/(marketing)/components/hero";
import TrustedByStrip from "@/app/(marketing)/components/trusted-by";
import ServicesSection from "@/app/(marketing)/components/services";
import StatsSection from "@/app/(marketing)/components/statsSection";
import WhySection from "@/app/(marketing)/components/whyUs";
import CTAStrip from "@/app/(marketing)/components/ctaStrip";
import Certifications from "@/app/(marketing)/components/certifications";
import Footer from "@/app/(marketing)/components/footer";
import TestimonialsSection from "@/app/(marketing)/components/testimonials";
import MethodSection from "@/app/(marketing)/components/methodSection";

export default function Home() {
  return (
      <>
          <section className="w-full overflow-x-hidden">
              <Hero />
              <TrustedByStrip />
              <ServicesSection />
              <StatsSection />
              <WhySection />
              {/*<CaseStudiesSection />*/}
              <TestimonialsSection />
              <CTAStrip />
              <MethodSection />
              <Certifications />
              <Footer />
          </section>
      </>
  )
}
