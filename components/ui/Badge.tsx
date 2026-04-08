export default function Badge(
    {visible, text}:
    {visible: boolean, text: string} ) {
    return (
        <div
            className={`mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(0,153,204,0.35)] bg-[rgba(0,153,204,0.12)] px-4 py-[6px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
        >
            <div className="h-1.75 w-1.75 rounded-full bg-[#00CCCC] animate-pulse" />
            <span className="font-['Space_Mono',monospace] text-[8px] md:text-[11px] tracking-[2px] text-[#00CCCC] font-semibold">
                {text}
            </span>
        </div>
    )
}