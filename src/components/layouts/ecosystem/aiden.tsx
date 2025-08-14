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

import AidenLanding from "./images/aiden/AidenLanding-2.svg";
import AidenKnowledge from "./images/aiden/aiden-3.svg";
import AidenChat from "./images/aiden/aiden-elite.svg";

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
				<h4 className="font-satoshi text-foreground font-semibold text-lg md:text-xl mb-1">
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
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-12 sm:pb-[10px] xl:pb-0">
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

				<div className="w-full  flex flex-col lg:flex-row gap-4">
					<div className="w-full lg:w-[40%] flex flex-col h-full lg:h-full lg:flex-col gap-4">
						<div className="w-full h-full lg:h-1/2">
							<div
								className="w-full h-full flex flex-col rounded-2xl  overflow-hidden justify-end border border-neutral-700 "
								style={{
									backgroundImage: "url(/images/background.svg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="w-full h-full flex justify-center items-end pt-6 px-8 ">
									<Image
										src={AidenLanding}
										alt="Landing page"
										className="w-full h-full object-contain  "
									/>
								</div>
							</div>
						</div>

						<div className="w-full h-full lg:h-1/2 ">
							<div
								className="w-full h-full flex flex-col rounded-2xl overflow-hidden justify-between border border-neutral-700 gap-3"
								style={{
									backgroundImage: "url(/images/background.svg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="px-4 pt-4 pb-2 flex-shrink-0">
									<p className="text-foreground text-[10px] md:text-sm lg:text-base w-[90%] font-medium">
										Train AIDEN on your project documents and web pages and
										incorporate text and Q&A pairs to tailor the bot to the
										needs of your community.
									</p>
								</div>

								<div className="w-full flex-1 flex justify-end items-end">
									<div className="w-[90%] h-full flex rounded-xl relative overflow-hidden">
										<Image
											src={AidenKnowledge}
											alt="IQ.wiki landing page interface"
											className="w-full h-full object-contain"
										/>
										<div className="absolute inset-0 gradient-dark-bg" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-[60%] flex flex-row justify-between items-center">
						<div className="w-full  h-full">
							<div
								className="flex flex-col rounded-2xl h-full border border-neutral-700 overflow-hidden"
								style={{
									backgroundImage: "url(/images/background.svg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="px-4 pt-4 pb-2 h-[20%]">
									<p className="text-foreground text-[10px] sm:text-sm md:text-base font-medium w-full">
										AIDEN can be integrated into different social platforms to
										deliver specialized, context-relevant information to meet
										the unique needs of each community.
									</p>
								</div>

								<div className="flex items-center justify-center h-[80%]">
									<div className="relative overflow-hidden h-full">
										<Image
											src={AidenChat}
											alt="AI Platform"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 gradient-dark-bg" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aiden;
