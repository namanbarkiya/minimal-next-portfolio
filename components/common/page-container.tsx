import React from "react";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <div>
      <PageHeader title={title} description={description} />
      <div className="mx-6">{children}</div>
    </div>
  );
}
