'use client'

import { useState, useCallback, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import TagText from '@components/layout/TagText'
import ProjectCard from '@components/@projects/Card'
import Project from '@components/@projects/Project'
import { ScrollAnimation } from './Animations'

import portfolio from '@portfolio'
import { Project as ProjectType } from '@typess/types'


export default function ProjectsScene({}) {
  const { projects } = portfolio

  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const [ selectedProject, setSelectedProject ] = useState<ProjectType | null>(null)

  const openProject = useCallback((project: ProjectType) => {
    setSelectedProject(project)
  }, [])

  const closeProject = useCallback(() => {
    setSelectedProject(null)
  }, [])

  useGSAP(() => {
    if (!containerRef.current || !titleRef.current || !projectsRef.current) return

    ScrollAnimation(containerRef.current, titleRef.current)
  }, {
    scope: containerRef
  })


  return (
    <section
      data-scroll
      data-scroll-section
      ref={containerRef}
      className='relative flex min-h-dvh w-full flex-col items-end justify-center gap-3 overflow-x-hidden px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48'
    >
      <TagText ref={titleRef}>projects</TagText>

      <div ref={projectsRef} className="flex w-full gap-10">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p as ProjectType} onClick={() => openProject(p as ProjectType)} />
        ))}
      </div>

      {selectedProject && (
        <Project project={selectedProject} closeProject={closeProject} />
      )}

    </section>
  )
}