module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['prettier', 'vue'],
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        arrowParens: 'always',
        // insertPragma: true,
        'no-console': 'off',
      },
    ],
    'no-console': 'off',
    'space-before-function-paren': 0,
    'vue/max-attributes-per-line': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
