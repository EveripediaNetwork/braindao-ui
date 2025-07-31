import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

export function TokenCard({
	title,
	value,
	change,
	icon,
	link,
	errorMessage,
}: {
	title: string;
	value: string | null;
	change: { iqChange: number | null; formattedChange: string | null };
	icon: React.ReactNode;
	link: string;
	errorMessage: string;
}) {
	return (
		<div className="bg-[#0A0A0A] backdrop-filter backdrop-blur-sm border border-border rounded-xl p-3 flex flex-row text-sm justify-between items-center w-full">
			<div className="flex flex-col gap-2 text-sm text-card-foreground">
				<h1 className="text-xs ">{title}</h1>
				<div className="flex flex-col gap-1.5">
					<h2 className="text-xl font-semibold ">{value ?? errorMessage}</h2>
					<ChangePercentage
						iqChange={change.iqChange ?? 0}
						formattedChange={change.formattedChange}
					/>
				</div>
			</div>
			<Link
				href={link}
				target="_blank"
				rel="noopener nofollow"
				aria-label={`View ${title} on dashboard`}
				className="rounded-full p-1 border border-border"
			>
				{icon}
			</Link>
		</div>
	);
}

function ChangePercentage({
	iqChange = 0,
	formattedChange,
}: {
	iqChange: number;
	formattedChange: string | null;
}) {
	const changeDirection = iqChange > 0 ? "increase" : "decrease";

	return (
		<div
			className={cn(
				"flex items-center gap-1 rounded-xl text-sm",
				iqChange <= 0 ? "text-destructive" : "text-green-500",
			)}
			aria-label={`Price ${changeDirection} of ${formattedChange}%`}
		>
			{iqChange > 0 ? (
				<FaArrowUp size={12} aria-hidden="true" />
			) : (
				<FaArrowDown size={12} aria-hidden="true" />
			)}
			<h3>{formattedChange}%</h3>
		</div>
	);
}
