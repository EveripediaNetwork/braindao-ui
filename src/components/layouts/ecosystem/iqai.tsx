"use client";

import { TokenBrief } from "@/app/[locale]/_components/token-brief";
import Image from "next/image";
import React from "react";
import AILandingImage from "./images/iqai/iq-landing.png";

const IQAI = () => {
	return (
		<div id="iqai" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 pb-12 sm:py-8 xl:py-8">
				<TokenBrief
					title="IQ AI"
					description="IQ AI is building the foundation for mass blockchain adoption through the Agent Tokenization Platform (ATP). By enabling the creation of tokenized, autonomous on-chain agents, ATP is redefining decentralized ecosystems and unlocking new opportunities for collaboration, growth, and innovation.."
					action="https://iqai.app"
					buttonText="Explore IQ AI"
				/>
				<div className="w-full rounded-xl overflow-hidden py-12">
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
	);
};

export default IQAI;
