"use client";

import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import InViewAnimateSlideUp from "@/components/transitions/inViewSlideUp";
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
    imageUrl = "/images/iqwiki-widget-new.png";
    imageUrl2 = "/images/iqwiki-rank.png";
    imageUrl3 = "/images/iqwiki-homepage.png";
  }
  if (appTheme === "dark") {
    imageUrl = "/images/iqwiki-widget-new-dark.png";
    imageUrl2 = "/images/iqwiki-rank-dark.png";
    imageUrl3 = "/images/iqwiki-homepage-dark.png";
  }

  return (
    <div id="iq-wiki">
      <TokenBrief
        title="IQ.wiki"
        description="IQ.wiki, the world's largest blockchain and cryptocurrency encyclopedia, is a Polygon-based platform, featuring thousands of pages, that uses IPFS for data storage and on-chain edits. IQ token stakers govern the platform, which offers a gasless experience for contributors and utilizes OpenAI's GPT-3 for article summarization."
        action="https://iq.wiki"
        buttonText="Explore IQ.wiki"
      />
      <div className="border overflow-hidden rounded-xl mt-16 dark:border-whiteAlpha-400 border-gray200 dark:bg-gray700 bg-white grid md:grid-cols-3">
        <div className="col-span-1 pb-3 sm:pb-0 pl-3 pt-4 lg:pl-6 lg:pt-8">
          <p className="max-w-[390px] text-sm xl:text-xl dark:text-whiteAlpha-800 text-gray600">
            Explore a diverse range of wikis designed to guide you through the
            realms of{" "}
            <span className="font-semibold">
              cryptocurrency and blockchain.
            </span>
          </p>
        </div>
        <div className="col-span-2">
          <div className="h-[220px] sm:h-[400px] md:h-[350px] lg:h-[400px] 2xl:h-[450px] w-full relative">
            {imageUrl3 && (
              <Image
                src={imageUrl3}
                alt=""
                fill
                sizes="(max-width:500px) 100vw, 50vw"
              />
            )}
            <InViewAnimateSlideUp className="absolute top-1 left-0 w-full h-4/5 z-10 dark:bg-gray700 bg-white">
              <div></div>
            </InViewAnimateSlideUp>
          </div>
        </div>
      </div>
      <InViewAnimateBottom>
        <div className="flex flex-col md:flex-row gap-2 sm:gap-[18px] mt-2 sm:mt-[18px]">
          <div className="md:flex-1 rounded-xl relative overflow-hidden dark:bg-gray700 bg-white h-[300px] sm:h-[550px] md:h-[350px] lg:h-[470px] xl:h-[440px] 2xl:h-[528px]">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt=""
                fill
                sizes="(max-width:480px) 100vw, 50vw"
              />
            )}
          </div>
          <div className="md:flex-1 flex flex-col gap-2 sm:gap-[18px] justify-between">
            <div className="w-full relative h-[280px] sm:h-[450px] md:h-full rounded-xl dark:bg-gray700 bg-white">
              {imageUrl2 && (
                <Image
                  src={imageUrl2}
                  alt=""
                  fill
                  sizes="(max-width:480px) 100vw, 50vw"
                />
              )}
            </div>
            <div className="p-3 lg:p-5 flex items-center dark:bg-gray700 bg-white border dark:border-whiteAlpha-400 border-gray200 justify-between gap-2 rounded-xl">
              <span className="font-medium md:text-sm lg:text-lg xl:text-xl dark:text-whiteAlpha-800 text-gray600">
                Integrations:
              </span>
              <div className="w-8 sm:w-10 h-8 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 bg-eth bg-contain bg-no-repeat" />
              <div className="w-8 sm:w-10 h-8 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 bg-graph bg-contain bg-no-repeat" />
              <div className="w-8 sm:w-10 h-8 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 bg-coingecko bg-contain bg-no-repeat" />
              <div className="2xl:w-32 2xl:h-12 md:w-20 md:h-8 w-24 h-10 lg:w-28 lg:h-10 dark:bg-magic bg-magic-white bg-contain bg-no-repeat" />
            </div>
          </div>
        </div>
      </InViewAnimateBottom>
    </div>
  );
};

export default Iqwiki;
