const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('returns fizzBuzz if the number is a multiple of 3 and 5', () => {
    result = fizzBuzz(20);
    expect(result[14]).toBe('FizzBuzz');
  });

  it('returns fizz if the number is a multiple of 3 and not of 5', () => {
    result = fizzBuzz(20);

    expect(result[2]).toBe('Fizz');
  });

  it('returns buzz if the number is a multiple of 5 and not of 3', () => {
    result = fizzBuzz(20);

    expect(result[4]).toBe('Buzz');
  });

  it('returns the round number if it is neither a multiple of 3 nor 5', () => {
    result = fizzBuzz(20);

    expect(result[6]).toBe(7);
  });

  it('returns the number of rounds input by the user as an argument', () => {
    result = fizzBuzz(40);

    expect(result.pop()).toBe('Buzz');
  });
});