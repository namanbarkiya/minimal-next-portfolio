import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import namanImg from "../../../../public/naman-img.png";
import Image from "next/image";

export default function Experience() {
    return (
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <Link
                href="/experience"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-[-200px] top-14 hidden xl:inline-flex"
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                All Experience
            </Link>
            <div>
                <time
                    dateTime={Date.now().toString()}
                    className="block text-sm text-muted-foreground"
                >
                    Published on {formatDate(Date.now())}
                </time>
                <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
                    Test
                </h1>
                <div className="mt-4 flex space-x-4">
                    <Link
                        href={`https://twitter.com/test`}
                        className="flex items-center space-x-2 text-sm"
                    >
                        <Image
                            src={namanImg}
                            alt={"naman"}
                            width={42}
                            height={42}
                            className="rounded-full bg-white"
                        />

                        <div className="flex-1 text-left leading-tight">
                            <p className="font-medium">{"test"}</p>
                            <p className="text-[12px] text-muted-foreground">
                                @test
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            {/* {post.image && (
      <Image
        src={post.image}
        alt={post.title}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />
    )} */}
            {/* <Mdx code={post.body.code} /> */}
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link
                    href="/experience"
                    className={cn(buttonVariants({ variant: "ghost" }))}
                >
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    All Experience
                </Link>
            </div>
        </article>
    );
}
