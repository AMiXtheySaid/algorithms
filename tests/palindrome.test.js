const { palindrome } = require("../functions/palindrome");

test('Palindrome "121"', () => {
    expect(palindrome("121")).toBe(true);
})

test('Palindrome "122"', () => {
    expect(palindrome("122")).toBe(false);
})
