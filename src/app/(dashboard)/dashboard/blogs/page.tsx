import BlogsDashboardTable from "@/components/modules/Blogs/BlogsDashboardTable";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import Link from "next/link";

export default async function BlogsManagementPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="mt-2 text-muted-foreground">Manage your blog content</p>
        </div>
        <Button asChild className="cursor-pointer z-50 ">
          <Link href="/dashboard/blogs/new">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>
      <BlogsDashboardTable />
    </div>
  );
}
