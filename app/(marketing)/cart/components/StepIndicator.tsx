import {Icon} from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono} from "@/theme/fonts";

export default function StepIndicator({ step }: {step: number}) {
    const steps = ["Cart", "Your Details", "Payment"];
    return (
        <div className="flex flex-wrap items-center gap-2 mb-2 sm:gap-0">
            {steps.map((s, i) => (
                <div key={s} className="flex items-center">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 sm:px-5 sm:py-3"
                         style={{ background: i + 1 === step ? B.navy : (i + 1 < step ? "rgba(51,154,153,0.1)" : "transparent"), border: `1.5px solid ${i + 1 === step ? B.electric : (i + 1 < step ? B.electric : B.lightgray)}` }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                             style={{ background: i + 1 === step ? B.electric : (i + 1 < step ? B.electric : B.lightgray) }}>
                            {i + 1 < step
                                ? <Icon name="check" size={13} color="#fff" />
                                : <span className={`${spaceMono.className}`} style={{ fontSize: 10, color: i + 1 === step ? "#fff" : B.gray, fontWeight: 700 }}>{i + 1}</span>
                            }
                        </div>
                        <span className={`${dMSans.className}`} style={{ fontWeight: i + 1 === step ? 700 : 500, fontSize: 14, color: i + 1 === step ? "#fff" : (i + 1 < step ? B.electric : B.gray) }}>{s}</span>
                    </div>
                    {i < steps.length - 1 && <div className="hidden h-[2px] w-8 sm:block" style={{ background: i + 1 < step ? B.electric : B.lightgray }} />}
                </div>
            ))}
        </div>
    );
}
