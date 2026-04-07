export default function StatPills({vis}: {vis: boolean}) {
    return (
    <div className="mt-8 sm:mt-14 flex flex-wrap gap-3 sm:gap-5">
        {[
            { val: "2013", label: "Founded" },
            { val: "ISO 9001", label: "Quality Management" },
            { val: "ISO 27001", label: "Information Security" },
            { val: "NCC AVTS", label: "Licensed Provider" },
        ].map((s, i) => (
            <div
                key={s.label}
                className="min-w-[140px] rounded-[12px] px-4 py-3 sm:px-7 sm:py-[18px] backdrop-blur-[10px]"
                style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(51,154,153,0.3)",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0) scale(1)" : "translateY(40px) scale(0.8)",
                    transition: `all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.55 + i * 0.1}s`,
                }}
            >
                <div className="font-['Syne',sans-serif] font-extrabold text-[1.6rem] sm:text-[2rem] text-white leading-none tracking-[-1px]">
                    {s.val}
                </div>
                <div className="font-['DM_Sans',sans-serif] text-[12px] sm:text-[13px] text-[rgba(255,255,255,0.55)] mt-1">
                    {s.label}
                </div>
            </div>
        ))}
    </div>
    )
}
