const esModules = ['lodash-es', 'echarts', 'zrender'].join('|');
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  // transformIgnorePatterns: [
  //   'node_modules/(?!.*.mjs$)',
  //   `/node_modules/(?!${esModules}).+(js|jsx)$`,
  // ],
};
