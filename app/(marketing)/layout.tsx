import Navbar, {MobileMenu} from "@/components/layout/navbar";
import {Sidebar} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <div><Navbar /></div>
            <MobileMenu />
            <div id="marketing-scroll-container" className="grow">{children}</div>
        </div>
    );
}
