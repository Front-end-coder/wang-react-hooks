import * as w-hooks from '../index';

describe('w-hooks', () => {
  it('exports modules should be defined', () => {
    Object.keys(w-hooks).forEach((module) => {
      expect(w-hooks[module]).toBeDefined();
    });
  });
});
