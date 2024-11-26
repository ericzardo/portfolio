/**
 * 
 * Resume Component here
 * 
 */

import { Social } from "@typess/types";

import TagText from "@components/layout/TagText";
import Apresentation from "./Apresentation";

import portfolio from '@portfolio';

export default function MeScene() {
  const { about, socials } = portfolio;

  return (
    <div className="flex min-h-dvh w-full flex-col gap-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <TagText>me</TagText>

      <div className="my-10 flex w-full gap-10">
        <Apresentation about={about} socials={socials as Social[]} />
      </div>

    </div>
  );
}