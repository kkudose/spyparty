import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex({
			extensions: ['.svx'],
			layout: "./src/layout.svelte"
		}),
		preprocess(),
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
