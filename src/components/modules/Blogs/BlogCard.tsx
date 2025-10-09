/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <Link href={`/blogs/${blog?.id}`} className="block group h-full">
      <article className="relative bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-[580px]">
        {/* Thumbnail Section - Fixed Height */}
        {blog?.thumbnail ? (
          <div className="relative h-48 w-full overflow-hidden bg-muted flex-shrink-0">
            <Image
              src={blog?.thumbnail}
              alt={blog?.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ) : (
          <div className="h-48 w-full bg-gradient-to-br from-muted to-accent flex items-center justify-center flex-shrink-0">
            <div className="text-muted-foreground text-sm font-medium flex flex-col items-center gap-2">
              <svg
                className="w-12 h-12 opacity-40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>No Image Available</span>
            </div>
          </div>
        )}

        {/* Content Section - Flex Grow */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title - Fixed Height with Clamp */}
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight mb-3 min-h-[56px]">
            {blog?.title}
          </h3>

          {/* Excerpt - Fixed Height with Clamp */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 min-h-[63px]">
            {blog?.excerpt || blog?.content}
          </p>

          {/* Tags - Fixed Height Area */}
          <div className="mb-4 min-h-[32px]">
            {blog?.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.slice(0, 3).map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
                {blog.tags.length > 3 && (
                  <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border">
                    +{blog.tags.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Spacer to push footer to bottom */}
          <div className="flex-grow" />

          {/* Meta Information - Fixed at Bottom */}
          <div className="space-y-3 pt-4 border-t border-border">
            {/* Author & Date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <Image
                    src={
                      blog?.author?.profileImage ||
                      "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                    }
                    alt={blog?.author?.name || "Author"}
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-border group-hover:border-primary transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-card-foreground flex items-center gap-1.5 truncate">
                    {blog?.author?.name}
                    {blog?.author?.email && (
                      <svg
                        className="w-3.5 h-3.5 text-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Views & Reading Time */}
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <svg
                    className="w-4 h-4"
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
                  <span className="text-xs font-medium">
                    {blog?.views || 0}
                  </span>
                </div>
                {blog?.readingTime && (
                  <span className="text-xs text-muted-foreground">
                    {blog.readingTime} min read
                  </span>
                )}
              </div>
            </div>

            {/* Read More Button */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                Read Article
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Hover Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-1 to-chart-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </article>
    </Link>
  );
}
