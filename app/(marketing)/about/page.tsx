import AboutHero from "@/app/(marketing)/about/components/hero";
import OurStory from "@/app/(marketing)/about/components/OurStory";
import LiveCounters from "@/app/(marketing)/about/components/LiveCounters";
import MissionValues from "@/app/(marketing)/about/components/MissionValues";
import Team from "@/app/(marketing)/about/components/Team";
import Certifications from "@/app/(marketing)/about/components/Certifications";
import OEMPartners from "@/app/(marketing)/about/components/OEMPartners";
import TestimonialsSection from "@/app/(marketing)/components/testimonials";
import AboutCTA from "@/app/(marketing)/about/components/CTA";
import MiniFooter from "@/components/layout/MiniFooter";

export default function AboutPage() {
  return (
      <>
          <section>
              <AboutHero />
              <OurStory />
              <LiveCounters />
              <MissionValues />
              <Team />
              <Certifications />
              <OEMPartners />
              <TestimonialsSection />
              <AboutCTA />
              <MiniFooter />
          </section>
      </>
  )
}