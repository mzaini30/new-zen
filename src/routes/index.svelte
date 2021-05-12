<svelte:head>
	<title>Zen</title>
</svelte:head>

<div class="story d-flex">
	{#each postinganAcak as item, index}
		<a href="/baca?slug={item.slug}" class="link-story">
			<span class="gambar-story d-block" style="background-image: url('{item.gambar}');"></span>
			<p class="text-center teks-story">{item.judul}</p>
		</a>		
	{/each}
	<div class="link-story">&nbsp;</div>
</div>

<hr class="m-0 garis">

<div class="konten">
	{#each postinganBaru as item, index}
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
	{/each}
</div>

<script>
	// const listGambar = [
	// 	{caption: 'Hello World', gambar: '57244247.png', deskripsi: 'Main sepeda'},
	// 	{caption: 'Bagaimana Kabarmu?', gambar: 'gnukoyvz5xlacuwdymrf.png', deskripsi: 'Walau memang ada orang yang nggak suka denganmu, kamu tetaplah maju untuk melakukan yang terbaik yang bisa kamu lakukan. Kamu pasti bisa melakukannya kalau kamu mau mencobanya. Coba aja deh.'},
	// 	{caption: 'Kehidupan yang Baik adalah Kehidupan yang Bagus', gambar: 'medium_logo-transistor.png', deskripsi: 'Walau memang ada orang yang nggak suka denganmu, kamu tetaplah maju untuk melakukan yang terbaik yang bisa kamu lakukan. Kamu pasti bisa melakukannya kalau kamu mau mencobanya. Coba aja deh.'},
	// 	{caption: 'Satu Lagi yang Bagus', gambar: 'p3nn57r52krvpdieblta.png', deskripsi: 'Walau memang ada orang yang nggak suka denganmu, kamu tetaplah maju untuk melakukan yang terbaik yang bisa kamu lakukan. Kamu pasti bisa melakukannya kalau kamu mau mencobanya. Coba aja deh.'},
	// 	{caption: 'Tebal atau Miring?', gambar: 'QmVyBFY4RAARhZsvmkmy2BCFh8pZE5ENBHBMjV4V3z75m5.png', deskripsi: 'Walau memang ada orang yang nggak suka denganmu, kamu tetaplah maju untuk melakukan yang terbaik yang bisa kamu lakukan. Kamu pasti bisa melakukannya kalau kamu mau mencobanya. Coba aja deh.'},
	// 	{caption: 'Excalibur, Suatu Legenda', gambar: 'socialmedia.png', deskripsi: 'Walau memang ada orang yang nggak suka denganmu, kamu tetaplah maju untuk melakukan yang terbaik yang bisa kamu lakukan. Kamu pasti bisa melakukannya kalau kamu mau mencobanya. Coba aja deh.'},
	// ]

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
	@include tanpa-scroll('.story');

	.garis {
		$warna: gray;
		color: $warna;
		background: $warna;
	}

	.konten {
		a {
			text-decoration: none !important;
			color: inherit !important;
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
				// background: green;
				overflow: hidden;
				width: calc(100vw - 80px);
			}
		}

		.gambar {
			$border: 1px solid $gray;
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
</style>