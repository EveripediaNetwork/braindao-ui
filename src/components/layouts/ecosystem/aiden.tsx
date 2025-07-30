"use client";

import { TokenBrief } from "@/app/_components/token-brief";
import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import Image from "next/image";
import React from "react";
import {
	RiDatabaseLine,
	RiNewspaperLine,
	RiPlug2Line,
	RiQuestionAnswerLine,
} from "react-icons/ri";

import AidenChat from "./images/aiden/aiden-1.webp";
import AidenKnowledge from "./images/aiden/aiden-2.webp";
import AidenLanding from "./images/aiden/aiden-landing.webp";

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
	return (
		<div id="aiden" className="bg-black text-muted-foreground">
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-[48px] sm:pb-[10px] xl:pb-24">
				<TokenBrief
					title="AIDEN"
					description={
						"AIDEN is an Advanced AI assistant developed to engage with blockchain technologies, helping users navigate the cryptocurrency landscape by offering in-depth insights and seamless onboarding assistance for both beginners and seasoned crypto enthusiasts."
					}
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

				<div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-1 lg:gap-8">
					<div className="flex flex-col gap-1 flex-1">
						<div className="relative overflow-hidden rounded-lg flex-1">
							<Image
								src={AidenChat}
								alt="Aiden Chat"
								className="w-full h-full object-contain"
							/>
						</div>

						<div className="relative overflow-hidden rounded-lg flex-1">
							<Image
								src={AidenKnowledge}
								alt="Aiden Knowledge"
								className="w-full h-full object-contain"
							/>
						</div>
					</div>

					<div className="flex-1">
						<div className="relative w-full h-full overflow-hidden rounded-lg">
							<Image
								src={AidenLanding}
								alt="Aiden Landing"
								className="w-full h-full object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aiden;
