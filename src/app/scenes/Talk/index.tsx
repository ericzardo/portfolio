"use client";

import { useLayoutEffect } from "react";

import TagText from "@components/layout/TagText";
import Form from "./Form";
import { ScrollAnimation, UnmountAnimations } from "./Animations";

export default function TalkScene() {

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
      id="talk-section"
      className="flex min-h-max w-full flex-col justify-center gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <TagText id="talk-title">talk me</TagText>

      <div
        id="talk-modal"
        className="my-10 max-w-[700px] rounded-lg bg-gradient-to-r from-50 from-30% to-transparent px-7 py-3 shadow-shadow sm:px-8 sm:py-3.5 md:px-9 md:py-4 lg:px-10 lg:py-5"
      >
        <Form />
      </div>
    </section>
  );
}