"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TokenBrief } from "../Iqtoken";

const Iqwiki = () => {
  const { theme } = useTheme();
  const [appTheme, setAppTheme] = useState("");

  useEffect(() => {
    setAppTheme(theme || "");
  }, [theme]);
  let imageUrl, imageUrl2, imageUrl3;
  if (appTheme === "light") {
    imageUrl = "/images/iqwiki-widget.png";
    imageUrl2 = "/images/iqwiki-rank.png";
  }
  if (appTheme === "dark") {
    imageUrl = "/images/iqwiki-widget-dark.png";
    imageUrl2 = "/images/iqwiki-rank-dark.png";
  }

  return (
    <div id="iq-wiki">
      <TokenBrief
        title="IQ Wiki"
        description="IQ.wiki, the world's largest blockchain and cryptocurrency encyclopedia, is a Polygon-based platform, featuring thousands of pages, that uses IPFS for data storage and on-chain edits. IQ token stakers govern the platform, which offers a gasless experience for contributors and utilizes OpenAI's GPT-3 for article summarization."
        action="https://iq.wiki"
        buttonText="Explore IQ wiki"
      />
      <div className="border overflow-hidden rounded-xl mt-16 border-gray200 dark:border-whiteAlpha-400 bg-white dark:bg-gray700 grid lg:grid-cols-3">
        <div className="col-span-1 pl-6 pt-8">
          <p className="max-w-[390px] text-sm xl:text-base dark:text-whiteAlpha-800">
            Explore a diverse range of wikis designed to guide you through the
            realms of cryptocurrency and blockchain.
          </p>
        </div>
        <div className="col-span-2 h-[300px] xl:h-[450px] bg-wiki-homepage bg-no-repeat dark:bg-wiki-homepage-dark bg-cover" />
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div className="md:flex-1 rounded-xl relative overflow-hidden dark:bg-gray700 h-[530px] sm:h-[450px] md:h-[380px] lg:h-[440px] xl:h-[480px] 2xl:h-[528px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt=""
              fill
              sizes="(max-width:480px) 100vw, 50vw"
            />
          )}
        </div>
        <div className="md:flex-1 flex flex-col gap-4 md:gap-2 lg:gap-0 justify-between">
          <div className="w-full relative h-[418px] sm:h-[380px] md:h-[300px] lg:h-[350px] xl:h-[380px] 2xl:h-[418px] rounded-xl dark:bg-gray700">
            {imageUrl2 && (
              <Image
                src={imageUrl2}
                alt=""
                fill
                sizes="(max-width:480px) 100vw, 50vw"
              />
            )}
          </div>
          <div className="p-3 xl:p-5 flex items-center dark:bg-gray700 border border-gray200 dark:border-whiteAlpha-400 justify-between gap-2 rounded-xl">
            <span className="font-medium md:text-sm lg:text-lg xl:text-xl dark:text-whiteAlpha-800">
              Integrations:
            </span>
            <div className="flex md:gap-3 lg:gap-6 items-center xl:gap-8">
              <div className="w-10 md:w-8 md:h-8 2xl:w-12 h-10 2xl:h-12 bg-eth bg-contain bg-no-repeat" />
              <div className="w-10 md:w-8 md:h-8 2xl:w-12 h-10 2xl:h-12 bg-graph bg-contain bg-no-repeat" />
              <div className="w-10 md:w-8 md:h-8 xl:w-12 h-10 xl:h-12 bg-coingecko bg-contain bg-no-repeat" />
              <div className="2xl:w-32 md:w-20 md:h-8 w-24 h-10 2xl:h-12 bg-magic-white dark:bg-magic bg-contain bg-no-repeat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iqwiki;
