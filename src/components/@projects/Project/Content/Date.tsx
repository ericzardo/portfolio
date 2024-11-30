import { Date } from '@typess/types'

interface ProjectDateProps {
  date: Date | null;
}

export default function ProjectDate ({ date }: ProjectDateProps) {
  if (!date) return

  const { from, to } = date

  if (!from || !to) return

  if (from && to ) return (
    <span className="my-4 flex items-center gap-2">
      <p className="text-[10px] text-600 sm:text-xs">{from}</p>
      <span className="h-0.5 w-3 rounded-full bg-400"></span>
      <p className="text-[10px] text-600 sm:text-xs">{to}</p>
    </span>
  )

  return <p className="text-[10px] text-600 sm:text-xs">{to ? to : from}</p>
}