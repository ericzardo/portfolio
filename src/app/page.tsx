"use client";

import { useEffect, useRef } from "react";

import HeroScene from "./scenes/Hero";
import ProjectsScene from "./scenes/Projects";
import MeScene from "./scenes/Me";
import TechsScene from "./scenes/Techs";
import QuoteScene from "@scenes/Quote";
import TalkScene from "@scenes/Talk";
import FooterScene from "@scenes/Footer";


export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll;

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (!mainRef.current) return;

      locomotiveScroll = new LocomotiveScroll({
        multiplier: 1.3
      });

      locomotiveScroll.update();
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main ref={mainRef} className="flex w-full flex-col items-center justify-center">
      <HeroScene />
      <ProjectsScene />
      <MeScene />
      <TechsScene />
      <QuoteScene />
      <TalkScene />
      <FooterScene />
    </main>
  );
}
