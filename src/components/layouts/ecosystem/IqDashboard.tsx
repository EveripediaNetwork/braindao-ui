"use client";

import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { StatsPointers, TokenBrief } from "../Iqtoken";

const IqDashboard = () => {
  const { theme } = useTheme();
  const [appTheme, setAppTheme] = useState("");

  useEffect(() => {
    setAppTheme(theme || "");
  }, [theme]);
  let imageUrl;
  if (appTheme === "dark") {
    imageUrl = "/images/dashboard-dark.png";
  }
  if (appTheme === "light") {
    imageUrl = "/images/dashboard.png";
  }
  return (
    <div className="max-w-[1536px] mx-auto flex flex-col gap-10 xl:gap-16 pt-[48px] sm:pt-[80px] 2xl:pt-24">
      <div className="px-4 sm:px-10 xl:px-24 2xl:px-[120px]">
        <TokenBrief
          title="IQ Dashboard"
          description="Using the IQ Dashboard, you can stake your tokens, facilitate cross-blockchain bridging, vote on governance proposals, and engage in many other activities within the blockchain ecosystem."
          action="https://iq.braindao.org/dashboard"
          buttonText="Explore IQ Dashboard"
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-6 py-3 mt-16 w-full">
          <StatsPointers
            title="Swap"
            headerSize="text-xl"
            content="Engage with the IQ ecosystem and effortlessly swap the IQ token across various exchange platforms"
            className=" gap-4"
          />
          <StatsPointers
            title="Bridge"
            headerSize="text-xl"
            content="Transfer IQ from EOS to ETH and vice versa using the IQ bridge."
            className="gap-4"
          />
          <StatsPointers
            title="Lock"
            headerSize="text-xl"
            content="Lock IQ token over a period of time and earn IQ token rewards.
"
            className="gap-4"
          />
          <StatsPointers
            title="Vote"
            headerSize="text-xl"
            content="Stakers can vote on all governance proposals and create their own proposals."
            className="gap-4"
          />
        </div>
      </div>
      <InViewAnimateBottom>
        <div className="w-full relative h-[250px] min-[500px]:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[887px]">
          {imageUrl && <Image src={imageUrl} alt="" fill sizes="100vw" />}
        </div>
      </InViewAnimateBottom>
    </div>
  );
};

export default IqDashboard;
