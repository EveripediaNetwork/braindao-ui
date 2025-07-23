"use client";

import { TokenBrief } from "@/app/_components/token-brief";
import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import Image from "next/image";
import React from "react";

const Iqwiki = () => {
	const imageUrl = "/images/iqwiki-widget-1.webp";
	const imageUrl2 = "/images/iqwiki-widget-2.png";
	const imageUrl3 = "/images/iqwiki-widget-2.webp";

	return (
		<div id="iq-wiki" className="bg-black text-muted-foreground">
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-[48px] sm:pb-[80px] xl:pb-24">
				<TokenBrief
					title="IQ.wiki"
					description="IQ.wiki, the world's largest blockchain and cryptocurrency encyclopedia, is a Polygon-based platform, featuring thousands of pages, that uses IPFS for data storage and on-chain edits. IQ token stakers govern the platform, which offers a gasless experience for contributors and utilizes Sophia Agent for article summarization."
					action="https://iq.wiki"
					buttonText="Explore IQ.wiki"
				/>
			</div>

			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 xl:pb-24">
				<div
					className="border overflow-hidden rounded-xl mt-16 border-gray-700 bg-black grid md:grid-cols-3 relative"
					style={{
						backgroundImage: "url(/images/shadow.png)",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="col-span-1 pb-3 sm:pb-0 pl-3 pt-4 lg:pl-6 lg:pt-8">
						<p className="text-sm xl:text-lg font-medium text-white/80">
							Explore a diverse range of wikis designed to guide you through the
							realms of cryptocurrency and blockchain.
						</p>
					</div>
					<div className="col-span-2">
						<div className="h-[220px] min-[500px]:h-[280px] sm:h-[400px] md:h-[280px] lg:h-[400px] 2xl:h-[450px] w-full relative">
							{imageUrl && (
								<Image
									src={imageUrl}
									alt=""
									fill
									sizes="(max-width:500px) 100vw, 50vw"
								/>
							)}
						</div>
					</div>
				</div>

				<InViewAnimateBottom>
					<div className="flex flex-col md:flex-row gap-2 min-[500px]:gap-6 sm:gap-[18px] mt-2 min-[500px]:mt-6 sm:mt-[18px]">
						<div className="md:flex-1 rounded-xl relative overflow-hidden h-[300px] min-[500px]:h-[400px] sm:h-[550px] md:h-[300px] lg:h-[470px] xl:h-[440px] 2xl:h-[528px]">
							{imageUrl2 && (
								<Image
									src={imageUrl2}
									alt=""
									fill
									sizes="(max-width:480px) 100vw, 50vw"
								/>
							)}
						</div>
						<div className="md:flex-1 flex flex-col gap-2 min-[500px]:gap-6 sm:gap-[18px] justify-between">
							<div className="w-full relative h-[280px] min-[500px]:h-[350px] sm:h-[450px] md:h-full rounded-xl ">
								{imageUrl3 && (
									<Image
										src={imageUrl3}
										alt=""
										fill
										sizes="(max-width:480px) 100vw, 50vw"
									/>
								)}
							</div>
						</div>
					</div>
				</InViewAnimateBottom>
			</div>
		</div>
	);
};

export default Iqwiki;
