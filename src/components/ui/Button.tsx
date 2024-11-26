/**
 * 
 * Resume Component here
 * 
 */

import { ButtonHTMLAttributes, ReactElement, cloneElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactElement;
}

export default function Button({ icon, label, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex w-fit items-center justify-center gap-2 rounded-lg bg-primary-blue px-7 py-[5px] shadow-little sm:gap-3"
    >
      <p className="select-none text-xs font-medium leading-5 text-950 sm:text-sm md:text-base">{label}</p>

      {icon &&
        cloneElement(icon, {
          className: "text-950 size-4 sm:size-5",
        })
      }
    </button>
  );
}