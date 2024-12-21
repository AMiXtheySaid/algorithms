function stepString(numberOfSteps) {
    let result = '';

    for (let i = 0; i < numberOfSteps; i++) {
        for (let j = 0; j < i + 1; j++) {
            result += '#';
        }

        result += '\n';
    }

    return result.slice(0, -1);
}

module.exports = stepString;
