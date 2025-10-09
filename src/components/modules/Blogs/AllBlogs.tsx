"use client";
import BlogsLoadingPage from "@/app/(public)/blogs/loading";
import { useGetBlogsQuery } from "@/redux/features/blog/blogApi";
import { Blog } from "@/types";
import BlogCard from "./BlogCard";

export default function AllBlogs() {
  const { data: blogs, isLoading } = useGetBlogsQuery(undefined);

  if (isLoading) return <BlogsLoadingPage />;
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto max-w-6xl my-5">
      {blogs?.data < 0 ? (
        <h2 className="text-xl text-center font-semibold">Blog Not found</h2>
      ) : (
        blogs?.data?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)
      )}
    </div>
  );
}
