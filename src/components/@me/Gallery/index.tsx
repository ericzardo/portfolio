'use cleint'

import { useGSAP } from '@gsap/react'

import { X } from 'lucide-react'
import { GalleryAnimation } from './Animations'
import { useRef } from 'react'

interface GalleryProps {
  handleGallery: () => void;
}

export default function Gallery ({ handleGallery }: GalleryProps) {

  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    GalleryAnimation(containerRef.current)
  }, {
    scope: containerRef
  })

  return (
    <div
      ref={containerRef}
      className="fixed inset-5 z-50 flex items-center justify-center rounded-xl bg-100 p-5 shadow-shadow"
    >
      <span
        onClick={handleGallery}
        className="absolute right-2.5 top-2.5 max-h-7 max-w-7 cursor-pointer transition-all duration-300 ease-out hover:opacity-65 hover:scale-125"
      >
        <X className="size-full text-error"/>
      </span>

      <span className='flex size-full items-center justify-center'>
        <p className='text-sm text-900'>Gallery is being built...</p>
      </span>
    </div>
  )
}