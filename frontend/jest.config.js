/* eslint-disable no-dupe-keys */
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    './components/**/*.ts(x)?',
    '!./**/stories.tsx',
    '!./pages/**/*.ts(x)?',
    '!./selects/**/*.ts(x)?',
    '!./styles/**/*.ts',
    '!./utils/graphql/apollo.ts',
    '!./utils/graphql/apolloCache.ts',
    '!./types/**/*.d.ts',
    '!./graphql/**/*.ts',
    '!./contexts/**/*.tsx',
    '!./**/mock.ts',
    '!./utils/helpers/*.tsx',
    '!./utils/tests/helpers.tsx',
    '!./components/**/mock.tsx',
    '!./components/**/test.tsx'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/file-mock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/antd',
    '^utils(.*)$': '<rootDir>/src/utils$1'
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/', '<rootDir>/.jest'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss|png|jpeg|jpg|svg)$'
  ]
}
