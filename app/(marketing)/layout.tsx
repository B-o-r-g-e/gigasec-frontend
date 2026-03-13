import Navbar, {MobileMenu} from "@/components/layout/navbar";
import {Sidebar} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <div><Navbar /></div>
            {/*<MobileMenu />*/}
            {/*<div><Sidebar /></div>*/}
            {/*<div className="w-full flex-none md:w-64">*/}
            {/*    <SideNav />*/}
            {/*</div>*/}
            <div id="marketing-scroll-container" className="grow">{children}</div>
        </div>
    );
}
