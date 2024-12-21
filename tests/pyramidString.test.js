const pyramidString = require('../functions/pyramidString');

test('Pyramid String function of 5 steps', () => {
    expect(pyramidString(5)).toBe('    #\n   ###\n  #####\n #######\n#########');
});

test('Pyramid String function of 1 step', () => {
    expect(pyramidString(1)).toBe('#');
});

test('Pyramid String function of 0 steps', () => {
    expect(pyramidString(0)).toBe('');
});
