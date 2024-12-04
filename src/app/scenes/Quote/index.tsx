'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import Quote from '@components/@quote'
import { ScrollAnimation } from './Animations'

import portfolio from '@portfolio'

export default function QuoteScene() {
  const { quote } = portfolio

  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    ScrollAnimation(containerRef.current)
  }, {
    scope: containerRef
  })

  if (!quote) return

  return (
    <section
      ref={containerRef}
      className="flex min-h-dvh w-full flex-col justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
        <span className="flex items-center justify-center">

          <Quote author={quote.author} phrase={quote.phrase} />

        </span>
      

    </section> 
  )
}