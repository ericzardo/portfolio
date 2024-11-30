/* eslint-disable @next/next/no-img-element */
'use client'

import { useCallback } from 'react'
import { ImageHover, ImageHoverOut } from './Animations'

interface ApresentationImageProps {
  handleGallery: () => void;
  name: string;
}

export default function ApresentationImage ({ handleGallery, name }: ApresentationImageProps) {
  const handleImageHover = useCallback(() => {
    ImageHover()
  }, [])

  const handleImageHoverOut = useCallback(() => {
    ImageHoverOut()
  }, [])

  return (
    <div
        id="me-image"
        onClick={handleGallery}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageHoverOut}
        className="w-full max-w-[300px] shrink-0 cursor-pointer select-none overflow-hidden rounded-xl bg-cover bg-center shadow-shadow transition-all duration-300 ease-out hover:shadow-blue md:max-w-[350px]"
      >
        <img
          src="/me.jpg"
          alt={`${name}'s photo apresentation. Hi there!`}
          className="size-full" />
      </div>
  )
}