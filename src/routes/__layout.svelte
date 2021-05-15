<a href="/" class="link">
	<div class="p-3 py-2 pb-1 sticky-top header">
		<h1 class="instagram">Zen</h1>
	</div>
</a>

<slot></slot>

<style lang="scss">
	@font-face {
		src: url('/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf');
		font-family: Instagram;
	}
	
	.header {
		background: white;
		border-bottom: 1px solid #eaeaea;
	}

	.instagram {
		font-family: Instagram;
	}

	.link {
		text-decoration: none !important;
		color: inherit !important;
	}
</style>