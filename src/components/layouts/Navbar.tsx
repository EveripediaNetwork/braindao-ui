"use client";

import { appLinks, mobileNavLinks, navLinks } from "@/data/Nav";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BraindaoLogoDark } from "../svgs/BraindaoLogoDark";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

							<div className="lg:hidden">
								<Popover
									open={isMobileMenuOpen}
									onOpenChange={setIsMobileMenuOpen}
								>
									<PopoverTrigger asChild>
										<motion.div whileTap={{ scale: 0.95 }}>
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

									<AnimatePresence>
										{isMobileMenuOpen && (
											<motion.div
												className="fixed top-[74px] right-3 bg-black border-neutral-700 rounded-b-xl rounded-t-none shadow-lg z-50"
												initial={{ x: "-100%", opacity: 0 }}
												animate={{ x: 0, opacity: 1 }}
												exit={{ x: "-100%", opacity: 0 }}
												transition={{
													type: "tween",
													ease: "easeInOut",
													duration: 0.4,
												}}
											>
												<div className="p-6 w-full h-full">
													<div className="space-y-2">
														{mobileNavLinks.map((link, index) => (
															<motion.a
																key={link.href}
																href={link.href}
																target="_blank"
																rel="noopener noreferrer"
																className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-lg py-2"
																initial={{ opacity: 0, x: -10 }}
																animate={{
																	opacity: 1,
																	x: 0,
																	transition: { delay: index * 0.05 + 0.2 },
																}}
																whileTap={{ scale: 0.95 }}
																onClick={() => setIsMobileMenuOpen(false)}
															>
																{link.title}
															</motion.a>
														))}
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</Popover>
							</div>
						</motion.div>
					</div>
				</header>
			</div>
		</motion.div>
	);
};

export default Navbar;
