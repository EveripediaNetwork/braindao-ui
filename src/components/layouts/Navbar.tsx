"use client";

import { raleway } from "@/app/font";
import { appLinks, navLinks } from "@/data/Nav";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { BraindaoLogoDark } from "../svgs/BraindaoLogoDark";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import NavBarButton from "./NavBarButton";
import MobileThemeSwitcher from "./theme/MobileThemeSwitcher";

const Navbar = () => {
	return (
		<div className="bg-transparent text-white">
			<div className="max-w-[1536px] mx-auto">
				<header className=" flex flex-col z-50 lg:-mx-7 lg:px-14 p-3">
					<div className="flex justify-between items-center w-full">
						<h1 className="flex gap-2 items-center text-lg font-medium">
							<a href="/">
								<BraindaoLogoDark />
							</a>
						</h1>
						<nav className="hidden lg:flex gap-8 xl:gap-6 text-sm lg:text-base">
							{navLinks.map((link) => (
								<a
									target={link.target}
									href={link.href}
									key={link.href}
									className="hover:text-primary transition-colors duration-200"
								>
									{link.title}
								</a>
							))}
						</nav>
						<div className="flex gap-2 items-center">
							<div className="hidden lg:block">
								<Popover>
									<PopoverTrigger asChild>
										<Button
											type="button"
											size="sm"
											className="text-xs md:text-sm"
										>
											<span>Launch App</span>
											<ChevronDown className="h-4 w-4" />
										</Button>
									</PopoverTrigger>
									<PopoverContent
										className="w-44 px-4 bg-black border-border rounded-2xl"
										align="start"
										sideOffset={10}
										alignOffset={-40}
									>
										<div className="space-y-2">
											{appLinks.map((link) => (
												<a
													key={link.href}
													href={link.href}
													target="_blank"
													rel="noopener noreferrer"
													className="w-full h-8 transition-colors cursor-pointer flex items-center justify-start group"
												>
													<span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
														{link.title}
													</span>
												</a>
											))}
										</div>
									</PopoverContent>
								</Popover>
							</div>
							<NavBarButton />
						</div>
					</div>
					<div
						id="mobile_nav_items"
						className="hidden fixed left-0 dark:bg-gray800 bg-[#F9FAFB] w-full top-0 h-screen sm:h-[80vh] z-10"
					>
						<ul className="flex flex-col divide-y-[1px] text-muted-foreground w-full dark:divide-whiteAlpha-200">
							<div className="flex justify-between sm:px-3 py-2">
								<div className="px-2 py-2">
									<a href="/">
										<BraindaoLogoDark />
									</a>
								</div>

								<button
									type="button"
									className="text-whiteAlpha-900 px-5 py-2"
									onClick={() => {
										const mobileNav = document.getElementById(
											"mobile_nav_items",
										) as HTMLDivElement;
										mobileNav.classList.toggle("hidden");
									}}
								>
									<RiCloseFill size={24} className="text-gray600 " />
								</button>
							</div>
							<div className="flex flex-col text-sm sm:text-base px-5">
								{navLinks.map((link) => (
									<li key={link.href} className="sm:px-3 py-4">
										<a
											target={link.target}
											href={link.href}
											className="hover:text-primary transition-colors duration-200"
										>
											{link.title}
										</a>
									</li>
								))}
							</div>
							<MobileThemeSwitcher />
							<li className="pt-3 px-5 md:hidden">
								<a
									href="https://iq.iqai.com"
									target="_blank"
									className={`flex flex-1 justify-center text-whiteAlpha-900 dark:bg-brand-800 bg-brand-500 hover:bg-brand-700 md:w-[184px] text-sm lg:text-base px-5 py-2 rounded-md transition-all ease-in-out duration-300 ${raleway.className}`}
									rel="noreferrer"
								>
									<span>Launch Dashboard</span>
								</a>
							</li>
						</ul>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Navbar;
