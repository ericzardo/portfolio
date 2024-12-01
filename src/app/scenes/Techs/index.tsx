'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import TagText from '@components/layout/TagText'
import IconCard from '@components/layout/IconCard'
import { ScrollAnimation } from './Animations'

import portfolio from '@portfolio'
import { SimpleIconName } from '@typess/types'

export default function TechsScene({}) {
  const { techs } = portfolio

  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const techsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !titleRef.current || !techsRef.current) return
    
    ScrollAnimation(containerRef.current, titleRef.current, techsRef.current)
  }, {
    scope: containerRef
  })

  return (
    <section
      data-scroll
      data-scroll-section
      ref={containerRef}
      className="flex min-h-max w-full flex-col items-end gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <TagText ref={titleRef}>techs</TagText>

      <div ref={techsRef} className="my-5 flex w-full items-center justify-start gap-4">
        {techs.map(t => (
          <IconCard
            key={t.name}
            name={t.name}
            icon={t.icon as SimpleIconName}
          />
        ))}
      </div>

    </section>
  )
}