const sumAll = function(firstNumber, secondNumber) {
   if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && firstNumber < secondNumber && firstNumber > 0 && secondNumber > 0) {
    let arr = [];
    while (firstNumber <= secondNumber) {
       arr.push(firstNumber)
       firstNumber++
    }
    const initialValue = 0;
    const sumWithInitial = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue,
    );
    return sumWithInitial
   } else if (firstNumber > secondNumber) {
    let arr = [];
    while (secondNumber <= firstNumber) {
       arr.push(secondNumber)
       secondNumber++
    }
    const initialValue = 0;
    const sumWithInitial = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue,
    );
    return sumWithInitial
   } else {
    return "ERROR"
   }
};

// Do not edit below this line
module.exports = sumAll;
