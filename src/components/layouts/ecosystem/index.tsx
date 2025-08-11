import { satoshi } from "@/app/font";
import { cn } from "@/lib/utils";
import React from "react";
import Blog from "./IQBlog";
import IqDashboard from "./IqDashboard";
import Iqwiki from "./Iqwiki";
import Aiden from "./aiden";
import IQAI from "./iqai";
import SOPHIA from "./sophia";

const Ecosystem = () => {
	return (
		<div className="bg-black text-muted-foreground">
			<div>
				<h2
					className={cn(
						satoshi.className,
						"text-center text-4xl xl:text-5xl text-white font-bold sm:pt-0 xl:pt-24 pb-16 sm:pb-10 xl:pb-12",
					)}
				>
					The IQ Ecosystem
				</h2>
				<Iqwiki />
				<SOPHIA />
				<IQAI />
				<Aiden />
				<IqDashboard />
				<Blog />
			</div>
		</div>
	);
};

export default Ecosystem;
