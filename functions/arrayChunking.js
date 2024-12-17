function arrayChunking(array, size) {
    let splitted = [];

    for (let i = 0; i< array.length; i += size) {
        splitted.push(array.slice(i, i + size))
    }

    return splitted;
}

module.exports = arrayChunking;
