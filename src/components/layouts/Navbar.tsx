"use client";

import ExchangesMenubar from "@/app/_components/exchange-menu";
import { appLinks, mobileNavLinks, navLinks } from "@/data/Nav";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isLaunchAppOpen, setIsLaunchAppOpen] = useState(false);

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
				"fixed top-0 left-0 right-0 w-full mx-auto max-w-[1440px] z-50 transition-all duration-300 text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent backdrop-blur-md",
				isScrolled
					? "bg-black/40 backdrop-blur-md max-w-5xl mt-0 md:mt-2 lg:mt-5 md:rounded-full"
					: "bg-transparent",
			)}
		>
			<header className={cn("flex flex-col z-50 lg:px-4 p-3")}>
				<div
					className={cn(
						"flex justify-between items-center w-full transition-all duration-300",
					)}
				>
					<motion.div
						className={cn(
							"flex gap-2 items-center text-lg font-medium transition-all duration-300 w-fit",
						)}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
					>
						<Link href="/" className="w-fit">
							<Image
								src="/svgs/Braindao-logo.svg"
								alt="BrainDAO Logo"
								width={144}
								height={144}
							/>
						</Link>
					</motion.div>

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
						)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, delay: 0.3 }}
					>
						<div className="hidden lg:flex gap-2 items-center">
							<ExchangesMenubar />
							<Popover open={isLaunchAppOpen} onOpenChange={setIsLaunchAppOpen}>
								<PopoverTrigger asChild>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											type="button"
											size="lg"
											className="text-xs md:text-sm"
										>
											<span>Launch App </span>
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
												onClick={() => setIsLaunchAppOpen(false)}
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

						<div className="lg:hidden flex gap-2 items-center">
							<ExchangesMenubar />
							<Popover
								open={isMobileMenuOpen}
								onOpenChange={setIsMobileMenuOpen}
							>
								<PopoverTrigger asChild>
									<motion.div whileTap={{ scale: 0.95 }}>
										<Button
											type="button"
											size="lg"
											className="rounded-full border border-white/20 bg-transparent hover:bg-white/10 p-3"
										>
											<RiMenu3Line className="h-10 w-10" />
										</Button>
									</motion.div>
								</PopoverTrigger>

								<PopoverContent
									className="w-64 p-6 bg-black border-neutral-700 rounded-xl"
									align="end"
									sideOffset={10}
								>
									<div className="space-y-2">
										{mobileNavLinks.map((link, index) => (
											<motion.a
												key={link.href}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm py-2"
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
								</PopoverContent>
							</Popover>
						</div>
					</motion.div>
				</div>
			</header>
		</motion.div>
	);
};

export default Navbar;
