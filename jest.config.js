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
  setupFiles: ['./jest.setup.js', 'jest-localstorage-mock'], // 它会在 Jest 加载测试文件之前运行，在这个阶段，Jest 的测试框架（如 describe、it 等）还未准备好
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // 此时测试框架已经准备好，可以在这些文件中使用 Jest 的 API 进行一些测试前的准备工作。例如导入jest-dom扩展expect能力
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
