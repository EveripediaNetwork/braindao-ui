"use client";

import { centralizedExchanges, decentralizedExchanges } from "@/data/exchanges";
import * as Menubar from "@radix-ui/react-menubar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function GetIQModalContent({ onClose }: { onClose?: () => void }) {
	return (
		<div className="space-y-3 w-full max-w-full">
			<div className="flex items-center justify-between w-full">
				<h3 className="text-base font-semibold text-muted-foreground">
					Get the IQ token
				</h3>
				{onClose && (
					<button
						type="button"
						onClick={onClose}
						className="p-1 rounded-full hover:bg-neutral-700 transition-colors flex items-center justify-center"
						aria-label="Close modal"
					>
						<IoClose className="w-5 h-5 text-foreground" />
					</button>
				)}
			</div>

			<p className="text-muted-foreground text-sm font-medium w-full text-center sm:text-left">
				Get involved in the IQ Ecosystem and swap the IQ token easily across
				different exchange platforms.
			</p>

			<div className="border-t border-neutral-700 w-full" />

			<div className="grid md:grid-cols-2 gap-6">
				<div className="flex flex-col">
					<h4 className="font-semibold mb-3 text-sm text-muted-foreground">
						Centralized Exchanges
					</h4>
					<div className="space-y-2 flex-1">
						{centralizedExchanges.map((exchange) => {
							const LogoComponent = exchange.logo;
							return (
								<Menubar.Item
									key={exchange.name}
									className="hover:outline-none border border-neutral-700 rounded-xl overflow-hidden"
								>
									<Link
										href={exchange.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-between p-2 hover:bg-neutral-700 transition-colors w-full"
										data-ph-capture-attribute-exchange-clicked={exchange.name.toLowerCase()}
									>
										<div className="flex items-center gap-2">
											<LogoComponent width={20} height={20} />
											<span className="text-sm font-medium text-muted-foreground">
												{exchange.name}
											</span>
										</div>
										<span className="text-[10px] text-muted-foreground">
											{exchange.pair}
										</span>
									</Link>
								</Menubar.Item>
							);
						})}
					</div>

					<div className="text-center pt-6 mt-auto">
						<Menubar.Item className="hover:outline-none">
							<Link
								href="https://iq.iqai.com/dashboard/swap"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 justify-center text-muted-foreground hover:text-muted-foreground hover:underline transition-colors text-sm"
							>
								<span className="text-muted-foreground  text-sm hover:underline">
									See more
								</span>
								<FaArrowUpRightFromSquare className="w-5 h-5 text-muted-foreground" />
							</Link>
						</Menubar.Item>
					</div>
				</div>

				<div className="md:border-l md:border-neutral-700 md:pl-6">
					<h4 className="font-semibold mb-3 text-sm text-muted-foreground">
						Decentralized Exchanges
					</h4>
					<div className="space-y-2">
						{decentralizedExchanges.map((exchange) => {
							const LogoComponent = exchange.logo;
							return (
								<Menubar.Item
									key={exchange.name}
									className="hover:outline-none border border-neutral-700 rounded-xl overflow-hidden"
								>
									<Link
										href={exchange.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-between p-2 hover:bg-neutral-700 transition-colors w-full"
										data-ph-capture-attribute-exchange-clicked={exchange.name.toLowerCase()}
									>
										<div className="flex items-center gap-2">
											<LogoComponent width={20} height={20} />
											<span className="text-sm font-medium text-muted-foreground">
												{exchange.name}
											</span>
										</div>
										<span className="text-[10px] text-muted-foreground">
											{exchange.pair}
										</span>
									</Link>
								</Menubar.Item>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
const ExchangesMenubar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClose = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className="flex items-center justify-center">
			<Menubar.Root>
				<Menubar.Menu>
					<Menubar.Trigger
						asChild
						onClick={() => setIsMenuOpen(true)}
						className="cursor-pointer border-none hover:bg-none flex items-center justify-center"
						data-ph-capture-attribute-host-info="iq_wiki"
					>
						<div className="flex items-center justify-center h-10 w-10">
							<Image
								src="/images/GetIQ.svg"
								alt="IQ Logo"
								width={40}
								height={40}
								className="object-contain"
							/>
						</div>
					</Menubar.Trigger>

					{isMenuOpen && (
						<Menubar.Portal>
							<Menubar.Content
								align="center"
								side="bottom"
								sideOffset={20}
								alignOffset={0}
								className="z-50 w-[calc(100vw-2rem)] max-w-[600px] lg:w-[600px] rounded-xl bg-neutral-900 shadow-lg border border-neutral-700"
							>
								<div className="px-4 lg:px-6 py-6 flex flex-col items-center justify-center">
									<GetIQModalContent onClose={handleMenuClose} />
								</div>
							</Menubar.Content>
						</Menubar.Portal>
					)}
				</Menubar.Menu>
			</Menubar.Root>
		</div>
	);
};
export default ExchangesMenubar;
