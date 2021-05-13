<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="container pt-3">
	<h1 class="text-center">Login</h1>
	<hr>
	<form action="" on:submit|preventDefault={cekPassword}>
		<div class="mb-3">
			<label for="">Username</label>
			<input type="text" required class="form-control" bind:value={datanya.username}>
		</div>
		<div class="mb-3">
			<label for="">Password</label>
			<input type="password" required class="form-control" bind:value={datanya.password}>
		</div>
		<div class="mb-3">
			<input type="submit" class="btn btn-primary" value="Login">
		</div>
	</form>
</div>

<script>
	import axios from 'axios'
	import qs from 'qs'
	import {sql, akun} from '$lib/api'
	import {goto} from '$app/navigation'
	import {browser} from '$app/env'

	let datanya = {}

	async function cekPassword(){
		let cek = await axios.post(sql, qs.stringify({
			id: akun,
			kunci: 'cek',
			username: datanya.username,
			password: datanya.password
		}))
		cek = cek.data[0].banyak
		if (cek > 0) {
			if (browser) {
				localStorage.setItem('username', datanya.username)
				localStorage.setItem('password', datanya.password)
				await goto('/admin')
			}
		} else {
			alert('Username dan Password Salah')
		}
	}
</script>