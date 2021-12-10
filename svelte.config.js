import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import cloudflare from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: cloudflare({
			// any esbuild options
		}),
		vite: {
			plugins: [],
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$content: resolve('./src/contents')
				}
			}
		}
	}
};

export default config;
