import ProjectDescription from './Description'
import ProjectFeatures from './Features'
import ProjectNote from './Note'
import ProjectTechs from './Techs'
import ProjectDate from './Date'

import { Project } from '@typess/types'
import ProjectDemo from './Demo'

interface ProjectContentProps {
  project: Project
}

export default function ProjectContent ({ project }: ProjectContentProps) {
  return (
    <div className="flex flex-col gap-1.5 py-4 sm:w-2/5 sm:gap-3 sm:py-6 md:gap-5 md:py-8 lg:py-10">

    <p className="text-sm text-900 sm:text-base">{project.title}</p>
    
    <span className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        <ProjectDescription descriptions={project.description} />
        <ProjectFeatures features={project.features} />
        <ProjectNote note={project.note} />
      </div>
      <ProjectTechs techs={project.techs} />
      <ProjectDemo demo={project.demo} />
      <ProjectDate date={project.date} />
    </span>
  </div>
  )
}