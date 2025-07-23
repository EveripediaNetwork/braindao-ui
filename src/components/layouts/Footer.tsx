import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<div className="pt-16 pb-12 dark:bg-brand-200 bg-brand-50">
			<div className="p-8 flex flex-col items-center gap-5 border-b border-blackAlpha-50">
				<Image src={"/svgs/brainie.svg"} alt="" width={40} height={34} />
				<div className="flex flex-col items-center gap-4">
					<h2 className="text-brand-500 dark:text-brand-800 text-xl md:text-2xl xl:text-3xl font-bold text-center">
						Stay up to date every month with our newsletter
					</h2>
					<p className="text-gray800 text-center text-sm sm:text-base">
						Never miss BrainDAO & IQ ecosystem updates by signing up for our
						email newsletter.
					</p>
					<a
						href={"https://www.getdrip.com/forms/505929689/submissions/new"}
						target="_blank"
						className="flex justify-center w-[210px] text-white dark:bg-brand-800 bg-brand-500 py-3 rounded-md hover:bg-brand-700 transition-all ease-in-out duration-300"
						rel="noreferrer"
					>
						Subscribe
					</a>
				</div>
			</div>
			<div className="pt-8 px-8 text-center">
				<small className="pt-5 text-xs text-gray600">
					©️2023 Powered by IQ and BrainDAO. All Rights Reserved.
				</small>
			</div>
		</div>
	);
};

export default Footer;
