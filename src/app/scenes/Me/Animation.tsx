import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const ScrollAnimation = () => {
  const triggerSection: gsap.DOMTarget | ScrollTrigger.Vars = {
    trigger: '#me-section',
    start: '-30% 40%',
    end: 'bottom 60%',
    scrub: 1.6,
    markers: false,
  }

  gsap.fromTo(
    '#me-title',
    { x: '40%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(
    '#me-modal',
    { x: '25%', scale: 1.1 },
    {
      x: 0,
      scale: 1,
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(
    '#me-image',
    { scale: 1.12 },
    {
      scale: 1,
      scrollTrigger: {
        ...triggerSection,
        id: 'me-image-trigger'
      },
    }
  )
}

export const UnmountAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}