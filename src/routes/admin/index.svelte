<svelte:head>
	<title>Admin</title>
</svelte:head>

<div class="mb-3">
	<form action="">
		<input type="text" class="form-control" placeholder="Cari Apa?" required>
	</form>
</div>

<div class='mb-3'>
	<div class="list-group">
		{#if semuaData}
			{#each semuaData as x}
				<a href="/admin/olah?action=edit&slug={x.slug}" class="list-group-item list-group-item-action">{x.judul}</a>
			{/each}
		{/if}
	</div>
</div>

<script>
	import {sql, konten} from '$lib/api'
	import axios from 'axios'
	import qs from 'qs'

	let semuaData

	async function ambilData(){
		let data = await axios.post(sql, qs.stringify({
			id: konten,
			kunci: 'ringkasan'
		}))
		data = data.data
		semuaData = data
	}
	ambilData()
</script>