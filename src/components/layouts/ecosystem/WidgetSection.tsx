import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import { useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import type React from "react";
import Grid from "./images/iq-wiki/grid.png";
import WidgetImage from "./images/iq-wiki/widgets.png";
import WikiRankImage from "./images/iq-wiki/wiki-rank.png";

interface WidgetData {
	gridImage: string | StaticImageData;
	widgetImage: string | StaticImageData;
	titleKey: "ecosystem.iqwiki.widgets" | "ecosystem.iqwiki.wikiRank";
}

interface WidgetBoxProps {
	gridImage: string | StaticImageData;
	widgetImage: string | StaticImageData;
	title: string;
}

const WidgetBox: React.FC<WidgetBoxProps> = ({
	gridImage,
	widgetImage,
	title,
}) => (
	<div
		className="relative py-4 rounded-3xl overflow-hidden xl:h-[480px] border border-neutral-700"
		style={{
			boxShadow: "inset 0px 2.93px 73.37px 13px #FF1A881A",
		}}
	>
		<Image src={gridImage} alt="" fill className="object-cover" />
		<div
			className="absolute inset-0 z-30"
			style={{
				background: "linear-gradient(to top, #000000CC, #1A1B1E1A)",
			}}
		/>
		<InViewAnimateBottom>
			<div className="relative flex flex-col items-center h-full justify-center">
				<Image
					src={widgetImage}
					alt={title}
					className="w-full h-auto object-contain"
				/>
			</div>
			<h3 className="absolute bottom-3 left-6 text-lg font-bold mb-2 z-50 text-white font-satoshi">
				{title}
			</h3>
		</InViewAnimateBottom>
	</div>
);

const widgets: WidgetData[] = [
	{
		gridImage: Grid,
		widgetImage: WidgetImage,
		titleKey: "ecosystem.iqwiki.widgets" as const,
	},
	{
		gridImage: Grid,
		widgetImage: WikiRankImage,
		titleKey: "ecosystem.iqwiki.wikiRank" as const,
	},
];

const WidgetSection = () => {
	const t = useTranslations();

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{widgets.map((widget) => (
				<WidgetBox
					key={widget.titleKey}
					gridImage={widget.gridImage}
					widgetImage={widget.widgetImage}
					title={t(widget.titleKey)}
				/>
			))}
		</div>
	);
};

export default WidgetSection;
