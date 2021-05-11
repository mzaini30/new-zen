module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{css,js,html.otf}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js'
};