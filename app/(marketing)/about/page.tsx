import AboutHero from "@/components/about/hero";
import OurStory from "@/components/about/OurStory";
import LiveCounters from "@/components/about/LiveCounters";
import MissionValues from "@/components/about/MissionValues";
import Team from "@/components/about/Team";
import Certifications from "@/components/about/Certifications";
import TestimonialsSection from "@/components/home/testimonials";
import AboutCTA from "@/components/about/CTA";
import Footer from "@/components/about/Footer";

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