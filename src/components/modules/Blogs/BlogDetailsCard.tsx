"use client";
import BlogsLoadingPage from "@/app/(public)/blogs/loading";
import { useGetBlogByIdQuery } from "@/redux/features/blog/blogApi";
import Image from "next/image";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default function BlogDetailsCard() {
  const { id } = useParams();

  // Use generic type in RTK Query hook
  const { data: blog, isLoading, isError } = useGetBlogByIdQuery(Number(id));

  if (isLoading) return <BlogsLoadingPage />;

  // You might want a dedicated error page component here
  if (isError || !blog)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl text-destructive">
          Error loading blog post or post not found. 😔
        </p>
      </div>
    );

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-muted/50 to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          {/* Tags */}
          {blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up">
              {blog.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20 transition-colors hover:bg-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            {blog.title}
          </h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <p
              className="text-xl text-muted-foreground mb-10 leading-relaxed italic animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              {blog.excerpt}
            </p>
          )}

          {/* Author Info */}
          <div
            className="flex flex-wrap items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src={
                    blog.author.profileImage ||
                    "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                  }
                  alt={blog.author.name || "Author"}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-primary shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground flex items-center gap-2">
                  {blog.author.name}
                  {/* Verified Icon - simplified for cleaner code */}
                  {blog.author.email && (
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-muted-foreground">
                  Published on{" "}
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span className="font-medium">{blog.views || 0} views</span>
              </div>

              {blog.readingTime && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">
                    {blog.readingTime} min read
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.thumbnail && (
        <div
          className="max-w-5xl mx-auto px-4 -mt-16 mb-16 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl border border-border">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.01]"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 pb-24">
        {/* 3. ✨ Refactored: Use ReactMarkdown for full Markdown support */}
        <div
          className="blog-content prose prose-lg prose-indigo dark:prose-invert max-w-none animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]} // Enables syntax highlighting for code blocks
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div
              className="w-2 h-2 rounded-full bg-chart-1 animate-pulse"
              style={{ animationDelay: "200ms" }}
            />
            <div
              className="w-2 h-2 rounded-full bg-chart-2 animate-pulse"
              style={{ animationDelay: "400ms" }}
            />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Author Card */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg transition-shadow hover:shadow-2xl">
          <div className="flex items-start gap-6">
            <Image
              src={
                blog.author.profileImage ||
                "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
              }
              alt={blog.author.name || "Author"}
              width={80}
              height={80}
              className="rounded-full border-2 border-primary shadow-md"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-card-foreground">
                  {blog.author.name}
                </h3>
                {blog.author.email && (
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <p className="text-muted-foreground">
                {blog.author.email ||
                  "Passionate writer sharing insights and stories about technology and development."}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* 4. 🎨 Add custom styles for the prose element */}
      <style jsx global>{`
        /* This is crucial for applying Tailwind's prose styles and a nicer theme */
        .blog-content :global(pre) {
          background-color: #282c34 !important; /* Dark theme for code blocks */
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          font-size: 0.9em;
        }
        .blog-content :global(code) {
          background-color: #f3f4f6; /* Light gray background for inline code */
          color: #c026d3; /* A vibrant color for code */
          padding: 0.2em 0.4em;
          border-radius: 0.3em;
          font-weight: 600;
        }
        .dark .blog-content :global(code) {
          background-color: #1f2937; /* Dark background for inline code in dark mode */
          color: #a78bfa; /* Lavender color for dark mode inline code */
        }
        .blog-content :global(h1),
        .blog-content :global(h2) {
          padding-bottom: 0.3em;
          border-bottom: 1px solid var(--border, #e5e7eb);
        }
        .blog-content :global(a) {
          color: var(--primary, #0070f3);
          text-decoration: underline;
          font-weight: 600;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}
