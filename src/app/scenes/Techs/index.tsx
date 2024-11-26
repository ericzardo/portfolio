"use client";

/**
 * 
 * Resume Component here
 * 
 */

import { useState, useCallback } from "react";
import { SimpleIconName } from "@typess/types";

import TagText from "@components/layout/TagText";
import IconCard from "@components/layout/IconCard";

import portfolio from "@portfolio";

export default function TechsScene({}) {
  const { techs } = portfolio;

  const [isLooping, setIsLooping] = useState<boolean>(true);

  const handleLooping = useCallback(() => {
    setIsLooping(prev => !prev);
  }, []);

  return (
    <div className="flex min-h-dvh w-full flex-col items-end gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <TagText>
        {`techs looping={`}
        <span onClick={handleLooping} className="cursor-pointer text-primary-blue">{isLooping.toString()}</span>
        {`}`}
      </TagText>

      <div className="my-5 flex w-full items-center justify-end gap-4">
        {techs.map(t => (
          <IconCard
            key={t.name}
            name={t.name}
            icon={t.icon as SimpleIconName}
          />
        ))}
      </div>

    </div>
  );
}