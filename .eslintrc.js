module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "react",
    "react-native",
    "prettier"
  ],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    "@thoughtbot/eslint-config/native",
    "@thoughtbot/eslint-config/typescript",
    'prettier',
    'prettier/@typescript-eslint'
  ],
  "rules": {
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
};