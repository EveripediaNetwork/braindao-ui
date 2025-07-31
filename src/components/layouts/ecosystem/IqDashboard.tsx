"use client";

import { TokenBrief } from "@/app/_components/token-brief";
import React from "react";
import { StatsPointers } from "../Iqtoken";
import { DetailCard } from "./aiden";
import exchangeImage from "./images/iq-dashboard/exchange1.svg";
import lockImage from "./images/iq-dashboard/lock1.svg";
import statImage from "./images/iq-dashboard/stat1.svg";
import VotingImage from "./images/iq-dashboard/voting1.svg";

const IqDashboard = () => {
	return (
		<div id="dashboard" className="bg-black text-muted-foreground">
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-[48px] sm:pb-[80px] xl:pb-24">
				<TokenBrief
					title="IQ Dashboard"
					description="Using the IQ Dashboard, you can stake your tokens, facilitate cross-blockchain bridging, vote on governance proposals, and engage in many other activities within the blockchain ecosystem."
					action="https://iq.iqai.com/dashboard"
					buttonText="Explore IQ Dashboard"
				/>

				<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-6 py-3 mt-16 w-full">
					<StatsPointers
						title="Swap"
						headerSize="text-xl"
						content="Engage with the IQ ecosystem and effortlessly swap the IQ token across various exchange platforms"
						className=" gap-4"
					/>
					<StatsPointers
						title="Lock"
						headerSize="text-xl"
						content="Lock IQ token over a period of time and earn IQ token rewards.\n"
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

				<div className="mt-16 grid gap-6">
					<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
						<div className="md:col-span-3">
							<DetailCard
								image={VotingImage}
								alt="IQ Dashboard Vote"
								title="Vote"
							/>
						</div>
						<div className="md:col-span-2">
							<DetailCard
								image={exchangeImage}
								alt="IQ Dashboard Lock"
								title="Lock"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<DetailCard
								image={lockImage}
								alt="IQ Dashboard Exchanges"
								title="Exchanges"
							/>
						</div>
						<div>
							<DetailCard
								image={statImage}
								alt="IQ Dashboard Stats"
								title="Stats"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IqDashboard;
