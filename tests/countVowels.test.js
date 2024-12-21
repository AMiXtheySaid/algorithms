const { countVowels } = require('../functions/countVowels');

test('Count Vowels "Word"', () => {
  expect(countVowels('Word')).toBe(1);
});
