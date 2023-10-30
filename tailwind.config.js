/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				"2.5xl": "1.75rem",
				"3.5xl": "2rem",
				"4.5xl": "2.5rem"
			}
		},
	},
	plugins: [],
}