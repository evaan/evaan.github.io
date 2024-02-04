/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter"],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ addVariant }) {
			addVariant('mobile-only', "@media screen and (max-width: theme('screens.sm'))");
		}),
	],
	site: 'https://evaan.dev',
}
