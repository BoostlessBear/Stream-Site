<script>
</script>

<div class="bg">
	<div class="noise"></div>
	<div class="image"></div>
</div>

<style>
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
	}
	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('$lib/logo.png');
		background-size: cover;
		background-position: 50%;
		filter: blur(30px) brightness(0.3);
		z-index: 1;
	}
	.noise {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: 512px 512px;
		background-repeat: repeat;
		opacity: 0.1;
		mix-blend-mode: overlay;
		background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgNTEyIDUxMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KICA8ZmlsdGVyIGlkPSdub2lzZUZpbHRlcic+CiAgICA8ZmVUdXJidWxlbmNlIAogICAgICB0eXBlPSdmcmFjdGFsTm9pc2UnIAogICAgICBiYXNlRnJlcXVlbmN5PScwLjcnCiAgICAgIG51bU9jdGF2ZXM9JzMnIAogICAgICBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+CiAgICA8ZmVDb2xvck1hdHJpeCBpbj0idHVyYnVsZW5jZSIgdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgoKICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICA8ZmVGdW5jUiB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIgLz4KICAgICAgPGZlRnVuY0cgdHlwZT0iZGlzY3JldGUiIHRhYmxlVmFsdWVzPSIwIDEiIC8+CiAgICAgIDxmZUZ1bmNCIHR5cGU9ImRpc2NyZXRlIiB0YWJsZVZhbHVlcz0iMCAxIiAvPgogICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogIDwvZmlsdGVyPgogIAogIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbHRlcj0ndXJsKCNub2lzZUZpbHRlciknLz4KPC9zdmc+');
		z-index: 2;
	}
</style>
