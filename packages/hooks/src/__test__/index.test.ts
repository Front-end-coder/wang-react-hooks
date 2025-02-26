import * as wangReactHooks from '../index';

describe('wangReactHooks', () => {
  it('exports modules should be defined', () => {
    Object.keys(wangReactHooks).forEach((module) => {
      expect(wangReactHooks[module]).toBeDefined();
    });
  });
});
