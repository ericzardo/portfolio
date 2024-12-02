import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement) => {

  const triggerSection: gsap.DOMTarget | ScrollTrigger.Vars = {
    trigger: container,
    start: '-10% 40%',
    end: 'bottom 60%',
    scrub: 1.6,
    markers: false,
  }

  gsap.fromTo(
    '#quote-icon',
    { x: '80%', opacity: 0.4, filter: 'blur(2px)' },
    {
      x: 0, opacity: 1, filter: 'blur(12px)',
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(
    '#quote-one',
    { x: 0 },
    {
      x: '5%',
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(
    '#quote-two',
    { x: 0,  },
    {
      x: '10%',
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(
    '#quote-author',
    { x: '-40%',  },
    {
      x: '25%', 
      scrollTrigger: triggerSection,
    }
  )
}