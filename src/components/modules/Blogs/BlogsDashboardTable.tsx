/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BlogsLoadingPage from "@/app/(public)/blogs/loading";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

import {
  useDeleteBlogMutation,
  useGetBlogsQuery,
} from "@/redux/features/blog/blogApi";

import { Blog } from "@/types";
import { Edit, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogsDashboardTable() {
  const { data: blogs, isLoading } = useGetBlogsQuery({});
  const [deleteBlog] = useDeleteBlogMutation();

  if (isLoading) return <BlogsLoadingPage />;
  return (
    <div>
      <div className="grid gap-6">
        {blogs.data.length > 0 ? (
          blogs?.data.map((blog: Blog) => (
            <Card key={blog.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="line-clamp-1">
                        {blog.title}
                      </CardTitle>
                      {blog.published ? (
                        <Badge variant="default">Published</Badge>
                      ) : (
                        <Badge variant="secondary">Draft</Badge>
                      )}
                      {blog.featured && (
                        <Badge variant="outline">Featured</Badge>
                      )}
                    </div>
                    <CardDescription className="mt-2 line-clamp-2">
                      {blog.excerpt}
                    </CardDescription>
                  </div>
                  {blog?.thumbnail ? (
                    <div className="relative overflow-hidden">
                      <Image
                        src={blog?.thumbnail}
                        alt={blog?.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
                      No Image
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>{formatDate(blog.createdAt)}</span>
                  <span>{blog.readingTime} min read</span>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 3).map((tag: any) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="text-chart-2"
                  >
                    <Link href={`/dashboard/blogs/${blog.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your blog post and remove it from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          onClick={() => deleteBlog(blog?.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <p className="text-muted-foreground">No blog posts yet</p>
              <Button asChild className="mt-4">
                <Link href="/dashboard/blogs/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Your First Post
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
