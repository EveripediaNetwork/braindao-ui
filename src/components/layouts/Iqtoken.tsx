import { TokenBrief } from "@/app/[locale]/_components/token-brief";
import { cn } from "@/lib/utils";
import { numFormatter } from "@/modules/helpers/numFormatter";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import InViewAnimateBottom from "../transitions/InViewAnimateBottom";

export const StatsPointers = ({
	title,
	content,
	className,
	headerSize,
}: {
	title: string;
	content: string;
	className?: string;
	headerSize?: string;
}) => {
	return (
		<InViewAnimateBottom className="flex-1">
			<div className="h-full flex border-l-2 border-pink-500 pl-4">
				<div className={cn("flex flex-col h-full", className)}>
					<h4
						className={cn(
							"text-foreground font-semibold font-satoshi",
							headerSize || "text-2xl xl:text-3xl",
						)}
					>
						{title}
					</h4>
					<span
						className={headerSize ? "" : "xl:text-lg text-muted-foreground"}
					>
						{content}
					</span>
				</div>
			</div>
		</InViewAnimateBottom>
	);
};

const Iqtoken = async ({
	marketData,
	tvl,
	totalHiiqSupply,
}: {
	totalHiiqSupply: number;
	tvl: number;
	marketData: {
		circulatingSupply: number;
		marketCap: number;
	} | null;
}) => {
	const t = await getTranslations("ecosystem");
	const imageUrl = "/images/about-us.png";

	return (
		<div id="iq-token" className="text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 py-12 sm:py-20  xl:pb-20 xl:pt-40">
				<TokenBrief
					title={t("token.title")}
					description={t("token.description")}
					action="https://learn.iq.wiki/iq/"
					buttonText={t("token.learn-more")}
				/>

				<div className="flex flex-col-reverse lg:flex-row items-start mt-16">
					<div className="lg:flex-1 w-full overflow-hidden">
						<InViewAnimateBottom className="w-full md:w-full xl:w-full h-[300px] sm:h-[450px] lg:h-[380px] xl:h-[500px] relative">
							{imageUrl && (
								<Image
									src={imageUrl}
									alt=""
									fill
									sizes="(max-width:960px) 80vw, 50vw"
									className="object-contain"
								/>
							)}
						</InViewAnimateBottom>
					</div>

					<div className="flex-1">
						<InViewAnimateBottom>
							<h3 className="text-foreground text-3xl xl:text-4xl font-semibold font-satoshi">
								{t("hiiq.title")}
							</h3>
						</InViewAnimateBottom>
						<InViewAnimateBottom>
							<p className="text-sm xl:text-lg text-muted-foreground mt-4">
								{t("hiiq.description")}
							</p>
						</InViewAnimateBottom>
						<div className="pt-8">
							<div className="flex flex-col gap-10 xl:gap-12">
								<div className="flex justify-between">
									<StatsPointers
										title={`${numFormatter(
											marketData?.circulatingSupply || 0,
										)} IQ`}
										content={t("hiiq.circulating-supply")}
										className="h-[80px] xl:h-[95px] justify-between"
									/>
									<StatsPointers
										title={`$${numFormatter(marketData?.marketCap || 0)}`}
										content={t("hiiq.market-cap")}
										className="h-[80px] xl:h-[95px] justify-between"
									/>
								</div>
								<div className="flex justify-between">
									<StatsPointers
										title={`$${numFormatter(tvl)}+`}
										content={t("hiiq.total-supply")}
										className="h-[80px] xl:h-[95px] justify-between"
									/>
									<StatsPointers
										title={`${numFormatter(totalHiiqSupply)} IQ+`}
										content={t("hiiq.total-volume-locked")}
										className="h-[80px] xl:h-[95px] justify-between"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Iqtoken;
