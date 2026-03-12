import {Youtube} from "lucide-react";

export default function SecondaryButton({link, text}: {link: string, text: string}) {
    return (
        <a
            href={link}
            className="inline-flex items-center gap-2 rounded-[8px] border-[1.5px] border-[rgba(255,255,255,0.3)] bg-transparent px-[30px] py-[15px] font-[DM_Sans] text-[15px] font-semibold tracking-[0.3px] text-white no-underline transition-all duration-200 hover:border-[#339a99] hover:text-[#339a99]"
        >
            <Youtube size={18} color="currentColor"/>
            {text}
        </a>
    )
}