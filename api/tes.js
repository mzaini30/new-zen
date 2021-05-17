const axios = require('axios')

async function init(){
	let template
	async function ambilTemplate(){
		let data = await axios.get('https://www.catatanzen.my.id/baca/template.html')
		data = data.data
		return data
	}
	template = await ambilTemplate()
	console.log(template)
}
init()