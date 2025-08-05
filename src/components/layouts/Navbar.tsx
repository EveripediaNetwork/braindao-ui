"use client";

import { raleway } from "@/app/font";
import { appLinks, navLinks } from "@/data/Nav";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { BraindaoLogoDark } from "../svgs/BraindaoLogoDark";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import NavBarButton from "./NavBarButton";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<motion.div
			className={cn(
				"fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent backdrop-blur-md",
				isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent",
			)}
		>
			<div className="max-w-[1536px] mx-auto">
				<header
					className={cn(
						"flex flex-col z-50 lg:-mx-7 lg:px-14 p-3",
						isScrolled && "lg:py-2 transition-all duration-300 ease-in-out",
					)}
				>
					<div
						className={cn(
							"flex justify-between items-center w-full transition-all duration-300",
							isScrolled ? "lg:justify-center lg:gap-16" : "",
						)}
					>
						<motion.h1
							className={cn(
								"flex gap-2 items-center text-lg font-medium transition-all duration-300",
								isScrolled && "lg:translate-x-8",
							)}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
						>
							<a href="/">
								<BraindaoLogoDark />
							</a>
						</motion.h1>
						<motion.nav
							initial="hidden"
							animate="visible"
							className="hidden lg:flex gap-8 xl:gap-6 text-sm lg:text-base"
						>
							{navLinks.map((link, index) => (
								<motion.a
									target={link.target}
									href={link.href}
									key={link.href}
									className="hover:text-primary transition-colors duration-200"
									variants={{
										hidden: { opacity: 0, x: -20 },
										visible: {
											opacity: 1,
											x: 0,
											transition: {
												delay: index * 0.1,
												duration: 0.3,
											},
										},
									}}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{link.title}
								</motion.a>
							))}
						</motion.nav>
						<motion.div
							className={cn(
								"flex gap-2 items-center transition-all duration-300",
								isScrolled && "lg:-translate-x-8",
							)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.3 }}
						>
							<div className="hidden lg:block">
								<Popover>
									<PopoverTrigger asChild>
										<motion.div
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button
												type="button"
												size="sm"
												className="text-xs md:text-sm"
											>
												<span>Launch App</span>
												<ChevronDown className="h-4 w-4" />
											</Button>
										</motion.div>
									</PopoverTrigger>
									<PopoverContent
										className="w-44 px-4 bg-black border-border rounded-xl"
										align="start"
										sideOffset={10}
										alignOffset={-40}
									>
										<div className="space-y-2">
											{appLinks.map((link) => (
												<motion.a
													key={link.href}
													href={link.href}
													target="_blank"
													rel="noopener noreferrer"
													className="w-full h-8 transition-colors cursor-pointer flex items-center justify-start group"
													whileHover={{ x: 3 }}
												>
													<span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
														{link.title}
													</span>
												</motion.a>
											))}
										</div>
									</PopoverContent>
								</Popover>
							</div>
							<NavBarButton />
						</motion.div>
					</div>

					<div
						id="mobile_nav_items"
						className="hidden fixed left-0 bg-black w-full top-0 h-screen sm:h-[80vh] z-10"
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
							<li className="pt-3 px-5 md:hidden">
								<a
									href="https://iq.iqai.com"
									target="_blank"
									className={cn(
										"flex flex-1 justify-center text-whiteAlpha-900 dark:bg-brand-800 bg-brand-500 hover:bg-brand-700 md:w-[184px] text-sm lg:text-base px-5 py-2 rounded-md transition-all ease-in-out duration-300",
										raleway.className,
									)}
									rel="noreferrer"
								>
									<span>Launch Dashboard</span>
								</a>
							</li>
						</ul>
					</div>
				</header>
			</div>
		</motion.div>
	);
};

export default Navbar;
