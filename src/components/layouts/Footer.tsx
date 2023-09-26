import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-12 bg-brand-50 dark:bg-brand-200">
      <div className="p-8 flex flex-col items-center gap-10 border-b border-blackAlpha-50">
        <Image src={"/brainie.svg"} alt="" width={40} height={34} />
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-brand-500 dark:text-brand-800">
            Stay up to date every week with our newsletter
          </h2>
          <p className="text-gray800">
            Never miss any of the most popular and trending articles on IQ.wiki
            when you sign up to our email newsletter.
          </p>
          <a
            href={""}
            target="_blank"
            className="flex justify-center w-[210px] text-white/90 bg-pink-500 py-3 rounded-md hover:bg-pink-500/50 transition-all ease-in-out duration-300"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="pt-8 px-8 text-center">
        <small className="pt-5 text-gray600 dark:text-gray800">
          ©️2023 Powered by IQ and BrianDAO. All Rights Reserved. Ver 7527ed4
        </small>
      </div>
    </div>
  );
};

export default Footer;
