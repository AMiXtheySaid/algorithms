function fizzBuzz(number) {
    let answer = [];
    
    if (number === 0) {
        return 'FizzBuzz.'.toString();
    } else {
        for (let i = 1; i < number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                answer.push('FizzBuzz, ');
            } else if (i % 3 === 0) {
                answer.push('Fizz, ');
            } else if (i % 5 === 0) {
                answer.push('Buzz, ');
            } else {
                answer.push(`${i}, `);
            }
        }

    }

    if (number % 3 === 0 && number % 5 === 0) {
        answer.push('FizzBuzz.');
    } else if (number % 3 === 0) {
        answer.push('Fizz.');
    } else if (number % 5 === 0) {
        answer.push('Buzz.');
    } else {
        answer.push(`${number}.`);
    }

    return answer.join('');
}

module.exports = fizzBuzz;
