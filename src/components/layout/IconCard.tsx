/**
 * 
 * Resume Component here
 * 
 */

import { SimpleIconName } from "@typess/types";

import Icon from "@components/Icon";

interface IconCardProps {
  name: string;
  icon: SimpleIconName;
  onClick?: () => void;
  small?: boolean;
}

export default function IconCard({ name, icon, onClick, small = false }: IconCardProps) {
  return (
    <span
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-300 shadow-little
      ${small ? "px-2 py-0.5 sm:px-2.5 sm:py-1" : "px-3 py-1.5 sm:px-4 sm:py-2"}
      ${onClick ? "cursor-pointer" : "cursor-default"}`}
    >
      <Icon
        name={icon}
        className={`text-900 ${small ? "size-2.5 md:size-3 lg:size-3.5" : "size-4 md:size-[18px] lg:size-5"}`}
      />

      <p
        className={`whitespace-nowrap font-medium text-900
        ${small ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"}`}
      >
        {name}
      </p>

    </span>
  );
}