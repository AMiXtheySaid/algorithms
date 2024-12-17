const arrayChunking = require('../functions/arrayChunking');

test('Array Chunking "[1, 2, 3, 4, 5, 6]" with size 3', () => {
    expect(arrayChunking([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
});

test('Array Chunking "[1, 2, 3, 4, 5, 6]" with size 4', () => {
    expect(arrayChunking([1, 2, 3, 4, 5, 6], 4)).toEqual([[1, 2, 3, 4], [5, 6]]);
});
