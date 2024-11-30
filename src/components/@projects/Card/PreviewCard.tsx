/* eslint-disable @next/next/no-img-element */

interface ProjectPreview {
  title: string;
  description: string;
  imageName: string;
}

export default function ProjectPreview({ title, description, imageName }: ProjectPreview) {
  return (
    <div className="relative size-full overflow-hidden rounded-xl shadow-shadow">
      <img src={`/projects/${imageName}`} alt={`Background preview banner showcasing the ${title} project`} className="size-full select-none object-cover text-center text-base text-900" />
      

      <div className="absolute bottom-8 z-10 flex w-full flex-col gap-3 px-5">
        <h2 className="text-sm font-medium text-900 sm:text-base md:text-md">{title}</h2>
        <p className="max-w-full truncate text-xs text-700 sm:text-sm">{description}</p>
      </div>
    
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 from-30% to-black/5" />
    </div>
  )
}