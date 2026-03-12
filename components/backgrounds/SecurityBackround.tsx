import ParticleField from "@/components/home/particleField";

export default function SecurityBackground({ children }: { children: React.ReactNode }) {
    return (
            <section className="min-h-screen relative flex items-center overflow-hidden bg-linear-to-br from-[#000d1a] via-[#0d3d3d] to-[#339a99]">

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,153,204,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,153,204,0.07)_1px,transparent_1px)] bg-[length:60px_60px] animate-gridPulse" />

            {/* Glowing Orbs */}
            <div className="absolute top-[15%] right-[8%] w-31.25 h-31.25 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,153,204,0.18)_0%,transparent_70%)] animate-float" />

            <div className="absolute bottom-[10%] left-[5%] w-18.75 h-18.75 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,51,102,0.4)_0%,transparent_70%)] animate-float-reverse" />

            {/* Scan line */}
            <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />

            {/* Particles */}
            <ParticleField />

            {/* Content */}
            <div className="relative z-10 w-full">
                {children}
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-25 bg-linear-to-t from-[#f5f7fa] to-transparent" />

        </section>
    );
}