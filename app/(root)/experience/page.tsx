import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/experience/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
};

const renderContent = (tabVal: string) => {
  let expArr = Experiences;
  if (tabVal === "personal") {
    expArr = expArr.filter((val) => val.type === "Personal Project");
  } else if (tabVal === "professional") {
    expArr = expArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {expArr.map((exp) => (
        <ProjectCard project={exp} key={exp.id} />
      ))}
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="conatiner grid max-w-[30rem] grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          {renderContent("all")}
        </TabsContent>
        <TabsContent value="professional">
          {renderContent("professional")}
        </TabsContent>
        <TabsContent value="personal">{renderContent("personal")}</TabsContent>
      </Tabs>
    </PageContainer>
  );
}
