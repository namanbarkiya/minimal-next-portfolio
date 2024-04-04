import Link from "next/link";
import Image from "next/image";

import namanImg from "@/public/naman-img.jpg";
import SkillsCard from "@/components/skills-card";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredSkills } from "@/config/skills";
import { Icons } from "@/components/icons";
import { pagesConfig } from "@/config/pages";
import { featuredExperiences } from "@/config/experience";
import ProjectCard from "@/components/project-card";
import { featuredContributions } from "@/config/contributions";
import ContributionCard from "@/components/contribution-card";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuLabel,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export default async function IndexPage() {
    return (
        <>
            <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
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
                        className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
                        alt="naman-barkiya-img"
                    />
                    {/* </div> */}
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Naman Barkiya
                    </h1>
                    <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
                        Full Stack Developer
                    </h3>
                    {/* <Accordion
                        type="single"
                        collapsible
                        className="flex items-center w-full max-w-[35rem]"
                    >
                        <AccordionItem value="main-ques" className="flex-1">
                            <AccordionTrigger>
                                <p className="flex items-center">
                                    Can you guess my favorite coding problem?
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                &ldquo;Check if a given string is palindrome or
                                not&rdquo;
                                <Icons.laughEmoji className="w-4 h-5 md:w-5 ml-2" />
                            </AccordionContent>
                        </AccordionItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                asChild
                                className="cursor-pointer"
                            >
                                <Icons.questionMark className="w-5 h-5 ml-3 text-muted-foreground " />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel className="flex items-center text-muted-foreground">
                                    <Icons.infoMark className="w-4 h-4 mr-2" />
                                    Hint: Naman
                                </DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Accordion> */}

                    {/* <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Full-stack web developer with two years&apos; experience
                        who is innovative and ambitious. Excellent analytical
                        and creative abilities, with a heavy emphasis on writing
                        well-documented code.
                    </p> */}
                    <div className="flex flex-col  mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
                        <Link
                            href={"https://github.com/namanbarkiya"}
                            target="_blank"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
                        </Link>
                        <Link
                            href={"/contact"}
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                })
                            )}
                        >
                            <Icons.contact className="w-4 h-4 mr-2" /> Contact
                        </Link>
                    </div>
                    <Icons.chevronDown className="h-6 w-6 mt-10" />
                </div>
            </section>
            <section
                id="skills"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.skills.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.skills.description}
                    </p>
                </div>
                <SkillsCard skills={featuredSkills} />
                <Link href="/skills" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
                {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> */}
            </section>
            <section
                id="experience"
                className="container space-y-6 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.experience.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.experience.description}
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4  md:w-full lg:grid-cols-3">
                    {featuredExperiences.map((exp) => (
                        <ProjectCard key={exp.id} project={exp} />
                    ))}
                </div>
                <Link href="/experience" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
                {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
            </section>
            <section
                id="contributions"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.contributions.title}
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.contributions.description}
                    </p>
                </div>
                <div className="mx-auto justify-center gap-4  md:w-full lg:grid-cols-3">
                    <ContributionCard contributions={featuredContributions} />
                </div>
                <Link href="/contributions" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
                {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> */}
            </section>
        </>
    );
}
