"use server";

export const getBlog = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {});
  const { data: blogs } = await res.json();

  return blogs;
};
