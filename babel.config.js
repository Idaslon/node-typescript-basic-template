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
          '@types': './src/types',
          '@services': './src/services',
          '@controllers': './src/app/controllers',
          '@middlewares': './src/app/middlewares',
          '@schemas': './src/app/schemas',
          '@validations': './src/app/validations',
          '@utils': './src/app/utils',
          '@config': './src/config',
          '@': './src',
        },
      },
    ],
  ],
  ignore: ['**/*/.test.ts', '**/*/.test.js', './src/types', '**/*.d.ts'],
};
