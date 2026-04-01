import ContactHero from "@/app/(marketing)/contact/components/Hero";
import ContactForm from "@/app/(marketing)/contact/components/ContactForm";
import MapSection from "@/app/(marketing)/contact/components/MapSection";
import FAQ from "@/app/(marketing)/contact/components/FAQ";
import Footer from "@/app/components/footer";

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
