import { ReactElement, cloneElement } from 'react'

interface IconLabelProps {
  children: ReactElement;
}

export default function IconLabel ({ children }: IconLabelProps) {
  return (
    <span className={'flex items-center justify-center'}>
      {
        cloneElement(children, {
          className: 'size-4 sm:size-5',
        })
      }
    </span>
  )
}