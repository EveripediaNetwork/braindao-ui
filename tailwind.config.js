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
				gray600: '#4A5568',
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
				'gradient-radial':
					'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
				'gradient-radial-at-t':
					'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
				'gradient-radial-at-b':
					'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
				'gradient-radial-at-l':
					'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
				'gradient-radial-at-r':
					'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
				'gradient-radial-at-tl':
					'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
				'gradient-radial-at-tr':
					'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
				'gradient-radial-at-bl':
					'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
				'gradient-radial-at-br':
					'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
				'hero-image': "url('/hero-bg.png')",
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
