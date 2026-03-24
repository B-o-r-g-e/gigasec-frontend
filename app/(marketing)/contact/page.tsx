import ContactHero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import FAQ from "@/components/contact/FAQ";
import Footer from "@/components/home/footer";

export default function ContactPage() {
    return (
        <>
            <ContactHero/>
            <ContactForm/>
            <MapSection/>
            <FAQ />
            <Footer/>
        </>
    )
}
