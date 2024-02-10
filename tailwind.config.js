/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			blue: {
				100: "#D9E6FE",
				200: "#B3CCFD",
				300: "#8DB3FD",
				400: "#6799FC",
				500: "#4180FB",
				600: "#3466C9",
				700: "#274D97",
				800: "#1A3364",
				900: "#0D1A32",
			},
			yellow: {
				100: "#FEEFD9",
				200: "#FDDFB2",
				300: "#FCCF8C",
				400: "#FBBF65",
				500: "#FAAF3F",
				600: "#C88C32",
				700: "#966926",
				800: "#644619",
				900: "#32230D",
			},
			white: "#E1E1E1",
			black: "#101010",
		},
		extend: {
			fontFamily: {
				poppins: "Poppins, sans-serif",
				raleway: "Raleway, sans-serif",
			},
			dropShadow: {
				blue: "0 4px 4px #18356F5c",
			},
		},
	},
	plugins: [],
};
