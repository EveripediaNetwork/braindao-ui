/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const backfaceVisibility = plugin(function ({ addUtilities }) {
	addUtilities({
		'.backface-visible': {
			'backface-visibility': 'visible',
			'-webkit-backface-visibility': 'hidden',
			'-moz-backface-visibility': 'hidden',
			'-ms-backface-visibility': 'hidden',
		},
		'.backface-hidden': {
			'backface-visibility': 'hidden',
			'-webkit-backface-visibility': 'hidden',
			'-moz-backface-visibility': 'hidden',
			'-ms-backface-visibility': 'hidden',
		},
	});
});

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				whiteAlpha: {
					50: '#ffffff0a',
					100: '#ffffff0f',
					200: '#ffffff14',
					300: '#ffffff29',
					400: '#ffffff3d',
					500: '#ffffff5C',
					600: '#ffffff7a',
					700: '#ffffffa3',
					800: '#ffffffcc',
					900: '#ffffffeb',
				},
				blackAlpha: {
					50: '#0000000a',
				},
				brand: {
					50: '#ffe5f1',
					100: '#ffcce4',
					150: '#F7FAFC',
					200: '#ffb3d7',
					300: '#ff99ca',
					400: '#ff80bd',
					500: '#FF5CAA',
					600: '#ff4da3',
					700: '#ff3396',
					800: '#ff1a88',
					900: '#5d1738',
				},
				gray200: '#E2E8F0',
				gray600: '#4A5568',
				gray700: '#2D3748',
				gray800: '#1A202C',
			},
			animation: {
				border: 'border 4s ease infinite',
				text: 'text 4s ease infinite',
			},
			keyframes: {
				border: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
			backgroundImage: {
				'hero-image': "url('/hero-bg.png')",
				'about-us': "url('/aboutus.png')",
				coingecko: "url('/coingecko.svg')",
				eth: "url('/eth.svg')",
				graph: "url('/graph.svg')",
				magic: "url('/magic.svg')",
				'magic-white': "url('/magic-white.svg')",
				'wiki-image': "url('/iqwiki-widget.png')",
				'wiki-widget-dark': "url('/iqwiki-widget-dark.png')",
				'wiki-homepage': "url('/iqwiki-homepage.png')",
				'wiki-homepage-dark': "url('/iqwiki-homepage-dark.png')",
				'iqgpt-mockup': "url('/iq-gpt-mockup.png')",
				'iqgpt-mockup-dark': "url('/iq-gpt-mockup-dark.png')",
				'iq-dashboard-mockup': "url('/iq-dashboard-mockup.png')",
				'iq-dashboard-mockup-dark': "url('/iq-dashboard-mockup-dark.png')",
				'wiki-rank': "url('/iqwiki-rank.png')",
				'wiki-rank-dark': "url('/iqwiki-rank-dark.png')",
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('children', '& > *');
		},
		backfaceVisibility,
	],
};
