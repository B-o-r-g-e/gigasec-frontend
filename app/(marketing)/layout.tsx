import MarketingShell from "@/components/layout/MarketingShell";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MarketingShell>{children}</MarketingShell>
    );
}
