module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
        },
      },
    ],
  ],
  ignore: ['**/*/.test.ts', '**/*/.test.js', './src/types', '**/*.d.ts'],
};
