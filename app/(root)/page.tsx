import Link from "next/link";
import Image from "next/image";

// import { "siteConfig } from "@/config/site"";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import namanImg from "../../public/naman-img.png";
import { featuredSkills, skills } from "@/config/skills";
import Rating from "@/components/rating";
import { Icons } from "@/components/icons";
import SkillsCard from "@/components/skills-card";

export default async function IndexPage() {
    return (
        <>
            <section className="space-y-6 pb-8 pt-6 mb-10 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
                    {/* <Link
                        href={"siteConfig.links.twitter"}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Follow along on Twitter
                    </Link> */}
                    {/* <div className="max-w-[16rem]"> */}
                    <Image
                        src={namanImg}
                        height={100}
                        width={100}
                        sizes="100vw"
                        style={{
                            width: "40%",
                            maxWidth: "16rem",
                        }}
                        className="rounded-full mb-6 p-2 h-auto"
                        alt="naman-barkiya-img"
                    />
                    {/* </div> */}
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Naman Barkiya
                    </h1>
                    <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
                        Full Stack Developer
                    </h3>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Full-stack web developer with two years&apos; experience
                        who is innovative and ambitious. Excellent analytical
                        and creative abilities, with a heavy emphasis on writing
                        well-documented code.
                    </p>
                    <div className="space-x-4 mt-10">
                        <Link
                            href="/login"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            GitHub
                        </Link>
                        <Link
                            href={"siteConfig.links.github"}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                })
                            )}
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>
            <section
                id="features"
                className="container space-y-6 bg-slate-50 dark:bg-transparent -mt-20 py-10 md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Skills
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        This project is an experiment to see how a modern app,
                        with features like auth, subscriptions, API routes, and
                        static pages would work in Next.js 13 app dir.
                    </p>
                </div>
                <SkillsCard skills={featuredSkills} />
                <Link href="/skills" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
                <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {siteConfig.name} also includes a blog and a
                        full-featured documentation site built using
                        Contentlayer and MDX.
                    </p>
                </div>
            </section>
            {/* <section
                id="open-source"
                className="container py-8 md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Proudly Open Source
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {siteConfig.name} is open source and powered by open
                        source software. <br /> The code is available on{" "}
                        <Link
                            href={"siteConfig.links.github"}
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                        .{" "}
                    </p>
                    <Link
                        href={"siteConfig.links.github"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex"
                    >
                        <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-5 w-5 text-foreground"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                            <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                                0 stars on GitHub
                            </div>
                        </div>
                    </Link>
                </div>
            </section> */}
        </>
    );
}
