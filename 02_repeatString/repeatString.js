const repeatString = function(word, numberOfTimes) {
    let repeatedWord = '';
    if (numberOfTimes < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < numberOfTimes; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
