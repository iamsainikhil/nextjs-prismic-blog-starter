module.exports = {
	presets: [
		[
			'next/babel',
			{
				'preset-react': {
					importSource: 'theme-ui',
					runtime: 'automatic',
					throwIfNamespace: false,
				},
			},
		],
	],
}