/**
 * 
 * Resume Component here
 * 
 */

import { SimpleIconName } from "@typess/types";

import Icon from "@components/Icon";

interface IconButtonProps {
  icon: SimpleIconName;
  onClick: () => void;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex size-8 cursor-pointer items-center justify-center rounded-lg bg-100 p-1.5 shadow-little sm:size-9 md:size-10 md:p-2"
    >
      <Icon name={icon} className="size-full text-800" />
    </div>
  );
}