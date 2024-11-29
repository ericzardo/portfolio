"use client";

import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import TagText from "@components/layout/TagText";
import ProjectCard from "./Card";
import { ScrollAnimation, UnmountAnimations } from "./Animations";

import portfolio from "@portfolio";
import { Project } from "@typess/types";


export default function ProjectsScene({}) {
  const { projects } = portfolio;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

      <div id="projects" className="my-10 flex w-full items-end justify-end gap-10">
        {projects.map(p => (
          <ProjectCard key={p.title} project={p as Project} />
        ))}
      </div>

    </section>
  );
}