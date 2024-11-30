import { MouseEvent } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

export const onHover = (e: MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget

  if (!card) return

  const scrollTrigger = ScrollTrigger.getById('project-cards-trigger')
  if (scrollTrigger) scrollTrigger.getTween().pause()

  const tl = gsap.timeline()

  tl.to(card, {
    scale: 1.1,
    duration: 0.1
  })
  .to(card, {
    rotationY: 180,
    duration: 0.8,
  })
}

export const onHoverOut = (e: MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget

  if (!card) return

  const tl = gsap.timeline()

  tl.to(card, {
    scale: 1,
    duration: 0.4,
  })
  .to(card, {
    rotationY: 0,
    duration: 0.8,
  })

  const scrollTrigger = ScrollTrigger.getById('project-cards-trigger')
  if (scrollTrigger) scrollTrigger.getTween().resume()
}