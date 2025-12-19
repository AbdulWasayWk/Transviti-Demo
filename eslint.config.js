import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		plugins: {
			"unused-imports": unusedImports,
		},
		rules: {
			"react/react-in-jsx-scope": "off",
			camelcase: "error",
			"spaced-comment": "error",
			quotes: ["error", "double", "avoid-escape"],
			"no-duplicate-imports": "error",
			"react/prop-types": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{ vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
			],
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
	},
]);
