import { Metadata } from "next";

import PageHeader from "@/components/page-header";
import SkillsCard from "@/components/skills-card";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";

export const metadata: Metadata = {
    title: "Skills",
    description: "Examples of cards built using the components.",
};

export default function SkillsPage() {
    return (
        <>
            <PageHeader
                title={pagesConfig.skills.title}
                description={pagesConfig.skills.description}
            />
            <SkillsCard skills={skills} />
        </>
    );
}
