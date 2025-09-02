import BinanceIcon from "@/components/icons/binance";
import FraxIcon from "@/components/icons/frax";
import { IqWikiIcon } from "@/components/icons/iq-wiki";
import { OneInchIcon } from "@/components/icons/one-inch";
import UpbitIcon from "@/components/icons/upbit";
import { formatNumber } from "@/modules/helpers/numFormatter";
import { getTranslations } from "next-intl/server";
import { FaDatabase } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import type { getIqStats, getSophiaStats } from "../_actions";
import { ExchangeLink } from "./exchange-link";
import { TokenCard } from "./token-metric";

type IQStatsData = Awaited<ReturnType<typeof getIqStats>>;
type SophiaStats = Awaited<ReturnType<typeof getSophiaStats>>;

interface IQStatsProps {
	iqStatsData: IQStatsData;
	sophiaStats: SophiaStats;
}

export async function IQStats({ iqStatsData, sophiaStats }: IQStatsProps) {
	const t = await getTranslations("introduction");
	const {
		price,
		iqPriceChange,
		mcap,
		iqMCapChange,
		formattedPriceChange,
		formattedMCapChange,
	} = iqStatsData;

	const { currentPriceInUSD = 0, changeIn24h = 0 } = sophiaStats ?? {};

	return (
		<section className="relative w-full -mt-8 md:-mt-12 lg:-mt-16 py-4 md:py-6 lg:py-4">
			<div className="relative z-10 max-w-7xl mx-auto p-4">
				<div className="flex flex-col md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 text-foreground">
					<TokenCard
						title={t("stats.iq-price-title")}
						value={price}
						change={{
							iqChange: iqPriceChange,
							formattedChange: formattedPriceChange,
						}}
						icon={<IqWikiIcon className="w-6 h-6" aria-hidden="true" />}
						link="https://iq.iqai.com/dashboard"
						errorMessage={t("stats.errors.iq-price")}
					/>

					<TokenCard
						title={t("stats.sophia-price-title")}
						value={formatNumber(currentPriceInUSD, { maxDecimals: 3 })}
						change={{
							iqChange: changeIn24h,
							formattedChange: formatNumber(changeIn24h, {
								signed: true,
								minDecimals: 2,
								maxDecimals: 2,
							}),
						}}
						icon={
							<FaDatabase
								size="1.5em"
								className="text-primary"
								aria-hidden="true"
							/>
						}
						link="https://iq.iqai.com/dashboard"
						errorMessage={t("stats.errors.sophia-price")}
					/>

					<TokenCard
						title={t("stats.market-cap-title")}
						value={mcap}
						change={{
							iqChange: iqMCapChange ?? null,
							formattedChange: formattedMCapChange ?? null,
						}}
						icon={
							<RiGlobalLine
								size="1.5em"
								className="text-primary"
								aria-hidden="true"
							/>
						}
						link="https://iq.iqai.com/dashboard"
						errorMessage={t("stats.errors.market-cap")}
					/>

					<ExchangesCard />
				</div>
			</div>
		</section>
	);
}

const EXCHANGES = [
	{
		key: "binance",
		href: "https://www.binance.com/en/trade/IQ_USDT?theme=dark&type=spot",
		icon: <BinanceIcon />,
	},
	{
		key: "one-inch",
		href: "https://app.1inch.io/#/1/simple/swap/USDT/IQ",
		icon: <OneInchIcon />,
	},
	{
		key: "upbit",
		href: "https://upbit.com/exchange?code=CRIX.UPBIT.KRW-IQ",
		icon: <UpbitIcon />,
	},
	{
		key: "frax",
		href: "https://frax.com/swap/?tokenA=undefined&tokenB=0x6efb84bda519726fa1c65558e520b92b51712101&originChainId=undefined&destinationChainId=252",
		icon: <FraxIcon />,
	},
] as const;

export async function ExchangesCard() {
	const t = await getTranslations("introduction.exchanges");

	return (
		<div
			className="bg-neutral-950 backdrop-filter backdrop-blur-sm border border-neutral-700 rounded-xl p-3 flex flex-col gap-4 text-sm w-full"
			aria-labelledby="exchanges-title"
		>
			<p id="exchanges-title" className="text-xs text-card-foreground">
				{t("title")}
			</p>

			<div className="flex items-center justify-between">
				{EXCHANGES.map((exchange, i) => {
					const name = t(exchange.key);
					return (
						<ExchangeLink
							key={exchange.key}
							href={exchange.href}
							icon={exchange.icon}
							label={t("trade-on", { name })}
							showDivider={i < EXCHANGES.length - 1}
						/>
					);
				})}
			</div>
		</div>
	);
}
