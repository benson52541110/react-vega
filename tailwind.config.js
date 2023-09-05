/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#274C5B",
				secondary: "#7EB693",
				"secondary-light": "#F1F8F4",
				"secondary-extraLight": "#F1F8F4",
				regular: "#EFD372",
				"gray-light": "#F9F8F8",
				gray: "#B8B8B8",
				"gray-regular": "#F1F1F1",
			},
			textColor: {
				primary: "#274C5B",
				secondary: "#7EB693",
				regular: "#525C60",
				gray: "#B8B8B8",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				"open-sans": ["Open Sans", "sans-serif"],
				yellowtail: ["Yellowtail", "cursive"],
			},
			borderColor: {
				primary: "#274C5B",
				secondary: "#7EB693",
			},
		},
	},
	plugins: [],
};
