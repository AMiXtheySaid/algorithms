const stepString = require('../functions/stepString');

test('Step String for 5 steps', () => {
    expect(stepString(5)).toBe("#\n##\n###\n####\n#####");
});

test('Step String for 1 steps', () => {
    expect(stepString(1)).toBe("#");
});

test('Step String for 0 steps', () => {
    expect(stepString(0)).toBe("");
});
