import { localeSchema } from "@/messages/_schema";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: localeSchema.options,
	defaultLocale: "en",
	localePrefix: {
		mode: "as-needed",
		prefixes: {
			ko: "/kr",
		},
	},
	localeDetection: true,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
	createNavigation(routing);
