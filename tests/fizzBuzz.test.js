const fizzBuzz = require('../functions/fizzBuzz');

test('fizzBuzz for 1 to 15', () => {
  expect(fizzBuzz(15)).toBe("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz.");
});

test('fizzBuzz for 0', () => {
    expect(fizzBuzz(0)).toBe("FizzBuzz.");
});
