<script context="module">
	export { OutboundLink as a, Tile as blockquote } from 'carbon-components-svelte'
	import Lookup from './routes/leaflet-of-spyparty-strategies/Lookup.svelte'
	export { Lookup as del }
</script>

<!-- mdsvex does not support TS -->
<script>
	import { Column, Grid, Row } from 'carbon-components-svelte'

	import Header from './shared/Header.svelte'

	export let title
</script>

<Grid>
	<Row>
		<Column sm={0} md={1} lg={4} />
		<Column>
			<Header {title} />
			<slot />
		</Column>
		<Column sm={0} md={1} lg={4} />
	</Row>
</Grid>

<!-- TODO: get rid of global styles and !important -->
<style global>
	@font-face {
		font-family: 'Barlow';
		src: url('/fonts/Barlow-Regular.ttf');
		font-weight: normal;
	}
	@font-face {
		font-family: 'Barlow';
		src: url('/fonts/Barlow-Bold.ttf');
		font-weight: bold;
	}
	@font-face {
		font-family: 'Barlow';
		src: url('/fonts/Barlow-Medium.ttf');
		font-weight: 500;
	}
	@font-face {
		font-family: 'Barlow';
		src: url('/fonts/Barlow-SemiBold.ttf');
		font-weight: 600;
	}

	body {
		font-family: 'Barlow' !important;
	}

	hr {
		color: #2c2c2c;
		margin: 32px 0;
	}

	h1,
	h2,
	h3 {
		margin: 24px 0 !important;
	}

	h1,
	h2,
	h3,
	p,
	li,
	div {
		margin-bottom: 16px !important;
	}

	div > p:only-child {
		margin-bottom: 0 !important;
	}

	h1,
	h2,
	h3 {
		font-weight: 700 !important;
	}

	h2 {
		font-size: 1.75rem !important;
	}

	h3 {
		font-size: 1.5rem !important;
	}

	p,
	li,
	a,
	button {
		font-weight: 500 !important;
		font-size: 1.1rem !important;
		line-height: 1.5rem !important;
	}

	button {
		font-weight: 600 !important;
	}
</style>
