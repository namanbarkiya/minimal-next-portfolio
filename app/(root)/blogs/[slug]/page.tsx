import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blogs";
import { cn } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    const ogImage = post.coverImage
      ? `${siteConfig.url}${post.coverImage}`
      : siteConfig.ogImage;

    return {
      title: post.title,
      description: post.description,
      authors: [{ name: siteConfig.authorName, url: siteConfig.url }],
      keywords: post.tags,
      alternates: {
        canonical: `${siteConfig.url}/blogs/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${siteConfig.url}/blogs/${slug}`,
        siteName: siteConfig.name,
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: [siteConfig.authorName],
        tags: post.tags,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [ogImage],
        creator: `@${siteConfig.username}`,
      },
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    };
  } catch {
    return { title: "Blog Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const isoDate = new Date(post.date).toISOString();
  const ogImage = post.coverImage
    ? `${siteConfig.url}${post.coverImage}`
    : siteConfig.ogImage;

  // BlogPosting JSON-LD — the single most important schema for article SEO
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
      sameAs: [siteConfig.links.github, siteConfig.links.twitter],
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/blogs/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blogs/${slug}`,
    },
    image: ogImage,
    keywords: post.tags.join(", "),
    wordCount: post.contentHtml.replace(/<[^>]*>/g, "").split(/\s+/).length,
    ...(post.readingTime && {
      timeRequired: `PT${post.readingTime}M`,
    }),
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: `${siteConfig.authorName}'s Blog`,
      url: `${siteConfig.url}/blogs`,
    },
  };

  // BreadcrumbList for post hierarchy
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${siteConfig.url}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteConfig.url}/blogs/${slug}`,
      },
    ],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-blog-post"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <Script
        id="schema-breadcrumb-post"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb nav (visible, accessible) */}
        <AnimatedText delay={0}>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <Icons.chevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-foreground transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li aria-hidden="true">
                <Icons.chevronRight className="w-3.5 h-3.5" />
              </li>
              <li
                className="text-foreground font-medium truncate max-w-[200px] sm:max-w-[300px]"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>
        </AnimatedText>

        {/* Header */}
        <AnimatedSection direction="up">
          <header className="mb-8">
            {/* Tags as keywords */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* H1 title — single h1 per page */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground mb-4">
              {post.title}
            </h1>

            {/* Description as lead paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {post.description}
            </p>

            {/* Author + date + reading time */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
              <address className="flex items-center gap-1.5 not-italic">
                <Icons.user className="w-4 h-4" />
                <a
                  rel="author"
                  href={siteConfig.url}
                  className="hover:text-foreground transition-colors"
                >
                  {siteConfig.authorName}
                </a>
              </address>
              <time dateTime={isoDate} className="flex items-center gap-1.5">
                <Icons.calendar className="w-4 h-4" />
                {formattedDate}
              </time>
              {post.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Icons.clock className="w-4 h-4" />
                  {post.readingTime} min read
                </span>
              )}
            </div>
          </header>
        </AnimatedSection>

        {/* Cover image (if exists) */}
        {post.coverImage && (
          <AnimatedSection direction="up" delay={0.05}>
            <figure className="mb-10">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={768}
                height={400}
                className="w-full h-auto rounded-lg border border-border object-cover"
                priority
              />
            </figure>
          </AnimatedSection>
        )}

        {/* Markdown content wrapped in semantic section */}
        <AnimatedSection direction="up" delay={0.1}>
          <section
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </AnimatedSection>

        {/* Footer nav */}
        <AnimatedSection
          direction="up"
          delay={0.15}
          className="mt-16 pt-8 border-t border-border"
        >
          <footer className="flex items-center justify-between">
            <Link
              href="/blogs"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-lg gap-2"
              )}
            >
              <Icons.chevronLeft className="w-4 h-4" />
              All posts
            </Link>
            <div className="text-sm text-muted-foreground">
              Written by{" "}
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {siteConfig.authorName}
              </Link>
            </div>
          </footer>
        </AnimatedSection>
      </article>
    </ClientPageWrapper>
  );
}
