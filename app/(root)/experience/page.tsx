import { Metadata } from "next";

import { cn } from "@/lib/utils";
import ProjectCard from "@/components/project-card";
import PageHeader from "@/components/page-header";
import { Experiences } from "@/config/experience";

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

export default function ExperiencePage() {
    return (
        <>
            <PageHeader
                title="Experience"
                description="this is the experience page"
            />
            <div className="container items-start justify-center gap-6 rounded-lg p-8 sm:grid md:grid-cols-2 lg:grid-cols-3">
                {Experiences.map((exp) => (
                    <DemoContainer key={exp.id}>
                        <ProjectCard
                            id={exp.id}
                            title={exp.companyName}
                            description={exp.shortDescription}
                            bgSrc={exp.companyLogoImg}
                            chips={exp.category}
                        />
                    </DemoContainer>
                ))}
            </div>
        </>
    );
}
