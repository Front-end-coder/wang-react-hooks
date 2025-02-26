module.exports = {
  extends: ['eslint-config-encode/typescript', 'prettier'],
  rules: {
    '@typescript-eslint/no-require-imports': 'off', // 关闭require校验
    '@typescript-eslint/ban-ts-comment': 'off', // 关闭ts-ignore校验
    'no-console': 'off', // 关闭console校验
    '@typescript-eslint/restrict-plus-operands': 'off', // 关闭+操作符校验
    'import/namespace': 'off', // 关闭namespace校验
    '@typescript-eslint/consistent-type-assertions': 'off', // 关闭类型常量断言校验
  },
};
