import { TokenBrief } from "@/app/_components/token-brief";
import Image from "next/image";
import UpdatesImage from "./images/sophia/Card.svg";
import AiAssistantImage from "./images/sophia/Left_Card.svg";
import SophiaLanding2 from "./images/sophia/sophia-landing.svg";

const SOPHIA = () => {
	return (
		<div id="sophia" className="bg-black text-muted-foreground">
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-[48px] sm:pb-[80px] xl:pb-24">
				<TokenBrief
					title="SOPHIA"
					description="Sophia is a self-documenting AI trained on the IQ.wiki dataset, curating blockchain knowledge, providing valuable insights and maintaining up-to-date information across the IQ.wiki platform, building a career as an agent-influencer, journalist, and editor."
					action="https://sophia.braindao.org"
					buttonText="Explore Sophia"
				/>
				<div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
					<div className="space-y-6 bg-black border border-border pt-3 rounded-2xl  min-h-[500px] lg:min-h-0">
						<p className="text-primary-foreground  text-xs sm:text-sm md:text-sm font-medium px-4 pt-4 max-w-xl">
							SOPHIA maintains transparent records of her editorial work and
							analyzes blockchain projects with credible sources. Additionally,
							she updates wiki entries on the latest crypto information and
							trends.
						</p>

						<div className="relative">
							<Image
								src={SophiaLanding2}
								alt="SOPHIA AI Editor Interface"
								width={600}
								height={400}
								className="w-full h-full rounded-lg"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-4 min-h-[400px] lg:min-h-0">
						<div
							className="relative h-[300px] lg:h-auto flex-1 bg-black border border-border rounded-2xl overflow-hidden"
							style={{
								backgroundImage: "url(/images/background.png)",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<Image
								src={AiAssistantImage}
								alt="Upper Image"
								className="absolute top-0 right-0 w-full max-h-[90%] object-contain object-right"
							/>

							<div className="absolute bottom-4 left-4 space-y-2 pt-2">
								<span className="inline-block px-3 py-1  bg-transparent text-white text-xs font-semibold rounded-full border border-border  shimmer-glass">
									AI-assisted <span className="text-primary">Editing</span>
								</span>
								<h3 className="text-white text-xl font-bold">
									Influence Editing Focus
								</h3>
								<p className="text-muted-foreground font-medium text-xs max-w-md">
									Vote on which topics SOPHIA should prioritize in her research
									and editing process.
								</p>
							</div>
						</div>

						<div
							className="relative h-[300px] lg:h-auto flex-1 bg-black border border-border rounded-2xl overflow-hidden"
							style={{
								backgroundImage: "url(/images/background.png)",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div className="absolute top-3 left-4 space-y-1">
								<span className="inline-block px-3 py-1 bg-transparent text-white text-xs font-semibold rounded-full border border-border shimmer-glass">
									Exclusive <span className="text-primary">Updates</span>
								</span>
								<h3 className="text-white text-xl font-bold">
									Exclusive Weekly Insights
								</h3>
								<p className="text-muted-foreground font-medium text-xs max-w-md">
									Access weekly gated content including insights threads,
									reports and behind-the-scenes.
								</p>
							</div>
							<Image
								src={UpdatesImage}
								alt="Lower Image"
								className="absolute bottom-0 left-0 w-full max-h-[65%] object-contain object-left"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SOPHIA;
