import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement, title: HTMLDivElement, projects: HTMLDivElement) => {
  const triggerSection: gsap.DOMTarget | ScrollTrigger.Vars = {
    trigger: container,
    start: '-150 40%',
    end: 'bottom 60%',
    scrub: 1.6,
    markers: false,
  }

  gsap.fromTo(
    title,
    { x: '-30%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: triggerSection
    }
  )

  gsap.fromTo(
    projects,
    { x: 0, opacity: 0.6 },
    {
      x: '-10%',
      opacity: 1,
      scrollTrigger: triggerSection
    }
  )

  gsap.timeline({
    scrollTrigger: {
      id: 'project-cards-trigger',
      ...triggerSection
    }
  })
  .fromTo('.project-card', 
    { rotateX: 10, rotateY: 50 },
    { rotateX: 0, rotateY: 0, duration: 0.8 }
  )
  .to('.project-card', 
    { rotateX: 10, rotateY: -50, duration: 0.8 }
  )
}
