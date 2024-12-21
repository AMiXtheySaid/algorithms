function pyramidString(numberOfSteps) {
    if (numberOfSteps === 0) {
        return '';
    } else if (numberOfSteps === 1) {
        return '#';
    } else {
        let result = '';

        for(let i = 1; i <= numberOfSteps; i++) {
            for(let j = numberOfSteps; j >= i + 1; j--) {
                result += ' ';
            }
            for (let j = 0; j < 2 * i - 1; j++) {
                result += '#';
            }

            result += '\n';
        }

        return result.slice(0, -1);
    }
}

module.exports = pyramidString;
