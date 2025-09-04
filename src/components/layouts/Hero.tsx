import { getTranslations } from "next-intl/server";
import Image from "next/image";
import AnimatedHeroContent from "./animated-hero-content";

export async function Hero() {
	const t = await getTranslations("introduction");

	return (
		<div className="relative">
			<div className="absolute top-0 left-0 right-0 h-[50vh] md:h-[90vh] z-90">
				<Image
					src="/images/gradient-blur-bg.png"
					alt="gradient blur"
					fill
					className="w-full h-full object-fill"
				/>
			</div>

			<div className="absolute inset-0 top-60 w-full lg:h-[800px] opacity-80 z-[-1]">
				<Image
					src="/images/mesh.png"
					alt="mesh background"
					width={1200}
					height={600}
					className="w-full object-cover"
				/>
			</div>

			<AnimatedHeroContent
				title={t.rich("title", {
					line: (chunks) => <span className="block">{chunks}</span>,
					highlight: (chunks) => (
						<span className="italic text-primary">{chunks}</span>
					),
				})}
				description={t("description")}
			/>
		</div>
	);
}
