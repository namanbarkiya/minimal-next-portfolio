import { Metadata } from "next";

import Timeline from "@/components/career/timeline";
import PageContainer from "@/components/common/page-container";
import { careerExperiences } from "@/config/career";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.career.metadata.title,
  description: pagesConfig.career.metadata.description,
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
