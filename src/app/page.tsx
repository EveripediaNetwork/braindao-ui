import Hero from "@/components/layouts/Hero";
import Iqtoken from "@/components/layouts/Iqtoken";
import BraindaoTeam from "@/components/layouts/braindao-team";
import Ecosystem from "@/components/layouts/ecosystem";
import { fetchCoinMarketData } from "@/modules/fetchCoinMarketData";
import { getLockOverview } from "@/modules/getLockOverview";
import { getTvl } from "@/modules/getTVL";

export default async function Home() {
  const [tvl, marketData, lockOverview] = await Promise.all([
    getTvl(),
    fetchCoinMarketData(),
    getLockOverview(),
  ]);

  const { totalHiiqSupply } = lockOverview;

  return (
    <div className="">
      <Hero />
      <Iqtoken
        tvl={tvl}
        totalHiiqSupply={totalHiiqSupply}
        marketData={marketData}
      />
      <Ecosystem />
      <BraindaoTeam />
    </div>
  );
}
