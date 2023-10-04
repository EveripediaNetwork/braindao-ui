import Image from "next/image";
import React from "react";
import InViewAnimateBottom from "../transitions/InViewAnimateBottom";
import InViewAnimateTop from "../transitions/InViewAnimateTop";
import InViewAnimateGrow from "../transitions/InViewAnimationGrow";
import InViewAnimateSlideDown from "../transitions/InViewSlideDown";
import InViewAnimateSlideUp from "../transitions/inViewSlideUp";

export const StatsPointers = ({
  title,
  content,
  className,
  headerSize,
}: {
  title: string;
  content: string;
  className?: string;
  headerSize?: string;
}) => {
  return (
    <div className="border-l-2 flex-1 border-pink-500 pl-4">
      <InViewAnimateBottom>
        <div className={`flex flex-col ${className}`}>
          <h4
            className={`text-gray800 dark:text-whiteAlpha-900 font-semibold ${
              headerSize ? headerSize : "text-2xl xl:text-3xl"
            }`}
          >
            {title}
          </h4>
          <span className={headerSize ? "" : "xl:text-lg"}>{content}</span>
        </div>
      </InViewAnimateBottom>
    </div>
  );
};

export const TokenBrief = ({
  title,
  description,
  buttonText,
  action,
}: {
  title: string;
  description: string;
  buttonText: string;
  action: string;
}) => {
  return (
    <div className="flex items-start flex-col xl:flex-row xl:gap-[186px]">
      <InViewAnimateBottom delay={0.2}>
        <h3 className="font-semibold text-gray800 dark:text-whiteAlpha-900 text-2xl sm:text-3xl xl:text-4xl">
          {title}
        </h3>
      </InViewAnimateBottom>
      <div className="flex-1 mt-2 xl:mt-0">
        <InViewAnimateBottom>
          <p className="xl:text-lg dark:text-whiteAlpha-800">{description}</p>
        </InViewAnimateBottom>
        <InViewAnimateBottom delay={0.2}>
          <a
            href={action}
            target="_blank"
            className="flex justify-center w-[200px] xl:w-[256px] text-white/90 bg-brand-500 dark:bg-brand-800 py-3 xl:py-4 mt-4 xl:mt-8 rounded-md hover:bg-brand-700 transition-all ease-in-out duration-300"
          >
            {buttonText}
          </a>
        </InViewAnimateBottom>
      </div>
    </div>
  );
};

const Iqtoken = () => {
  return (
    <div
      id="iq-token"
      className="bg-[#F9FAFB] text-gray600 dark:bg-gray800 dark:text-whiteAlpha-900"
    >
      <div className="max-w-[1536px] px-4 md:px-10 xl:px-[120px] mx-auto py-[48px] sm:py-[80px] xl:py-24">
        <TokenBrief
          title="The IQ Token"
          description="The IQ token is a cryptocurrency that powers a knowledge ecosystem
							that includes the world's largest cryptocurrency and
							blockchain encyclopedia, IQ.wiki. IQ token holders can stake their
							tokens to participate in governance and get access to additional
							features. They can vote on governance decisions and govern
							BrainDAO, the native DAO and treasury of the IQ ecosystem."
          action="https://iq.wiki"
          buttonText="Learn more"
        />
        <div className="flex flex-col-reverse lg:flex-row items-start mt-16">
          <div className="lg:flex-1 w-full overflow-hidden">
            <div className="w-full md:w-[80%] xl:w-full h-[300px] sm:h-[450px] lg:h-[380px] xl:h-[500px] relative">
              <Image
                src={"/images/aboutus.png"}
                alt=""
                fill
                sizes="(max-width:960px) 80vw, 50vw"
                className="object-contain"
              />
              <div className="absolute top-0 w-full left-0 h-full flex flex-col">
                <InViewAnimateSlideUp className="flex-1 overflow-hidden w-full h-full bg-white dark:bg-gray800">
                  <div className=""></div>
                </InViewAnimateSlideUp>
                <InViewAnimateSlideDown className="flex-1 bg-white dark:bg-gray800 w-full h-full overflow-hidden">
                  <div></div>
                </InViewAnimateSlideDown>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <InViewAnimateBottom>
              <h3 className="text-gray800 dark:text-whiteAlpha-900 text-3xl xl:text-4xl font-semibold">
                HiIQ
              </h3>
            </InViewAnimateBottom>
            <InViewAnimateBottom delay={0.2}>
              <p className="text-sm xl:text-lg dark:text-whiteAlpha-800 mt-4">
                HiIQ was launched to incentivize long-term engagement and
                governance participation, allows users to lock up IQ tokens,
                increasing HiIQ balance for voting power and earning IQ token
                rewards, with 3 million tokens generated daily.
              </p>
            </InViewAnimateBottom>
            <div className="pt-8">
              <div className="flex flex-col gap-10 xl:gap-12">
                <div className="flex justify-between">
                  <StatsPointers
                    title="16B IQ"
                    content="Circulating supply"
                    className="h-[80px] xl:h-[95px] justify-between"
                  />
                  <StatsPointers
                    title="$71M"
                    content="Market cap"
                    className="h-[80px] xl:h-[95px] justify-between"
                  />
                </div>
                <div className="flex justify-between">
                  <StatsPointers
                    title="$4M+"
                    content="Total HiIQ"
                    className="h-[80px] xl:h-[95px] justify-between"
                  />
                  <StatsPointers
                    title="IB IQ+"
                    content="Total volume locked"
                    className="h-[80px] xl:h-[95px] justify-between"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iqtoken;
