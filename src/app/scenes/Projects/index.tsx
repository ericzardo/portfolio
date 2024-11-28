"use client";

import { useLayoutEffect } from "react";

import { Tech } from "@typess/types";

import TagText from "@components/layout/TagText";
import InfosCard from "./InfosCard";
import PreviewCard from "./PreviewCard";
import { ScrollAnimation, UnmountAnimations } from "./Animations";

import portfolio from "@portfolio";


export default function ProjectsScene({}) {
  const { projects } = portfolio;

  useLayoutEffect(() => {
    ScrollAnimation();

    return () => {
      UnmountAnimations();
    };
  }, []);

  return (
    <section
      data-scroll
      data-scroll-section
      id="projects-section"
      className="relative flex min-h-dvh w-full flex-col items-end justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <TagText id="projects-title">projects</TagText>

      <div id="projects" className="my-10 flex w-full flex-wrap items-end justify-end gap-10">
        {projects.map(p => (
          <PreviewCard key={p.title} title={p.title} description={p.description[0]} />
        ))}
        {projects.map(p => (
          <InfosCard key={p.title} title={p.title} description={p.description} techs={p.techs as Tech[]} />
        ))}
      </div>

    </section>
  );
}