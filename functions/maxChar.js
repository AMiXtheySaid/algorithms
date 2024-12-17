function maxChar(str) {
    let charVector = {};

    let maxAppearance = 0;
    let mostFrequent = [];

    str = str.toLowerCase();

    for (let char of str) {
        charVector[char] = (charVector[char] || 0) + 1;
    }

    for (let char in charVector) {
        if (charVector[char] > maxAppearance) {
            maxAppearance = charVector[char];
            mostFrequent = [char];
        } else if (charVector[char] === maxAppearance) {
            mostFrequent.push(char);
        }
    }

    return mostFrequent.toString();
}

module.exports = maxChar;
