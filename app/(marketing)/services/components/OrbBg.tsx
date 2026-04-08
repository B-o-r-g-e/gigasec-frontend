export default function OrbBg({ color = "#00CCCC", top, right, size = 600, opacity = 0.12 }: {color?: string; top?: string; right?: string, size?: number, opacity?: number}) {
    return (
        <div
            className="absolute rounded-full pointer-events-none
        animate-[floatOrb_8s_ease-in-out_infinite]"
            style={{
                top,
                right,
                width: size,
                height: size,
                opacity,
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            }}
        />
    );
}