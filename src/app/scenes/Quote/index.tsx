'use client'

import { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import Quote from '@components/@quote'
import { ScrollAnimation, UnmountAnimations } from './Animations'

import portfolio from '@portfolio'

export default function QuoteScene() {
  const { quote } = portfolio

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollAnimation()

    return () => {
      UnmountAnimations()
    }
  }, [])

  if (!quote) return

  return (
    <section
      data-scroll
      data-scroll-section
      id="quote-section"
      className="flex min-h-dvh w-full flex-col justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <span className="flex items-center justify-center">

        <Quote author={quote.author} phrase={quote.phrase} />

      </span>

    </section> 
  )
}