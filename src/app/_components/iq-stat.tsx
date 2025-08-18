import BinanceIcon from "@/components/icons/binance";
import FraxIcon from "@/components/icons/frax";
import { IqWikiIcon } from "@/components/icons/iq-wiki";
import { OneInchIcon } from "@/components/icons/one-inch";
import UpbitIcon from "@/components/icons/upbit";
import { formatNumber } from "@/modules/helpers/numFormatter";
import { FaDatabase } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { ExchangeLink } from "./exchange-link";
import { TokenCard } from "./token-metric";

interface IQStatsProps {
	iqStatsData: {
		price: string | null;
		iqPriceChange: number | null;
		mcap: string | null;
		iqMCapChange: number | null;
		formattedPriceChange: string | null;
		formattedMCapChange: string | null;
	};
	sophiaStats: {
		currentPriceInUSD: number;
		changeIn24h: number;
	} | null;
}

export function IQStats({ iqStatsData, sophiaStats }: IQStatsProps) {
	const {
		price,
		iqPriceChange,
		mcap,
		iqMCapChange,
		formattedPriceChange,
		formattedMCapChange,
	} = iqStatsData;
	return (
		<section className="relative mx-auto mt-[-470px] sm:mt-[-530px] md:mt-[-560px] lg:mt-[-800px] xl:mt-[-380px]">
			<div className="p-4 text-foreground flex md:grid xl:grid-cols-4 flex-col md:grid-cols-2 gap-4 flex-wrap justify-center">
				<TokenCard
					title="IQ Price ($)"
					value={price}
					change={{
						iqChange: iqPriceChange,
						formattedChange: formattedPriceChange,
					}}
					icon={<IqWikiIcon className="w-6 h-6" aria-hidden="true" />}
					link="https://iq.iqai.com/dashboard"
					errorMessage="Error fetching IQ price"
				/>

				<TokenCard
					title="SOPHIA ($)"
					value={formatNumber(sophiaStats?.currentPriceInUSD ?? null, {
						maxDecimals: 3,
					})}
					change={{
						iqChange: sophiaStats?.changeIn24h ?? null,
						formattedChange: formatNumber(sophiaStats?.changeIn24h ?? null, {
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
					errorMessage="Error fetching Sophia price"
				/>
				<TokenCard
					title="Market Cap ($)"
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
					errorMessage="Error fetching IQ price"
				/>
				<ExchangesCard />
			</div>
		</section>
	);
}

function ExchangesCard() {
	return (
		<div
			className="bg-neutral-950 backdrop-filter backdrop-blur-sm border border-neutral-700 rounded-xl p-3 flex flex-col gap-4 text-sm w-full"
			aria-labelledby="exchanges-title"
		>
			<p id="exchanges-title" className="text-xs text-card-foreground">
				Exchanges
			</p>
			<div className="flex items-center justify-between">
				<ExchangeLink
					href="https://www.binance.com/en/trade/IQ_USDT?theme=dark&type=spot"
					icon={<BinanceIcon />}
					name="binance"
				/>
				<ExchangeLink
					href="https://app.1inch.io/#/1/simple/swap/USDT/IQ"
					icon={<OneInchIcon />}
					name="1inch"
				/>
				<ExchangeLink
					href="https://upbit.com/exchange?code=CRIX.UPBIT.KRW-IQ"
					icon={<UpbitIcon />}
					name="upbit"
				/>
				<ExchangeLink
					href="https://frax.com/swap/?tokenA=undefined&tokenB=0x6efb84bda519726fa1c65558e520b92b51712101&originChainId=undefined&destinationChainId=252"
					icon={<FraxIcon />}
					name="frax-finance"
				/>
			</div>
		</div>
	);
}



