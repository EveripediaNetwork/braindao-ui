import InViewAnimateFadeIn from "@/components/transitions/InViewAnimateFadeIn";
import { editors, productTeam } from "@/data/team";
import Image, { ImageProps } from "next/image";
import React from "react";

type TTeam = {
  src?: ImageProps["src"];
  name?: string;
  role?: string;
  twitterLink?: string;
  linkedlnLink?: string;
  delay?: number;
};
const TeamCard = ({
  src,
  name,
  role,
  twitterLink,
  linkedlnLink,
  delay,
}: TTeam) => {
  return (
    <InViewAnimateFadeIn
      delay={delay}
      className="border bg-white dark:bg-gray700 border-gray200 dark:border-whiteAlpha-400 rounded-xl px-4 py-5"
    >
      <div className="rounded-md relative h-[353px] md:h-[344px] lg:h-[360px] xl:h-[300px] 2xl:h-[324px] overflow-hidden">
        <Image src={src || "/images/team/kesar.png"} alt="" fill sizes="25vw" />
        <div className="absolute top-0 left-0 h-full w-full bg-transparent px-5 pb-5 flex flex-col justify-end">
          <div className="bg-white dark:bg-gray700 relative rounded-[4px] py-2 px-1 flex flex-col gap-2 items-center w-full">
            <div className="rounded-full h-4 w-4 bg-brand-500 dark:bg-brand-800 absolute -top-2"></div>
            <div className="flex flex-col items-center">
              <h4 className="text-gray800 dark:text-whiteAlpha-900 text-sm font-semibold">
                {name || "Cesar Rodriguez"}
              </h4>
              <p className="text-brand-500 dark:text-brand-800 text-center font-medium text-xs">
                {role || "Chief Technology Officer"}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-2">
                <a
                  href={twitterLink}
                  target="_blank"
                  className="w-4 h-4 bg-twitter bg-no-repeat bg-contain dark:bg-twitter-dark"
                />
                <a
                  href={linkedlnLink}
                  target="_blank"
                  className="w-4 h-4 bg-linkedln bg-no-repeat bg-contain dark:bg-linkedln-dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </InViewAnimateFadeIn>
  );
};
const BraindaoTeam = () => {
  return (
    <div className="bg-[#F9FAFB] text-gray600 dark:bg-gray800 dark:text-whiteAlpha-900">
      <div className="max-w-[1536px] px-4 md:px-20 xl:px-16 2xl:px-[120px] mx-auto py-[48px] sm:py-[80px] xl:py-24">
        <h2 className="text-center text-3xl sm:text-4xl xl:text-5xl text-gray800 dark:text-whiteAlpha-900 font-semibold mb-10 xl:mb-14">
          Humans of BrainDAO
        </h2>
        <div className="flex flex-col gap-5 sm:gap-16 mt-10 md:mt-14">
          <span className="p-2 lg:p-5 text-brand-500 font-semibold text-2xl sm:text-4xl border-b border-[#E2E8F0] dark:border-whiteAlpha-400">
            Product Team
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 sm:gap-y-10 2xl:gap-y-16 gap-x-8 lg:gap-x-4">
            {productTeam.map((team, idx) => {
              return (
                <TeamCard
                  delay={0.2 * idx}
                  src={team.src}
                  name={team.name}
                  role={team.role}
                  key={team.name}
                  linkedlnLink={team.linkedlnLink}
                  twitterLink={team.twitterLink}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:gap-16 mt-8 md:mt-14">
          <span className="p-2 lg:p-5 text-brand-500 font-semibold text-2xl sm:text-4xl border-b border-[#E2E8F0] dark:border-whiteAlpha-400">
            Editors
          </span>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 sm:gap-y-16 gap-x-4">
            {editors.map((team, idx) => {
              return (
                <TeamCard
                  delay={0.2 * idx}
                  key={team.name}
                  src={team.src}
                  name={team.name}
                  role={team.role}
                  linkedlnLink={team.linkedlnLink}
                  twitterLink={team.twitterLink}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraindaoTeam;
