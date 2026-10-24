import React from "react";

import DictText from "@/components/common/dict-text";

const ProjectDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p className="mb-4" key={index}>
          <DictText text={paragraph} />
        </p>
      ))}
      <ul className="list-disc pl-6 mt-4">
        {bullets.map((bullet, index) => (
          <li key={index}>
            <DictText text={bullet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDescription;
