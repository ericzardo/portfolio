'use cleint'

import { useLayoutEffect } from 'react'

import { X } from 'lucide-react'
import { GalleryAnimation } from './Animations'

interface GalleryProps {
  handleGallery: () => void;
}

export default function Gallery ({ handleGallery }: GalleryProps) {

  useLayoutEffect(() => {
    GalleryAnimation()
  }, [])

  return (
    <div
      id="me-gallery"
      className="fixed inset-5 z-50 flex items-center justify-center rounded-xl bg-100 p-5 shadow-shadow"
    >
      <span
        onClick={handleGallery}
        className="absolute right-2.5 top-2.5 max-h-7 max-w-7 cursor-pointer transition-all duration-300 ease-out hover:opacity-65 hover:scale-125"
      >
        <X className="size-full text-error"/>
      </span>
    </div>
  )
}