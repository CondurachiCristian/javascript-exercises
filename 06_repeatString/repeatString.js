const repeatString = function(str, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += str;
    } 
    if (times < 0) {
        result = 'ERROR'
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
