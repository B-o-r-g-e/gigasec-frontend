'use client'
import {Icon, type IconName} from "@/icons/Icon";
import {useInView} from "@/hooks/useInView";
import {useState} from "react";
import {B} from "@/theme/Colors";
import {dMSans, spaceMono, syne} from "@/theme/fonts";
import Link from "next/link";

type PortalDashboardProps = {
    onLogout: () => void;
};

type StatusLabel = "Open" | "In Progress" | "Resolved" | "Processing" | "Delivered" | "High" | "Medium";

export function PortalDashboard({onLogout}: PortalDashboardProps) {
    const [ref, vis] = useInView(0.05);
    const [activeNav, setActiveNav] = useState("overview");

    const navItems: Array<{id: "overview" | "tickets" | "orders" | "settings"; icon: IconName; label: string}> = [
        {id: "overview", icon: "shield", label: "Overview"},
        {id: "tickets", icon: "ticket", label: "Support Tickets"},
        {id: "orders", icon: "cart", label: "Orders"},
        {id: "settings", icon: "settings", label: "Settings"},
    ];

    const stats = [
        {label: "Open Tickets", value: "2", sub: "1 critical", color: "#ef4444"},
        {label: "Active Projects", value: "3", sub: "On schedule", color: B.electric},
        {label: "Pending Orders", value: "1", sub: "Awaiting delivery", color: B.orange},
        {label: "System Uptime", value: "99.9%", sub: "Last 30 days", color: B.green},
    ];

    const tickets: Array<{
        ref: string;
        subject: string;
        priority: "High" | "Medium";
        status: "In Progress" | "Open";
        updated: string;
    }> = [
        {
            ref: "GS-TKT-10291",
            subject: "CCTV camera offline — Building B entrance",
            priority: "High",
            status: "In Progress",
            updated: "2 hrs ago"
        },
        {
            ref: "GS-TKT-10287",
            subject: "Access control card not reading at Gate 3",
            priority: "Medium",
            status: "Open",
            updated: "1 day ago"
        },
    ];

    const orders: Array<{
        ref: string;
        items: string;
        value: string;
        status: "Processing" | "Delivered";
        date: string;
    }> = [
        {
            ref: "GS-ORD-198234",
            items: "Hikvision 4MP Dome ×4, Cisco Switch ×1",
            value: "₦479,000",
            status: "Processing",
            date: "Feb 18, 2025"
        },
        {ref: "GS-ORD-195011", items: "ZKTeco SF300 ×2", value: "₦69,000", status: "Delivered", date: "Jan 30, 2025"},
    ];

    const statusColor: Record<StatusLabel, string> = {
        "Open": B.orange,
        "In Progress": B.electric,
        "Resolved": B.green,
        "Processing": B.electric,
        "Delivered": B.green,
        "High": "#ef4444",
        "Medium": B.orange
    };

    return (
        <div className={`${dMSans.className} min-h-screen flex`} style={{background: B.offwhite}}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes successReveal{ 0%{transform:scale(0.85);opacity:0} 70%{transform:scale(1.03)} 100%{transform:scale(1);opacity:1} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes gridDrift { from{background-position:0 0} to{background-position:56px 56px} }
        @keyframes orbPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08);opacity:.8} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.5} }
      `}</style>

            {/* Sidebar */}
            <aside className="w-[260px] flex-shrink-0 flex flex-col py-8 px-5"
                   style={{background: B.navy, borderRight: `1px solid rgba(51,154,153,0.2)`, minHeight: "100vh"}}>
                {/* Logo */}
                <div className="flex items-center gap-3 mb-10 px-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                         style={{background: "linear-gradient(135deg,#339a99,#0d3d3d)"}}>
                        <Icon name="shield" size={18} color="#fff"/>
                    </div>
                    <div>
                        <div className={`${syne.className}`}
                             style={{
                                 fontWeight: 800,
                                 fontSize: 15,
                                 color: "#fff",
                                 letterSpacing: 1,
                                 lineHeight: 1
                             }}>GIGASEC
                        </div>
                        <div className={`${spaceMono.className}`}
                             style={{fontSize: 8, color: B.electric, letterSpacing: 2}}>CLIENT
                            PORTAL
                        </div>
                    </div>
                </div>

                {/* User card */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl mb-8"
                     style={{background: "rgba(51,154,153,0.1)", border: "1px solid rgba(51,154,153,0.2)"}}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{background: "linear-gradient(135deg,#339a99,#1a5958)"}}>
                        <span className={`${syne.className}`}
                              style={{fontWeight: 800, fontSize: 13, color: "#fff"}}>AO</span>
                    </div>
                    <div>
                        <div className={`${syne.className}`}
                             style={{fontWeight: 700, fontSize: 13, color: "#fff"}}>Adaora Okonkwo
                        </div>
                        <div className={`${syne.className}`}
                             style={{
                                 fontSize: 11,
                                 color: "rgba(255,255,255,0.45)",
                                 marginTop: 1
                             }}>First Continental Bank
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex flex-col gap-2 flex-1">
                    {navItems.map(item => (
                        <button key={item.id} onClick={() => setActiveNav(item.id)}
                                className={`${dMSans.className} flex items-center gap-3 px-4 py-3 rounded-xl border-none cursor-pointer transition-all duration-200 text-left`}
                                style={{
                                    fontWeight: activeNav === item.id ? 700 : 500,
                                    fontSize: 14,
                                    background: activeNav === item.id ? "rgba(51,154,153,0.2)" : "transparent",
                                    color: activeNav === item.id ? "#fff" : "rgba(255,255,255,0.55)",
                                    borderLeft: `3px solid ${activeNav === item.id ? B.electric : "transparent"}`
                                }}
                                onMouseEnter={e => {
                                    if (activeNav !== item.id) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                }}
                                onMouseLeave={e => {
                                    if (activeNav !== item.id) e.currentTarget.style.background = "transparent";
                                }}>
                            <Icon name={item.icon} size={18}
                                  color={activeNav === item.id ? B.electric : "rgba(255,255,255,0.4)"}/>
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Logout */}
                <button onClick={onLogout}
                        className={`${dMSans.className} flex items-center gap-3 px-4 py-3 rounded-xl border-none cursor-pointer mt-4 transition-all duration-200`}
                        style={{
                            fontWeight: 500,
                            fontSize: 14,
                            background: "transparent",
                            color: "rgba(255,255,255,0.4)"
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(239,68,68,0.1)";
                            e.currentTarget.style.color = "#f87171";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                        }}>
                    <Icon name="logout" size={18} color="currentColor"/> Sign Out
                </button>
            </aside>

            {/* Main content */}
            <main ref={ref} className="flex-1 px-10 py-10 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-10 transition-all duration-700"
                     style={{opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(-20px)"}}>
                    <div>
                        <div className={`${spaceMono.className}`}
                             style={{
                                 fontSize: 10,
                                 color: B.electric,
                                 letterSpacing: 2,
                                 marginBottom: 6
                             }}>CLIENT PORTAL
                        </div>
                        <h1 className={`${syne.className}`}
                            style={{
                                fontWeight: 800,
                                fontSize: "2rem",
                                color: B.navy,
                                letterSpacing: -0.5
                            }}>Good morning, Adaora</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            className="w-10 h-10 rounded-full flex items-center justify-center border-none cursor-pointer relative transition-all duration-200"
                            style={{background: "#fff", border: `1.5px solid ${B.lightgray}`}}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = B.electric;
                            }} onMouseLeave={e => {
                            e.currentTarget.style.borderColor = B.lightgray;
                        }}>
                            <Icon name="bell" size={18} color={B.gray}/>
                            <div className="absolute top-1 right-1 w-2 h-2 rounded-full"
                                 style={{background: "#ef4444"}}/>
                        </button>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center"
                             style={{background: "linear-gradient(135deg,#339a99,#1a5958)"}}>
                            <span className={`${syne.className}`} style={{fontWeight: 800, fontSize: 13, color: "#fff"}}>AO</span>
                        </div>
                    </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-4 gap-5 mb-8">
                    {stats.map((s, i) => (
                        <div key={s.label} className="rounded-[16px] p-6 bg-white transition-all duration-700"
                             style={{
                                 border: `1.5px solid ${B.lightgray}`,
                                 opacity: vis ? 1 : 0,
                                 transform: vis ? "none" : "translateY(30px)",
                                 transitionDelay: `${i * 80}ms`,
                                 boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
                             }}>
                            <div className={`${dMSans.className}`}
                                 style={{
                                     fontSize: 13,
                                     color: B.gray,
                                     marginBottom: 8
                                 }}>{s.label}</div>
                            <div className={`${syne.className}`}
                                 style={{
                                     fontWeight: 800,
                                     fontSize: "2rem",
                                     color: s.color,
                                     lineHeight: 1,
                                     letterSpacing: -1
                                 }}>{s.value}</div>
                            <div className={`${dMSans.className}`}
                                 style={{
                                     fontSize: 12,
                                     color: B.gray,
                                     marginTop: 6
                                 }}>{s.sub}</div>
                            <div className="h-1 mt-4 rounded-sm transition-all duration-[1200ms]"
                                 style={{
                                     background: `linear-gradient(90deg,${s.color},${s.color}55)`,
                                     width: vis ? "80%" : "0%",
                                     transitionDelay: `${0.4 + i * 0.1}s`
                                 }}/>
                        </div>
                    ))}
                </div>

                {/* Tickets + Orders */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Tickets */}
                    <div className="rounded-[20px] bg-white overflow-hidden transition-all duration-700"
                         style={{
                             border: `1.5px solid ${B.lightgray}`,
                             opacity: vis ? 1 : 0,
                             transform: vis ? "none" : "translateX(-30px)",
                             transitionDelay: "300ms",
                             boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
                         }}>
                        <div className={`flex justify-between items-center px-6 py-4`}
                             style={{borderBottom: `1px solid ${B.lightgray}`}}>
                            <h3 className={`${syne.className} `}
                                style={{fontWeight: 700, fontSize: 16, color: B.navy}}>Open
                                Tickets</h3>
                            <a href="/support" className={`${dMSans.className}`}
                               style={{
                                   fontSize: 13,
                                   color: B.electric,
                                   fontWeight: 600,
                                   textDecoration: "none"
                               }}>View All →</a>
                        </div>
                        <div className="flex flex-col">
                            {tickets.map((t, i) => (
                                <div key={t.ref} className="px-6 py-4 transition-all duration-200 cursor-pointer"
                                     style={{borderBottom: i < tickets.length - 1 ? `1px solid ${B.lightgray}` : "none"}}
                                     onMouseEnter={e => e.currentTarget.style.background = B.offwhite}
                                     onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                                    <div className="flex justify-between items-start gap-4 mb-2">
                                        <div className={`${spaceMono.className}`}
                                             style={{
                                                 fontSize: 10,
                                                 color: B.gray,
                                                 letterSpacing: 1
                                             }}>{t.ref}</div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full"
                                                  style={{background: statusColor[t.status] || B.gray}}/>
                                            <span className={`${dMSans.className}`}
                                                  style={{
                                                      fontSize: 12,
                                                      color: statusColor[t.status] || B.gray,
                                                      fontWeight: 600
                                                  }}>{t.status}</span>
                                        </div>
                                    </div>
                                    <div className={`${dMSans.className}`}
                                         style={{
                                             fontSize: 14,
                                             color: B.charcoal,
                                             fontWeight: 500,
                                             marginBottom: 4
                                         }}>{t.subject}</div>
                                    <div className="flex items-center gap-4">
                                        <span className={`${dMSans.className} px-2 py-[2px] rounded-full text-[11px]`}
                                              style={{
                                                  fontWeight: 600,
                                                  background: `${statusColor[t.priority] || B.gray}15`,
                                                  color: statusColor[t.priority] || B.gray
                                              }}>
                                            {t.priority}
                                        </span>
                                        <span className={`${dMSans.className}`}
                                              style={{
                                                  fontSize: 12,
                                                  color: B.gray
                                              }}>Updated {t.updated}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="px-6 py-4">
                            <a href="/support"
                               className={`${dMSans.className} inline-flex items-center gap-2 px-4 py-[10px] rounded-lg no-underline transition-all duration-200`}
                               style={{
                                   fontWeight: 700,
                                   fontSize: 13,
                                   background: B.electric,
                                   color: "#fff"
                               }}
                               onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                               onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                                <Icon name="ticket" size={15} color="#fff"/> New Ticket
                            </a>
                        </div>
                    </div>

                    {/* Orders */}
                    <div className="rounded-[20px] bg-white overflow-hidden transition-all duration-700"
                         style={{
                             border: `1.5px solid ${B.lightgray}`,
                             opacity: vis ? 1 : 0,
                             transform: vis ? "none" : "translateX(30px)",
                             transitionDelay: "400ms",
                             boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
                         }}>
                        <div className="flex justify-between items-center px-6 py-4"
                             style={{borderBottom: `1px solid ${B.lightgray}`}}>
                            <h3 className={`${syne.className}`}
                                style={{fontWeight: 700, fontSize: 16, color: B.navy}}>Recent
                                Orders</h3>
                            <Link href="/shop" className={`${dMSans.className}`}
                                  style={{
                                      fontSize: 13,
                                      color: B.electric,
                                      fontWeight: 600,
                                      textDecoration: "none"
                                  }}>Shop →</Link>
                        </div>
                        <div className="flex flex-col">
                            {orders.map((o, i) => (
                                <div key={o.ref} className="px-6 py-4 transition-all duration-200 cursor-pointer"
                                     style={{borderBottom: i < orders.length - 1 ? `1px solid ${B.lightgray}` : "none"}}
                                     onMouseEnter={e => e.currentTarget.style.background = B.offwhite}
                                     onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                                    <div className="flex justify-between items-start gap-4 mb-2">
                                        <div className={`${spaceMono.className}`}
                                             style={{
                                                 fontSize: 10,
                                                 color: B.gray,
                                                 letterSpacing: 1
                                             }}>{o.ref}</div>
                                        <span className="w-2 h-2 rounded-full mt-1"
                                              style={{background: statusColor[o.status] || B.gray, flexShrink: 0}}/>
                                    </div>
                                    <div className={`${dMSans.className}`}
                                         style={{
                                             fontSize: 13,
                                             color: B.charcoal,
                                             marginBottom: 4
                                         }}>{o.items}</div>
                                    <div className={`${syne.className} flex justify-between items-center`}>
                                        <span style={{
                                            fontWeight: 700,
                                            fontSize: 15,
                                            color: B.navy
                                        }}>{o.value}</span>
                                        <span className={`${dMSans.className}`}
                                              style={{
                                                  fontSize: 12,
                                                  color: statusColor[o.status] || B.gray,
                                                  fontWeight: 600
                                              }}>{o.status}</span>
                                    </div>
                                    <div className={`${dMSans.className}`}
                                         style={{
                                             fontSize: 12,
                                             color: B.gray,
                                             marginTop: 4
                                         }}>{o.date}</div>
                                </div>
                            ))}
                        </div>
                        <div className="px-6 py-4">
                            <Link href="/shop"
                               className={`${dMSans.className} inline-flex items-center gap-2 px-4 py-2.5 rounded-lg no-underline transition-all duration-200`}
                               style={{
                                   fontWeight: 700,
                                   fontSize: 13,
                                   background: B.navy,
                                   color: "#fff"
                               }}
                               onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                               onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                                <Icon name="cart" size={15} color="#fff"/> Place New Order
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
