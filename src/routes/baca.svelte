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
	{#if komentarnya}
		{#each komentarnya as item, index}
			<div class="d-flex">
				<div class="bagian-gambar flex-shrink-0">
					<img src={gravatar.url(item.email)} alt="" class="d-block mb-3">
				</div>
				<div class="bagian-komentar flex-grow-1">
					<p class="ps-3">
						<a href={item.blog} rel="nofollow" class="">{item.nama}</a>
						{item.komentar}	
					</p>
				</div>
			</div>
		{/each}
	{:else}
		<div class="d-flex align-items-center">
			<div class="bagian-gambar flex-shrink-0">
				<img src="/logo.png" alt="" class="d-block mb-2">
			</div>
			<div class="bagian-komentar flex-grow-1">
				<p class="ps-3 mb-1"><strong>Belum Ada Komentar</strong></p>
			</div>
		</div>
	{/if}
</div>

<hr class="gray">

<div class="p-3">
	<p><strong>Masukkan Komentar</strong></p>
	<form action="" on:submit|preventDefault={kirimKomentar}>
		<div class="mb-3">
			<label for="">Nama</label>
			<input type="text" class="form-control" bind:value={komentarBaru.nama} required>
		</div>
		<div class="mb-3">
			<label for="">Email</label>
			<input type="email" class="form-control" bind:value={komentarBaru.email} required>
		</div>
		<div class="mb-3">
			<label for="">Blog</label>
			<input type="text" class="form-control" bind:value={komentarBaru.blog} required>
		</div>
		<div class="mb-3">
			<label for="">Komentar <em>(enter diabaikan)</em></label>
			<textarea name="" id="" cols="30" rows="10" class="form-control" bind:value={komentarBaru.komentar} required></textarea>
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
	import {sql, konten, komentar as idKomentar} from '$lib/api'
	import pkg from 'highlight.js'
	const {highlight} = pkg
	import {browser} from '$app/env'
	// import {highlight} from 'highlight.js'
	import gravatar from 'gravatar'

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
	let komentarBaru = {nama: '', email: '', blog: '', komentar: ''}
	if (browser && localStorage.dataKomentar) {
		komentarBaru = JSON.parse(localStorage.dataKomentar)
	}

	async function ambilKomentar(){
		let data = await axios.post(sql, qs.stringify({
			id: idKomentar,
			kunci: 'ambil',
			slug: $page.query.get('slug')
		}))
		data = data.data
		komentarnya = data
	}
	ambilKomentar()

	async function kirimKomentar(){
		const kirim = await axios.post(sql, qs.stringify({
			id: idKomentar,
			kunci: 'tambah',
			nama: komentarBaru.nama,
			email: komentarBaru.email,
			blog: komentarBaru.blog,
			komentar: komentarBaru.komentar,
			slug: $page.query.get('slug')
		}))
		if (kirim) {
			alert('Komentar Sudah Terkirim')
			komentarBaru.komentar = ''
			browser && localStorage.setItem('dataKomentar', JSON.stringify(komentarBaru))
			ambilKomentar()
		}
	}
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

	.konten .isi :global(img){
		display: block;
		margin: auto;
	}

	.komentar {
		img {
			width: 40px;
			height: auto;
			border-radius: 50%;
			border: 1px solid $gray;
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