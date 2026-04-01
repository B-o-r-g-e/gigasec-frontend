"use client"
import {useEffect, useState} from "react";

const BRAND = {
    electric: "#339a99",
};

export default function FloatingParticles({ count = 18 }) {
    const [particles, setParticles] = useState<Array<{
        x: number;
        y: number;
        size: number;
        delay: number;
        duration: number;
    }> | null>(null);

    useEffect(() => {
        setParticles(
            Array.from({ length: count }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 6 + 2,
                delay: Math.random() * 6,
                duration: Math.random() * 6 + 6,
            }))
        );
    }, [count]);

    if (!particles) return null;
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute rounded-full opacity-[0.18]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        background: BRAND.electric,
                        animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
