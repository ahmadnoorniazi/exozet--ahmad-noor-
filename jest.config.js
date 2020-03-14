module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // module must come first
    '\\.module\\.scss$': 'identity-obj-proxy',
    '\\.scss$': require.resolve('./src/__mock__/style-mock')
    // can also map files that are loaded by webpack with the file-loader
  },
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/test__tests__/**',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  projects: ['./src'],
  setupFilesAfterEnv: ['./src/setupTests.js']
}
