<script lang="ts">
	import { Column, Row } from 'carbon-components-svelte'

	import Theme from './Theme.svelte'

	export let title: string
</script>

<Row>
	<Column class="themeToggle">
		<Theme />
	</Column>
</Row>
<Row>
	<Column>
		<h1>{title}</h1>
	</Column>
</Row>
