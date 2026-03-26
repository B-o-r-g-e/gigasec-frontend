import type { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";

import { B } from "@/colors/Colors";
import {dMSans} from "@/app/ui/fonts";

type FormFieldProps = {
    label: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    focused: boolean;
    onFocus: FocusEventHandler<HTMLInputElement>;
    onBlur: FocusEventHandler<HTMLInputElement>;
    vis: boolean;
    delay: number;
};

export default function FormField({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    focused,
    onFocus,
    onBlur,
    vis,
    delay,
}: FormFieldProps) {
    return (
        <div
            className="transition-all duration-[600ms] ease"
            style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${delay}ms`,
            }}
        >
            {/* Label */}
            <label
                className={`${dMSans.className} block text-[13px] font-semibold mb-2`}
                style={{
                    color: B.charcoal,
                }}
            >
                {label}
            </label>

            {/* Input */}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={`${dMSans.className} w-full px-[18px] py-[13px] rounded-lg text-[14px] outline-none transition-all duration-[250ms]`}
                style={{
                    border: `1.5px solid ${focused ? B.electric : B.lightgray}`,
                    background: B.offwhite,
                    color: B.charcoal,
                    boxShadow: focused ? "0 0 0 3px rgba(51,154,153,0.15)" : "none",
                }}
            />
        </div>
    );
}
