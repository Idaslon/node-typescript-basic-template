module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',

    'prettier',
    'prettier/@typescript-eslint',
    // "plugin:prettier/recommended",
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-unused-vars': [
      'error', {
        'argsIgnorePatterns': 'next'
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "js": "never",
      }
    ],

    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
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
