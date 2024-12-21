function titleCaseTransform2(str) {
    str = str.split("");

    while (str[0] === ' ') {
        str.shift();
    }

    str[0] = str[0].toUpperCase();
    for (let index = 0; index < str.length; index++) {
        if (str[index - 1] === ' ') {
            str[index] = str[index].toUpperCase();
        }
    }

    return str.join("");
}

module.exports = { titleCaseTransform2 };
