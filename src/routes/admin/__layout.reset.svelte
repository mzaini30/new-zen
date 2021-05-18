<div class="container-fluid pt-3">
	<div class="row">
		<div class="col-sm-2">
			<div class="list-group mb-3">
				<a class="list-group-item list-group-item-action" href="/">Beranda</a>
			</div>

			<div class="list-group mb-3">
				<div class="list-group-item">POSTINGAN</div>
				<a href="/admin/olah?action=baru" class="list-group-item list-group-item-action">Baru</a>
				<a href="/admin" class="list-group-item list-group-item-action">Semua</a>
			</div>

			<div class="list-group mb-3">
				<a class="list-group-item list-group-item-action" href="/" on:click|preventDefault={keluar}>Keluar</a>
			</div>
		</div>
		<div class="col-sm mb-3">
			<slot></slot>		
		</div>
	</div>
</div>

<script>
	import {goto} from '$app/navigation'
	import {browser} from '$app/env'
	import {sql, akun} from '$lib/api'
	import axios from 'axios'
	import qs from 'qs'

	async function cekPassword(){
		if (browser) {
			let cek = await axios.post(sql, qs.stringify({
				id: akun,
				kunci: 'cek',
				username: localStorage.username,
				password: localStorage.password
			}))
			cek = cek.data[0].banyak
			if (cek < 1) {
				await goto('/login')
			}
		}
	}

	async function cek(){
		if (browser && localStorage.username) {
			cekPassword()
		} else {
			await goto('/login')
		}
	}
	cek()

	async function keluar(){
		localStorage.removeItem('username')
		localStorage.removeItem('password')
		await goto('/')
	}
</script>