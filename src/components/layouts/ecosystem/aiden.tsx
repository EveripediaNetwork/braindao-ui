"use client";

import { TokenBrief } from "@/app/_components/token-brief";
import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import {
	RiDatabaseLine,
	RiNewspaperLine,
	RiPlug2Line,
	RiQuestionAnswerLine,
} from "react-icons/ri";

import AidenLanding from "./images/aiden/AidenLanding.svg";
import AidenChat from "./images/aiden/aiden-1.svg";
import AidenKnowledge from "./images/aiden/aiden-2.svg";

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

interface DetailCardProps {
	image: StaticImageData;
	alt: string;
	title?: string;
}

export const DetailCard = ({ image, alt, title }: DetailCardProps) => {
	return (
		<div
			className="flex flex-col rounded-2xl h-full border border-border overflow-hidden"
			style={{
				backgroundImage: "url(/images/background.svg)",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{title && (
				<div className="px-4 pt-4 pb-2 relative z-10">
					<p className="text-foreground text-xs sm:text-sm md:text-sm font-medium max-w-xl">
						{title}
					</p>
				</div>
			)}

			<div className="flex-1 flex items-center justify-center">
				<Image
					src={image}
					alt={alt}
					className="w-full h-full object-contain"
					style={{ position: "static" }}
				/>
			</div>
		</div>
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

				<div className="mt-12 lg:mt-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="flex flex-col gap-6 h-full">
							<div className="h-[300px] lg:h-[350px]">
								<DetailCard image={AidenLanding} alt="AI Assistant" />
							</div>
							<div className="h-[300px] lg:h-[350px]">
								<DetailCard
									image={AidenKnowledge}
									alt="Knowledge Base"
									title="Train AIDEN on your project's documents and web pages and incorporate text and Q&A pairs to tailor the bot to the needs of your community."
								/>
							</div>
						</div>

						<div className="h-[612px] lg:h-[712px]">
							<DetailCard
								image={AidenChat}
								alt="AI Platform"
								title="AIDEN can be integrated into different social platforms to deliver specialized, context-relevant information to meet the unique needs of each community."
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aiden;
