module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{css,js,html}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js'
};