import Link from "next/link";
import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDateFromObj } from "@/lib/utils";
import { Experiences } from "@/config/experience";
import namanImg from "../../../../public/naman-img.png";
import ChipContainer from "@/components/chip-container";
import ExperienceDescription from "@/components/exp-desc/exp-desc";
import CustomTooltip from "@/components/custom-tooltip";

interface ExperiencePageProps {
    params: {
        expId: string;
    };
}

export default function Experience({ params }: ExperiencePageProps) {
    let exp = Experiences.find((val) => val.id === params.expId);
    if (!exp) {
        redirect("/experience");
    }

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
                    {formatDateFromObj(exp.startDate)}
                </time>
                <h1 className="flex items-center mt-2 font-heading text-4xl leading-tight lg:text-5xl">
                    {exp.companyName}
                    <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                        <Link href={exp.websiteLink} target="_blank">
                            <HiOutlineExternalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                        </Link>
                    </CustomTooltip>
                </h1>
                <ChipContainer textArr={exp.category} />
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

            <Image
                src={exp.companyLogoImg}
                alt={exp.companyName}
                width={720}
                height={405}
                className="my-8 rounded-md border bg-muted transition-colors"
                priority
            />

            <div className="mb-7 ">
                <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
                    Tech Stack
                </h2>
                <ChipContainer textArr={exp.techStack} />
            </div>

            <div className="mb-7 ">
                <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
                    Description
                </h2>
                {/* {<exp.descriptionComponent />} */}
                <ExperienceDescription
                    paragraphs={exp.descriptionDetails.paragraphs}
                    bullets={exp.descriptionDetails.bullets}
                />
            </div>

            <div className="mb-7 ">
                <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
                    Page Info
                </h2>
                {exp.pagesInfoArr.map((page, ind) => (
                    <div key={ind}>
                        <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
                            <AiFillStar className="h-5 w-5 mr-2" /> {page.title}
                        </h3>
                        <div>
                            <p>{page.description}</p>
                            {page.imgArr.map((img, ind) => (
                                <Image
                                    src={img}
                                    key={ind}
                                    alt={img}
                                    width={720}
                                    height={405}
                                    className="my-4 rounded-md border bg-muted transition-colors"
                                    priority
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

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
