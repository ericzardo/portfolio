import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export const UnmountAnimations = () => {
  const triggers = ScrollTrigger.getAll()
  triggers.forEach((trigger) => {
    if (trigger.vars.trigger === '#techs-section') {
      trigger.kill()
    }
  })
}

export const ScrollAnimation = () => {
  const triggerSection: gsap.DOMTarget | ScrollTrigger.Vars = {
    trigger: '#techs-section',
    start: '-20% 40%',
    end: '110% 60%',
    scrub: 1.6,
    markers: false,
  }

  const techs = document.querySelector<HTMLDivElement>('#techs')

  if (!techs) return

  const containerWidth = techs.scrollWidth
  const viewportWidth = window.innerWidth

  const maxScroll = containerWidth - viewportWidth

  gsap.fromTo(
    '#techs-title',
    { x: '-40%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: triggerSection,
    }
  )

  gsap.fromTo(techs,
    { x: '-20%' },
    {
      x: () => -maxScroll - techs.offsetLeft,
      scrollTrigger: {
        trigger: '#techs-section',
        start: '-50% 40%',
        end: '120% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )
    
}
