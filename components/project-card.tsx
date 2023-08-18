import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import ChipContainer from "@/components/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
    project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="relative p-6 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-transparent dark:border-gray-700">
            <div className="relative w-full h-[200px]">
                <Image
                    className="rounded-lg border border-gray-200  dark:border-gray-700 object-cover"
                    src={project.companyLogoImg}
                    alt="img"
                    fill
                />
            </div>
            <div className="pt-5 space-y-3">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.companyName}
                </h5>
                <p className="line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
                    {project.shortDescription}
                </p>
                <div className="flex gap-2 flex-wrap">
                    <ChipContainer textArr={project.category} />
                </div>
                <Link href={`/experience/${project.id}`}>
                    <Button variant={"default"} className="mt-2">
                        Read more
                        <Icons.chevronRight className="w-4 ml-1" />
                    </Button>
                </Link>
            </div>
            <div className="absolute bottom-4 right-4 dark:border-gray-700 p-3 rounded-full  bg-white border dark:bg-gray-950 border-gray-200 ">
                {project.type === "Personal Project" ? (
                    <Icons.userFill className="h-4 w-4" />
                ) : (
                    <Icons.work className="h-4 w-4" />
                )}
            </div>
        </div>
    );
}
