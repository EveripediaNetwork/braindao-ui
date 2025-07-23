interface FormatNumberOptions {
	minDecimals?: number;
	maxDecimals?: number;
	compact?: boolean;
	signed?: boolean;
}

export const numFormatter = Intl.NumberFormat("en", {
	notation: "compact",
}).format;

export function formatNumber(
	value: number | undefined | null,
	options: FormatNumberOptions = {},
): string | null {
	if (value == null || Number.isNaN(value)) {
		return null;
	}

	const {
		minDecimals = 0,
		maxDecimals = minDecimals,
		compact = false,
		signed = false,
	} = options;

	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: minDecimals,
		maximumFractionDigits: maxDecimals,
		notation: compact ? "compact" : "standard",
		signDisplay: signed ? "always" : undefined,
	}).format(value);
}
