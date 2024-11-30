interface ProjectDescriptionProps {
  descriptions: string[]
}

export default function ProjectDescription ({ descriptions }: ProjectDescriptionProps) {

  if (!descriptions || descriptions.length <= 0) return
  
  return (
    <span className="flex flex-col gap-3">
        <p className="select-none text-xs font-medium text-500 sm:text-sm">Description:</p>
          {descriptions.map((description, index) => (
        <p key={index} className="text-xs text-800 sm:text-sm">{description}</p>
      ))}
    </span>
  )
}