import React from "react";
import IqDashboard from "./IqDashboard";
import Aiden from "./aiden";
import Iqwiki from "./Iqwiki";
import Iqcode from "./iqcode";
import Iqsocial from "./iqsocial";

const Ecosystem = () => {
  return (
    <div className="dark:bg-gray800 bg-[#F9FAFB] dark:text-whiteAlpha-900 text-gray600">
      <div className="max-w-[1536px] px-4 md:px-10 xl:px-24 2xl:px-[120px] mx-auto py-[48px] sm:py-[80px] 2xl:py-24">
        <h2 className="text-center text-4xl xl:text-5xl dark:text-whiteAlpha-900 text-gray800 font-semibold mb-10 xl:mb-14">
          The IQ Ecosystem
        </h2>
        <Iqwiki />
      </div>
      <Aiden />
      <IqDashboard />
      <Iqsocial />
      <Iqcode />
    </div>
  );
};

export default Ecosystem;
