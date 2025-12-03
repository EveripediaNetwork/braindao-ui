import { env } from "node:process";
import { z } from "zod";

export const Theme = z.enum(["default", "halloween", "christmas"]);
export type Theme = z.infer<typeof Theme>;

/**
 * Get the current theme from environment variable
 * @returns Current theme value
 */
export function getTheme(): Theme {
	const result = Theme.safeParse(env.NEXT_PUBLIC_THEME);
	return result.success ? result.data : "default";
}

/**
 * Check if a specific theme is active
 */
export function isTheme(theme: Theme): boolean {
	return getTheme() === theme;
}
