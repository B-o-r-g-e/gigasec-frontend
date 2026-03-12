export default function Subheading(
    { visible, text }:
    { visible: boolean, text: string }) {
    return (
        <>
            <p
                className={`mb-10 max-w-[580px] font-[DM_Sans] text-[1.15rem] leading-[1.7] text-white/70 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[300ms] ${
                    visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
            >
                {text}
            </p>
        </>
    )
}