'use client'
import {useEffect, useState} from "react";

export function useCountUp({target, duration = 1800, active = false}: {target: number; duration: number; active: boolean}) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start: number | null = null;
        const step = (ts:number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            // Elastic overshoot easing
            const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p) * Math.cos((p * 10 - 0.75) * (2 * Math.PI) / 3);
            setN(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [active, target, duration]);
    return n;
}