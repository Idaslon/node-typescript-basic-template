module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',

    'prettier/@typescript-eslint',

    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'import-helpers', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-new': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-constructor': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',

    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',

    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        js: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^express/',
          'module',
          '/^~/app/controllers/',
          '/^~/app/middlewares/',
          '/^~/app/validations/',
          '/^~/app/schemas/',
          '/^~/app/utils/',
          '/^~/app/',
          '/^~/config/',
          '/^~/types/',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
