/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#274C5B",
				secondary: "#7EB693",
				regular: "#EFD372",
				"gray-light": "#F9F8F8",
				gray: "#B8B8B8",
			},
			textColor: {
				primary: "#274C5B",
				secondary: "#7EB693",
				regular: "#525C60",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				"open-sans": ["Open Sans", "sans-serif"],
				yellowtail: ["Yellowtail", "cursive"],
			},
		},
	},
	plugins: [],
};
