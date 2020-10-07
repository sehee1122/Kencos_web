module.exports = {
  globals: {
    PATH: 'http://localhost:8080'
  },
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '^.+\\.svg$': '<rootDir>/private/jest/svgMock.js',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^atoms(.*)$': '<rootDir>/src/components/atoms$1',
    '^molecules(.*)$': '<rootDir>/src/components/molecules$1',
    '^organism(.*)$': '<rootDir>/src/components/organism$1',
    '^templates(.*)$': '<rootDir>/src/components/templates$1',
    '^pages(.*)$': '<rootDir>/src/components/pages$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  modulePathIgnorePatterns: [
    'node_modules'
  ],
  testMatch: [
    '**/src/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
