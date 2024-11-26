
/**
 * 
 * Resume Component here
 * 
 */

import { ReactNode } from "react";

interface TagTextProps {
  children: ReactNode;
}

export default function TagText({ children }: TagTextProps) {
  return (
    <div className="flex select-none items-center gap-4 text-[24px] leading-6 sm:text-xl md:text-2xl">
      <span className="text-600">&lt;</span>
      <p className="lowercase text-900">{children}</p>
      <span className="text-600">/&gt;</span>
    </div>
  );
}