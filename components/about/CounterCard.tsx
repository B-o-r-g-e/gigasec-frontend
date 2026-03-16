"use client"
import {useState} from "react";
import {useCountUp} from "@/hooks/useCountUp";
import {Icon} from "@/icons/Icon";
import type {IconName} from "@/icons/Icon";
import {B} from "@/colors/Colors";

export default function CounterCard({ target, suffix, label, icon, delay, active }: {target:number, suffix:string, label:string, icon:IconName, delay:number, active:boolean}) {
    const n = useCountUp({ target, duration: 2000, active });
    const [hov, setHov] = useState(false);

    return (
        <div
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{
                background: hov ? "rgba(51,154,153,0.15)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${hov ? "rgba(51,154,153,0.6)" : "rgba(51,154,153,0.18)"}`,
                borderRadius: 20, padding: "44px 36px",
                cursor: "default", transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)",
                transform: active
                    ? (hov ? "translateY(-10px) scale(1.03)" : "translateY(0) scale(1)")
                    : "translateY(60px) scale(0.8)",
                opacity: active ? 1 : 0,
                boxShadow: hov ? `0 32px 64px rgba(0,0,0,0.3), 0 0 0 1px rgba(51,154,153,0.3)` : "none",
                transitionDelay: active ? `${delay}ms` : "0ms",
            }}
        >
            <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: hov ? "rgba(51,154,153,0.25)" : "rgba(51,154,153,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
                transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                transform: hov ? "rotate(12deg) scale(1.18)" : "none",
            }}>
                <Icon name={icon} size={26} color={B.electric} />
            </div>
            <div style={{
                fontFamily: "'Syne',sans-serif", fontWeight: 800,
                fontSize: "3.5rem", color: "#fff", lineHeight: 1, letterSpacing: -2,
                transition: "color 0.3s",
                color: hov ? B.bright : "#fff",
                textShadow: hov ? `0 0 30px rgba(51,154,153,0.6)` : "none",
            }}>
                {n}{suffix}
            </div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", marginTop: 10 }}>{label}</div>
            {/* Animated underline on hover */}
            <div style={{
                height: 2, marginTop: 20,
                background: `linear-gradient(90deg, ${B.electric}, transparent)`,
                width: hov ? "80%" : "0%",
                transition: "width 0.4s ease",
                borderRadius: 2,
            }} />
        </div>
    );
}
