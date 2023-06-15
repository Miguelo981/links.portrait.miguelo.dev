/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#3da9fc",
				secondary: "#90b4ce",
				ternary: "#ef4565",
				main: "#fffffe"
			}
		},
	},
	plugins: [],
}
