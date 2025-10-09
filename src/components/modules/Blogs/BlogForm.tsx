"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useRouter } from "next/navigation";

import Loading from "@/components/ui/Loading";
import { useCreateBlogMutation } from "@/redux/features/blog/blogApi";
import type { Blog } from "@/types";
import { ImageIcon, Loader2, MoveLeft, Sparkles } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "sonner";

const blogSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(200, "Title is too long"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  excerpt: z
    .string()
    .min(10, "Excerpt must be at least 10 characters")
    .max(300, "Excerpt is too long")
    .optional(),
  thumbnail: z.string().url("Must be a valid URL").or(z.literal("")).optional(),
  tags: z.string().min(1, "At least one tag is required"),
  published: z.boolean().optional(),
  featured: z.boolean().optional(),
  metaTitle: z
    .string()
    .max(60, "Meta title should be under 60 characters")
    .optional(),
  metaDescription: z
    .string()
    .max(160, "Meta description should be under 160 characters")
    .optional(),
});

type BlogFormData = z.infer<typeof blogSchema>;

interface BlogFormProps {
  blog?: Blog;
}

export function BlogForm({ blog }: BlogFormProps) {
  console.log(blog);
  const router = useRouter();
  const [createBlog] = useCreateBlogMutation();
  const { data: session } = useSession();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: blog?.title ?? "",
      content: blog?.content ?? "",
      excerpt: blog?.excerpt ?? "",
      thumbnail: blog?.thumbnail ?? "",
      tags: Array.isArray(blog?.tags) ? blog.tags.join(", ") : "",
      published: blog?.published ?? false,
      featured: blog?.featured ?? false,
      metaTitle: blog?.metaTitle ?? "",
      metaDescription: blog?.metaDescription ?? "",
    },
  });

  const onSubmit = async (data: BlogFormData) => {
    try {
      const payload = {
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        thumbnail: data.thumbnail || undefined,
        tags: data.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        published: data.published,
        featured: data.featured,
        metaTitle: data.metaTitle || data.title,
        metaDescription: data.metaDescription || data.excerpt,
        authorId: session?.user?.id,
        views: 0,
      };

      await createBlog(payload).unwrap();

      toast.success("Blog post created successfully!", {
        description: `"${data.title}" has been published to your blog.`,
        duration: 5000,
      });

      form.reset();
      router.push("/dashboard/blogs");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create blog post", {
        description: "Please check your inputs and try again.",
        duration: 5000,
      });
    }
  };

  if (form.formState.isSubmitting) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button asChild variant="outline" className="group">
            <Link href="/dashboard/blogs">
              <MoveLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back To Blogs
            </Link>
          </Button>
        </div>

        {/* Title Card */}
        <div className="bg-gradient-to-r from-primary/10 via-chart-1/10 to-chart-2/10 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                {blog ? "Edit Blog Post" : "Create New Blog Post"}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Share your thoughts with the world
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Main Content Card */}
            <div className="bg-card rounded-xl border shadow-sm p-6 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-chart-1 rounded-full" />
                <h2 className="text-lg font-semibold">Basic Information</h2>
              </div>

              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium">
                        Title <span className="text-destructive">*</span>
                      </FormLabel>
                      <span className="text-xs text-muted-foreground">
                        {field.value?.length || 0}/200
                      </span>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Enter an engaging blog post title..."
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Excerpt */}
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium">
                        Excerpt <span className="text-destructive">*</span>
                      </FormLabel>
                      <span className="text-xs text-muted-foreground">
                        {field.value?.length || 0}/300
                      </span>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Write a brief, compelling summary of your blog post..."
                        rows={3}
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Content */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium">
                        Content <span className="text-destructive">*</span>
                      </FormLabel>
                      <span className="text-xs text-muted-foreground">
                        {field.value?.length || 0} characters
                      </span>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Write your blog content here. You can use Markdown for formatting:&#10;&#10;# Heading 1&#10;## Heading 2&#10;**Bold text**&#10;*Italic text*&#10;- List item&#10;```code block```"
                        rows={12}
                        className="resize-y font-mono text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      💡 Tip: Use Markdown syntax for formatting your content
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Media & Tags Card */}
            <div className="bg-card rounded-xl border shadow-sm p-6 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b">
                <div className="h-1 w-12 bg-gradient-to-r from-chart-1 to-chart-2 rounded-full" />
                <h2 className="text-lg font-semibold">Media & Categories</h2>
              </div>

              {/* Thumbnail URL */}
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      Thumbnail URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://example.com/image.jpg"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Recommended: 1200x630px, JPG or PNG
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tags */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Tags <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="React, Hooks, JavaScript, Frontend"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Separate tags with commas. Example: Web Development,
                      React, TypeScript
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Settings Card */}
            <div className="bg-card rounded-xl border shadow-sm p-6 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b">
                <div className="h-1 w-12 bg-gradient-to-r from-chart-2 to-primary rounded-full" />
                <h2 className="text-lg font-semibold">Publishing Settings</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Published Switch */}
                <FormField
                  control={form.control}
                  name="published"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between rounded-lg border bg-secondary/10 p-4 hover:bg-secondary/20 transition-colors">
                      <div className="space-y-0.5">
                        <FormLabel className="font-medium">Published</FormLabel>
                        <FormDescription className="text-xs">
                          Make visible to public
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Featured Switch */}
                <FormField
                  control={form.control}
                  name="featured"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between rounded-lg border bg-secondary/10 p-4 hover:bg-secondary/20 transition-colors">
                      <div className="space-y-0.5">
                        <FormLabel className="font-medium">Featured</FormLabel>
                        <FormDescription className="text-xs">
                          Show on homepage
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* SEO Card */}
            <div className="bg-card rounded-xl border shadow-sm p-6 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b">
                <div className="h-1 w-12 bg-gradient-to-r from-primary via-chart-1 to-chart-2 rounded-full" />
                <h2 className="text-lg font-semibold">SEO Optimization</h2>
              </div>

              {/* Meta Title */}
              <FormField
                control={form.control}
                name="metaTitle"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium">
                        Meta Title
                      </FormLabel>
                      <span className="text-xs text-muted-foreground">
                        {field.value?.length || 0}/60
                      </span>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="SEO optimized title (defaults to blog title)"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Meta Description */}
              <FormField
                control={form.control}
                name="metaDescription"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium">
                        Meta Description
                      </FormLabel>
                      <span className="text-xs text-muted-foreground">
                        {field.value?.length || 0}/160
                      </span>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="SEO optimized description (defaults to excerpt)"
                        rows={3}
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      💡 Optimal length: 150-160 characters for best search
                      engine display
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/dashboard/blogs")}
                disabled={form.formState.isSubmitting}
                className="min-w-[120px]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="min-w-[120px] bg-gradient-to-r from-primary to-chart-1 hover:opacity-90 transition-opacity"
              >
                {form.formState.isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving...
                  </span>
                ) : blog ? (
                  "Update Post"
                ) : (
                  "Create Post"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
