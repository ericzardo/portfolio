"use client";

import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { Quote } from "lucide-react";
import { ScrollAnimation, UnmountAnimations } from "./Animations";

export default function QuoteScene() {
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
      id="quote-section"
      className="flex min-h-dvh w-full flex-col justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <span className="flex items-center justify-center">

        <div className="relative flex flex-col items-end justify-center gap-2.5">
          <span className="relative z-10 flex flex-col">
            <p id="quote-one" className="text-end text-lg text-900 sm:text-[24px] lg:text-xl">I don&apos;t stop when I&apos;m tired.</p>
            <p id="quote-two" className="text-end text-lg text-900 sm:text-[24px] lg:text-xl">I stop when I&apos;m done.</p>
          </span>
          <p id="quote-author" className="relative z-10 text-end text-xs text-800 sm:text-sm">~ David Goggins</p>

          <div id="quote-icon" className="absolute -left-14 -top-16 z-0 flex size-fit items-center justify-center opacity-40 sm:-left-16 sm:-top-24 md:-left-20 md:-top-28 lg:-left-24 lg:-top-32">
            <Quote className="size-16 fill-primary-blue text-primary-blue opacity-60 blur-[2px] sm:size-24 md:size-32 lg:size-40" />
          </div>
        </div>

      </span>

    </section> 
  );
}