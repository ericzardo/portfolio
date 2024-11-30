'use client'

import { useCallback, useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import { SimpleIconName } from '@typess/types'

import Link from 'next/link'
import IconButton from '@components/layout/IconButton'
import { ScrollAnimation, UnmountAnimations } from './Animations'

import portfolio from '@portfolio'


export default function FooterScene () {
  const { name, socials } = portfolio

  const openSocial = useCallback((url: string) => {
    window.open(url, '_blank')
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollAnimation()

    return () => {
      UnmountAnimations()
    }
  }, [])

  return (
    <div id="footer-section" className="flex w-full flex-col items-center justify-between gap-4 bg-50 px-6 py-10 shadow-shadow sm:flex-row sm:px-8 sm:py-16 md:px-16 lg:px-24 xl:px-48">
      <span className="flex w-full flex-1 flex-col gap-2.5">
        <p className="select-text text-xs font-medium text-950 sm:text-sm md:text-base">{name}</p>
        <p className="select-none text-[10px] text-700 sm:text-xs md:text-sm">Copyright © 2024. All rights reserved.</p>
      </span>

      <div className="flex w-full flex-col items-end justify-between gap-2 sm:w-fit">
        <span className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5">
          {socials.map(s => (
            <IconButton key={s.name} icon={s.icon as SimpleIconName} onClick={() => openSocial(s.url)} />
          ))}
        </span>
        <Link href="" className="cursor-pointer">
          <p className="text-end text-xs text-700 transition-all duration-300 ease-linear hover:text-900 hover:scale-95 sm:text-sm md:text-base">Back to Top</p>
        </Link>
      </div>
    </div>
  )
}