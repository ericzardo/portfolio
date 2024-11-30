'use client'

import { useCallback, useLayoutEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import { Social } from '@typess/types'

import TagText from '@components/layout/TagText'
import Apresentation from '@components/@me/Apresentation'
import Gallery from '@components/@me/Gallery'
import { ScrollAnimation, UnmountAnimations } from './Animation'

import portfolio from '@portfolio'

export default function MeScene() {
  const { name, about, socials } = portfolio

  const [ isGalleryOpen, setIsGalleryOpen ] = useState<boolean>(false)

  const handleGallery = useCallback(() => {
    setIsGalleryOpen(prev => !prev)
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollAnimation()

    return () => {
      UnmountAnimations()
    }
  }, [])

  return (
    <>
      <section
        data-scroll
        data-scroll-section
        id="me-section"
        className="flex min-h-max w-full flex-col justify-center gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
      >
        <TagText id="me-title">me</TagText>

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