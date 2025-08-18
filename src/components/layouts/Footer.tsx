"use client";

import React from "react";
import { RiArrowUpLine } from "react-icons/ri";

const Footer = () => {
	const products = [
		{ name: "IQ AI", href: "https://iqai.com/" },
		{ name: "IQ.wiki", href: "https://iq.wiki/" },
		{ name: "Sophia", href: "https://sophia.iqai.com/" },
		{ name: "AIDEN", href: "https://aiden.id/" },
		{ name: "IQ Dashboard", href: "https://iq.iqai.com/dashboard" },
		{ name: "IQ Blog", href: "https://blog.iqai.com/" },
	];
	const socialLinks = [
		{ name: "Twitter", href: "https://twitter.com/IQWIKI" },
		{ name: "Discord", href: "https://discord.com/invite/x9EWvTcPXt" },
		{ name: "Telegram", href: "https://t.me/everipedia" },
	];

	return (
		<footer className="bg-neutral-950 mt-12 lg:mt-48 shadow-custom">
			<div className="xl:container xl:mx-auto px-4 md:px-10 xl:px-4 flex flex-col gap-6 py-12">
				<div className="flex flex-col lg:flex-row gap-6 w-full">
					<div className="flex flex-row w-full gap-6 md:gap-40 lg:gap-24 items-start">
						<div className="text-muted-foreground">
							<h2 className="text-sm font-bold mb-3 font-satoshi">
								Subscribe to our newsletter
							</h2>
							<p className="text-xs">
								Never miss any of the most popular and trending articles when
								you sign up to our email newsletter.
							</p>
						</div>
						<button
							type="button"
							className="bg-primary hover:bg-primary/50 text-white px-4 sm:px-8 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap self-center lg:mb-10"
						>
							Subscribe
						</button>
					</div>
					<div className="flex flex-row w-full justify-between text-sm gap-8 lg:gap-0">
						<div>
							<h3 className="font-bold mb-4 text-muted-foreground text-sm">
								For business Inquiries
							</h3>
							<div className="space-y-2">
								<p className="text-primary font-medium">Contact us</p>
								<a
									className="text-muted-foreground hover:underline"
									href="mailto:tara@iq.wiki"
								>
									tara@iq.wiki
								</a>
							</div>
						</div>
						<div>
							<h3 className="font-bold mb-4 text-muted-foreground font-satoshi">
								Follow us
							</h3>
							<div className="space-y-2 flex flex-col text-left text-foreground hover:text-white transition-colors">
								{socialLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										{link.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-6 w-full">
					<div className="flex flex-col gap-6 w-full">
						<h2 className="text-sm font-bold mb-0 font-satoshi text-white">
							Company
						</h2>
						<div className="flex flex-row items-center gap-x-6 sm:gap-x-4 md:gap-x-6 lg:gap-x-5 gap-y-2 flex-wrap xl:max-w-[420px]">
							{products.map((link, linkIndex) => (
								<React.Fragment key={link.name}>
									<a
										href={link.href}
										className="block text-white hover:text-gray-300 transition-colors text-sm sm:text-lg lg:text-2xl font-light whitespace-nowrap flex-shrink-0 relative overflow-hidden group"
									>
										<span className="relative z-10">{link.name}</span>
										<div className="absolute bottom-0 left-0 w-full h-0 bg-[#FF5CAA66] transition-all duration-300 ease-out group-hover:h-[50%]" />
									</a>
									{linkIndex < products.length - 1 &&
										(linkIndex + 1) % 3 !== 0 && (
											<div className="h-8 border-[0.5px] border-neutral-700 rotate-45 transform" />
										)}
									{(linkIndex + 1) % 3 === 0 && (
										<div className="hidden lg:block w-full" />
									)}
								</React.Fragment>
							))}
						</div>
					</div>
					<div className="flex flex-row items-start sm:items-center text-muted-foreground gap-20 sm:gap-60 w-full">
						<span className="flex-1 text-xs sm:text-sm">
							BrainDAO is creating an intelligent future as the governing DAO
							behind the IQ ecosystem, supported by
							<a
								href="https://www.brainfund.com/"
								target="_blank"
								rel="nopener noreferrer"
								className="text-primary hover:underline ml-1"
							>
								Brainfund.
							</a>
						</span>
						<button
							type="button"
							className="text-primary self-start sm:self-center"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							title="Scroll to top"
							aria-label="Scroll to top"
						>
							<RiArrowUpLine className="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>

			<div className="bg-neutral-900">
				<div className="flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-between py-4 xl:container xl:mx-auto text-sm text-[#F3F4F6] px-4 md:px-10 xl:px-4 w-full">
					<span>
						© {new Date().getFullYear()} — Powered by IQ and BrainDAO.
					</span>
					<div className="flex flex-row items-center justify-between sm:w-[50%] gap-9 sm:gap-0">
						<a
							href="https://iq.wiki/privacy"
							target="_blank"
							rel="nopener noreferrer"
							className="hover:text-primary transition-colors"
						>
							Privacy & Cookies policy
						</a>
						<span>All rights reserved</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
