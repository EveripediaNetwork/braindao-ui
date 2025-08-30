"use client";

import { TokenBrief } from "@/app/[locale]/_components/token-brief";
import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import Image from "next/image";
import React from "react";
import IqWikiLandingAlt from "./images/iq-wiki/IQ.wiki.svg";
import WidgetImage from "./images/iq-wiki/widgets.webp";
import WikiRankImage from "./images/iq-wiki/wiki-rank.webp";

const Iqwiki = () => {
	return (
		<div id="iq-wiki" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 pb-12 sm:py-8 xl:py-0">
				<TokenBrief
					title="IQ.wiki"
					description="IQ.wiki is the largest blockchain and cryptocurrency encyclopedia in the world with thousands of pages. IQ.wiki is powered by IQ token and all edits on the platform are recorded on-chain through Polygon and IPFS. "
					action="https://iq.wiki"
					buttonText="Explore IQ.wiki"
				/>

				<div className="flex flex-col gap-6">
					<div
						className="flex flex-col md:flex-row border overflow-hidden mt-16 border-neutral-700 rounded-3xl bg-black relative"
						style={{
							backgroundImage: "url(/images/shadow.png)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="pl-3 pt-8">
							<p className="text-xs md:text-sm lg:text-base max-w-xl font-medium text-muted-foreground">
								Explore a diverse range of wikis designed to guide you through
								the realms of cryptocurrency and blockchain.
							</p>
						</div>
						<div className="w-full relative pt-8 pl-3 sm:pl-16 xl:pl-8">
							<div className="relative rounded-tl-xl overflow-hidden shadow-custom">
								<Image
									src={IqWikiLandingAlt}
									alt="IQ.wiki landing page interface"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 gradient-dark-bg" />
							</div>
						</div>
					</div>

					<InViewAnimateBottom>
						<div className="w-full flex flex-col justify-between items-center md:flex-row gap-6">
							<div className="w-full md:w-1/2">
								<Image
									src={WidgetImage}
									alt="IQ.wiki widgets and tools interface"
									className="w-full h-auto object-contain"
								/>
							</div>

							<div className="w-full md:w-1/2">
								<Image
									src={WikiRankImage}
									alt="IQ.wiki ranking showing details of cryptocurrencies and other blockchain projects"
									className="w-full h-auto object-contain"
								/>
							</div>
						</div>
					</InViewAnimateBottom>
				</div>
			</div>
		</div>
	);
};

export default Iqwiki;
