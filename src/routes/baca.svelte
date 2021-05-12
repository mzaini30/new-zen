<svelte:head>
	<title>Baca Artikel</title>
	<link rel="stylesheet" href="/agate.min.css">
</svelte:head>

<img src="/contoh/QmVyBFY4RAARhZsvmkmy2BCFh8pZE5ENBHBMjV4V3z75m5.png" alt="" class="gambar">

<div class="konten p-3 pb-0">
	<h1>Ini Adalah Judulnya</h1>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe tenetur ex maiores sed magni sunt aliquam exercitationem repudiandae odit eaque optio, unde voluptas nemo expedita, perferendis. Id perspiciatis explicabo eveniet?</p>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe tenetur ex maiores sed magni sunt aliquam exercitationem repudiandae odit eaque optio, unde voluptas nemo expedita, perferendis. Id perspiciatis explicabo eveniet?</p>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe tenetur ex maiores sed magni sunt aliquam exercitationem repudiandae odit eaque optio, unde voluptas nemo expedita, perferendis. Id perspiciatis explicabo eveniet?</p>
</div>

<hr class="gray">

<div class="komentar p-3 pt-2 pb-0">
	{#each Array(10) as item, index}
		<div class="d-flex">
			<div class="">
				<img src="/logo.png" alt="" class="">
			</div>
			<div class="bagian-komentar">
				<p class="ps-3">
					<a href="/" rel="nofollow" class="">Zen</a>
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
			<input type="text" class="form-control">
		</div>
		<div class="mb-3">
			<label for="">Email</label>
			<input type="email" class="form-control">
		</div>
		<div class="mb-3">
			<label for="">Blog</label>
			<input type="url" class="form-control">
		</div>
		<div class="mb-3">
			<label for="">Komentar <em>(baris baru akan dihapus)</em></label>
			<textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
		</div>
		<div class="mb-3">
			<input type="submit" class="btn btn-success" value="Kirim">
		</div>
	</form>
</div>

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