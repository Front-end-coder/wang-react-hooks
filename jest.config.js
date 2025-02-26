/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest/presets/js-with-ts', // ts环境预设
  testEnvironment: 'jsdom', // 在node中模拟浏览器环境
  clearMocks: true, // 每次测试前清空调用信息
  testPathIgnorePatterns: ['/.history/'], // 测试忽略文件
  modulePathIgnorePatterns: ['<rootDir>/package.json'], // 模块解析时应该忽略的文件
  resetMocks: false, // 每次测试前不重置模拟函数
  setupFiles: ['./jest.setup.js', 'jest-localstorage-mock'], // 每次执行测试文件之前执行的文件
  setupFilesAfterEnv: ['@testing-library/jest-dom/matchers'], // 每次执行测试文件之前执行的文件，在测试环境初始化后执行，注入更多的expect情况
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  }, // ts-jest转换ts、tsx文件
  collectCoverageFrom: [
    '<rootDir>/**/src/**/*.{js,jsx,ts,tsx}',
    '!**/demo/**',
    '!**/example/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/dist/**',
  ], // 定义哪些文件应该被收集测试覆盖率信息
  transformIgnorePatterns: ['^.+\\.js$', '/node_modules/(?!(lodash-es)/)'], // ts文件不转换
};

module.exports = config;
