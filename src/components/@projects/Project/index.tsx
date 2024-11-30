/* eslint-disable @next/next/no-img-element */
'use cleint'

import { useLayoutEffect } from 'react'

import { X } from 'lucide-react'
import { ProjectAnimation } from './Animations'

import { Project as ProjectType } from '@typess/types'
import ProjectContent from './Content'

interface ProjectProps {
  project: ProjectType
  closeProject: () => void;
}

export default function Project ({ closeProject, project }: ProjectProps) {

  useLayoutEffect(() => {
    ProjectAnimation()
  }, [])

  return (
    <div
      id="project"
      className="fixed inset-5 z-50 flex items-center justify-between gap-2 rounded-xl bg-100 p-5 shadow-shadow"
    >
      <span
        onClick={closeProject}
        className="absolute right-2.5 top-2.5 max-h-7 max-w-7 cursor-pointer transition-all duration-300 ease-out hover:opacity-65 hover:scale-125"
      >
        <X className="size-full text-error"/>
      </span>

      <span className="flex size-full items-center justify-between gap-10 p-5">
        <ProjectContent project={project} />

        <div className="flex flex-1 select-none items-center justify-center object-cover">
          <img
            src={`/projects/${project.image}`}
            alt={`Background preview banner showcasing the ${project.title} project`}
            className="shdow-shadow rounded-xl"
          />
        </div>

      </span>
      
    </div>
  )
}