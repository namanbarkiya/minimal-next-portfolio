import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === "personal") {
    projectArr = projectArr.filter((val) => val.type === "Personal");
  } else if (tabVal === "professional") {
    projectArr = projectArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default function ProjectsPage() {
  const tabItems = [
    {
      value: "all",
      label: "All",
      content: renderContent("all"),
    },
    {
      value: "personal",
      label: "Personal",
      content: renderContent("personal"),
    },
    {
      value: "professional",
      label: "Professional",
      content: renderContent("professional"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
