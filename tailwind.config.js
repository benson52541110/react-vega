/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#274C5B",
				secondary: "#7EB693",
			},
			textColor: {
				primary: "#274C5B",
				secondary: "#7EB693",
			},
		},
	},
	plugins: [],
};
