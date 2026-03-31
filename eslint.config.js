import tsParser from "@typescript-eslint/parser";
import * as tsPluginModule from "@typescript-eslint/eslint-plugin";
import * as reactPluginModule from "eslint-plugin-react";
import * as reactHooksPluginModule from "eslint-plugin-react-hooks";
import { fileURLToPath } from "url";

const tsPlugin = tsPluginModule.default ?? tsPluginModule;
const reactPlugin = reactPluginModule.default ?? reactPluginModule;
const reactHooksPlugin =
  reactHooksPluginModule.default ?? reactHooksPluginModule;

export default [
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["**/.next/**", "**/node_modules/**"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: fileURLToPath(new URL("./", import.meta.url)),
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
];
