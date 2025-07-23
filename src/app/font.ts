import { Montserrat, Raleway, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
});

export const raleway = Raleway({
	subsets: ["latin"],
	display: "swap",
});

export const space_grotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
});

export const satoshi = localFont({
	src: [
		{
			path: "../../public/fonts/satoshi-light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/satoshi-variable.woff2",
			weight: "300 900",
			style: "normal",
		},
		{
			path: "../../public/fonts/satoshi-variable-italic.woff2",
			weight: "300 900",
			style: "italic",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});
