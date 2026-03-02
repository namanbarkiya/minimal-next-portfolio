import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { BlogMeta } from "@/lib/blogs";

interface BlogCardProps {
  blog: BlogMeta;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const isoDate = new Date(blog.date).toISOString();

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group relative flex flex-col bg-background border border-border rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5"
    >
      <article className="flex flex-col h-full">
        {/* Cover image */}
        {blog.coverImage && (
          <div className="relative w-full h-[180px] flex-shrink-0 overflow-hidden bg-muted">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow gap-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5" aria-label="Tags">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3 flex-grow leading-relaxed">
            {blog.description}
          </p>

          {/* Footer: date + read time + arrow */}
          <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <time dateTime={isoDate} className="flex items-center gap-1">
                <Icons.calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </time>
              {blog.readingTime && (
                <span className="flex items-center gap-1">
                  <Icons.clock className="w-3.5 h-3.5" />
                  {blog.readingTime} min read
                </span>
              )}
            </div>
            {/* Decorative read indicator */}
            <span
              className="inline-flex items-center gap-0.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200"
              aria-hidden="true"
            >
              Read
              <Icons.chevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
