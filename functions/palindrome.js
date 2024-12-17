function palindrome(str) {
    return true ? str.split('').reverse().join('') === str : false;
}

module.exports = { palindrome };
