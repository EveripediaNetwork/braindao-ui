import { TokenBrief } from "@/app/[locale]/_components/token-brief";
import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type * as React from "react";
import {
	RiDatabaseLine,
	RiNewspaperLine,
	RiPlug2Line,
	RiQuestionAnswerLine,
} from "react-icons/ri";
import AidenChat from "./images/aiden/aiden-chat.svg";
import AidenKnowledge from "./images/aiden/aiden-knowledge.svg";
import AidenLanding from "./images/aiden/aiden-landing.svg";

const icons: Record<string, React.ReactElement> = {
	"realtime-data": <RiDatabaseLine className="text-primary" />,
	"ai-answers": <RiQuestionAnswerLine className="text-primary" />,
	"news-trends": <RiNewspaperLine className="text-primary" />,
	plugins: <RiPlug2Line className="text-primary" />,
};

const FEATURES = [
	"realtime-data",
	"ai-answers",
	"news-trends",
	"plugins",
] as const;

export const FeatureList = ({
	title,
	description,
	icon,
	delay,
}: {
	title: string;
	description: string;
	icon: React.ReactElement;
	delay?: number;
}) => {
	return (
		<InViewAnimateBottom className="flex flex-1 flex-col gap-4 items-start">
			<div className="w-12 h-12 rounded-full flex justify-center text-xl dark:text-brand-800 text-brand-500 items-center border-8 border-[#5D1738] bg-[#FF80BD]">
				{icon}
			</div>
			<div>
				<h4 className="font-satoshi text-foreground font-semibold text-lg md:text-xl mb-1">
					{title}
				</h4>
				<p className="text-sm lg:text-base">{description}</p>
			</div>
		</InViewAnimateBottom>
	);
};

const Aiden = async () => {
	const t = await getTranslations("ecosystem.aiden");

	return (
		<div id="aiden" className="bg-black text-muted-foreground">
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-12 sm:pb-[10px] xl:pb-0">
				<TokenBrief
					title={t("title")}
					description={t("description")}
					description2={t("extraDescription")}
					action="https://aiden.id"
					buttonText={t("button")}
				/>

				<div className="grid min-[500px]:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-12 py-12">
					{FEATURES.map((key, i) => (
						<FeatureList
							key={key}
							icon={icons[key]}
							title={t(`features.${key}.title`)}
							description={t(`features.${key}.description`)}
							delay={i * 0.2}
						/>
					))}
				</div>

				<div className="w-full flex flex-col lg:flex-row gap-4">
					<div className="w-full lg:w-[40%] flex flex-col gap-4">
						<div className="w-full h-full lg:h-1/2">
							<div
								className="w-full h-full flex flex-col rounded-2xl overflow-hidden justify-end border border-neutral-700"
								style={{
									backgroundImage: "url(/images/background.svg)",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<div className="w-full h-full flex justify-center items-end pt-6 px-8">
									<Image
										src={AidenLanding}
										alt="Landing page"
										className="w-full h-full object-contain"
									/>
								</div>
							</div>
						</div>

						<div className="w-full h-full lg:h-1/2">
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
										{t("sections.knowledge")}
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
						<div className="w-full h-full">
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
										{t("sections.social")}
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
