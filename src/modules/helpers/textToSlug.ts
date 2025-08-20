export function textToSlug(name: string): string {
	return name
		.toString()
		.trim()
		.replace(/\s+/g, "-")
		.replace(/[^\w-]+/g, "");
}
