interface ProjectNoteProps {
  note: string | null;
}

export default function ProjectNote ({ note }: ProjectNoteProps) {
  if (!note) return

  return (
    <span className="flex gap-2">
      <p className="select-none text-xs font-medium text-500 sm:text-sm">Note:</p>
      <p  className="text-xs italic text-800 sm:text-sm">{note}</p>
    </span>
  )
}