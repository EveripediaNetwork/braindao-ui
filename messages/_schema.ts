import { zodEnumFromValues } from "@/lib/helpers/zod-enum-from-record";
import type z from "zod";

export const locales = [
	{
		locale: "en",
		default: true,
		name: "English",
		currency: "usd",
		localization: "en-US",
		icon: "/US.svg",
		isHidden: false,
	},
	{
		locale: "kr",
		name: "Korean",
		currency: "krw",
		localization: "ko-KR",
		icon: "/KR.svg",
		isHidden: false,
	},
	{
		locale: "ko",
		name: "Korean",
		currency: "krw",
		localization: "ko-KR",
		icon: "/KR.svg",
		isHidden: true,
	},
	{
		locale: "zh",
		name: "Chinese",
		currency: "cny",
		localization: "zh-CN",
		icon: "/ZH.svg",
		isHidden: false,
	},
] as const;

export const localeSchema = zodEnumFromValues(locales, "locale");
export type Locale = z.infer<typeof localeSchema>;
