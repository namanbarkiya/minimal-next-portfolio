"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GithubRedirectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-fit max-w-sm overflow-hiddenshadow-lg transition-all duration-300 ease-in-out transform hover:scale-102 mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <Heart
            className={`w-12 h-12 transition-colors duration-300 ease-out ${
              isHovered ? "text-red-500" : "text-muted-foreground"
            }`}
          />
        </div>
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl duration-300">
          Like this template?
        </h2>
        <p className="mt-2 mb-10 font-heading text-lg text-muted-foreground">
          It&#39;s open source. Explore and contribute on GitHub.
        </p>
        <Github className="w-10 h-10 text-muted-foreground mb-5" />
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Link
          href={"https://github.com/namanbarkiya/minimal-next-portfolio"}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent border-2 transition-all duration-300 py-6"
          )}
        >
          <span className="mr-2">Source Code</span>
          <ExternalLink className="w-5 h-5" />
        </Link>
      </CardFooter>
      <div
        className={`h-1 bg-gradient-to-r from-red-500 to-red-500 transition-all duration-300 ease-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </Card>
  );
}
