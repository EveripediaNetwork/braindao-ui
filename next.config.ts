// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	skipTrailingSlashRedirect: true,

	async redirects() {
		return [
			{
				source: "/ingest/static/:path*",
				destination: "https://us-assets.i.posthog.com/static/:path*",
				permanent: true,
			},
			{
				source: "/ingest/:path*",
				destination: "https://us.i.posthog.com/:path*",
				permanent: true,
			},
		];
	},
};

export default withNextIntl(nextConfig);
