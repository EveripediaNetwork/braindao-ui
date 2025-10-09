import { TokenBrief } from "@/app/[locale]/_components/token-brief";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import WidgetSection from "./WidgetSection";
import IqWikiLandingAlt from "./images/iq-wiki/IQ.wiki.svg";

export default async function Iqwiki() {
	const t = await getTranslations("ecosystem.iqwiki");

	return (
		<div id="iq-wiki" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 pb-12 sm:py-8 xl:py-0">
				<TokenBrief
					title={t("title")}
					description={t("description")}
					action="https://iq.wiki"
					buttonText={t("button")}
				/>

				<div className="flex flex-col gap-6">
					<div
						className="flex flex-col md:flex-row border overflow-hidden mt-16 border-neutral-700 rounded-3xl bg-black relative"
						style={{
							backgroundImage: "url(/images/shadow.png)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="pl-3 pt-8">
							<p className="text-xs md:text-sm lg:text-base max-w-xl font-medium text-muted-foreground">
								{t("sections.intro-text")}
							</p>
						</div>
						<div className="w-full relative pt-8 pl-3 sm:pl-16 xl:pl-8">
							<div className="relative rounded-tl-xl overflow-hidden shadow-custom">
								<Image
									src={IqWikiLandingAlt}
									alt="IQ.wiki landing page interface"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 gradient-dark-bg" />
							</div>
						</div>
					</div>
					<WidgetSection />
				</div>
			</div>
		</div>
	);
}
