<script>
	import Logo from '$lib/components/Logo.svelte';
	import Link from '$lib/components/Link.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<svelte:head>
	<title>BoostlessBear's Links</title>
</svelte:head>

<Background />

<div class="center" style="margin-top: 5rem">
	<Logo />

	<h1>BoostlessBear</h1>
	<h2>Check out all of my links :)</h2>

	<div class="center">
		<h3>Socials</h3>
		<Link href="/twitch" icon="twitch">Twitch</Link>
		<Link href="/tiktok" icon="tiktok">TikTok</Link>
		<Link href="/discord" icon="discord">Discord</Link>
	</div>
	<div class="center">
		<h3>Music Collection</h3>
		<Link href="/spotify" icon="spotify">Spotify</Link>
		<Link href="/statsfm" icon="">Stats.fm (Spotify Stats)</Link>
		<Link href="/discogs" icon="">Discogs Record Collection</Link>
	</div>
	<div class="center">
		<h3>Donation</h3>
		<Link href="/kofi" icon="kofi">Kofi</Link>
	</div>
</div>

<style>
	.center {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}
</style>
