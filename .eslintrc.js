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
};