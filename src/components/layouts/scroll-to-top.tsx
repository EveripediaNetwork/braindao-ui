"use client";

import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTopButton = ({ label }: { label: string }) => {
	return (
		<button
			type="button"
			className="text-primary self-start sm:self-center"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			title={label}
			aria-label={label}
		>
			<RiArrowUpLine className="w-6 h-6" />
		</button>
	);
};

export default ScrollToTopButton;
