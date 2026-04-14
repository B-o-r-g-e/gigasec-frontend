import type {
    ChangeEventHandler,
    FocusEventHandler,
    HTMLInputTypeAttribute,
    ReactNode
} from "react";
import {dMSans} from "@/theme/fonts";
import {Icon, type IconName} from "@/icons/Icon";
import {B} from "@/theme/Colors";

type AuthInputProps = {
    label: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    icon?: IconName;
    rightEl?: ReactNode;
    focused?: boolean;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
};

export default function AuthInput({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    icon,
    rightEl,
    focused,
    onFocus,
    onBlur
}: AuthInputProps) {
    return (
        <div className="mb-4">
        <label className={`${dMSans.className} block mb-2`}
    style={{
        fontWeight: 600,
            fontSize: 13,
            color: "rgba(255,255,255,0.85)"
    }}>{label}</label>
    <div className="relative">
        {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon name={icon} size={17} color={focused ? B.electric : "rgba(255,255,255,0.35)"}/>
    </div>
)}
    <input type={type} placeholder={placeholder} value={value} onChange={onChange}
    className={`${dMSans.className} w-full py-[14px] rounded-xl outline-none transition-all duration-200 ${icon ? "pl-12" : "pl-5"} ${rightEl ? "pr-12" : "pr-5"}`}
    style={{
        fontSize: 14,
            background: "rgba(255,255,255,0.06)",
            border: `1.5px solid ${focused ? B.electric : "rgba(255,255,255,0.12)"}`,
            color: "#fff",
            boxShadow: focused ? `0 0 0 3px rgba(51,154,153,0.2)` : "none"
    }}
    onFocus={onFocus} onBlur={onBlur}/>
    {rightEl && <div className="absolute right-4 top-1/2 -translate-y-1/2">{rightEl}</div>}
        </div>
        </div>
    );
}
