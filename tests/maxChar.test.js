const maxChar = require('../functions/maxChar');

test('Most Frequent Characters "Hello"', () => {
    expect(maxChar('Hello')).toBe('l');
})

test('Most Frequent Characters "Hhelo"', () => {
    expect(maxChar('Hhelo')).toBe('h');
})

test('Most Frequent Characters "hhello"', () => {
    expect(maxChar('hhello')).toBe(`h,l`);
});
