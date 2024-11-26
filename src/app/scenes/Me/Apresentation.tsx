/* eslint-disable @next/next/no-img-element */
"use client";

/**
 * 
 * Resume Component here
 * 
 */

import { useCallback } from "react";
import { Social } from "@typess/types";

import IconCard from "@components/layout/IconCard";

interface ApresentationProps {
  about: string[];
  socials: Social[]
}

export default function Apresentation({ about, socials }: ApresentationProps) {

  const openSocial = useCallback((url: string) => {
    window.open(url, '_blank');
  }, []);

  return (
      <div className="min-[820px]:flex-row flex w-fit flex-col items-center justify-between gap-3 rounded-lg bg-100 p-5 shadow-shadow">
      <div className="w-full max-w-[300px] shrink-0 select-none overflow-hidden rounded-xl shadow-shadow md:max-w-[350px]">
        <img
          src="/me.jpg"
          alt="Eric Zardo's photo apresentation"
          className="size-full" />
      </div>

      <div className="flex size-full w-fit flex-col items-center justify-between gap-10 px-0 py-5 sm:px-7">
        <span className="flex w-full max-w-[350px] flex-col gap-5 md:max-w-[400px]" >
          <p className="text-xs font-light text-900 sm:text-sm md:text-base">
            {about[0]}
          </p>
          <p className="text-xs font-light text-900 sm:text-sm md:text-base">{about[1]}</p>
        </span>
        <span className="flex w-full select-none justify-end gap-2">
          {socials.map(s => (
            <IconCard
              key={s.name}
              name={s.name}
              icon={s.icon}
              onClick={() => openSocial(s.url)}
              small
            />
          ))}
        </span>
      </div>
    </div>
  );
}