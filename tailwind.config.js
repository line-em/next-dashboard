/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				table: "1fr minmax(0, 120px) minmax(0, 120px) 2fr 1fr",
				"sm-table": "2fr 1fr",
				main: "minmax(2.5rem, 5rem) minmax(auto, 1fr)"
			}
		}
	},
	plugins: []
};
