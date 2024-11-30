import gsap from 'gsap'

export const ProjectAnimation = () => {
  gsap.fromTo(
    '#project',
    { scale: 0.2 },
    { scale: 1 }
  )
}