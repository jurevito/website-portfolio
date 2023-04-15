
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				opensans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
				mont: ['"Montserrat"', ...defaultTheme.fontFamily.sans]
			},
			transitionProperty: {
				size: 'background-size',
			}
		}
	},

	plugins: []
};

module.exports = config;
