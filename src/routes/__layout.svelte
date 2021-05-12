<a href="/" class="link">
	<div class="p-3 py-2 pb-1 sticky-top header">
		<h1 class="instagram">Zen</h1>
	</div>
</a>

<slot></slot>

<svelte:head>
	<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
</svelte:head>

<style lang="scss">
	@font-face {
		src: url('/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf');
		font-family: Instagram;
	}
	
	.header {
		background: white;
	}

	.instagram {
		font-family: Instagram;
	}

	.link {
		text-decoration: none !important;
		color: inherit !important;
	}
</style>