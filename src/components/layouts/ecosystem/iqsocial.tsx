"use client";
import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import useThemeImage from "@/hooks/useThemeImage";
import Image from "next/image";
import React from "react";
import { TokenBrief } from "../Iqtoken";

export const FeatureList = ({
	title,
	description,
	icon,
	delay,
}: {
	title: string;
	description: string;
	icon: JSX.Element;
	delay?: number;
}) => {
	return (
		<InViewAnimateBottom className="flex flex-1 flex-col gap-4 items-start">
			<div className="w-12 h-12 rounded-full flex justify-center text-xl dark:text-brand-800 text-brand-500 items-center border-8 dark:border-brand-200 border-brand-50 dark:bg-brand-400 bg-brand-100">
				{icon}
			</div>
			<div className="">
				<h4 className="dark:text-whiteAlpha-900 text-gray800 font-semibold text-lg md:text-xl mb-1">
					{title}
				</h4>
				<p className="text-sm lg:text-base">{description}</p>
			</div>
		</InViewAnimateBottom>
	);
};

const Iqsocial = () => {
	const imageUrl = useThemeImage(
		"/images/iq-social-light-1.webp",
		"/images/iq-social-dark-1.webp",
	);
	const imageUrl2 = useThemeImage(
		"/images/iq-social-light-2.webp",
		"/images/iq-social-dark-2.webp",
	);
	const imageUrl3 = useThemeImage(
		"/images/iq-social-light-3.webp",
		"/images/iq-social-dark-3.webp",
	);

	return (
		<div
			id="iq-social"
			className="max-w-[1536px] px-4 sm:px-10 xl:px-[120px] mx-auto flex flex-col gap-10 xl:gap-16 pt-[48px] sm:pt-[80px] 2xl:pt-24 relative"
		>
			<TokenBrief
				title="IQ social"
				description={`IQ.social is an AI-powered social forum designed to enhance users' knowledge and awareness of the cryptocurrency and blockchain industry. The platform is governed by HiIQ stakers who curate and rank all of the articles submitted to IQ.social.`}
				action="https://iq.social"
				buttonText="Explore IQ Social"
			/>

			<InViewAnimateBottom>
				<div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-5">
					{imageUrl && (
						<Image
							src={imageUrl}
							alt="IQ.social Illustration"
							width={750}
							height={490}
						/>
					)}
					<div>
						<div className="border border-gray-200 dark:border-white/40 pb-6 bg-white rounded-3xl dark:bg-gray-700">
							{imageUrl2 && (
								<Image
									src={imageUrl2}
									alt="IQ.social Illustration"
									width={590}
									height={340}
									className="rounded-t-3xl"
								/>
							)}
							<p className="text-gray-600 dark:text-white/70 pl-10 font-semibold text-xs xl:text-lg pr-5 md:pr-0">
								Share your curated crypto news with the community by submitting
								links under your preferred categories.
							</p>
						</div>
					</div>
				</div>
				<div className="border border-gray-200 dark:border-white/40 mt-2.5 bg-white rounded-3xl dark:bg-gray-700 px-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-5">
					{imageUrl3 && (
						<Image
							src={imageUrl3}
							alt="IQ.social Illustration"
							width={590}
							height={340}
							className="rounded-t-3xl"
						/>
					)}
					<div className="pt-0 pb-10 md:py-10">
						<h1 className="text-gray-600 dark:text-white/70 font-medium text-xs xl:text-base">
							Categories
						</h1>
						<p className="text-gray-600 dark:text-white/70 font-semibold text-xs xl:text-lg">
							Discover a diverse array of categories on IQ social, including the
							latest in AI news, nfts, development, cryptocurrencies and
							regulations.
						</p>
					</div>
				</div>
			</InViewAnimateBottom>
		</div>
	);
};

export default Iqsocial;
