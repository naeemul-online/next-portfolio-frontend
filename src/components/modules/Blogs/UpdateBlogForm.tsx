"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useParams, useRouter } from "next/navigation";

import Loading from "@/components/ui/Loading";
import {
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/redux/features/blog/blogApi";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().min(1, "Excerpt is required").optional(),
  thumbnail: z.string().optional(),
  tags: z.string().optional(),
  published: z.boolean().optional(),
  featured: z.boolean().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

type BlogFormData = z.infer<typeof blogSchema>;

export function UpdateBlogForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = useParams();
  const { data: blog, isLoading } = useGetBlogByIdQuery(id);

  const [updateBlog] = useUpdateBlogMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      thumbnail: "",
      tags: "",
      published: false,
      featured: false,
      metaTitle: "",
      metaDescription: "",
    },
  });

  // Reset form with blog data when it loads
  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title ?? "",
        content: blog.content ?? "",
        excerpt: blog.excerpt ?? "",
        thumbnail: blog.thumbnail ?? "",
        tags: blog.tags?.join(", ") ?? "",
        published: blog.published ?? false,
        featured: blog.featured ?? false,
        metaTitle: blog.metaTitle ?? "",
        metaDescription: blog.metaDescription ?? "",
      });
    }
  }, [blog, reset]);

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        id: blog?.id,
        tags: data?.tags?.split(",").map((tag) => tag.trim()),
      };

      await updateBlog(payload);
      toast.success("Blog post Updated successfully");
      router.push("/dashboard/blogs");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Update blog post");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <Button asChild className="cursor-pointer z-50 ">
        <Link href="/dashboard/blogs">
          <MoveLeft className="h-4 w-4" />
          Back To Blogs
        </Link>
      </Button>
      <h2 className="text-xl font-semibold text-center">Update Blog</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-dvw flex flex-col justify-center items-center overflow-hidden"
      >
        <div className="w-2/3">
          <div className="pt-6 space-y-4">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                placeholder="Enter blog post title"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-sm text-destructive">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Input
                id="excerpt"
                placeholder="Brief description of the post"
                {...register("excerpt")}
              />
              {errors.excerpt && (
                <p className="text-sm text-destructive">
                  {errors.excerpt.message}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <Input
                id="content"
                placeholder="Write your content here"
                {...register("content")}
              />
              {errors.content && (
                <p className="text-sm text-destructive">
                  {errors.content.message}
                </p>
              )}
            </div>

            {/* Thumbnail URL */}
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail URL</Label>
              <Input
                id="thumbnail"
                placeholder="https://example.com/image.jpg"
                {...register("thumbnail")}
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                placeholder="web development, javascript, react"
                {...register("tags")}
              />
            </div>

            {/* Published Switch */}
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="published">Published</Label>
                <p className="text-sm text-muted-foreground">
                  Make this post visible to the public
                </p>
              </div>
              <Switch id="published" {...register("published")} />
            </div>

            {/* Featured Switch */}
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="featured">Featured</Label>
                <p className="text-sm text-muted-foreground">
                  Show this post on the homepage
                </p>
              </div>
              <Switch id="featured" {...register("featured")} />
            </div>

            {/* Meta Title */}
            <div className="space-y-2">
              <Label htmlFor="metaTitle">Meta Title</Label>
              <Input
                id="metaTitle"
                placeholder="SEO optimized title"
                {...register("metaTitle")}
              />
            </div>

            {/* Meta Description */}
            <div className="space-y-2">
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Input
                id="metaDescription"
                placeholder="SEO optimized description"
                {...register("metaDescription")}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Update Post"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard/blogs")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
}
