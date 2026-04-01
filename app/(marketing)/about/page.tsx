import AboutHero from "@/app/(marketing)/about/components/hero";
import OurStory from "@/app/(marketing)/about/components/OurStory";
import LiveCounters from "@/app/(marketing)/about/components/LiveCounters";
import MissionValues from "@/app/(marketing)/about/components/MissionValues";
import Team from "@/app/(marketing)/about/components/Team";
import Certifications from "@/app/(marketing)/about/components/Certifications";
import TestimonialsSection from "@/app/components/testimonials";
import AboutCTA from "@/app/(marketing)/about/components/CTA";
import Footer from "@/app/(marketing)/about/components/Footer";

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
              <TestimonialsSection />
              <AboutCTA />
              <Footer />
          </section>
      </>
  )
}