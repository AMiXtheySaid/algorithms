const spiralMatrix = require('../functions/spiralMatrix');

test('Spiral Matrix of 4x4', () => {
    expect(spiralMatrix(4, 4)).toEqual([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]);
});

test('Spiral Matrix of 1x4', () => {
    expect(spiralMatrix(1, 4)).toEqual([[1, 2, 3, 4]]);
});

test('Spiral Matrix of 4x1', () => {
    expect(spiralMatrix(4, 1)).toEqual([[1], [2], [3], [4]]);
});

test('Spiral Matrix of 1x1', () => {
    expect(spiralMatrix(1, 1)).toEqual([[1]]);
});

test('Spiral Matrix of 0x0', () => {
    expect(spiralMatrix(0, 0)).toEqual([]);
});
