/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/BlogServices";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
  const { data: blogs } = await res.json();

  return blogs.slice(0, 2).map((blog: any) => ({
    blogId: String(blog?.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blog = await getBlogById(blogId);

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetailsPage = async () => {
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard />
    </div>
  );
};

export default BlogDetailsPage;
