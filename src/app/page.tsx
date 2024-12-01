'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import HeroScene from './scenes/Hero'
import ProjectsScene from './scenes/Projects'
import MeScene from './scenes/Me'
import TechsScene from './scenes/Techs'
import QuoteScene from '@scenes/Quote'
import TalkScene from '@scenes/Talk'
import FooterScene from '@scenes/Footer'

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  gsap.registerPlugin(ScrollTrigger, useGSAP)

  useEffect(() => {

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default

      if (!mainRef.current) return

      const locomotive = new LocomotiveScroll({
        multiplier: 1.4,
      })

      locomotive.update()
    }

    initLocomotiveScroll()
  }, [])

  return (
    <main ref={mainRef} className="flex w-full flex-col items-center justify-center">
      <HeroScene />
      <ProjectsScene />
      <MeScene />
      <TechsScene />
      <QuoteScene />
      <TalkScene />
      <FooterScene />
    </main>
  )
}
