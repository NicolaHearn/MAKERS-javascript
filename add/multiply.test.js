const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2 * 2', () => {
    expect(multiply(3, 3)).toBe(9);
  });
});