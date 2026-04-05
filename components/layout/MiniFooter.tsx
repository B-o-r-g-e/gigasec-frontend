import {Icon} from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import Image from "next/image";
import Link from "next/link";

export default function MiniFooter() {
    return (
        <footer className="py-10 border-t" style={{ background: "#060e0e", borderColor: "rgba(255,255,255,0.06)" }}>
            <div className="max-w-7xl mx-auto px-10 flex justify-between items-center flex-wrap gap-5">
                <div className="flex items-center gap-3">
                    <Link href="/public">
                        <Image
                            src="/gigasec white logo.png"
                            width={100}
                            height={1000}
                            alt="Gigasec Logo"
                        />
                    </Link>
                </div>
                <span className={`${dMSans.className}`} style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2025 Gigasec Services Ltd. All rights reserved.</span>
            </div>
        </footer>
    );
}