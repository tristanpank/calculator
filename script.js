let currNumbers = [];
let currentOperator = '';
let display = '';
let result = 0;
let operatorClicked = false;

function main() {
    const digitButtons = Array.from(document.getElementsByClassName('digit'));
    digitButtons.forEach(function(item) {
        // console.log(button.id);
        item.addEventListener('click', updateDisplay);
    })
    const plus = document.getElementById('+');
    plus.addEventListener('click', plusButton);
    const subtract = document.getElementById('-');
    subtract.addEventListener('click', subtractButton);
    const multiply = document.getElementById('*');
    multiply.addEventListener('click', multiplyButton);
    const divide = document.getElementById('/');
    divide.addEventListener('click', divideButton);
    const clear = document.getElementById('clear');
    clear.addEventListener('click', clearDisplay);
}

function updateDisplay(item) {
    const displayText = document.getElementById('display-text');
    console.log(this.id)
    if (operatorClicked === true) {
        clearDisplay();
        display = '';
    }
    displayText.textContent += this.id;
    display += this.id;
    operatorClicked = false;
}

function addResultToDisplay(num) {
    const displayText = document.getElementById('display-text');
    displayText.textContent = num;
}

function clearDisplay() {
    const displayText = document.getElementById('display-text');
    displayText.textContent = '';
}

function plusButton(item) {
    if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '+';
        clearDisplay();
        display = '';
    }
    else if (currNumbers.length === 1) {
        currNumbers.push(Number(display));
        result = operate(currNumbers, currentOperator);
        addResultToDisplay(result);
        display = result;
        currNumbers = [result];
        operatorClicked = true;
    }
}

function subtractButton(item) {
    if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '-';
        clearDisplay();
        display = '';
    }
    else if (currNumbers.length === 1) {
        currNumbers.push(Number(display));
        result = operate(currNumbers, currentOperator);
        addResultToDisplay(result);
        display = result;
        currNumbers = [result];
        operatorClicked = true;
    }
}

function multiplyButton(item) {
    if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '-';
        clearDisplay();
        display = '';
    }
    else if (currNumbers.length === 1) {
        currNumbers.push(Number(display));
        result = operate(currNumbers, currentOperator);
        addResultToDisplay(result);
        display = result;
        currNumbers = [result];
        operatorClicked = true;
    }
}

function divideButton(item) {
    if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '/';
        clearDisplay();
        display = '';
    }
    else if (currNumbers.length === 1) {
        currNumbers.push(Number(display));
        result = operate(currNumbers, currentOperator);
        addResultToDisplay(result);
        display = result;
        currNumbers = [result];
        operatorClicked = true;
    }
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