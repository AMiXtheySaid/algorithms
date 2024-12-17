const reverseString = require('../functions/reverseStringInteger');

test('Reverse "Hello"', () => {
    expect(reverseString("hello")).toBe("olleh");
})

test('Reverse "Hello   "', () => {
    expect(reverseString("hello   ")).toBe("   olleh");
})
