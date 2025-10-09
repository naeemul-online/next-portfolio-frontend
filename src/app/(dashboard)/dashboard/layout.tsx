import { ProtectedRoute } from "@/components/modules/Auth/protect-route";
import { DashboardHeader } from "@/components/modules/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/modules/dashboard/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <div className="flex flex-1">
          <DashboardSidebar />
          <main className="flex-1 p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
