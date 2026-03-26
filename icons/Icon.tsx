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
    | "phone"
    | "camera"
    | "lock"
    | "fiber"
    | "network"
    | "industrial"
    | "chevron"
    | "plus"
    | "bookmark"
    | "share"
    | "clock"
    | "tag"
    | "search"
    | "twitter"
    | "whatsapp"
    | "pin"
    | "cart"
    | "filter"
    | "grid"
    | "truck"
    | "eye"
    | "close"

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
        linkedin: <><path d="M16 8a6 6 0 016 6v7h-4v-7a22 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" fill="none" stroke={color} strokeWidth="2"/><rect x="2" y="9" width="4" height="12" fill="none" stroke={color} strokeWidth="2"/><circle cx="4" cy="4" r="2" fill="none" stroke={color} strokeWidth="2"/></>,
        mail:     <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="2"/><polyline points="22,6 12,13 2,6" stroke={color} strokeWidth="2" fill="none"/></>,
        quote:    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="none" stroke={color} strokeWidth="2"/>,
        star:     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={color}/>,
        phone:    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 21z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/>,
        camera:     <><path d="M23 7l-7 5 7 5V7z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="1" y="5" width="15" height="14" rx="2" fill="none" stroke={color} strokeWidth="2"/></>,
        lock:       <><rect x="3" y="11" width="18" height="11" rx="2" fill="none" stroke={color} strokeWidth="2"/><path d="M7 11V7a5 5 0 0110 0v4" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/></>,
        fiber:      <path d="M3 12h18M12 3c0 0 4 3 4 9s-4 9-4 9M12 3c0 0-4 3-4 9s4 9 4 9" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>,
        network:    <><circle cx="12" cy="12" r="3" fill={color}/><path d="M12 3v3m0 12v3M3 12h3m12 0h3" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/></>,
        industrial: <><rect x="2" y="7" width="20" height="14" rx="2" fill="none" stroke={color} strokeWidth="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke={color} strokeWidth="2" fill="none"/></>,
        chevron:    <polyline points="9 18 15 12 9 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
        plus:       <><line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
        bookmark:   <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
        share:   <><circle cx="18" cy="5" r="3" fill="none" stroke={color} strokeWidth="2"/><circle cx="6" cy="12" r="3" fill="none" stroke={color} strokeWidth="2"/><circle cx="18" cy="19" r="3" fill="none" stroke={color} strokeWidth="2"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke={color} strokeWidth="2"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke={color} strokeWidth="2"/></>,
        clock:   <><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><polyline points="12 6 12 12 16 14" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/></>,
        tag:     <><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" fill="none" stroke={color} strokeWidth="2"/><line x1="7" y1="7" x2="7.01" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
        search:  <><circle cx="11" cy="11" r="7" fill="none" stroke={color} strokeWidth="2"/><line x1="16.65" y1="16.65" x2="21" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
        twitter:   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
        whatsapp:  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L0 24l6.334-1.518A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" fill={color}/>,
        pin:       <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="10" r="3" fill="none" stroke={color} strokeWidth="2"/></>,
        cart:     <><circle cx="9" cy="21" r="1" fill={color}/><circle cx="20" cy="21" r="1" fill={color}/><path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
        filter:   <><line x1="4" y1="6" x2="20" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="8" y1="12" x2="16" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="11" y1="18" x2="13" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
        grid:     <><rect x="3" y="3" width="7" height="7" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/><rect x="14" y="3" width="7" height="7" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/><rect x="14" y="14" width="7" height="7" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/><rect x="3" y="14" width="7" height="7" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
        truck:    <><rect x="1" y="3" width="15" height="13" fill="none" stroke={color} strokeWidth="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" fill="none" stroke={color} strokeWidth="2"/><circle cx="5.5" cy="18.5" r="2.5" fill="none" stroke={color} strokeWidth="2"/><circle cx="18.5" cy="18.5" r="2.5" fill="none" stroke={color} strokeWidth="2"/></>,
        eye:      <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke={color} strokeWidth="2"/><circle cx="12" cy="12" r="3" fill="none" stroke={color} strokeWidth="2"/></>,
        close:    <><line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
};
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            {paths[name] || null}
        </svg>
);
};
