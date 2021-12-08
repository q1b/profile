<script lang="ts">
	import { SITE, OPEN_GRAPH } from '../contents/config';
	import { page } from '$app/stores';
	interface Props {
		title: string;
		description: string;
		imageSrc: string;
		imageAlt: string;
	}

	export let content: Props;
	// let canonicalURL:string;

	let canonicalURL = 'https://' + $page.host + $page.path;
	const canonicalImageSrc = canonicalURL + content.imageSrc;
</script>

<svelte:head>
	<title>{content.title}</title>
	<link rel="canonical" href={canonicalURL} />
	<!-- OpenGraph Tags -->
	<meta property="og:title" content={content.title ?? SITE.title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={canonicalURL} />
	<meta property="og:locale" content={OPEN_GRAPH.locale} />
	<meta property="og:image" content={canonicalImageSrc} />
	<meta property="og:image:alt" content={content.imageAlt} />
	<meta
		name="description"
		property="og:description"
		content={content.description ? content.description : SITE.description}
	/>
	<meta property="og:site_name" content={SITE.title} />

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={OPEN_GRAPH.twitter} />
	<meta name="twitter:title" content={content.title ?? SITE.title} />
	<meta
		name="twitter:description"
		content={content.description ? content.description : SITE.description}
	/>
	<meta name="twitter:image" content={canonicalImageSrc} />
	<meta name="twitter:image:alt" content={content.imageAlt} />
</svelte:head>
