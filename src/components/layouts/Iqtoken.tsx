import Image from "next/image";
import React from "react";

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
    <div className="border-l flex-1 border-pink-500 pl-4">
      <div className={`flex flex-col ${className}`}>
        <h4
          className={`text-gray800 dark:text-whiteAlpha-900 font-semibold ${
            headerSize ? headerSize : "text-3xl"
          }`}
        >
          {title}
        </h4>
        <span className={headerSize ? "" : "text-lg"}>{content}</span>
      </div>
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
    <div className="flex items-start flex-col lg:flex-row xl:gap-[180px]">
      <h3 className="font-semibold text-gray800 dark:text-whiteAlpha-900 text-3xl xl:text-4xl">
        {title}
      </h3>
      <div className="flex-1">
        <p className="xl:text-lg dark:text-whiteAlpha-800">{description}</p>
        <a
          href={action}
          target="_blank"
          className="flex justify-center w-[256px] text-white/90 bg-pink-500 py-4 md:mt-8 rounded-md hover:bg-pink-500/50 transition-all ease-in-out duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const Iqtoken = () => {
  return (
    <div
      id="iq-token"
      className="bg-white text-gray600 dark:bg-gray800 dark:text-whiteAlpha-900"
    >
      <div className="max-w-[1536px] px-4 md:px-10 xl:px-[120px] mx-auto py-[80px] xl:py-24">
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
        <div className="flex flex-col-reverse lg:flex-row items-start mt-16 gap-4">
          <div className="lg:flex-1 bg-about-us bg-contain bg-no-repeat w-full h-[500px]"></div>
          <div className="flex-1">
            <h3 className="text-gray800 dark:text-whiteAlpha-900 text-4xl font-semibold">
              HiIQ
            </h3>
            <p className="text-lg dark:text-whiteAlpha-800 mt-4">
              HiIQ was launched to incentivize long-term engagement and
              governance participation, allows users to lock up IQ tokens,
              increasing HiIQ balance for voting power and earning IQ token
              rewards, with 3 million tokens generated daily.
            </p>
            <div className="pt-8">
              <div className="flex flex-col gap-12">
                <div className="flex justify-between">
                  <StatsPointers
                    title="16B IQ"
                    content="Circulating supply"
                    className="h-[95px] justify-between"
                  />
                  <StatsPointers
                    title="$71M"
                    content="Market cap"
                    className="h-[95px] justify-between"
                  />
                </div>
                <div className="flex justify-between">
                  <StatsPointers
                    title="$4M+"
                    content="Total HiIQ"
                    className="h-[95px] justify-between"
                  />
                  <StatsPointers
                    title="IB IQ+"
                    content="Total volume locked"
                    className="h-[95px] justify-between"
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
