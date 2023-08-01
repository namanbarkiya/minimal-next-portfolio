import { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
    title: "Cards",
    description: "Examples of cards built using the components.",
};

function DemoContainer({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex items-center justify-center mb-4 md:mb-0 [&>div]:w-full ",
                className
            )}
            {...props}
        />
    );
}

export default function CardsPage() {
    return (
        <>
            <div className="items-start justify-center gap-6 rounded-lg p-8 sm:grid md:grid-cols-2 lg:grid-cols-3">
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
                <DemoContainer>
                    <ProjectCard />
                </DemoContainer>
            </div>
        </>
    );
}
