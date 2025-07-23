import Hero from "@/components/layouts/Hero";
import Iqtoken from "@/components/layouts/Iqtoken";
import Ecosystem from "@/components/layouts/ecosystem";
import { fetchCoinMarketData } from "@/modules/fetchCoinMarketData";
import { getLockOverview } from "@/modules/getLockOverview";
import { getTvl } from "@/modules/getTVL";
import { getIqStats, getSophiaStats } from "./_actions";
import { IQStats } from "./_components/iq-stat";

export default async function Home() {
	const [tvl, marketData, lockOverview, iqStatsData, sophiaStats] =
		await Promise.all([
			getTvl(),
			fetchCoinMarketData(),
			getLockOverview(),
			getIqStats(),
			getSophiaStats(),
		]);

	const { totalHiiqSupply } = lockOverview;

	return (
		<div className="bg-black min-h-screen">
			<Hero />
			<IQStats iqStatsData={iqStatsData} sophiaStats={sophiaStats} />
			<Iqtoken
				tvl={tvl}
				totalHiiqSupply={totalHiiqSupply}
				marketData={marketData}
			/>
			<Ecosystem />
		</div>
	);
}
