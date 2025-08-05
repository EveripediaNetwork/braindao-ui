"use client";

import { TokenBrief } from "@/app/_components/token-brief";
import React from "react";
import { StatsPointers } from "../Iqtoken";
import DetailCard from "../detailed-card";
import exchangeImage from "./images/iq-dashboard/exchange.svg";
import lockImage from "./images/iq-dashboard/lock.svg";
import statImage from "./images/iq-dashboard/stat.svg";
import VotingImage from "./images/iq-dashboard/voting.svg";

const IqDashboard = () => {
	return (
		<div id="dashboard" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 py-24 sm:py-20 xl:py-0">
				<TokenBrief
					title="IQ Dashboard"
					description="Using the IQ Dashboard, you can stake your tokens, facilitate cross-blockchain bridging, vote on governance proposals, and engage in many other activities within the blockchain ecosystem."
					action="https://iq.iqai.com/dashboard"
					buttonText="Explore IQ Dashboard"
				/>

				<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-6 py-24 sm:py-36 mt-16 w-full">
					<StatsPointers
						title="Swap"
						headerSize="text-xl"
						content="Engage with the IQ ecosystem and effortlessly swap the IQ token across various exchange platforms"
						className=" gap-4"
					/>
					<StatsPointers
						title="Lock"
						headerSize="text-xl"
						content="Lock IQ token over a period of time and earn IQ token rewards."
						className="gap-4"
					/>
					<StatsPointers
						title="Vote"
						headerSize="text-xl"
						content="Stakers can vote on all governance proposals and create their own proposals."
						className="gap-4"
					/>
					<StatsPointers
						title="Monitor Protocol"
						headerSize="text-xl"
						content="Users get real-time insights into the IQ ecosystem's growth and BrainDAO's treasury health."
						className="gap-4"
					/>
				</div>

				<div className="mt-16  w-full flex flex-col gap-6 md:gap-8">
					<div className="flex flex-col sm:flex-row w-full justify-center gap-6 md:gap-6 h-[40vh] sm:h-[55vh]">
						<div className="w-full sm:w-[60%] h-full">
							<DetailCard
								title="Vote"
								image={VotingImage}
								alt="IQ Dashboard Vote"
								className="w-full h-full"
								containerClassName="h-full"
								imageClassName="h-full w-full"
								imageContainerPadding="px-2"
								imageStyle={{ objectFit: "cover", maxHeight: "none" }}
							/>
						</div>

						<div className="w-full sm:w-[40%] h-full ">
							<DetailCard
								title="Exchanges"
								image={exchangeImage}
								alt="IQ Dashboard Exchanges"
								className="w-full h-full"
								containerClassName="h-full"
								imageClassName="h-full w-full object-right"
								imageContainerPadding="pr-0"
								imageStyle={{ objectFit: "cover", maxHeight: "none" }}
							/>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row w-full justify-center gap-6 md:gap-6 h-[40vh] sm:h-[55vh] 0">
						<div className="w-full sm:w-[40%] h-full ">
							<DetailCard
								title="Lock"
								image={lockImage}
								alt="IQ Dashboard Lock"
								className="w-full h-full"
								containerClassName="h-full"
								imageClassName="h-full w-full"
								imageStyle={{ objectFit: "cover", maxHeight: "none" }}
								imageContainerPadding="px-0"
							/>
						</div>

						<div className="w-full sm:w-[60%] h-full ">
							<DetailCard
								title="Stats"
								image={statImage}
								alt="IQ Dashboard Stats"
								className="w-full h-full"
								containerClassName="h-full"
								imageClassName=" h-full  object-right"
								imageContainerPadding="px-0"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IqDashboard;
