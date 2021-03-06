const axios = require('axios')
const qs = require('qs')
const {sql, konten} = require('./data')
module.exports = async (req, res) => {
	let olah
	async function ambilData(){
		let data = await axios.post(sql, qs.stringify({
			id: konten,
			kunci: 'ambil-slug'
		}))
		data = data.data
		return data
	}
	olah = await ambilData()
	if (olah) {
		res.writeHead(200, {
			"Content-Type": "image\/svg+xml"
		})
		let isi = `<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9" xmlns:xhtml="http:\/\/www.w3.org\/1999\/xhtml">`
		for (let x of olah){
			isi += `
				<url>
					<loc>https:\/\/www.catatanzen.my.id\/baca?slug=${x.slug}<\/loc>
				<\/url>
			`
		}
		isi += "<\/urlset>"
		res.write(isi)
		res.end()
	}
}
