<div class="container-fluid pt-3">
	<div class="row">
		<div class="col-sm-2">
			<div class="list-group mb-3">
				<div class="list-group-item">POSTINGAN</div>
				<a href="/admin/olah?action=baru" class="list-group-item list-group-item-action">Baru</a>
				<a href="/admin" class="list-group-item list-group-item-action">Semua</a>
			</div>

			<div class="list-group mb-3">
				<div class="list-group-item list-group-item-action">Keluar</div>
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
	import axios from 'axios'
	import qs from 'qs'

	async function cek(){
		if (browser && localStorage.username) {

		} else {
			await goto('/login')
		}
	}
	cek()
</script>