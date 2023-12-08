const getJestConfig = require('../../../jest.config.ut').getJestConfig;

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  ...getJestConfig(__dirname, false),
  displayName: require('./package.json').name,
  clearMocks: true,
  setupFilesAfterEnv: null,
  testPathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/.*/templates/.*',
    '\\.it\\.spec\\.ts$'
  ]
};
