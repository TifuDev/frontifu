module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
