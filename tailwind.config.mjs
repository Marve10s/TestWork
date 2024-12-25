/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
			},
			maxWidth: {
				'15ch': '15ch',
				'65ch': '65ch',
				'70ch': '70ch',
				'75ch': '75ch',
				'80ch': '80ch',
				'100ch': '100ch',
				'120ch': '120ch',
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					'sm': '640px',
					'md': '768px',
					'lg': '1024px',
					'xl': '1280px',
					'2xl': '1536px',
				},
			},
			animation: {
				'scroll-1': 'scroll-1 80s linear infinite',
				'scroll-2': 'scroll-2 70s linear infinite reverse',
				'scroll-3': 'scroll-3 60s linear infinite',
			},
			keyframes: {
				'scroll-1': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-75%)' },
				},
				'scroll-2': {
					'0%': { transform: 'translateX(-75%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'scroll-3': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
		},
	},
	plugins: [],
}
