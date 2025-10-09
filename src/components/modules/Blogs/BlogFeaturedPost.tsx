"use client";
import BlogsLoadingPage from "@/app/(public)/blogs/loading";

import SectionTitle from "@/components/ui/SectionTitle";
import { useGetBlogsQuery } from "@/redux/features/blog/blogApi";
import { Blog } from "@/types";
import BlogCard from "./BlogCard";

export default function BlogFeaturedPost() {
  const { data: blogs, isLoading } = useGetBlogsQuery(undefined);
  if (isLoading) return <BlogsLoadingPage />;
  return (
    <div>
      <SectionTitle title="Featured Post" subtitle="A glimpse into my world" />
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto my-5">
        {blogs?.data?.slice(0, 3).map((blog: Blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
