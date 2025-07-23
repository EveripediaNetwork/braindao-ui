"use client";

import { TokenBrief } from "@/app/_components/token-brief";
import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import React from "react";
import {
	RiDatabaseLine,
	RiNewspaperLine,
	RiPlug2Line,
	RiQuestionAnswerLine,
} from "react-icons/ri";

export const FeatureList = ({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: JSX.Element;
	delay?: number;
}) => {
	return (
		<InViewAnimateBottom className="flex flex-1 flex-col gap-4 items-start">
			<div className="w-12 h-12 rounded-full flex justify-center text-xl dark:text-brand-800 text-brand-500 items-center border-8 border-[#5D1738] bg-[#FF80BD]">
				{icon}
			</div>
			<div className="">
				<h4 className="text-foreground font-semibold text-lg md:text-xl mb-1">
					{title}
				</h4>
				<p className="text-sm lg:text-base">{description}</p>
			</div>
		</InViewAnimateBottom>
	);
};

const Aiden = () => {
	const imageUrl = "/images/aiden-dk.webp";

	return (
		<div
			id="aiden"
			className="max-w-[1536px] px-4 sm:px-10 xl:px-[120px] mx-auto flex flex-col gap-10 xl:gap-16 pt-[48px] sm:pt-[80px] 2xl:pt-24 relative"
		>
			<TokenBrief
				title="AIDEN"
				description={`AIDEN is an extension of IQ.wiki's decentralized framework, integrating crypto-focused AI models that utilize diverse data sources to bolster capabilities, offering insights into intricate terms, live market trends, and breaking news.`}
				description2={
					"AIDEN is powered by the IQ token, enabling IQ holders to participate in governance and get access to additional features."
				}
				action="https://aiden.id"
				buttonText="Explore AIDEN"
			/>
			<div className="grid min-[500px]:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-12 py-12">
				<FeatureList
					icon={<RiDatabaseLine className="text-primary" />}
					title="Access to real-time data"
					description="Access to real-time price data, trading volumes, and market capitalization."
				/>
				<FeatureList
					icon={<RiQuestionAnswerLine className="text-primary" />}
					title="AI-generated answers"
					description="Receive AI-generated answers to all your crypto questions."
					delay={0.8}
				/>
				<FeatureList
					icon={<RiNewspaperLine className="text-primary" />}
					title="Update on news and trends"
					description="Equip yourself with AI-powered market analysis using real-time market data, news, and trends."
					delay={1.0}
				/>
				<FeatureList
					icon={<RiPlug2Line className="text-primary" />}
					title="Plugins"
					description="Access various plugins to select data sources for your inquiries."
					delay={1.2}
				/>
			</div>
		</div>
	);
};

export default Aiden;
