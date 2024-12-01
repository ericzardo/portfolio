'use client'

import { useCallback, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { Social } from '@typess/types'

import TagText from '@components/layout/TagText'
import Apresentation from '@components/@me/Apresentation'
import Gallery from '@components/@me/Gallery'
import { ScrollAnimation } from './Animation'

import portfolio from '@portfolio'

export default function MeScene() {
  const { name, about, socials } = portfolio

  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const [ isGalleryOpen, setIsGalleryOpen ] = useState<boolean>(false)

  const handleGallery = useCallback(() => {
    setIsGalleryOpen(prev => !prev)
  }, [])

  useGSAP(() => {
    if (!containerRef.current || !titleRef.current) return

    ScrollAnimation(containerRef.current, titleRef.current)
  }, {
    scope: containerRef
  })

  return (
    <>
      <section
        data-scroll
        data-scroll-section
        ref={containerRef}
        className="flex min-h-max w-full flex-col justify-center gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
      >
        <TagText ref={titleRef}>me</TagText>

        <div className="mt-10 flex w-full gap-10">
          <Apresentation
            name={name}
            about={about}
            socials={socials as Social[]}
            handleGallery={handleGallery}
          />
        </div>

      </section>

      {isGalleryOpen && (
        <Gallery handleGallery={handleGallery} />
      )}
    </>
  )
}