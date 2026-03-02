import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
  readingTime?: number;
  featured?: boolean;
}

export interface BlogMeta extends BlogFrontmatter {
  slug: string;
}

export interface BlogPost extends BlogMeta {
  contentHtml: string;
}

function ensureBlogsDir() {
  if (!fs.existsSync(BLOGS_DIR)) {
    fs.mkdirSync(BLOGS_DIR, { recursive: true });
  }
}

/** Returns all blog slugs (file names without .md) */
export function getAllBlogSlugs(): string[] {
  ensureBlogsDir();
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** Returns metadata for all blogs, sorted newest first */
export function getAllBlogsMeta(): BlogMeta[] {
  ensureBlogsDir();
  const slugs = getAllBlogSlugs();

  const blogs = slugs.map((slug) => {
    const filePath = path.join(BLOGS_DIR, `${slug}.md`);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    return {
      slug,
      ...(data as BlogFrontmatter),
    } as BlogMeta;
  });

  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Returns full blog post (metadata + parsed HTML content) for a given slug */
export async function getBlogPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOGS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  const contentHtml = processed.toString();

  return {
    slug,
    ...(data as BlogFrontmatter),
    contentHtml,
  };
}

/** Returns the featured blogs (marked featured: true), falling back to the latest 3 */
export function getFeaturedBlogs(): BlogMeta[] {
  const all = getAllBlogsMeta();
  const featured = all.filter((b) => b.featured);
  return featured.length > 0 ? featured.slice(0, 3) : all.slice(0, 3);
}

/** Estimates reading time from raw markdown content */
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
