<svelte:head>
	<title>Zen</title>
</svelte:head>

<div class="story d-flex pt-3">
	{#each postinganAcak as item, index}
		<a href="/baca?slug={item.slug}" class="link-story">
			<span class="gambar-story d-block" style="background-image: url('{item.gambar}');"></span>
			<p class="text-center teks-story">{item.judul}</p>
		</a>		
	{/each}
	<div class="link-story">&nbsp;</div>
</div>

<hr class="m-0 garis">

<div class="wadah">
	<div class="konten row">
		{#each postinganBaru as item, index}
			<div class="col-sm-4 kartu">
				<a href="/baca?slug={item.slug}" class="d-block">
					<div class="judul p-3 pb-0 d-flex">
						<div class="">
							<img src="/logo.png" alt="" class="icon">
						</div>
						<div class="">
							<p class="caption p-1 ps-2"><strong>{item.judul}</strong></p>
						</div>
					</div>

					<img src="{item.gambar}" alt="" class="gambar">

					<p class="p-3 pb-0 deskripsi">{item.deskripsi}</p>
				</a>
			</div>
		{/each}
	</div>
</div>

<script>
	let postinganBaru = [{judul: '', slug: '', gambar: '', deskripsi: ''}]
	let postinganAcak = [{judul: '', slug: '', gambar: ''}]

	import {sql, konten} from '$lib/api'

	import axios from 'axios'
	import qs from 'qs'

	async function ambilPostinganBaru(){
		let data = await axios.post(sql, qs.stringify({
			id: konten,
			kunci: 'ambil-semua'
		}))
		data = data.data
		postinganBaru = data
	}
	ambilPostinganBaru()

	async function ambilPostinganAcak(){
		let data = await axios.post(sql, qs.stringify({
			id: konten,
			kunci: 'acak'
		}))
		data = data.data
		postinganAcak = data
	}
	ambilPostinganAcak()
</script>

<style lang="scss">
	$gray: #eaeaea;

	@media (min-width: 576px){
		.wadah {
			width: 80%;
			margin: auto;
		}
	}

	@media (max-width: 576px){
		.konten.row {
			margin: 0;
			.kartu {
				padding: 0;
			}
		}
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
		background-size: contain;
	}
	.teks-story {
		overflow: hidden;
		text-overflow: ellipsis;
		width: $ukuranStory;
		white-space: nowrap;
		font-size: 12px;
		margin-top: .5rem;
	}

	@media (min-width: 576px){
		$ukuranStoryBaru: calc(10vw - 1.3rem);
		.gambar-story {
			width: $ukuranStoryBaru;
			height: $ukuranStoryBaru;
		}
		.teks-story {
			width: $ukuranStoryBaru;
		}
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
	@include tanpa-scroll('.story');

	.garis {
		$warna: gray;
		color: $warna;
		background: $warna;
	}

	$border: 1px solid $gray;
	$jarak: 1rem !important;
	.konten {
		a {
			text-decoration: none !important;
			color: inherit !important;
			// background: blue;
		}
		.judul {
			.icon {
				$ukuran: 30px;
				width: $ukuran;
				height: auto;
			}
			.caption {
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				width: calc(100vw - 80px);
				// width: inherit;
			}
		}

		.gambar {
			width: 100%;
			height: auto;
			border-top: $border;
			border-bottom: $border;
		}

		.deskripsi {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;  
			overflow: hidden;
		}
	}

	@media (min-width: 576px){
		.konten .judul .caption {
			// width: calc(20vw - 0px);
			width: 20vw;
		}
		.konten a {
			border: $border;
			margin-bottom: $jarak;
		}
		.garis {
			margin-bottom: $jarak;
		}
	}
</style>