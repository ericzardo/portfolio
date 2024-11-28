"use client";

import { ButtonHTMLAttributes, ReactElement, useState } from "react";

import IconLabel from "./IconLabel";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactElement;
}

export default function Button({ icon, label, disabled, ...props }: ButtonProps) {
  const [ effect, setEffect ] = useState<boolean>(false);

  return (
    <button
      disabled={disabled}
      onClick={() => {
        if (disabled) return;

        setEffect(true);
      }}
      onAnimationEnd={() => setEffect(false)}
      className={`flex w-fit items-center justify-center gap-2 rounded-lg border border-transparent bg-primary-blue px-7 py-[5px] text-950 shadow-little
      transition-all duration-300 ease-out sm:gap-3 ${effect && !disabled && "animate-clicked"} ${disabled && "cursor-not-allowed"}
      ${!effect && !disabled && "hover:scale-90 hover:border-primary-blue hover:bg-secondary-blue hover:text-primary-blue"}`}
      {...props}
    >
      <p className="select-none text-xs font-medium leading-5 sm:text-sm md:text-base">{label}</p>

      <IconLabel>{icon}</IconLabel>
    </button>
  );
}