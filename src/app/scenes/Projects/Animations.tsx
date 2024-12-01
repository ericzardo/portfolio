import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement, title: HTMLDivElement) => {
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

  const cards = gsap.utils.toArray('.project-card') as HTMLElement[]
  const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth + 10, 0)

  gsap.to(cards, {
    xPercent: -100 * (cards.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      scrub: 1.6,
      snap: 1 / (cards.length - 1),
      start: 'top top',
      end: () => '+=' + totalWidth,
    }
  })

}
