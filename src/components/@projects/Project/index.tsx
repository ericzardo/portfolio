/* eslint-disable @next/next/no-img-element */
'use cleint'

import { useRef } from 'react'

import { X } from 'lucide-react'
import { ProjectAnimation } from './Animations'

import { Project as ProjectType } from '@typess/types'
import ProjectContent from './Content'
import { useGSAP } from '@gsap/react'

interface ProjectProps {
  project: ProjectType
  closeProject: () => void;
}

export default function Project ({ closeProject, project }: ProjectProps) {

  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    
    ProjectAnimation(containerRef.current)
  }, {
    scope: containerRef
  })

  return (
    <div
      id="project"
      className="fixed inset-2 z-50 flex items-center justify-between gap-2 rounded-xl bg-100 p-2 shadow-shadow sm:inset-3 sm:p-3 md:inset-4 md:p-4 lg:inset-5 lg:p-5"
    >
      <span
        onClick={closeProject}
        className="absolute right-2.5 top-2.5 max-h-7 max-w-7 cursor-pointer transition-all duration-300 ease-out hover:opacity-65 hover:scale-125"
      >
        <X className="size-full text-error"/>
      </span>

      <span className="flex size-full flex-col items-center justify-between gap-4 overflow-auto p-2 sm:gap-6 sm:p-3 md:flex-row md:gap-8 md:p-4 lg:gap-10 lg:p-5">
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