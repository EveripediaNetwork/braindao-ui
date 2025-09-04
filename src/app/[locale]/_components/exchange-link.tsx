import Link from "next/link";

export function ExchangeLink({
	href,
	icon,
	label,
	showDivider,
}: {
	href: string;
	icon: React.ReactNode;
	label: string;
	showDivider: boolean;
}) {
	return (
		<>
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={label}
				data-ph-capture-attribute-exchange-link={label.toLowerCase()}
			>
				{icon}
			</Link>
			{showDivider && (
				<div
					className="border-l border-neutral-700 h-6 mx-2"
					aria-hidden="true"
				/>
			)}
		</>
	);
}
