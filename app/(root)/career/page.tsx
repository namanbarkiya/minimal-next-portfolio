import { Metadata } from "next";

import Timeline from "@/components/career/timeline";
import PageContainer from "@/components/common/page-container";
import { careerExperiences } from "@/config/career";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.career.metadata.title} | Professional Experience Timeline`,
  description: `${pagesConfig.career.metadata.description} Explore my professional journey and career milestones in software development.`,
  keywords: [
    "career timeline",
    "professional experience",
    "software developer career",
    "developer portfolio",
    "work experience",
  ],
  alternates: {
    canonical: `${siteConfig.url}/career`,
  },
};

export default function CareerPage() {
  return (
    <PageContainer
      title={pagesConfig.career.title}
      description={pagesConfig.career.description}
    >
      <Timeline experiences={careerExperiences} />
    </PageContainer>
  );
}
