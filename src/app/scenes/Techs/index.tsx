'use client'

import { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import TagText from '@components/layout/TagText'
import IconCard from '@components/layout/IconCard'
import { UnmountAnimations, ScrollAnimation } from './Animations'

import portfolio from '@portfolio'
import { SimpleIconName } from '@typess/types'

export default function TechsScene({}) {
  const { techs } = portfolio

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollAnimation()
  
    return () => {
      UnmountAnimations()
    }
  }, [])

  return (
    <section
      id="techs-section"
      data-scroll
      data-scroll-section
      className="flex min-h-max w-full flex-col items-end gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <TagText id="techs-title">techs</TagText>

      <div id="techs" className="my-5 flex w-full items-center justify-start gap-4">
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