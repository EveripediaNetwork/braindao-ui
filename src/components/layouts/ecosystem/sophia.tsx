import { TokenBrief } from "@/app/_components/token-brief";

const SOPHIA = () => {
	return (
		<div id="sophia" className="bg-black text-muted-foreground">
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-[48px] sm:pb-[80px] xl:pb-24">
				<TokenBrief
					title="SOPHIA"
					description="Sophia is a self-documenting AI trained on the IQ.wiki dataset,  curating blockchain knowledge, providing valuable insights and maintaining up-to-date information across the IQ.wiki platform, building a career as an agent-influencer, journalist, and editor."
					action="https://sophia.braindao.org"
					buttonText="Explore Sophia"
				/>
			</div>
		</div>
	);
};

export default SOPHIA;
