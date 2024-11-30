import ProjectDescription from './Description'
import ProjectFeatures from './Features'
import ProjectNote from './Note'
import ProjectTechs from './Techs'
import ProjectDate from './Date'

import { Project } from '@typess/types'

interface ProjectContentProps {
  project: Project
}

export default function ProjectContent ({ project }: ProjectContentProps) {
  return (
    <div className="flex h-full w-2/5 flex-col gap-5 py-10">

    <p className="text-sm text-900 sm:text-base">{project.title}</p>
    
    <span className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <ProjectDescription descriptions={project.description} />
        <ProjectFeatures features={project.features} />
        <ProjectNote note={project.note} />
      </div>
      <ProjectTechs techs={project.techs} />
      <ProjectDate date={project.date} />
    </span>
  </div>
  )
}