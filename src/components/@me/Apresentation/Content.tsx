'use client'

import { useCallback } from 'react'

import IconCard from '@components/layout/IconCard'

import { Social } from '@typess/types'


interface ApresentationContentProps {
  about: string[];
  socials: Social[]
}

export default function ApresentationContent ({ about, socials }: ApresentationContentProps) {

  const openSocial = useCallback((url: string) => {
    window.open(url, '_blank')
  }, [])

  return (
    <div className="flex size-full w-fit flex-col items-center justify-between gap-10 px-0 py-5 sm:px-7">
      <span className="flex w-full max-w-[350px] flex-col gap-5 md:max-w-[400px]" >
        <p className="text-xs font-light text-900 sm:text-sm md:text-base">
          {about[0]}
        </p>
        <p className="text-xs font-light text-900 sm:text-sm md:text-base">{about[1]}</p>
      </span>
      <span className="flex w-full select-none justify-end gap-2">
        {socials.map(s => (
          <IconCard
            key={s.name}
            name={s.name}
            icon={s.icon}
            onClick={() => openSocial(s.url)}
            small
          />
        ))}
      </span>
    </div>
  )
}