function spiralMatrix(rows, columns) {
    let top = 0, bottom = rows - 1, left = 0, right = columns - 1;
    let counter = 1, limit = rows * columns;

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = 0;
        }
    }

    if (rows === 0 || columns === 0) {
        return [];
    } else if (rows === 1 && columns === 1) {
        return [[1]];
    } else if (rows === 1) {
        for (let i = 0; i < columns; i++) {
            matrix[0][i] = counter++;
        }

        return matrix;
    } else if (columns === 1) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = counter++;
        }
        
        return matrix;
    }

    while (counter <= limit) {
        for (let i = left; i < right; i++) {
            matrix[top][i] = counter++;
        }
        for (let i = top; i < bottom; i++) {
            matrix[i][right] = counter++;
        }
        for (let i = right; i > left; i--) {
            matrix[bottom][i] = counter++;
        }
        for (let i = bottom; i > top; i--) {
            matrix[i][left] = counter++;
        }
        top++; bottom--; left++; right--;
    }
    
    return matrix;
}

console.log(spiralMatrix(4, 1));

module.exports = spiralMatrix;
