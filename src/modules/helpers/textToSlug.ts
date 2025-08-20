export function textToSlug(name: string): string {
	return name.trim().replace(/\s+/g, "-");
}
