import { TokenBrief } from "@/app/_components/token-brief";
import Image from "next/image";
import UpdatesImage from "./images/sophia/Card.svg";
import AiAssistantImage from "./images/sophia/Left_Card1.svg";
import SophiaLanding2 from "./images/sophia/sophia-landing.svg";

const SOPHIA = () => {
	return (
		<div id="sophia" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 py-24 sm:py-20 xl:pb-24">
				<TokenBrief
					title="SOPHIA"
					description="Sophia is a self-documenting AI trained on the IQ.wiki dataset, curating blockchain knowledge, providing valuable insights and maintaining up-to-date information across the IQ.wiki platform, building a career as an agent-influencer, journalist, and editor."
					action="https://sophia.braindao.org"
					buttonText="Explore Sophia"
				/>
				<div className="flex flex-col md:flex-row w-full justify-between mt-12 gap-4">
					<div className="flex flex-col justify-between w-full md:w-1/2 bg-black border border-border pt-3 rounded-xl">
						<p className="text-primary-foreground  text-xs sm:text-sm md:text-sm font-medium px-4 pt-4 w-full ">
							SOPHIA maintains transparent records of her editorial work and
							analyzes blockchain projects with credible sources. Additionally,
							she updates wiki entries on the latest crypto information and
							trends.
						</p>

						<div>
							<Image
								src={SophiaLanding2}
								alt="SOPHIA AI Editor Interface"
								width={600}
								height={400}
								className="w-full h-full rounded-lg "
							/>
						</div>
					</div>

					<div className="w-full md:w-1/2 flex flex-col  gap-4 min-h-[400px] ">
						<div
							className="h-1/2 bg-black border border-border rounded-xl overflow-hidden flex flex-col"
							style={{
								backgroundImage: "url(/images/background.svg)",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div className="w-4/5 sm:3/5 ml-auto h-3/5">
								<Image
									src={AiAssistantImage}
									alt="Upper Image"
									className="w-full h-full object-contain object-right "
								/>
							</div>
							<div className="px-4 pb-4 space-y-1 sm:space-y-2 mt-auto">
								<span className="inline-block px-2 sm:px-3 py-1 bg-transparent text-white text-xs font-semibold rounded-full border border-border shimmer-glass">
									AI-assisted <span className="text-primary">Editing</span>
								</span>
								<h3 className="text-white text-xl font-bold">
									Influence Editing Focus
								</h3>
								<p className="text-muted-foreground font-medium text-xs max-w-md pb-2">
									Vote on which topics SOPHIA should prioritize in her research
									and editing process.
								</p>
							</div>
						</div>

						<div
							className="h-1/2 lg:h-auto flex flex-col gap-6 bg-black border border-border selection:rounded-2xl overflow-hidden"
							style={{
								backgroundImage: "url(/images/background.svg)",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div className="space-y-1 p-2">
								<span className="inline-block px-3 py-1 bg-transparent text-white text-xs font-semibold rounded-full border border-border shimmer-glass">
									Exclusive <span className="text-primary">Updates</span>
								</span>
								<h3 className="text-white text-xl font-bold">
									Exclusive Weekly Insights
								</h3>
								<p className="text-muted-foreground font-medium text-xs">
									Access weekly gated content including insights threads,
									reports and behind-the-scenes.
								</p>
							</div>

							<Image
								src={UpdatesImage}
								alt="Lower Image"
								className="w-[80%] object-contain object-left"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SOPHIA;
