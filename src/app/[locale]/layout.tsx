import "../globals.css";
import ClientProviders from "@/components/layouts/ClientProviders";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ThemeWinterSnow from "@/components/themes/theme-winter-snow";
import { Theme, isTheme } from "@/lib/helpers/theme";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ibmPlexMono, montserrat, satoshi } from "../font";

export const metadata: Metadata = {
	title: "BrainDAO - Building a more intelligent future through the IQ token.",
	description:
		"Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.",
	metadataBase: new URL("https://braindao.org"),
	openGraph: {
		title:
			"BrainDAO - Building a more intelligent future through the IQ token.",
		url: "https://braindao.org",
		type: "website",
		description:
			"Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.",
		images: [
			{
				url: "https://braindao.org/images/og-image.png",
				alt: "BrainDAO - Building a more intelligent future through the IQ token.",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"BrainDAO - Building a more intelligent future through the IQ token.",
		description:
			"Join our mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem.",
		images: ["https://braindao.org/images/og-image.png"],
		site: "@Everipedia",
		creator: "@Everipedia",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

	const isChristmasTheme = isTheme(Theme.enum.christmas);

	return (
		<html
			lang={locale}
			className={`${montserrat.className} ${ibmPlexMono.variable} ${satoshi.variable}`}
		>
			<head>
				<link rel="canonical" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
			</head>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ClientProviders>
						<div>
							<Navbar isChristmasTheme={isChristmasTheme} />
							{children}
							{isChristmasTheme && <ThemeWinterSnow />}
							<Footer />
						</div>
					</ClientProviders>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
