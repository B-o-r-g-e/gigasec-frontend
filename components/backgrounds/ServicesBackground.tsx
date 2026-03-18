import {ReactNode} from "react";
import {B} from "@/colors/Colors";
import OrbBg from "@/components/services/OrbBg";

export default function ServicesBackground({children}: { children: ReactNode }) {
    return (
        <section style={{
            minHeight: "72vh", position: "relative",
            background: `linear-gradient(150deg, ${B.deep} 0%, #061e1e 50%, #0d3d3d 100%)`,
            display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 72,
        }}>
            <div className="absolute inset-0 pointer-events-none
              bg-[linear-gradient(rgba(51,154,153,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(51,154,153,0.08)_1px,transparent_1px)]
              bg-size-[60px_60px]
              animate-[gridShift_20s_linear_infinite]"
            />
            <OrbBg top="-10%" right="5%" size={700} color={B.electric} opacity={0.1} />
            <OrbBg top="40%" right="20%" size={400} color={B.bright} opacity={0.06} />

            <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none
                bg-[linear-gradient(135deg,transparent_40%,rgba(51,154,153,0.04)_100%)]"
            />

            <div className="relative z-10 w-full">
                {children}
            </div>
        </section>
    )
}
