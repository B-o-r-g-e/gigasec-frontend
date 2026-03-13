import AboutBackground from "@/components/backgrounds/AboutBackground";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function AboutHero() {
    const trail = ["Home", "About Us"]
    return (
        <AboutBackground>
            <div className="relative z-5 max-w-7xl mx-auto px-10 pt-20 pb-24 w-full">
                <Breadcrumb trail={trail} />
            </div>
        </AboutBackground>
    )
}