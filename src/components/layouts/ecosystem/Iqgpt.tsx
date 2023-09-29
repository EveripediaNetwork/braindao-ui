"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  RiDatabaseLine,
  RiNewspaperLine,
  RiPlug2Line,
  RiQuestionAnswerLine,
} from "react-icons/ri";
import { TokenBrief } from "../Iqtoken";

export const FeatureList = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-4 items-start">
      <div className="w-12 h-12 rounded-full flex justify-center text-xl text-brand-500 dark:text-brand-800 items-center border-8 border-brand-50 dark:border-brand-200 bg-brand-100 dark:bg-brand-400">
        {icon}
      </div>
      <div className="">
        <h4 className="text-gray800 dark:text-whiteAlpha-900 font-semibold text-lg md:text-xl mb-1">
          {title}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Iqgpt = () => {
  const { theme } = useTheme();
  const [appTheme, setAppTheme] = useState("");

  useEffect(() => {
    setAppTheme(theme || "");
  }, [theme]);
  let imageUrl;
  if (appTheme === "light") {
    imageUrl = "/images/iq-gpt-mockup.png";
  }
  if (appTheme === "dark") {
    imageUrl = "/images/iq-gpt-mockup-dark.png";
  }
  return (
    <div
      id="iq-gpt"
      className="max-w-[1536px] px-10 xl:px-[120px] mx-auto flex flex-col gap-10 xl:gap-16 py-[80px] xl:py-24"
    >
      <TokenBrief
        title="IQ GPT"
        description="IQ GPT is an extension of IQ wiki's decentralized framework, integrating crypto-focused AI models that utilize diverse data sources to bolster capabilities, offering insights into intricate terms, live market trends, and breaking news.IQ GPT is powered by the IQ token, enabling IQ holders to participate in governance and get access to additional features."
        action="https://iqgpt.com"
        buttonText="Explore IQ GPT"
      />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-2 2xl:gap-12 py-2">
        <FeatureList
          icon={<RiDatabaseLine />}
          title="Access to real-time data"
          description="Access to real-time price data, trading volumes, market
							capitalization."
        />
        <FeatureList
          icon={<RiQuestionAnswerLine />}
          title="AI generated answers"
          description="Get AI generated answers to all your crypto questions."
        />
        <FeatureList
          icon={<RiNewspaperLine />}
          title="Update on news and trends"
          description="Equip yourself with AI powered market analysis from real time market data, news and trends."
        />
        <FeatureList
          icon={<RiPlug2Line />}
          title="Pluggins"
          description="Access to different plugins to select data sources for your enquires."
        />
      </div>
      <div className="w-full relative h-[600px] lg:h-[850px] xl:h-[1000px] 2xl:h-[1117px]">
        {imageUrl && <Image src={imageUrl} alt="" fill sizes="100vw" />}
      </div>
    </div>
  );
};

export default Iqgpt;
