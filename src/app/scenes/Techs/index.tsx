"use client";

/**
 * 
 * Resume Component here
 * 
 */

import { useState, useCallback, useLayoutEffect } from "react";

import TagText from "@components/layout/TagText";
import IconCard from "@components/layout/IconCard";
import { UnmountAnimations, ScrollAnimation, Looping } from "./Animations";

import portfolio from "@portfolio";
import { SimpleIconName } from "@typess/types";

export default function TechsScene({}) {
  const { techs } = portfolio;

  const [isLooping, setIsLooping] = useState<boolean>(true);

  const handleLooping = useCallback(() => {
    setIsLooping(prev => !prev);
  }, []);

  useLayoutEffect(() => {
    ScrollAnimation();

    if (isLooping) {
      Looping();
    }
  
    return () => {
      UnmountAnimations();
    };
  }, [isLooping]);

  return (
    <section
      id="techs-section"
      data-scroll
      data-scroll-section
      className="flex min-h-max w-full flex-col items-end gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <TagText id="techs-title">
        {`techs looping={`}
        <span onClick={handleLooping} className="cursor-pointer text-primary-blue">{isLooping.toString()}</span>
        {`}`}
      </TagText>

      <div id="techs" className="my-5 flex w-full items-center justify-center gap-4">
        {techs.map(t => (
          <IconCard
            key={t.name}
            name={t.name}
            icon={t.icon as SimpleIconName}
          />
        ))}
        {techs.map(t => (
          <IconCard
            key={t.name}
            name={t.name}
            icon={t.icon as SimpleIconName}
          />
        ))}
      </div>

    </section>
  );
}