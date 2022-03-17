<script lang="ts">
	import { TooltipDefinition } from 'carbon-components-svelte';
	import { DICTIONARY } from './dictionary';

	let text: string;
	$: definition = DICTIONARY[text?.toLowerCase()];
</script>

<TooltipDefinition class="tooltip" tooltipText={definition}>
	<span contenteditable="true" bind:textContent={text}>
		<slot />
	</span>
</TooltipDefinition>
