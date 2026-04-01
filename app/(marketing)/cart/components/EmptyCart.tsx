import {Icon} from "@/icons/Icon";
import {B} from "@/theme/Colors";
import {dMSans, syne} from "@/theme/fonts";

export default function EmptyCart() {
    return (
        <div className="text-center py-20 rounded-[20px] bg-white" style={{ border: `1.5px solid ${B.lightgray}` }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(51,154,153,0.1)" }}>
                <Icon name="cart" size={36} color={B.electric} />
            </div>
            <h3 className={`${syne.className} mb-3`} style={{ fontWeight: 800, fontSize: "1.6rem", color: B.navy }}>Your Cart is Empty</h3>
            <p className={`${dMSans.className} mb-6`} style={{ fontSize: 15, color: B.gray, lineHeight: 1.7 }}>You haven&#39;t added any products yet.</p>
            <a href="/shop" className={`${dMSans.className} inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white no-underline transition-all duration-300`}
               style={{ fontWeight: 700, fontSize: 15, background: B.electric, boxShadow: "0 8px 24px rgba(51,154,153,0.35)" }}
               onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                Browse Products <Icon name="arrow" size={16} color="#fff" />
            </a>
        </div>
    );
}