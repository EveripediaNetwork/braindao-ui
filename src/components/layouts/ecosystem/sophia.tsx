import { TokenBrief } from "@/app/[locale]/_components/token-brief";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import AiAssistantImage from "./images/sophia/AiAssisted.svg";
import SophiaLanding2 from "./images/sophia/sophia-landing.svg";
import UpdatesImage from "./images/sophia/updates.svg";

const SOPHIA = async () => {
	const t = await getTranslations("ecosystem.sophia");

	return (
		<div id="sophia" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 pb-12 sm:py-8 xl:py-32">
				<TokenBrief
					title={t("title")}
					description={t("description")}
					action="https://sophia.iqai.com"
					buttonText={t("button")}
				/>

				<div className="flex flex-col md:flex-row w-full justify-between mt-12 gap-4">
					<div className="flex flex-col justify-between w-full md:w-[60%] bg-black border border-border pt-3 rounded-xl">
						<p className="text-primary-foreground text-xs sm:text-sm md:text-sm font-medium px-4 pt-4 w-full xl:max-w-[85%]">
							{t("cards.transparency")}
						</p>

						<div>
							<Image
								src={SophiaLanding2}
								alt="SOPHIA AI Editor Interface"
								width={600}
								height={400}
								className="w-full h-full rounded-lg"
							/>
						</div>
					</div>

					<div className="w-full md:w-[40%] flex flex-col gap-4 min-h-[400px]">
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
									alt="AI Assistant"
									className="w-full h-full object-cover object-right rounded-bl-xl border-l border-b border-neutral-700"
								/>
							</div>
							<div className="px-4 py-4 space-y-1 sm:space-y-2 mt-auto">
								<span className="inline-block px-2 sm:px-3 py-1 bg-transparent text-white text-xs font-semibold rounded-full border border-border shimmer-glass">
									{t.rich("cards.ai-editing.badge", {
										highlight: (chunks) => (
											<span className="text-primary">{chunks}</span>
										),
									})}
								</span>
								<h3 className="text-white text-xl font-bold">
									{t("cards.ai-editing.title")}
								</h3>
								<p className="text-muted-foreground font-medium text-xs max-w-md pb-2">
									{t("cards.ai-editing.description")}
								</p>
							</div>
						</div>

						<div
							className="h-1/2 lg:h-auto flex flex-col gap-6 bg-black border border-border rounded-2xl overflow-hidden"
							style={{
								backgroundImage: "url(/images/background.svg)",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div className="space-y-1 px-4 py-4 sm:space-y-2 ">
								<span className="inline-block px-3 py-1 bg-transparent text-white text-xs font-semibold rounded-full border border-border shimmer-glass">
									{t.rich("cards.exclusive-updates.badge", {
										highlight: (chunks) => (
											<span className="text-primary">{chunks}</span>
										),
									})}
								</span>
								<h3 className="text-white text-xl font-bold">
									{t("cards.exclusive-updates.title")}
								</h3>
								<p className="text-muted-foreground font-medium text-xs">
									{t("cards.exclusive-updates.description")}
								</p>
							</div>

							<Image
								src={UpdatesImage}
								alt="Updates"
								className="w-[80%] object-contain rounded-tr-xl border-t border-r border-neutral-700"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SOPHIA;
