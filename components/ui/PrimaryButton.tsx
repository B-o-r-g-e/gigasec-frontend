import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function PrimaryButton(
    {link, text}:
    {link: string, text: string}) {
    return (
        <Link
            href={link}
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#00CCCC] px-7.5 py-3.75 font-[DM_Sans] text-[15px] font-bold tracking-[0.3px] text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,153,204,0.6)]"
        >
            {text}
            <ArrowRight size={18} color="#fff" />
        </Link>
    )
}