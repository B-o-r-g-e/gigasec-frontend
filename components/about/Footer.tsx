'use client'
import {Icon} from "@/icons/Icon";
import {B} from "@/colors/Colors";

export default function Footer() {
    return (
        <footer style={{ background: "#060e0e", padding: "48px 0 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, background: `linear-gradient(135deg,${B.electric},${B.navy})`, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="shield" size={16} color="#fff" />
                    </div>
                    <div>
                        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 15, color: "#fff", letterSpacing: 1 }}>GIGASEC</div>
                        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 8, color: B.electric, letterSpacing: 2 }}>SERVICES</div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                    {["Home", "Services", "About", "Case Studies", "Blog", "Contact"].map(l => (
                        <a key={l} href="#" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                           onMouseEnter={e => e.target.style.color = B.electric} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>{l}</a>
                    ))}
                </div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2025 Gigasec Services Ltd.</div>
            </div>
        </footer>
    )
}