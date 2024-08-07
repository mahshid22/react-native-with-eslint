import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    rules: {
      "no-console": "error",
      "react/prop-types": "error",
      "react/react-in-jsx-scope": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "prefer-const": "error",
      "@typescript-eslint/no-var-requires": "off",
      "no-console": "error",
      "no-alert": "error",
      "no-debugger": "error"
    }
  },
  {languageOptions: {globals: globals.browser}},
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
