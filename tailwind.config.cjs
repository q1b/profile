const colors = require('tailwindcss/lib/public/colors');
const { easings } = require("postcss-easings")

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{svelte,html}'],
	darkMode: 'class',
	theme: {
		extend: {
			transitionTimingFunction: { ...easings },
			colors: {
				slate: {
					...colors.slate,
					1000: '#030E1C'
				},
				purple: {
					...colors.purple,
					1000: '#1A0122'
				},
				blue: {
					...colors.blue,
					1000: '#00145B'
				},
			},
			borderRadius:{
				'4xl':32
			},
			boxShadow:{
        "white-xl":"0px 3px 1.2px 0px rgba(255,255,255, 0.01), 0px 3px 2.4px 0px rgba(255,255,255, 0.02), 0px 3px 4.8px 0px rgba(255,255,255, 0.04), 0px 3px 9.6px 0px rgba(255,255,255, 0.08), 0px 3px 19.4px 0px rgba(255,255,255, 0.10), 0px 3px 39.8px 0px rgba(255,255,255, 0.16);",
        "white-md":"0px 3px 1.2px 0px rgba(255,255,255, 0.01), 0px 3px 2.4px 0px rgba(255,255,255, 0.05), 0px 3px 4.8px 0px rgba(255,255,255, 0.07), 0px 3px 12px 2px rgba(255,255,255, 0.09), 0px 3px 19.4px 0px rgba(255,255,255, 0.16);",
        "white-sm":"0px 3px 1.2px 0px rgba(255,255,255, 0.01), 0px 3px 6px 0px rgba(255,255,255, 0.05), 0px 3px 12px 1px rgba(255,255,255, 0.12), 0px 3px 12px 0px rgba(255,255,255, 0.16);",

        "blue-xl":"0px 8px 10px 0px #A2FFF477, 0px 4px 17px 0px #FFFFFF26",
        "blue-md":"0px 6px 10px 0px #A2FFF477, 0px -6px 8px 0px #A2FFF477, 0px 3px 17px 0px #FFFFFF26",
      },
		}
	},
	plugins: []
};
