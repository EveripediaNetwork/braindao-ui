"use client";

import { TokenBrief } from "@/app/_components/token-brief";
import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import Image from "next/image";
import React from "react";
import IqWikiLandingAlt from "./images/iq-wiki/IQ.wiki.svg";
import WidgetImage from "./images/iq-wiki/widgets.webp";
import WikiRankImage from "./images/iq-wiki/wiki-rank.webp";

const Iqwiki = () => {
	return (
		<div id="iq-wiki" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 py-24 sm:py-20 xl:py-0">
				<TokenBrief
					title="IQ.wiki"
					description="IQ.wiki, the world's largest blockchain and cryptocurrency encyclopedia, is a Polygon-based platform, featuring thousands of pages, that uses IPFS for data storage and on-chain edits. IQ token stakers govern the platform, which offers a gasless experience for contributors and utilizes Sophia Agent for article summarization."
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
							<p className="text-sm lg:text-base max-w-xl font-medium text-muted-foreground">
								Explore a diverse range of wikis designed to guide you through
								the realms of cryptocurrency and blockchain.
							</p>
						</div>

						<div className="w-full relative pt-8 pl-3 sm:pl-16 xl:pl-8">
							<div className="relative">
								<Image
									src={IqWikiLandingAlt}
									alt="IQ.wiki landing page interface"
									className="w-full h-full object-cover"
								/>
								<div
									className="absolute inset-0"
									style={{
										background:
											"linear-gradient(359.56deg, #0A0A0A 5.2%, rgba(26, 27, 30, 0.1) 87.64%)",
									}}
								/>
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
<div className="w-full relative pt-8 pl-4 sm:pl-16 xl:pl-8 ">
	<Image
		src={IqWikiLandingAlt}
		alt="IQ.wiki landing page interface"
		className="w-full h-full object-cover"
	/>
	<div
		className="absolute inset-0"
		style={{
			background:
				"linear-gradient(359.56deg, #0A0A0A 5.2%, rgba(26, 27, 30, 0.1) 87.64%)",
		}}
	/>
</div>;

export default Iqwiki;

// add an extra className to the DetailCard image section so i can add extra css class to reposition of the image
// dont use DetailCard, use normal css so you can add h-1/2 to the left
