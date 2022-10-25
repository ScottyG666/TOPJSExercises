const repeatString = function(word, repetitionCount) {
    let baseString = '';
    if (repetitionCount >= 0 ) {
        for (let i = repetitionCount ; i > 0; i--) {
            baseString += word;
        }
    } else {
        baseString += 'ERROR'
    }

    return baseString;
};

// Do not edit below this line
module.exports = repeatString;
