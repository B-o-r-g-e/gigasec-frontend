import AnimatedGrid from "@/components/ui/AnimatedGrid";
import FloatingParticles from "@/components/about/FloatingParticle";
import {ReactNode} from "react";
import TopGlowingOrbLight from "@/components/ui/TopGlowingOrbLight";
import BottomGlowingOrbLight from "@/components/ui/BottomGlowingOrbLight";

export default function AboutBackground({children}: {children: ReactNode}) {
    return (
        <section className="min-h-screen relative flex items-center overflow-hidden bg-linear-to-br from-[#000d1a] via-[#0d3d3d] to-[#339a99]">
            <AnimatedGrid />
            <FloatingParticles />
            <TopGlowingOrbLight />
            <BottomGlowingOrbLight />

            <div className="relative z-10 w-full">
                {children}
            </div>
        </section>
    )
}