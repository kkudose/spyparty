<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Column, Row, Theme } from 'carbon-components-svelte';
	import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';
	import Moon20 from 'carbon-icons-svelte/lib/Moon20';
	import Sun20 from 'carbon-icons-svelte/lib/Sun20';

	export let title: string;

	let theme: CarbonTheme = 'g100';
	const handleToggle = () => {
		theme = theme === 'g100' ? 'white' : 'g100';
	};
</script>

<Row>
	<Column class="themeToggle">
		{#if theme === 'g100'}
			<Sun20 on:click={handleToggle} />
		{:else}
			<Moon20 on:click={handleToggle} />
		{/if}
	</Column>
</Row>
<Row>
	<Column>
		<h1>{title}</h1>
	</Column>
</Row>

<Theme bind:theme persist />

<style>
	:global(.themeToggle) {
		display: flex;
		justify-content: flex-end;
		margin-top: 32px;
	}
</style>
