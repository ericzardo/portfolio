import gsap from 'gsap'

export const ScrollAnimation = (container: HTMLDivElement, title: HTMLDivElement, form: HTMLDivElement) => {

  gsap.fromTo(
    title,
    { x: '40%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: '-40% 40%',
        end: '70% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )

  gsap.fromTo(
    form,
    { x: '30%', opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: container,
        start: '-30% 40%',
        end: '70% 60%',
        scrub: 1.6,
        markers: false,
      },
    }
  )

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
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