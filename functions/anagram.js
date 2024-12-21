function anagram(str1, str2) {
    str1 = str1.toLowerCase().split("");
    str2 = str2.toLowerCase().split("");

    str1 = str1.sort().join("");
    str2 = str2.sort().join("");

    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

module.exports = { anagram };
