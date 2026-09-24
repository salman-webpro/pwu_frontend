import { Sidebar } from "@/components/dashboard/sidebar";
import { DEMO_COMPANY } from "@/lib/mock-data/company";
import { DEMO_USER } from "@/lib/mock-data/user";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar company={DEMO_COMPANY} user={DEMO_USER} />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
