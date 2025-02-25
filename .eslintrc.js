module.exports = {
  extends: ['eslint-config-encode/typescript', 'prettier'],
  rules: {
    '@typescript-eslint/no-require-imports': 'off', // 关闭require校验
    '@typescript-eslint/ban-ts-comment': 'off', // 关闭ts-ignore校验
    'no-console': 'off', // 关闭console校验
    '@typescript-eslint/restrict-plus-operands': 'off', // 关闭+操作符校验
  },
};
