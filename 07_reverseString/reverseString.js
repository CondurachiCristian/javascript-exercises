const reverseString = function(str) {
    let arr = Array.from(str);
    let revArr = arr.reduce((acc, current) => 
    [current, ...acc], []);
    revStr = revArr.join('');
    return revStr
};

// Do not edit below this line
module.exports = reverseString;
