'use client'

import { ReactNode } from 'react'

interface TagTextProps {
  children: ReactNode;
  id?: string;
}

export default function TagText({ children, id }: TagTextProps) {
  return (
    <div id={id && id} className="flex select-none items-center gap-4 text-[24px] leading-6 sm:text-xl md:text-2xl">
      <span className="tag-text text-600">&lt;</span>
      <p className="tag-text lowercase text-900">{children}</p>
      <span className="tag-text text-600">/&gt;</span>
    </div>
  )
}