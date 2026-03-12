import Navbar from "@/components/layout/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <div><Navbar /></div>
            {/*<div className="w-full flex-none md:w-64">*/}
            {/*    <SideNav />*/}
            {/*</div>*/}
            <div id="marketing-scroll-container" className="grow md:overflow-y-auto">{children}</div>
        </div>
    );
}
