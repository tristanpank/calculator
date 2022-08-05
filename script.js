let currNumbers = [];
let currentOperator = '';
let oldOperator = '';
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
    clear.addEventListener('click', clearEverything);
    const equal = document.getElementById('=');
    equal.addEventListener('click', equalButton);
}

function updateDisplay(item) {
    const displayText = document.getElementById('display-text');
    // console.log(this.id)
    if (operatorClicked === true) {
        clearDisplay();
        display = '';
    }
    if (currentOperator === '=') {
        clearEverything();
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
    display = '';
    // currNumbers = [];
}

function clearEverything() {
    const displayText = document.getElementById('display-text');
    displayText.textContent = '';
    display = '';
    currentOperator = '';
    currNumbers = [];
}

function plusButton(item) {
    if (currentOperator === '=') {
        currentOperator = '+';
        return;
    }
    else if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '+';
        operatorClicked = true;
        display = '';
    }
    else if (currNumbers.length === 1) {
        // currentOperator = '+';
        currNumbers.push(Number(display));
        result = operate(currNumbers, currentOperator);
        console.log(result);
        addResultToDisplay(result);
        display = result;
        currNumbers = [result];
        operatorClicked = true;
        currentOperator = '+';
    }
}

function subtractButton(item) {
    if (currentOperator === '=') {
        currentOperator = '-';
        return;
    }
    else if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '-';
        operatorClicked = true;
        display = '';
    }
    else if (currNumbers.length === 1) {
        currNumbers.push(Number(display));
        result = operate(currNumbers, currentOperator);
        addResultToDisplay(result);
        display = result;
        currNumbers = [result];
        operatorClicked = true;
        currentOperator = '-';
    }
}

function multiplyButton(item) {
    if (currentOperator === '=') {
        currentOperator = '*';
        return;
    }
    else if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '*';
        operatorClicked = true;
        display = '';
    }
    else if (currNumbers.length === 1) {
        currNumbers.push(Number(display));
        result = operate(currNumbers, currentOperator);
        if (!Number.isInteger(result)) {
            result = Number.parseFloat(result).toFixed(2);
        }
        addResultToDisplay(result);
        display = result;
        currNumbers = [result];
        operatorClicked = true;
        currentOperator = '*';
    }
}

function divideButton(item) {
    if (currentOperator === '=') {
        currentOperator = '/';
        return;
    }
    else if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '/';
        operatorClicked = true;
        display = '';
    }
    else if (currNumbers.length === 1) {
        if (Number(display) == 0) {
            console.log('error');
            addResultToDisplay('ERROR');
            operatorClicked = true;
            currNumbers = [];
        }
        else {
            currNumbers.push(Number(display));
            result = operate(currNumbers, currentOperator);
            if (!Number.isInteger(result)) {
                result = Number.parseFloat(result).toFixed(2);
            }
            addResultToDisplay(result);
            display = result;
            currNumbers = [result];
            operatorClicked = true;
            currentOperator = '/';
        }
    }
}

function equalButton(item) {
    if (currentOperator === '=' || operatorClicked === true) {
        // currNumbers.push(Number(display));
        // result = operate(currNumbers, oldOperator);
        // addResultToDisplay(result);
        // display = result;
        // currNumbers = [result];
        // operatorClicked = true;
        // currentOperator = '=';
        return;
    }
    else if (currNumbers.length === 1) {
        if (Number(display) === 0 && currentOperator === '/') {
            console.log('error');
            addResultToDisplay('ERROR');
            operatorClicked = true;
            currNumbers = [];
        }
        else {
            currNumbers.push(Number(display));
            result = operate(currNumbers, currentOperator);
            if (!Number.isInteger(result)) {
                console.log('false');
                result = Number.parseFloat(result).toFixed(2);
            }
            addResultToDisplay(result);
            display = result;
            currNumbers = [result];
            operatorClicked = true;
            oldOperator = currentOperator;
            currentOperator = '=';
        }
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