<svelte:head>
	<title>{tulisan.judul}</title>
	<link rel="stylesheet" href="/agate.min.css">
</svelte:head>

<img src={tulisan.gambar} alt="" class="gambar">

<div class="konten p-3 pb-0">
	<h1>{tulisan.judul}</h1>
	<p><em>{tulisan.tanggal}</em></p>
	<div class="isi">
		{@html yt(marked(tulisan.isi))}
	</div>
</div>

<hr class="gray">

<div class="komentar p-3 pt-2 pb-0">
	{#each komentarnya as item, index}
		<div class="d-flex">
			<div class="">
				<img src="/logo.png" alt="" class="">
			</div>
			<div class="bagian-komentar">
				<p class="ps-3">
					<a href={item.blog} rel="nofollow" class="">Zen</a>
					Bagus ini tulisannya. Bakal menjadi bagus lagi kalau...
				</p>
			</div>
		</div>
	{/each}
</div>

<hr class="gray">

<div class="p-3">
	<p><strong>Masukkan Komentar</strong></p>
	<form action="">
		<div class="mb-3">
			<label for="">Nama</label>
			<input type="text" class="form-control" required>
		</div>
		<div class="mb-3">
			<label for="">Email</label>
			<input type="email" class="form-control" required>
		</div>
		<div class="mb-3">
			<label for="">Blog</label>
			<input type="text" class="form-control" required>
		</div>
		<div class="mb-3">
			<label for="">Komentar <em>(enter diabaikan)</em></label>
			<textarea name="" id="" cols="30" rows="10" class="form-control" required></textarea>
		</div>
		<div class="mb-3">
			<input type="submit" class="btn btn-success" value="Kirim">
		</div>
	</form>
</div>

<script>
	let tulisan = {judul: '', isi: '', tanggal: '', gambar: ''}

	import axios from 'axios'
	import qs from 'qs'
	import {tanggal, slug} from 'kumpulan-tools'
	import yt from 'embed-youtube'
	import marked from 'marked'
	import {page} from '$app/stores'
	import {sql, konten} from '$lib/api'
	import pkg from 'highlight.js'
	const {highlight} = pkg
	// import {highlight} from 'highlight.js'

	marked.setOptions({
		breaks: true,
		highlight: function(code, lang){
			if (lang == ""){
				lang = "javascript"
			}
			return highlight(lang, code).value
		}
	})

	async function dapatkanTulisan(){
		let data = await axios.post(sql, qs.stringify({
			id: konten,
			kunci: 'ambil',
			slug: $page.query.get('slug')
		}))
		data = data.data
		tulisan = data[0]
	}
	dapatkanTulisan()

	let komentarnya = [{nama: '', email: '', blog: '', komentar: ''}]
</script>

<style lang="scss">
	$gray: #eaeaea;
	.gambar {
		width: 100%;
		height: auto;
		border-bottom: 1px solid $gray;
		border-top: 1px solid $gray;
	}

	hr.gray {
		color: gray;
		background: gray;
	}

	.komentar {
		img {
			width: 40px;
			height: auto;
		}

		.bagian-komentar {
			a {
				font-weight: bold;
				text-decoration: none !important;
				color: inherit !important;
			}
		}
	}
</style>