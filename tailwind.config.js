
const colors = require('tailwindcss/colors')
module.exports = {
	important: true,
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			
		},
		
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
