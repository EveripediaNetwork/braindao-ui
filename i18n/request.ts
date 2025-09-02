import { getRequestConfig } from "next-intl/server";
import { localeSchema } from "../messages/_schema";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (
		!locale ||
		!routing.locales.includes(locale as (typeof routing.locales)[number])
	) {
		locale = routing.defaultLocale;
	}

	const fileLocale =
		locale === localeSchema.enum.ko ? localeSchema.enum.kr : locale;

	return {
		locale,
		messages: (await import(`../messages/${fileLocale}.json`)).default,
	};
});
