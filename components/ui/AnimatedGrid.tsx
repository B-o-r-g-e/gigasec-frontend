export default function AnimatedGrid() {
    return (
        <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `linear-gradient(rgba(51,154,153,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(51,154,153,0.09) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            animation: "gridDrift 25s linear infinite",
        }} />
    )
}
