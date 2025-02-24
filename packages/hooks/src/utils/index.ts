// 使用value is string类型保护返回类型,在判断为真时能明确value是string类型，调用string的方法
// 如果直接使用boolean类型返回，那么value值还是作为unknown类型，就无法调用string的方法
export const isString = (value: unknown): value is string => typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined';

export const isObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object';

export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === 'function';
