import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";

const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours

function getTemplateRepoSlug(): string {
  try {
    const url = new URL(siteConfig.links.templateRepo);
    return url.pathname.replace(/^\/+/, "");
  } catch {
    // Fallback (should never happen unless config is invalid)
    return "namanbarkiya/minimal-next-portfolio";
  }
}

async function getGitHubRepoStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export async function GET() {
  const repo = getTemplateRepoSlug();
  const stars = await getGitHubRepoStars(repo);

  return NextResponse.json({
    repo,
    url: siteConfig.links.templateRepo,
    stars,
  });
}
