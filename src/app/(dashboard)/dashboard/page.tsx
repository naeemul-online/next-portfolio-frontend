import BlogDashboardStats from "@/components/modules/Blogs/BlogDashboardStats";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome back! Here&apos;s an overview of your portfolio.
        </p>
      </div>
      <BlogDashboardStats />
    </div>
  );
}
