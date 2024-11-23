import { Metadata } from "next";

import PageHeader from "@/components/common/page-header";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";
import PageContainer from "@/components/common/page-container";

export const metadata: Metadata = {
    title: "Skills",
    description: "Examples of cards built using the components.",
};

export default function SkillsPage() {
    return (
        <PageContainer
            title={pagesConfig.skills.title}
            description={pagesConfig.skills.description}
        >
            <SkillsCard skills={skills} />
        </PageContainer>
    );
}
