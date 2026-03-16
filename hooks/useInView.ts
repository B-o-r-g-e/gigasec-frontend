"use client"
import {useEffect, useRef, useState} from "react";

export function useInView(threshold = 0.12) {
    const ref = useRef<HTMLElement | null>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVis(true); },
            { threshold }
        );
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, [threshold]);
    return [ref, vis] as const;
}
