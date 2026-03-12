'use client'
import {useEffect, useRef} from "react";

export default function ParticleField() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);
        let animId;
        const pts = Array.from({ length: 75 }, () => ({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.5 + 0.4, a: Math.random(),
        }));
        const resize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            pts.forEach((p) => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,200,255,${p.a * 0.7})`;
                ctx.fill();
            });
            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 120) {
                        ctx.beginPath();
                        ctx.moveTo(pts[i].x, pts[i].y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        ctx.strokeStyle = `rgba(0,200,255,${(1 - d / 120) * 0.18})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
    }, []);
    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-[1] pointer-events-none"
        />
    );
}
