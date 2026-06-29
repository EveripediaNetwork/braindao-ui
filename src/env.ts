import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * Production is the only environment that diverges for env-varying values;
 * preview and development share the non-prod values. Set NEXT_PUBLIC_IS_PROD
 * to "true" in the production deployment so the prod-side defaults apply once
 * the corresponding Vercel vars are removed.
 */
const isProd = process.env.NEXT_PUBLIC_IS_PROD === "true";

export const env = createEnv({
	/**
	 * Client-side env vars. Everything this app reads is `NEXT_PUBLIC_`-prefixed
	 * (it ships to the browser), so there are no server-only vars.
	 *
	 * Non-secret values carry in-code `.default()`s that are byte-identical to
	 * the deployed Vercel values. While the Vercel vars stay set they override
	 * these with the same value (no behavior change); once removed, the defaults
	 * take over. Genuine secrets have no default and must come from the env.
	 */
	client: {
		// Constant across all environments:
		NEXT_PUBLIC_IQ_ADDRESS: z
			.string()
			.min(1)
			.default("0x579cea1889991f68acc35ff5c3dd0621ff29b0c9"),
		NEXT_PUBLIC_HIIQ_ADDRESS: z
			.string()
			.min(1)
			.default("0x1bf5457ecaa14ff63cc89efd560e251e814e16ba"),
		NEXT_PUBLIC_SOPHIA_AGENT_ADDRESS: z
			.string()
			.min(1)
			.default("0x4dBcC239b265295500D2Fe2d0900629BDcBBD0fB"),
		NEXT_PUBLIC_IQ_GATEWAY_URL: z
			.string()
			.url()
			.default("https://gateway.braindao.org"),

		// Public PostHog project key — differs prod vs preview/dev, so the
		// default branches on isProd.
		NEXT_PUBLIC_POSTHOG_KEY: z
			.string()
			.min(1)
			.default(
				isProd
					? "phc_4MsVVKQqCaAJUKqSLTIbPpEEl4fWW8h8FKV8mj7Wjsf"
					: "phc_cRzhhwKmv122zsoEzDViTsRWaFNxPP9GeZJ5p4eWniZ",
			),

		// Secrets — required from the environment, no default:
		NEXT_PUBLIC_ALCHEMY_API_KEY: z.string().min(1),
		NEXT_PUBLIC_IQ_GATEWAY_KEY: z.string().min(1),
	},
	/**
	 * Next.js inlines `NEXT_PUBLIC_` vars at build time, so each must be listed
	 * here as a literal `process.env.X` reference.
	 */
	experimental__runtimeEnv: {
		NEXT_PUBLIC_IQ_ADDRESS: process.env.NEXT_PUBLIC_IQ_ADDRESS,
		NEXT_PUBLIC_HIIQ_ADDRESS: process.env.NEXT_PUBLIC_HIIQ_ADDRESS,
		NEXT_PUBLIC_SOPHIA_AGENT_ADDRESS:
			process.env.NEXT_PUBLIC_SOPHIA_AGENT_ADDRESS,
		NEXT_PUBLIC_IQ_GATEWAY_URL: process.env.NEXT_PUBLIC_IQ_GATEWAY_URL,
		NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
		NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
		NEXT_PUBLIC_IQ_GATEWAY_KEY: process.env.NEXT_PUBLIC_IQ_GATEWAY_KEY,
	},
	emptyStringAsUndefined: true,
});
