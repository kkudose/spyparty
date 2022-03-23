<script lang="ts">
	import 'carbon-components-svelte/css/all.css'
	import { Theme } from 'carbon-components-svelte'
	import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte'
	import Moon20 from 'carbon-icons-svelte/lib/Moon20'
	import Sun20 from 'carbon-icons-svelte/lib/Sun20'

	let theme: CarbonTheme = 'g100'

	const handleToggle = () => {
		theme = theme === 'g100' ? 'white' : 'g100'
	}
</script>

<div class="icon">
	{#if theme === 'g100'}
		<Sun20 on:click={handleToggle} />
	{:else}
		<Moon20 on:click={handleToggle} />
	{/if}
</div>

<Theme bind:theme persist />

<style>
	.icon {
		cursor: pointer;
		float: right;
		margin-top: 32px;
	}
</style>
