import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const ScrollAnimation = () => {

  gsap.fromTo(
    '#talk-title',
    { x: '40%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#talk-section',
        start: '-40% 40%',
        end: '70% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )

  gsap.fromTo(
    '#talk-modal',
    { x: '30%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#talk-section',
        start: '-30% 40%',
        end: '70% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#talk-section',
      start: '-20% 40%',
      end: '60% 80%',
      scrub: 1.6,
      markers: false,
    },
  })

  timeline
    .fromTo(
      '#input-name',
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1 }
    )
    .fromTo(
      '#input-email',
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1 },
    )
    .fromTo(
      '#input-message',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 },
    )
    .fromTo(
      '#talk-button',
      {  opacity: 0 },
      {  opacity: 1 },
    )
}

export const UnmountAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}