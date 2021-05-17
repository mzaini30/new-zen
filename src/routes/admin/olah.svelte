<div class="row">
	<div class="col-sm">
		<form action="">
			<div class="mb-3">
				<input type="text" class="form-control" placeholder="Judul" bind:value={datanya.judul} required>
			</div>
			<div class="mb-3">
				<input type="text" bind:value={datanya.label} class="form-control" placeholder="Label" required>
			</div>
			<div class="mb-3">
				<textarea name="" id="" bind:this={isian} bind:value={datanya.isi} cols="30" rows="10" class="form-control" placeholder="Isinya" required></textarea>
			</div>
			<div class="mb-3">
				{#if $page.query.get('action') == 'edit'}
					<div class="d-flex justify-content-between">
						<div class="">
							<input type="submit" class="btn btn-warning" value="Update">
						</div>
						<div class="">
							<div class="btn btn-danger">Hapus</div>
						</div>
					</div>
				{:else}
					<input type="submit" class="btn btn-success" value="Kirim">
				{/if}
			</div>
		</form>
	</div>
	<div class="col-sm">
		<div class="preview p-3" bind:this={preview}>
			{#if datanya.isi}
				{@html yt(marked(datanya.isi))}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.preview {
		height: 300px;
		overflow: auto;
		border: 1px solid #eaeaea;
	}
</style>

<svelte:head>
	<title>Olah Tulisan</title>
	<link rel="stylesheet" href="/agate.min.css">
</svelte:head>

<script>
	import {page} from '$app/stores'
	import {browser} from '$app/env'
	import {onMount} from 'svelte'
	import marked from 'marked'
	import yt from 'embed-youtube'
	import pkg from 'highlight.js'
	const {highlight} = pkg
	import {sql, konten} from '$lib/api'
	import axios from 'axios'
	import qs from 'qs'
	import {tanggal, slug} from 'kumpulan-tools'
	import ambilGambar from 'ambil-gambar'

	marked.setOptions({
		breaks: true,
		highlight: function(code, lang){
			if (lang == ""){
				lang = "javascript"
			}
			return highlight(lang, code).value
		}
	})

	let isian
	let preview

	function tinggi(){
		function aturTinggi(){
			isian.style.height = `${window.innerHeight - 210}px`
		}
		aturTinggi()
		window.addEventListener('resize', aturTinggi)
	}

	function tinggiPreview(){
		function aturTinggi(){
			preview.style.height = `${window.innerHeight - 40}px`
		}
		aturTinggi()
		window.addEventListener('resize', aturTinggi)
	}

	onMount(() => {
		tinggi()
		tinggiPreview()
	})

	let datanya = {}
	async function ambilData(){
		let data = await axios.post(sql, qs.stringify({
			id: konten,
			kunci: 'ambil-edit',
			slug: $page.query.get('slug')
		}))
		data = data.data
		datanya = data[0]
	}

	function ambil(){
		if ($page.query.get('action') == 'edit') {
			ambilData()
		}
	}
	$: if ($page.query.get('action')) {
		ambil()
	}

	function kosongkan(){
		if ($page.query.get('action') == 'baru') {
			datanya = {}
		}
	}
	$: if ($page.query.get('action')) {
		kosongkan()
	}
</script>