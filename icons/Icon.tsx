import {JSX} from "react";

export type IconName =
    | "shield"
    | "check"
    | "arrow"
    | "users"
    | "award"
    | "globe"
    | "target"
    | "zap"
    | "heart"
    | "linkedin"
    | "mail"
    | "quote"
    | "star"
    | "phone";

type IconProps = {
    name: IconName;
    size?: number;
    color?: string;
};

export const Icon = ({ name, size = 24, color = "currentColor" }: IconProps) => {
    const paths: Record<IconName, JSX.Element> = {
        shield:   <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
        check:    <polyline points="20 6 9 17 4 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
        arrow:    <><line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/><polyline points="12 5 19 12 12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></>,
        users:    <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" fill="none" stroke={color} strokeWidth="2"/><circle cx="9" cy="7" r="4" fill="none" stroke={color} strokeWidth="2"/><path d="M23 21v-2a4 4 0 00-3-3.87" stroke={color} strokeWidth="2" fill="none"/><path d="M16 3.13a4 4 0 010 7.75" stroke={color} strokeWidth="2" fill="none"/></>,
        award:    <><circle cx="12" cy="8" r="6" fill="none" stroke={color} strokeWidth="2"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
        globe:    <><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="2"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" fill="none" stroke={color} strokeWidth="2"/></>,
        target:   <><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="12" r="6" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="12" r="2" fill={color}/></>,
        zap:      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
        heart:    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill={color} stroke={color} strokeWidth="1"/>,
        linkedin: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" fill="none" stroke={color} strokeWidth="2"/><rect x="2" y="9" width="4" height="12" fill="none" stroke={color} strokeWidth="2"/><circle cx="4" cy="4" r="2" fill="none" stroke={color} strokeWidth="2"/></>,
        mail:     <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="2"/><polyline points="22,6 12,13 2,6" stroke={color} strokeWidth="2" fill="none"/></>,
        quote:    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="none" stroke={color} strokeWidth="2"/>,
        star:     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={color}/>,
        phone:    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 21z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
};
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            {paths[name] || null}
        </svg>
);
};
