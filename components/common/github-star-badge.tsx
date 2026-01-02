"use client";

import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type GitHubStarBadgeProps = {
  className?: string;
};

export function GitHubStarBadge({ className }: GitHubStarBadgeProps) {
  const [stars, setStars] = React.useState<number | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/github-stars", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as { stars?: number | null };
        if (cancelled) return;
        setStars(typeof data.stars === "number" ? data.stars : null);
      } catch {
        // ignore
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Link
      href={siteConfig.links.templateRepo}
      target="_blank"
      rel="noreferrer"
      aria-label={`View template repo on GitHub${
        stars != null ? ` (${stars.toLocaleString()} stars)` : ""
      }`}
      className={cn(
        "inline-flex h-8 items-center gap-2 rounded-full border border-border bg-background/60 px-3 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
    >
      <span className="hidden items-center gap-2 sm:inline-flex">
        <Icons.gitHub className="h-3.5 w-3.5" />
        <span className="font-medium">Template</span>
        <span className="text-muted-foreground/60">·</span>
      </span>
      <Icons.star className="h-3.5 w-3.5" />
      <span className="font-medium tabular-nums">
        {stars != null ? stars.toLocaleString() : "Star"}
      </span>
    </Link>
  );
}
