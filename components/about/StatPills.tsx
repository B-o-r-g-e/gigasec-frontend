export default function StatPills({vis}: {vis: boolean}) {
    return (
    <div style={{ display: "flex", gap: 20, marginTop: 56, flexWrap: "wrap" }}>
        {[
            { val: "2013", label: "Founded" },
            { val: "ISO 9001", label: "Quality Management" },
            { val: "ISO 27001", label: "Information Security" },
            { val: "NCC AVTS", label: "Licensed Provider" },
        ].map((s, i) => (
            <div key={s.label} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(51,154,153,0.3)",
                borderRadius: 12, padding: "18px 28px",
                backdropFilter: "blur(10px)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0) scale(1)" : "translateY(40px) scale(0.8)",
                transition: `all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.55 + i * 0.1}s`,
            }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "2rem", color: "#fff", lineHeight: 1, letterSpacing: -1 }}>{s.val}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{s.label}</div>
            </div>
        ))}
    </div>
    )
}
