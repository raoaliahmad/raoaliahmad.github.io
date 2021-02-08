module.exports = {
	extends: ["plugin:react/recommended", "prettier"],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		camelcase: [0, { properties: "never" }],
		"react/prop-types": [0],
		"react/no-unescaped-entities": [1],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
}