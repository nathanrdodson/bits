/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#1a1a1a',
				secondary: '#f5f5f5',
				accent: '#4a9eff'
			}
		}
	},
	plugins: []
};
