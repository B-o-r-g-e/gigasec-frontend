import ParticleField from "@/components/home/particleField";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import FloatingParticles from "@/components/about/FloatingParticle";
import TopGlowingOrbLight from "@/components/ui/TopGlowingOrbLight";
import BottomGlowingOrbLight from "@/components/ui/BottomGlowingOrbLight";

export default function SecurityBackground({ children }: { children: React.ReactNode }) {
    return (
        <section className="min-h-screen relative flex w-full items-center overflow-x-hidden overflow-y-hidden bg-linear-to-br from-[#000d1a] via-[#0d3d3d] to-[#339a99]">

            {/* Grid overlay */}
            {/*<div className="absolute inset-0 bg-[linear-gradient(rgba(0,153,204,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,153,204,0.07)_1px,transparent_1px)] bg-size-[60px_60px] animate-gridPulse" />*/}
            <AnimatedGrid />

            {/* Glowing Orbs */}
            <TopGlowingOrbLight />
            <BottomGlowingOrbLight />

            {/* Scan line */}
            <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />

            {/* Particles */}
            <ParticleField />
            <FloatingParticles />

            {/* Content */}
            <div className="relative z-10 w-full">
                {children}
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-25 bg-linear-to-t from-[#f5f7fa] to-transparent" />

        </section>
    );
}
