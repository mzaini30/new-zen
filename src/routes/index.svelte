<svelte:head>
	<title>Zen</title>
</svelte:head>

<div class="p-3">
	<h1 class="instagram">Zen</h1>
</div>

<div class="story d-flex">
	{#each listGambar as item, index}
		<a href="/" class="link-story">
			<span class="gambar-story d-block" style="background-image: url('/contoh/{item.gambar}');"></span>
			<p class="text-center teks-story">{item.caption}</p>
		</a>		
	{/each}
	<div class="link-story">&nbsp;</div>
</div>

<script>
	const listGambar = [
		{caption: 'Hello World', gambar: '57244247.png'},
		{caption: 'Bagaimana Kabarmu?', gambar: 'gnukoyvz5xlacuwdymrf.png'},
		{caption: 'Kehidupan yang Baik adalah Kehidupan yang Bagus', gambar: 'medium_logo-transistor.png'},
		{caption: 'Satu Lagi yang Bagus', gambar: 'p3nn57r52krvpdieblta.png'},
		{caption: 'Tebal atau Miring?', gambar: 'QmVyBFY4RAARhZsvmkmy2BCFh8pZE5ENBHBMjV4V3z75m5.png'},
		{caption: 'Excalibur, Suatu Legenda', gambar: 'socialmedia.png'},
	]
</script>

<style lang="scss">
	@font-face {
		src: url('/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf');
		font-family: Instagram;
	}
	.instagram {
		font-family: Instagram;
	}

	.story {
		width: 100%;
		overflow: auto;
	}
	.link-story {
		text-decoration: none !important;
		color: inherit !important;
		margin-left: 1rem;
	}
	$ukuranStory: calc(25vw - 1.3rem);
	.gambar-story {
		width: $ukuranStory;
		height: $ukuranStory;
		border-radius: 50%;
		border: 1px solid gray;
		background-position: center;
	}
	.teks-story {
		/*background: blue;*/
		overflow: hidden;
		text-overflow: ellipsis;
		width: $ukuranStory;
		white-space: nowrap;
		font-size: 12px;
		margin-top: .5rem;
	}

	@mixin tanpa-scroll($elemen){
		#{$elemen} {
			-ms-overflow-style: none;
			scrollbar-width: none;

			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
	@include tanpa-scroll('.story')
</style>