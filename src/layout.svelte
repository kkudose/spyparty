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

<svelte:head>
	<title>{title}</title>
</svelte:head>

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

<style global>
	/* carbon svelte css variables */
	:root[theme='white'],
	:root[theme='g100'] {
		/* h1 */
		--cds-productive-heading-06-font-weight: bold;
		--cds-productive-heading-06-line-height: normal;
		--cds-productive-heading-06-letter-spacing: normal;
		/* h2 */
		--cds-productive-heading-05-font-size: 1.75rem;
		--cds-productive-heading-05-font-weight: bold;
		--cds-productive-heading-05-line-height: normal;
		--cds-productive-heading-05-letter-spacing: normal;
		/* h3 */
		--cds-productive-heading-04-font-size: 1.5rem;
		--cds-productive-heading-04-font-weight: bold;
		--cds-productive-heading-04-line-height: normal;
		--cds-productive-heading-04-letter-spacing: normal;
		/* tooltip */
		--cds-label-01-font-size: 1rem;
		--cds-label-01-font-weight: 500;
		--cds-label-01-line-height: 1.5rem;
		--cds-label-01-letter-spacing: normal;
		/* a */
		--cds-body-short-01-font-size: 1rem;
		--cds-body-short-01-font-weight: 500;
		--cds-body-short-01-line-height: 1.5rem;
		--cds-body-short-01-letter-spacing: normal;
		/* p */
		--cds-body-long-02-font-size: 1rem;
		--cds-body-long-02-font-weight: 500;
		--cds-body-long-02-line-height: 1.5;
		--cds-body-long-02-letter-spacing: normal;
	}

	@font-face {
		font-display: swap;
		font-family: 'Barlow';
		font-weight: normal;
		src: url('/fonts/Barlow-Regular.ttf');
	}
	@font-face {
		font-display: swap;
		font-family: 'Barlow';
		font-weight: 500;
		src: url('/fonts/Barlow-Medium.ttf');
	}
	@font-face {
		font-display: swap;
		font-family: 'Barlow';
		font-weight: bold;
		src: url('/fonts/Barlow-Bold.ttf');
	}

	body {
		font-family: 'Barlow', Helvetica, Arial, sans-serif;
	}

	/* ----------
	carbon svelte does not have any vertical layout tools for some reason
	---------- */

	hr {
		color: #2c2c2c;
		margin: 32px 0;
	}

	h1,
	h2,
	h3 {
		margin: 24px 0;
	}

	p,
	div {
		margin-bottom: 16px;
	}

	/* Tile */
	div > p:last-of-type {
		margin-bottom: 0;
	}
</style>
