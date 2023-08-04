import PageHeader from "@/components/page-header";
import SkillsCard from "@/components/skills-card";
import { skills } from "@/config/skills";

export default function CardsPage() {
    return (
        <>
            <PageHeader
                title="Skills"
                description="This is the skill section for Naman Barkiya"
            />
            <SkillsCard skills={skills} />
        </>
    );
}
