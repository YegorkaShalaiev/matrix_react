module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs'],
	rules: {
		'max-len': ['error', { 'code': 120 }],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		indent: ['error', 'tab'],
		'comma-dangle': ['error', 'always-multiline'],
		'object-curly-spacing': ['error', 'always'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
