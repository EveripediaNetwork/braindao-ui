import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import { braindaoTeam } from "@/data/team";
import Image, { type ImageProps } from "next/image";

type TTeam = {
  src?: ImageProps["src"];
  name?: string;
  role?: string;
  twitterLink?: string;
  linkedlnLink?: string;
  wikiLink?: string;
};
const TeamCard = ({
  src,
  name,
  role,
  twitterLink,
  linkedlnLink,
  wikiLink,
}: TTeam) => {
  return (
    <InViewAnimateBottom className="mx-auto w-full sm:max-w-[351px] md:max-w-[328px]">
      <div className="border dark:bg-gray700 bg-white dark:border-whiteAlpha-400 border-gray200 rounded-xl px-4 py-5">
        <div className="rounded-md relative h-[410px] sm:h-[373px] md:h-[318px] w-full lg:h-[300px] xl:h-[300px] 2xl:h-[324px] overflow-hidden hover:scale-105 ease-in-out duration-300">
          <Image
            src={src || ""}
            alt={`${name}'s profile picture`}
            fill
            sizes="50vw"
            className="object-cover object-top"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-transparent px-5 pb-5 flex flex-col justify-end">
            <div className="dark:bg-gray700 bg-white relative rounded-[4px] py-2 px-1 flex flex-col gap-2 items-center w-full">
              <div className="rounded-full h-4 w-4 dark:bg-brand-800 bg-brand-500 absolute -top-2" />
              <div className="flex flex-col items-center">
                <h4 className="dark:text-whiteAlpha-900 text-gray800 text-sm font-semibold">
                  {name || ""}
                </h4>
                <p className="dark:text-brand-800 text-brand-500 text-center font-medium text-xs">
                  {role || ""}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-2 items-center">
                  {twitterLink && (
                    <a
                      href={twitterLink}
                      target="_blank"
                      className="w-5 md:w-4 h-5 md:h-4 bg-no-repeat bg-contain dark:bg-twitter-dark bg-twitter"
                      rel="noreferrer"
                      aria-label={`${name}'s Twitter profile`}
                    >
                      <span className="sr-only">Twitter</span>
                    </a>
                  )}
                  {wikiLink && (
                    <a
                      href={wikiLink}
                      target="_blank"
                      className="w-6 md:w-5 h-4 md:h-4 bg-no-repeat bg-contain dark:bg-everipedia-dark bg-everipedia"
                      rel="noreferrer"
                      aria-label={`${name}'s Wiki page`}
                    >
                      <span className="sr-only">Wiki</span>
                    </a>
                  )}
                  {linkedlnLink && (
                    <a
                      href={linkedlnLink}
                      target="_blank"
                      className="w-5 md:w-4 h-5 md:h-4 bg-no-repeat bg-contain dark:bg-linkedln-dark bg-linkedln"
                      rel="noreferrer"
                      aria-label={`${name}'s LinkedIn profile`}
                    >
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InViewAnimateBottom>
  );
};
const BraindaoTeam = () => {
  return (
    <div className="dark:bg-gray800 bg-[#F9FAFB] dark:text-whiteAlpha-900 text-gray600">
      <div className="max-w-[1536px] px-4 md:px-20 xl:px-24 2xl:px-[120px] mx-auto py-[48px] sm:py-[80px] 2xl:py-24">
        <h2 className="text-center text-3xl sm:text-4xl xl:text-5xl dark:text-whiteAlpha-900 text-gray800 font-semibold mb-10 xl:mb-14">
          Humans of BrainDAO
        </h2>
        <div className="flex flex-col gap-5 sm:gap-16 mt-10 md:mt-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 sm:gap-y-10 2xl:gap-y-16 gap-x-8 lg:gap-x-4">
            {braindaoTeam.map((team, idx) => {
              return (
                <TeamCard
                  src={team.src}
                  name={team.name}
                  role={team.role}
                  key={team.name}
                  linkedlnLink={team.linkedlnLink}
                  twitterLink={team.twitterLink}
                  wikiLink={team.wikiLink}
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
