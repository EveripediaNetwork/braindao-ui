import { TokenBrief } from "@/app/[locale]/_components/token-brief";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import AILandingImage from "./images/iqai/iq-landing.png";

export default async function IQAI() {
	const t = await getTranslations("ecosystem.iqai");

	return (
		<div id="iqai" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 pb-12 sm:py-8 xl:py-8">
				<TokenBrief
					title={t("title")}
					description={t("description")}
					action="https://iqai.app"
					buttonText={t("button")}
				/>
				<div className="w-full rounded-xl overflow-hidden py-12">
					<Image
						src={AILandingImage}
						alt="IQ AI landing"
						width={750}
						height={675}
						className="w-full h-auto"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
					/>
				</div>
			</div>
		</div>
	);
}
