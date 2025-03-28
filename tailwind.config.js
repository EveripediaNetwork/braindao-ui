/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const backfaceVisibility = plugin(function ({ addUtilities }) {
	addUtilities({
		".backface-visible": {
			"backface-visibility": "visible",
			"-webkit-backface-visibility": "hidden",
			"-moz-backface-visibility": "hidden",
			"-ms-backface-visibility": "hidden",
		},
		".backface-hidden": {
			"backface-visibility": "hidden",
			"-webkit-backface-visibility": "hidden",
			"-moz-backface-visibility": "hidden",
			"-ms-backface-visibility": "hidden",
		},
	});
});

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				whiteAlpha: {
					50: "#ffffff0a",
					100: "#ffffff0f",
					200: "#ffffff14",
					300: "#ffffff29",
					400: "#ffffff3d",
					500: "#ffffff5C",
					600: "#ffffff7a",
					700: "#ffffffa3",
					800: "#ffffffcc",
					900: "#ffffffeb",
				},
				blackAlpha: {
					50: "#0000000a",
				},
				brand: {
					50: "#ffe5f1",
					100: "#ffcce4",
					150: "#F7FAFC",
					200: "#ffb3d7",
					300: "#ff99ca",
					400: "#ff80bd",
					500: "#FF5CAA",
					600: "#ff4da3",
					700: "#ff3396",
					800: "#ff1a88",
					900: "#5d1738",
				},
				gray100: "#EDF2F7",
				gray200: "#E2E8F0",
				gray600: "#4A5568",
				gray700: "#2D3748",
				gray800: "#1A202C",
			},
			animation: {
				border: "border 4s ease infinite",
				text: "text 4s ease infinite",
				"fade-in": "fadeIn 2s ease-in-out",
				"slide-up": "slideUp 2s ease-in-out",
			},
			keyframes: {
				border: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				fadeIn: {
					"0%": { opacity: "0.3" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(100px)", opacity: "0" },
					"100%": { transform: "translateY(0px)", opacity: "1" },
				},
			},
			backgroundImage: {
				"about-us": "url('/images/aboutus.png')",
				coingecko: "url('/svgs/coingecko.svg')",
				eth: "url('/svgs/eth.svg')",
				graph: "url('/svgs/graph.svg')",
				magic: "url('/svgs/magic.svg')",
				twitter: "url('/svgs/twitter.svg')",
				"twitter-dark": "url('/svgs/twitter-dark.svg')",
				linkedln: "url('/svgs/linkedln.svg')",
				"linkedln-dark": "url('/svgs/linkedln-dark.svg')",
				everipedia: "url('/svgs/everipedia.svg')",
				"everipedia-dark": "url('/svgs/everipedia-dark.svg')",
				"magic-white": "url('/svgs/magic-white.svg')",
				"gradient-linear":
					"linear-gradient(360deg, #1A202C 46.49%, rgba(26, 32, 44, 0.00) 86.97%)",
				"gradient-linear-light":
					"linear-gradient(3deg, #F9FAFB 46.15%, rgba(255, 255, 255, 0.00) 97.82%)",
				"video-gradient":
					"linear-gradient(0deg, #000206 42%, rgba(0, 2, 6, 0.00) 97%)",
				"video-gradient-top":
					"linear-gradient(180deg, #000206 42%, rgba(0, 2, 6, 0.00) 97%)",
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("children", "& > *");
		},
		backfaceVisibility,
	],
};
