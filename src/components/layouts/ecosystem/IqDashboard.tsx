import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import Image from "next/image";
import React from "react";
import { StatsPointers, TokenBrief } from "../Iqtoken";

const IqDashboard = () => {
  return (
    <div className="max-w-[1536px] mx-auto flex flex-col gap-10 xl:gap-16 pt-[48px] sm:pt-[80px] 2xl:pt-24">
      <div className="px-10 xl:px-[120px]">
        <TokenBrief
          title="IQ Dashboard"
          description="Utilizing the IQ Dashboard, you have the ability to stake your tokens, facilitate cross-blockchain bridging, participate in governance proposal voting, and engage in numerous other activities within the blockchain ecosystem."
          action="https://iq.braindao.org/dashboard"
          buttonText="Explore IQ Dashboard"
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-6 py-3 mt-16 w-full">
          <StatsPointers
            title="Swap"
            headerSize="text-xl"
            content="Get involved in the IQ Ecosystem and swap the IQ token easily across different exchange platforms."
            className=" gap-4"
          />
          <StatsPointers
            title="Bridge"
            headerSize="text-xl"
            content="Transfer IQ from EOS to ETH and vice versa using the IQ bridge
"
            className="gap-4"
          />
          <StatsPointers
            title="Bridge"
            headerSize="text-xl"
            content="Lock IQ token over a period of time and earn IQ token rewards.
"
            className="gap-4"
          />
          <StatsPointers
            title="Voting"
            headerSize="text-xl"
            content="Stakers can vote on all governance proposals and create their own proposals."
            className="gap-4"
          />
        </div>
      </div>
      <InViewAnimateBottom>
        <div className="w-full relative h-[300px] sm:h-[500px] md:h-[600px] xl:h-[887px]">
          <Image
            src={"/images/iq-dashboard-mockup-dark.png"}
            alt=""
            fill
            sizes="100vw"
          />
        </div>
      </InViewAnimateBottom>
    </div>
  );
};

export default IqDashboard;
