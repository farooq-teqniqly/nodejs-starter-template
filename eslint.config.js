import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
      semi: ["warn", "always"],
    },
  },
];
