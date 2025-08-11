import Link from "next/link";

export function ExchangeLink({
	href,
	icon,
	name,
}: {
	href: string;
	icon: React.ReactNode;
	name: string;
}) {
	return (
		<>
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				data-ph-capture-attribute-exchange-link={name.toLowerCase()}
				aria-label={`Trade on ${name}`}
			>
				{icon}
			</Link>
			{name !== "frax-finance" && (
				<div
					className="border-l border-neutral-700 h-[24px] mx-2"
					aria-hidden="true"
				/>
			)}
		</>
	);
}
