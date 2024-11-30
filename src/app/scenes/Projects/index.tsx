'use client'

import { useLayoutEffect, useState, useCallback } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import TagText from '@components/layout/TagText'
import ProjectCard from '@components/@projects/Card'
import Project from '@components/@projects/Project'
import { ScrollAnimation, UnmountAnimations } from './Animations'

import portfolio from '@portfolio'
import { Project as ProjectType } from '@typess/types'


export default function ProjectsScene({}) {
  const { projects } = portfolio

  const [ selectedProject, setSelectedProject ] = useState<ProjectType | null>(null)

  const openProject = useCallback((project: ProjectType) => {
    setSelectedProject(project)
  }, [])

  const closeProject = useCallback(() => {
    setSelectedProject(null)
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollAnimation()

    return () => {
      UnmountAnimations()
    }
  }, [])

  return (
    <section
      data-scroll
      data-scroll-section
      id="projects-section"
      className="relative flex min-h-dvh w-full flex-col items-end justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <TagText id="projects-title">projects</TagText>

      <div id="projects" className="flex w-max items-center justify-end gap-10">
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