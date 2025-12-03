const snowflakeVariants = [
	<g key="1" stroke="#D5E3EB" strokeWidth="0.5" strokeLinecap="round">
		{/* Center vertical line */}
		<line x1="12" y1="2" x2="12" y2="22" />

		{/* Center horizontal line */}
		<line x1="2" y1="12" x2="22" y2="12" />

		{/* Diagonal lines */}
		<line x1="5" y1="5" x2="19" y2="19" />
		<line x1="19" y1="5" x2="5" y2="19" />

		{/* Top branches */}
		<line x1="12" y1="2" x2="9" y2="5" />
		<line x1="12" y1="2" x2="15" y2="5" />
		<line x1="12" y1="4" x2="10" y2="6" />
		<line x1="12" y1="4" x2="14" y2="6" />

		{/* Bottom branches */}
		<line x1="12" y1="22" x2="9" y2="19" />
		<line x1="12" y1="22" x2="15" y2="19" />
		<line x1="12" y1="20" x2="10" y2="18" />
		<line x1="12" y1="20" x2="14" y2="18" />

		{/* Left branches */}
		<line x1="2" y1="12" x2="5" y2="9" />
		<line x1="2" y1="12" x2="5" y2="15" />
		<line x1="4" y1="12" x2="6" y2="10" />
		<line x1="4" y1="12" x2="6" y2="14" />

		{/* Right branches */}
		<line x1="22" y1="12" x2="19" y2="9" />
		<line x1="22" y1="12" x2="19" y2="15" />
		<line x1="20" y1="12" x2="18" y2="10" />
		<line x1="20" y1="12" x2="18" y2="14" />

		{/* Top-left diagonal branches */}
		<line x1="5" y1="5" x2="5" y2="8" />
		<line x1="5" y1="5" x2="8" y2="5" />
		<line x1="6" y1="6" x2="6" y2="8.5" />
		<line x1="6" y1="6" x2="8.5" y2="6" />

		{/* Top-right diagonal branches */}
		<line x1="19" y1="5" x2="19" y2="8" />
		<line x1="19" y1="5" x2="16" y2="5" />
		<line x1="18" y1="6" x2="18" y2="8.5" />
		<line x1="18" y1="6" x2="15.5" y2="6" />

		{/* Bottom-left diagonal branches */}
		<line x1="5" y1="19" x2="5" y2="16" />
		<line x1="5" y1="19" x2="8" y2="19" />
		<line x1="6" y1="18" x2="6" y2="15.5" />
		<line x1="6" y1="18" x2="8.5" y2="18" />

		{/* Bottom-right diagonal branches */}
		<line x1="19" y1="19" x2="19" y2="16" />
		<line x1="19" y1="19" x2="16" y2="19" />
		<line x1="18" y1="18" x2="18" y2="15.5" />
		<line x1="18" y1="18" x2="15.5" y2="18" />

		{/* Mid-line decorations */}
		<line x1="12" y1="8" x2="11" y2="9" />
		<line x1="12" y1="8" x2="13" y2="9" />
		<line x1="12" y1="16" x2="11" y2="15" />
		<line x1="12" y1="16" x2="13" y2="15" />
		<line x1="8" y1="12" x2="9" y2="11" />
		<line x1="8" y1="12" x2="9" y2="13" />
		<line x1="16" y1="12" x2="15" y2="11" />
		<line x1="16" y1="12" x2="15" y2="13" />
	</g>,

	<g key="2" stroke="#D5E3EB" strokeWidth="0.5" strokeLinecap="round">
		{/* Main 6 lines from center */}
		<line x1="12" y1="3" x2="12" y2="21" />
		<line x1="3" y1="12" x2="21" y2="12" />
		<line x1="6" y1="6" x2="18" y2="18" />
		<line x1="18" y1="6" x2="6" y2="18" />
		<line x1="4.5" y1="12" x2="19.5" y2="12" />
		<line x1="12" y1="4.5" x2="12" y2="19.5" />

		{/* V-shaped branches on vertical line */}
		<line x1="12" y1="5" x2="10" y2="7" />
		<line x1="12" y1="5" x2="14" y2="7" />
		<line x1="12" y1="7" x2="10.5" y2="9" />
		<line x1="12" y1="7" x2="13.5" y2="9" />
		<line x1="12" y1="19" x2="10" y2="17" />
		<line x1="12" y1="19" x2="14" y2="17" />
		<line x1="12" y1="17" x2="10.5" y2="15" />
		<line x1="12" y1="17" x2="13.5" y2="15" />

		{/* V-shaped branches on horizontal line */}
		<line x1="5" y1="12" x2="7" y2="10" />
		<line x1="5" y1="12" x2="7" y2="14" />
		<line x1="7" y1="12" x2="9" y2="10.5" />
		<line x1="7" y1="12" x2="9" y2="13.5" />
		<line x1="19" y1="12" x2="17" y2="10" />
		<line x1="19" y1="12" x2="17" y2="14" />
		<line x1="17" y1="12" x2="15" y2="10.5" />
		<line x1="17" y1="12" x2="15" y2="13.5" />

		{/* Diagonal arm branches */}
		<line x1="8" y1="8" x2="7" y2="9.5" />
		<line x1="8" y1="8" x2="9.5" y2="7" />
		<line x1="16" y1="16" x2="14.5" y2="17" />
		<line x1="16" y1="16" x2="17" y2="14.5" />
		<line x1="16" y1="8" x2="14.5" y2="7" />
		<line x1="16" y1="8" x2="17" y2="9.5" />
		<line x1="8" y1="16" x2="7" y2="14.5" />
		<line x1="8" y1="16" x2="9.5" y2="17" />

		{/* Small details */}
		<circle cx="12" cy="3" r="0.8" fill="#D5E3EB" />
		<circle cx="12" cy="21" r="0.8" fill="#D5E3EB" />
		<circle cx="3" cy="12" r="0.8" fill="#D5E3EB" />
		<circle cx="21" cy="12" r="0.8" fill="#D5E3EB" />
		<circle cx="6" cy="6" r="0.6" fill="#D5E3EB" />
		<circle cx="18" cy="18" r="0.6" fill="#D5E3EB" />
		<circle cx="18" cy="6" r="0.6" fill="#D5E3EB" />
		<circle cx="6" cy="18" r="0.6" fill="#D5E3EB" />
	</g>,

	<g key="3" stroke="#D5E3EB" strokeWidth="0.5" strokeLinecap="round">
		{/* Eight main arms */}
		<line x1="12" y1="12" x2="12" y2="2" />
		<line x1="12" y1="12" x2="12" y2="22" />
		<line x1="12" y1="12" x2="2" y2="12" />
		<line x1="12" y1="12" x2="22" y2="12" />
		<line x1="12" y1="12" x2="5" y2="5" />
		<line x1="12" y1="12" x2="19" y2="19" />
		<line x1="12" y1="12" x2="19" y2="5" />
		<line x1="12" y1="12" x2="5" y2="19" />

		{/* Triple branches on each cardinal arm */}
		<line x1="12" y1="4" x2="10" y2="5.5" />
		<line x1="12" y1="4" x2="14" y2="5.5" />
		<line x1="12" y1="5" x2="10.5" y2="6.5" />
		<line x1="12" y1="5" x2="13.5" y2="6.5" />
		<line x1="12" y1="6.5" x2="11" y2="8" />
		<line x1="12" y1="6.5" x2="13" y2="8" />

		<line x1="12" y1="20" x2="10" y2="18.5" />
		<line x1="12" y1="20" x2="14" y2="18.5" />
		<line x1="12" y1="19" x2="10.5" y2="17.5" />
		<line x1="12" y1="19" x2="13.5" y2="17.5" />
		<line x1="12" y1="17.5" x2="11" y2="16" />
		<line x1="12" y1="17.5" x2="13" y2="16" />

		<line x1="4" y1="12" x2="5.5" y2="10" />
		<line x1="4" y1="12" x2="5.5" y2="14" />
		<line x1="5" y1="12" x2="6.5" y2="10.5" />
		<line x1="5" y1="12" x2="6.5" y2="13.5" />
		<line x1="6.5" y1="12" x2="8" y2="11" />
		<line x1="6.5" y1="12" x2="8" y2="13" />

		<line x1="20" y1="12" x2="18.5" y2="10" />
		<line x1="20" y1="12" x2="18.5" y2="14" />
		<line x1="19" y1="12" x2="17.5" y2="10.5" />
		<line x1="19" y1="12" x2="17.5" y2="13.5" />
		<line x1="17.5" y1="12" x2="16" y2="11" />
		<line x1="17.5" y1="12" x2="16" y2="13" />

		{/* Diagonal arm branches */}
		<line x1="7" y1="7" x2="6" y2="8.5" />
		<line x1="7" y1="7" x2="8.5" y2="6" />
		<line x1="17" y1="17" x2="15.5" y2="18" />
		<line x1="17" y1="17" x2="18" y2="15.5" />
		<line x1="17" y1="7" x2="15.5" y2="6" />
		<line x1="17" y1="7" x2="18" y2="8.5" />
		<line x1="7" y1="17" x2="6" y2="15.5" />
		<line x1="7" y1="17" x2="8.5" y2="18" />

		{/* Center hexagon */}
		<circle cx="12" cy="12" r="2.5" fill="none" />
		<circle cx="12" cy="12" r="1.5" fill="none" />
		<circle cx="12" cy="12" r="0.7" fill="#D5E3EB" />
	</g>,

	<g key="4" stroke="#D5E3EB" strokeWidth="0.5" strokeLinecap="round">
		{/* Star-like pattern with 12 main arms */}
		<line x1="12" y1="2" x2="12" y2="10" />
		<line x1="12" y1="14" x2="12" y2="22" />
		<line x1="2" y1="12" x2="10" y2="12" />
		<line x1="14" y1="12" x2="22" y2="12" />
		<line x1="5" y1="5" x2="10.5" y2="10.5" />
		<line x1="13.5" y1="13.5" x2="19" y2="19" />
		<line x1="19" y1="5" x2="13.5" y2="10.5" />
		<line x1="10.5" y1="13.5" x2="5" y2="19" />

		{/* Secondary shorter arms */}
		<line x1="12" y1="6" x2="12" y2="10" />
		<line x1="12" y1="14" x2="12" y2="18" />
		<line x1="6" y1="12" x2="10" y2="12" />
		<line x1="14" y1="12" x2="18" y2="12" />

		{/* Complex branches on main arms */}
		<line x1="12" y1="3" x2="10" y2="5" />
		<line x1="12" y1="3" x2="14" y2="5" />
		<line x1="12" y1="4" x2="10.5" y2="5.5" />
		<line x1="12" y1="4" x2="13.5" y2="5.5" />
		<line x1="12" y1="5" x2="11" y2="6.5" />
		<line x1="12" y1="5" x2="13" y2="6.5" />
		<line x1="12" y1="6" x2="11" y2="7" />
		<line x1="12" y1="6" x2="13" y2="7" />

		<line x1="12" y1="21" x2="10" y2="19" />
		<line x1="12" y1="21" x2="14" y2="19" />
		<line x1="12" y1="20" x2="10.5" y2="18.5" />
		<line x1="12" y1="20" x2="13.5" y2="18.5" />
		<line x1="12" y1="19" x2="11" y2="17.5" />
		<line x1="12" y1="19" x2="13" y2="17.5" />
		<line x1="12" y1="18" x2="11" y2="17" />
		<line x1="12" y1="18" x2="13" y2="17" />

		<line x1="3" y1="12" x2="5" y2="10" />
		<line x1="3" y1="12" x2="5" y2="14" />
		<line x1="4" y1="12" x2="5.5" y2="10.5" />
		<line x1="4" y1="12" x2="5.5" y2="13.5" />
		<line x1="5" y1="12" x2="6.5" y2="11" />
		<line x1="5" y1="12" x2="6.5" y2="13" />

		<line x1="21" y1="12" x2="19" y2="10" />
		<line x1="21" y1="12" x2="19" y2="14" />
		<line x1="20" y1="12" x2="18.5" y2="10.5" />
		<line x1="20" y1="12" x2="18.5" y2="13.5" />
		<line x1="19" y1="12" x2="17.5" y2="11" />
		<line x1="19" y1="12" x2="17.5" y2="13" />

		{/* Diagonal details */}
		<line x1="6.5" y1="6.5" x2="7.5" y2="8" />
		<line x1="6.5" y1="6.5" x2="8" y2="7.5" />
		<line x1="17.5" y1="17.5" x2="16" y2="16.5" />
		<line x1="17.5" y1="17.5" x2="16.5" y2="16" />
		<line x1="17.5" y1="6.5" x2="16" y2="7.5" />
		<line x1="17.5" y1="6.5" x2="16.5" y2="8" />
		<line x1="6.5" y1="17.5" x2="7.5" y2="16" />
		<line x1="6.5" y1="17.5" x2="8" y2="16.5" />

		{/* Inner star */}
		<circle cx="12" cy="12" r="2" fill="none" />
	</g>,

	<g key="5" stroke="#D5E3EB" strokeWidth="0.5" strokeLinecap="round">
		{/* Delicate pattern with intricate details */}
		<line x1="12" y1="3" x2="12" y2="21" />
		<line x1="3" y1="12" x2="21" y2="12" />
		<line x1="5.5" y1="5.5" x2="18.5" y2="18.5" />
		<line x1="18.5" y1="5.5" x2="5.5" y2="18.5" />

		{/* Secondary cross */}
		<line x1="12" y1="6" x2="12" y2="18" />
		<line x1="6" y1="12" x2="18" y2="12" />
		<line x1="7.5" y1="7.5" x2="16.5" y2="16.5" />
		<line x1="16.5" y1="7.5" x2="7.5" y2="16.5" />

		{/* Complex Y-shaped branches */}
		<line x1="12" y1="5" x2="10" y2="7" />
		<line x1="12" y1="5" x2="14" y2="7" />
		<line x1="12" y1="6" x2="10.5" y2="8" />
		<line x1="12" y1="6" x2="13.5" y2="8" />
		<line x1="12" y1="19" x2="10" y2="17" />
		<line x1="12" y1="19" x2="14" y2="17" />
		<line x1="12" y1="18" x2="10.5" y2="16" />
		<line x1="12" y1="18" x2="13.5" y2="16" />

		<line x1="5" y1="12" x2="7" y2="10" />
		<line x1="5" y1="12" x2="7" y2="14" />
		<line x1="6" y1="12" x2="8" y2="10.5" />
		<line x1="6" y1="12" x2="8" y2="13.5" />
		<line x1="19" y1="12" x2="17" y2="10" />
		<line x1="19" y1="12" x2="17" y2="14" />
		<line x1="18" y1="12" x2="16" y2="10.5" />
		<line x1="18" y1="12" x2="16" y2="13.5" />

		{/* Diagonal intricate branches */}
		<line x1="6.5" y1="6.5" x2="7.5" y2="8.5" />
		<line x1="6.5" y1="6.5" x2="8.5" y2="7.5" />
		<line x1="7.5" y1="7.5" x2="8.5" y2="9.5" />
		<line x1="7.5" y1="7.5" x2="9.5" y2="8.5" />

		<line x1="17.5" y1="17.5" x2="16.5" y2="15.5" />
		<line x1="17.5" y1="17.5" x2="15.5" y2="16.5" />
		<line x1="16.5" y1="16.5" x2="15.5" y2="14.5" />
		<line x1="16.5" y1="16.5" x2="14.5" y2="15.5" />

		<line x1="17.5" y1="6.5" x2="16.5" y2="8.5" />
		<line x1="17.5" y1="6.5" x2="15.5" y2="7.5" />
		<line x1="16.5" y1="7.5" x2="15.5" y2="9.5" />
		<line x1="16.5" y1="7.5" x2="14.5" y2="8.5" />

		<line x1="6.5" y1="17.5" x2="7.5" y2="15.5" />
		<line x1="6.5" y1="17.5" x2="8.5" y2="16.5" />
		<line x1="7.5" y1="16.5" x2="8.5" y2="14.5" />
		<line x1="7.5" y1="16.5" x2="9.5" y2="15.5" />

		{/* Mid-section details */}
		<line x1="12" y1="10" x2="11" y2="11" />
		<line x1="12" y1="10" x2="13" y2="11" />
		<line x1="12" y1="14" x2="11" y2="13" />
		<line x1="12" y1="14" x2="13" y2="13" />
		<line x1="10" y1="12" x2="11" y2="11" />
		<line x1="10" y1="12" x2="11" y2="13" />
		<line x1="14" y1="12" x2="13" y2="11" />
		<line x1="14" y1="12" x2="13" y2="13" />

		{/* Decorative dots and circles */}
		<circle cx="12" cy="12" r="1.8" fill="none" />
		<circle cx="12" cy="12" r="0.9" fill="none" />
		<circle cx="12" cy="12" r="0.5" fill="#D5E3EB" />
		<circle cx="12" cy="3" r="0.6" fill="#D5E3EB" />
		<circle cx="12" cy="21" r="0.6" fill="#D5E3EB" />
		<circle cx="3" cy="12" r="0.6" fill="#D5E3EB" />
		<circle cx="21" cy="12" r="0.6" fill="#D5E3EB" />
	</g>,
];

interface SnowflakeProps {
	size: number;
	variant?: number;
}

const VALID_VARIANT_RANGE = { min: 1, max: 5 } as const;

export function Snowflake({ size, variant = 1 }: SnowflakeProps) {
	// Input validation: bounds check variant prop (1-5) with fallback to variant 1
	const validatedVariant =
		typeof variant === "number" &&
		variant >= VALID_VARIANT_RANGE.min &&
		variant <= VALID_VARIANT_RANGE.max
			? variant
			: VALID_VARIANT_RANGE.min;

	const renderSnowflake = () => {
		return snowflakeVariants[validatedVariant - 1] ?? null;
	};

	return (
		<svg
			aria-hidden="true"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{renderSnowflake()}
		</svg>
	);
}
