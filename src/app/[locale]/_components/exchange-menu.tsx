"use client";

import { centralizedExchanges, decentralizedExchanges } from "@/data/exchanges";
import * as Popover from "@radix-ui/react-popover";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function GetIQModalContent() {
	const t = useTranslations("navbar.exchanges");

	return (
		<div className="space-y-3 w-full max-w-full">
			<div className="flex items-center justify-between w-full">
				<h3 className="text-base font-semibold text-muted-foreground">
					{t("title")}
				</h3>
				<Popover.Close asChild>
					<button
						type="button"
						className="p-1 rounded-full hover:bg-neutral-700 transition-colors flex items-center justify-center"
						aria-label={t("closeAria")}
					>
						<IoClose className="w-5 h-5 text-foreground" />
					</button>
				</Popover.Close>
			</div>

			<p className="text-muted-foreground text-sm font-medium w-full text-center sm:text-left">
				{t("description")}
			</p>

			<div className="border-t border-neutral-700 w-full" />

			<div className="grid md:grid-cols-2 gap-6">
				<div className="flex flex-col">
					<h4 className="font-semibold mb-3 text-sm text-muted-foreground">
						{t("centralized")}
					</h4>
					<div className="space-y-2 flex-1">
						{centralizedExchanges.map((exchange) => {
							const LogoComponent = exchange.logo;
							return (
								<div
									key={exchange.name}
									className="border border-neutral-700 rounded-xl overflow-hidden"
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
								</div>
							);
						})}
					</div>

					<div className="text-center pt-6 mt-auto">
						<Link
							href="https://iq.iqai.com/dashboard/swap"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 justify-center text-muted-foreground hover:text-muted-foreground hover:underline transition-colors text-sm"
						>
							<span className="text-muted-foreground text-sm hover:underline">
								{t("seeMore")}
							</span>
							<FaArrowUpRightFromSquare className="w-5 h-5 text-muted-foreground" />
						</Link>
					</div>
				</div>

				<div className="md:border-l md:border-neutral-700 md:pl-6">
					<h4 className="font-semibold mb-3 text-sm text-muted-foreground">
						{t("decentralized")}
					</h4>
					<div className="space-y-2">
						{decentralizedExchanges.map((exchange) => {
							const LogoComponent = exchange.logo;
							return (
								<div
									key={exchange.name}
									className="border border-neutral-700 rounded-xl overflow-hidden"
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
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

const ExchangesMenubar = () => {
	return (
		<div className="flex items-center justify-center">
			<Popover.Root>
				<Popover.Trigger
					asChild
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
				</Popover.Trigger>

				<Popover.Portal>
					<Popover.Content
						align="center"
						side="bottom"
						sideOffset={20}
						alignOffset={0}
						className="z-50 w-[calc(100vw-2rem)] max-w-[600px] lg:w-[600px] rounded-xl bg-neutral-900 shadow-lg border border-neutral-700"
					>
						<div className="px-4 lg:px-6 py-6 flex flex-col items-center justify-center">
							<GetIQModalContent />
						</div>
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	);
};

export default ExchangesMenubar;
