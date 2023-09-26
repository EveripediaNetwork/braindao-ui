"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { StatsPointers, TokenBrief } from "../Iqtoken";

const IqDashboard = () => {
  const { theme } = useTheme();
  return (
    <div className="max-w-[1536px] mx-auto flex flex-col gap-16 py-24">
      <div className="px-[120px]">
        <TokenBrief
          title="IQ Dashboard"
          description="Utilizing the IQ Dashboard, you have the ability to stake your tokens, facilitate cross-blockchain bridging, participate in governance proposal voting, and engage in numerous other activities within the blockchain ecosystem."
          action="https://iq.braindao.org/dashboard"
          buttonText="Explore IQ Dashboard"
        />
        <div className="flex justify-between py-3 mt-16 w-full">
          <StatsPointers
            title="Swap"
            headerSize="text-xl"
            content="Get involved in the IQ Ecosystem and swap the IQ token easily across different exchange platforms."
            className=" justify-between"
          />
          <StatsPointers
            title="Bridge"
            headerSize="text-xl"
            content="Transfer IQ from EOS to ETH and vice versa using the IQ bridge
"
            className="justify-between"
          />
          <StatsPointers
            title="Bridge"
            headerSize="text-xl"
            content="Lock IQ token over a period of time and earn IQ token rewards.
"
            className="justify-between"
          />
          <StatsPointers
            title="Voting"
            headerSize="text-xl"
            content="Stakers can vote on all governance proposals and create their own proposals."
            className="justify-between"
          />
        </div>
      </div>
      <div className="w-full h-[887px] bg-iq-dashboard-mockup dark:bg-iq-dashboard-mockup-dark bg-no-repeat bg-center bg-cover"></div>
    </div>
  );
};

export default IqDashboard;
