import {useInView} from "@/hooks/useInView";
import {Dispatch, SetStateAction} from "react";

const FILTERS = [
    "All Services",
    "Location Based",
    "Digital Oilfield",
    "IP Security",
    "Engineering",
    "IT Consulting",
];
interface SetActiveProps {
    setActive: Dispatch<SetStateAction<string>>;
}
export default function FilterBar({ active, setActive }: { active: string; setActive: SetActiveProps["setActive"] }) {
    const [ref, vis] = useInView<HTMLDivElement>(0.5);

    return (
        <div
            ref={ref}
            className="bg-white/95 backdrop-blur-md border-b sticky top-20 z-40 border-[#e8edf3] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
            <div className="max-w-325 mx-auto px-4 sm:px-6 lg:px-10 flex gap-2 overflow-x-auto h-14 sm:h-16 items-center">
                {FILTERS.map((f, i) => (
                    <button
                        key={f}
                        onClick={() => setActive(f)}
                        className={`
              whitespace-nowrap rounded-lg px-4 sm:px-5 py-2 text-sm
              transition-all duration-300
              ${active === f
                            ? "bg-[#333333] text-white font-bold scale-105 shadow-[0_4px_20px_rgba(13,61,61,0.25)]"
                            : "bg-transparent text-gray-500 font-medium hover:bg-[#f5f7fa] hover:text-[#333333]"
                        }
              ${vis ? "opacity-100" : "opacity-0"}
            `}
                        style={{
                            transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
                            transitionDelay: vis ? `${i * 60}ms` : "0ms",
                        }}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>
    );
}
