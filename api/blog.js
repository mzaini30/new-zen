const axios = require('axios')
const qs = require('qs')
const {sql, konten} = require('./data')

module.exports = async (req, res) => {
	let template
	async function ambilTemplate(){
		let data = await axios.get('https://www.catatanzen.my.id/baca')
		data = data.data
		return data
	}
	template = await ambilTemplate()

	let olah
	async function ambilData(){
		let data = await axios.post(sql, qs.stringify({
			id: konten,
			kunci: 'ambil-meta',
			slug: req.url.split('/')[1]
		}))
		data = data.data
		return data
	}
	olah = await ambilData()

	const judul = olah[0].judul
	const deskripsi = olah[0].deskripsi
	const gambar = olah[0].gambar

	if (olah) {
		template = template.replace(/<title><\/title>/, `
        	<title>${judul}</title>
        	<meta name="description" content="${deskripsi}">

        	<meta name="twitter:title" content="${judul}">
        	<meta name="twitter:description" content="${deskripsi}">
        	<meta name="twitter:image" content="${gambar}">

        	<meta property='og:title' content="${judul}">
        	<meta property='og:description' content="${deskripsi}">
        	<meta property='og:image' content="${gambar}">
        	<meta property='og:type' content="article">
        `)
	}
    res.send(template)
}