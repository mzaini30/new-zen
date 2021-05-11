<div class="p-3 py-2 sticky-top header">
	<h1 class="instagram">Zen</h1>
</div>

<slot></slot>

<svelte:head>
	<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
</svelte:head>

<style lang="scss">
	.header {
		background: white;
		// border-bottom: 1px solid $gray;
	}

	.instagram {
		font-family: Instagram;
	}
</style>