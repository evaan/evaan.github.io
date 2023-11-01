/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				"1.75rem": "1.75rem",
				"2rem": "2rem",
				"2.5rem": "2.5rem"
			},
			width: {
				"11/16": "68.75%"
			}
		},
		fontFamily: {
			sans: ["Overpass"]

		}
	},
	plugins: [],
}