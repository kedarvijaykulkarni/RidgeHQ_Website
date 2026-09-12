const nextJest = require('next/jest')

// Uses Next.js's built-in SWC transform (via next/jest) so TypeScript/JSX
// tests run with zero extra transform dependencies, and picks up the same
// tsconfig paths (@/...) the app uses.
const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
}

module.exports = createJestConfig(customJestConfig)
