import gsap from 'gsap'

export const GalleryAnimation = () => {
  gsap.fromTo(
    '#me-gallery',
    { scale: 0.2 },
    { scale: 1 }
  )
}