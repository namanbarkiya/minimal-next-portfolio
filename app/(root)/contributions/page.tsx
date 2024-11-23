import { Metadata } from "next";

import PageHeader from "@/components/common/page-header";
import { pagesConfig } from "@/config/pages";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import PageContainer from "@/components/common/page-container";

export const metadata: Metadata = {
    title: "Contributions",
    description: "Examples of cards built using the components.",
};

export default function ContributonsPage() {
    return (
        <PageContainer
            title={pagesConfig.contributions.title}
            description={pagesConfig.contributions.description}
        >
            <ContributionCard
                contributions={[
                    ...contributionsUnsorted,
                    ...contributionsUnsorted,
                ]}
            />
        </PageContainer>
    );
}
