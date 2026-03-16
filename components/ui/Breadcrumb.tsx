"use client"
import {useEffect, useState} from "react";

export default function Breadcrumb({trail}: {trail: string[]}) {
    const [vis, setVis] = useState(false);
    useEffect(() => { setTimeout(() => setVis(true), 80); }, []);

    return (
        <div
            className={`flex items-center gap-2 mb-8 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                vis ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-7.5"
            }`}
        >
            {trail.map((c, i) => (
                <span key={c} className="flex items-center gap-2">
                  {i > 0 && (
                      <span className="text-[rgba(51,154,153,0.5)] text-[14px]">›</span>
                  )}

                  <span
                      className={`font-[DM_Sans] text-[13px] ${
                          i === 1
                              ? "font-semibold text-[#339a99]"
                              : "font-normal text-white/40"
                      }`}
                  >
                      {c}
                  </span>
                </span>
            ))}
        </div>
    )
}