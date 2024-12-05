import { ComponentType, SVGProps } from 'react'

import * as Icons from '@icons-pack/react-simple-icons'

import { SimpleIconName } from '@typess/types'


interface IconProps {
  name: SimpleIconName;
  className: string;
}

export default function Icon({ name, className }: IconProps) {
  const SimpleIcon = Icons[name] as ComponentType<SVGProps<SVGSVGElement>>

  return <SimpleIcon className={className} />
}