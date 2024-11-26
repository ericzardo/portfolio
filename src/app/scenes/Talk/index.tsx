"use client";

/**
 * 
 * Resume Component here
 * 
 */

import TagText from "@components/layout/TagText";
import Form from "./Form";

export default function TalkScene() {
  return (
    <div className="flex min-h-dvh w-full flex-col justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <TagText>talk me</TagText>

      <div className="my-10 max-w-[700px] rounded-lg bg-gradient-to-r from-50 from-30% to-transparent px-7 py-3 shadow-shadow sm:px-8 sm:py-3.5 md:px-9 md:py-4 lg:px-10 lg:py-5">
        <Form />
      </div>
    </div>
  );
}