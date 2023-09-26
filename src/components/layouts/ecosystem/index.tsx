import React from "react";
import { TokenBrief } from "../Iqtoken";
import IqDashboard from "./IqDashboard";
import Iqgpt from "./Iqgpt";

const Ecosystem = () => {
  return (
    <div className="bg-white text-gray600 dark:bg-gray800 dark:text-whiteAlpha-900">
      <div className="max-w-[1536px] px-[120px] mx-auto py-24">
        <h2 className="text-center text-5xl text-gray800 font-semibold mb-14">
          The IQ Ecosystem
        </h2>
        <TokenBrief
          title="IQ Wiki"
          description="IQ.wiki, the world's largest blockchain and cryptocurrency encyclopedia, is a Polygon-based platform, featuring thousands of pages, that uses IPFS for data storage and on-chain edits. IQ token stakers govern the platform, which offers a gasless experience for contributors and utilizes OpenAI's GPT-3 for article summarization."
          action="https://iq.wiki"
          buttonText="Explore IQ wiki"
        />
      </div>
      <Iqgpt />
      <IqDashboard />
    </div>
  );
};

export default Ecosystem;
