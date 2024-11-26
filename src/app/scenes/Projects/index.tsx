/**
 * 
 * Resume Component here
 * 
 */

import { Tech } from "@typess/types";

import TagText from "@components/layout/TagText";
import InfosCard from "./InfosCard";
import PreviewCard from "./PreviewCard";

import portfolio from "@portfolio";

export default function ProjectsScene({}) {
  const { projects } = portfolio;

  return (
    <div className="flex min-h-dvh w-full flex-col items-end gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <TagText>projects</TagText>

      <div className="my-10 flex w-full flex-wrap items-end justify-end gap-10">
        {projects.map(p => (
          <PreviewCard key={p.title} title={p.title} description={p.description[0]} />
        ))}
        {projects.map(p => (
          <InfosCard key={p.title} title={p.title} description={p.description} techs={p.techs as Tech[]} />
        ))}
      </div>

    </div>
  );
}