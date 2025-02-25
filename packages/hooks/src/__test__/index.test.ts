import * as encodeHooks from '../index';

describe('encodeHooks', () => {
  it('exports modules should be defined', () => {
    Object.keys(encodeHooks).forEach((module) => {
      expect(encodeHooks[module]).toBeDefined();
    });
  });
});
