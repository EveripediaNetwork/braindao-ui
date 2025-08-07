"use client";

import { TokenBrief } from "@/app/_components/token-brief";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";
import AILandingImage from "./images/iqai/iq-landing.png";

const IQAI = () => {
	return (
		<div id="iqai" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 pb-12 sm:py-8 xl:pb-0">
				<TokenBrief
					title="IQ AI"
					description="IQ AI is building the foundation for mass blockchain adoption through the Agent Tokenization Platform (ATP). By enabling the creation of tokenized, autonomous on-chain agents, ATP is redefining decentralized ecosystems and unlocking new opportunities for collaboration, growth, and innovation.."
					action="https://sophia.braindao.org"
					buttonText="Explore IQ AI"
				/>
			</div>

			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4">
				<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4">
					<div className="w-full rounded-xl overflow-hidden">
						<Image
							src={AILandingImage}
							alt="IQ Blog"
							width={750}
							height={675}
							className="w-full h-auto"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IQAI;
