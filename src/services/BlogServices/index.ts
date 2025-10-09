export const getBlogById = async (blogId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`);
  return await res.json();
};

export const getBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    next: {
      tags: ["BLOGS"],
    },
  });
  return await res.json();
};
