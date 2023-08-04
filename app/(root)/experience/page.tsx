import { Metadata } from "next";

import { cn } from "@/lib/utils";
import ProjectCard from "@/components/project-card";
import PageHeader from "@/components/page-header";

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
                <DemoContainer>
                    <ProjectCard
                        title="Card Title"
                        description="this is a card description"
                        bgSrc={
                            "https://images.unsplash.com/photo-1690740551294-50239800ca16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                        }
                    />
                </DemoContainer>
            </div>
        </>
    );
}
