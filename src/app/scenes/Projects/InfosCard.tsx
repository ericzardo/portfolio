import { Tech } from "@typess/types";

import IconCard from "@components/layout/IconCard";

interface ProjectInfosProps {
  title: string;
  description: string[];
  techs: Tech[]
}

export default function ProjectInfos({ title, description, techs }: ProjectInfosProps) {

  const techsPreviewCount = 3;
  const remainingTechs = techs.length - techsPreviewCount;

  return (
    <div className="flex size-full max-h-[400px] max-w-[400px] flex-col justify-between gap-5 overflow-hidden rounded-xl bg-100 px-5 py-8 shadow-shadow">

      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-900 underline decoration-primary-blue sm:text-base md:text-md">{title}</h2>
        <span className="flex flex-col gap-4">
          <p className="text-xs text-700 sm:text-sm">{description[0]}</p>
          <p className="text-xs text-700 sm:text-sm">{description[1]}</p>
        </span>
      </div>

      <div className="flex w-full items-center justify-end gap-1 sm:gap-1.5 md:gap-2">
        {techs.slice(0, techsPreviewCount).map(t => (
          <IconCard key={t.name} icon={t.icon} name={t.name} small />
        ))}
        {remainingTechs > 0 && (
          <p className="text-xs text-700 sm:text-sm">+ {remainingTechs}</p>
        )}
      </div>

    </div>
  );
}