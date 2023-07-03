module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0, // TODO: array index as key
    '@typescript-eslint/ban-ts-comment': 0, // TODO: minimize use of @ts-ignore
  },
};
