
const openColorsJson = require('open-color/open-color.json');
const colors = {};

Object.entries(openColorsJson).forEach(([color, values]) => {
	if (typeof values === 'string') {
		colors[color] = values;
	} else {
		const c0 = values.reduce((obj, hex, index) => ({ ...obj, [index > 0 ? index * 100 : 50]: hex}), {});
		const c1 = values.reduce((obj, hex, index) => ({ ...obj, [index]: hex}), c0);
		c1.DEFAULT = values[5];
		colors[color] = c1;
	}
});

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content:  [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: 'class',
	theme: {
		colors: {
			...colors,
			transparent: 'transparent',
			current: 'currentColor',
			primary: (colors['indigo'])['DEFAULT'],
			secondary: (colors['gray'])['DEFAULT'],
			accent: (colors['orange'])['DEFAULT'],
			success: colors['green'],
			warning: colors['yellow'],
			error: colors['red'],
			info: colors['blue'],
		},
		screens: {
			'xs': '640px',
			'sm': '768px',
			'md': '1024px',
			'lg': '1280px',
			'xl': '1536px',
			'2xl': '1600px'
		},
		container: {
			center: true,
			padding: "1rem",
		},
		fontSize: {
			'2xs': ['0.5rem', { lineHeight: '0.625rem' }], // 6pt
			xs: ['0.75rem', { lineHeight: '1rem' }], // 9pt
			sm: ['0.875rem', { lineHeight: '1rem' }], // 10.5pt
			base: ['1rem',{ lineHeight: '1.25rem' }], // 12pt
			lg: ['1.25rem',{ lineHeight: '1.5rem' }], // 15pt
			xl: ['1.5rem',{ lineHeight: '1.75rem' }], // 18pt
			'2xl': ['2rem',{ lineHeight: '2.25rem' }], // 24pt
			'3xl': ['3rem',{ lineHeight: '3.375rem' }], // 24pt
			'4xl': ['4rem',{ lineHeight: '5rem' }],
		},
	},
	plugins: [
	],
};
