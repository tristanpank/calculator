let currNumbers = [];
let currentOperator = '';

function main() {
    currNumbers = [4, 5]
    currentOperator = '+'
    console.log(operate(currNumbers, currentOperator));
}



function add(currentNumbers) {
    // console.log(currentNumbers[0])
    // console.log(currentNumbers[1])
    return currentNumbers[0] + currentNumbers[1];
}

function subtract(currentNumbers) {
    return currentNumbers[0] - currentNumbers[1];
}

function multiply(currentNumbers) {
    return currentNumbers[0] * currentNumbers[1];
}

function divide(currentNumbers) {
    return currentNumbers[0] / currentNumbers[1];
}

function operate(numbersArray, operator) {
    if (operator == '+') {
        return add(numbersArray);
    }
    else if (operator == '-') {
        return subtract(numbersArray);
    }
    else if (operator == '*') {
        return multiply(numbersArray);
    }
    else if (operator == '/') {
        return divide(numbersArray);
    }
}

main();