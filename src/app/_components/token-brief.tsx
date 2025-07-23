"use client";

import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { satoshi } from "../font";

export const TokenBrief = ({
	title,
	description,
	description2,
	buttonText,
	action,
}: {
	title: string;
	description: string;
	description2?: string;
	buttonText: string;
	action: string;
}) => {
	return (
		<div className="flex items-start flex-col xl:flex-row">
			<div className="xl:w-[400px] xl:flex-shrink-0">
				<InViewAnimateBottom>
					<h3
						className={cn(
							satoshi.className,
							"font-semibold text-foreground text-2xl sm:text-3xl xl:text-4xl",
						)}
					>
						{title}
					</h3>
				</InViewAnimateBottom>
			</div>
			<div className="flex-1 mt-2 xl:mt-0 xl:ml-8">
				<InViewAnimateBottom>
					<p className="xl:text-lg text-muted-foreground">{description}</p>
					{description2 && (
						<p className="xl:text-lg text-muted-foreground">{description2}</p>
					)}
				</InViewAnimateBottom>
				<InViewAnimateBottom>
					<Button
						type="button"
						size={"sm"}
						onClick={() => window.open(action, "_blank", "noopener,noreferrer")}
						className="py-3 xl:py-4 mt-4 xl:mt-8  text-xs md:text-sm transition-all ease-in-out duration-300"
					>
						{buttonText}
					</Button>
				</InViewAnimateBottom>
			</div>
		</div>
	);
};
