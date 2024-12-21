const { anagram } = require('../functions/anagram');

test("Anagram: 'Listen', 'Silent'", () => {
    expect(anagram('Listen', 'Silent')).toBe(true);
})

test("Anagram: 'nothing', 'more'", () => {
    expect(anagram('nothing', 'more')).toBe(false);
})
