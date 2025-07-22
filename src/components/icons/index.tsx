export interface IconProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
	iconTitle?: string;
}

export const Icon: React.FC<IconProps> = ({
	children,
	size = 32,
	iconTitle = "Icon",
	...props
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 32 32"
		fill="none"
		{...props}
	>
		<title>{iconTitle}</title>
		{children}
	</svg>
);
