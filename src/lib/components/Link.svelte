<script lang="ts">
	export let href: string;
	export let icon = '';
	export let width = 30;
</script>

<a {href}>
	{#if icon !== ''}
		<div class="imgbox">
			<img src="https://cdn.simpleicons.org/{icon}/white" alt="" {width} height={width} />
		</div>
	{/if}
	<slot />
</a>

<style>
	a {
		display: block;
		color: white;
		text-decoration: none;
		font-family: 'RobotoBold';
		width: 90%;
		/* max-width: 700px; */
		min-height: 50px;
		margin: 10px 0px;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(5px);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 100ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
	}
	.imgbox {
		position: absolute;
		top: 0;
		left: 0;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	a:hover {
		transform: scale(1.02);
	}
</style>
