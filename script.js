let currNumbers = [];
let currentOperator = '';
let oldOperator = '';
let display = '';
let result = 0;
let operatorClicked = false;

function main() {
    //adds all the even listeners to each button
    
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
    
    //will change the display depending on conditions
    const displayText = document.getElementById('display-text');
    // console.log(this.id)
    //display is wiped before adding new content
    if (operatorClicked === true) {
        clearDisplay();
        display = '';
    }
    //resets all information if equal sign was pressed prior to a button
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
    //only clears display without clearing currNumbers array
    const displayText = document.getElementById('display-text');
    displayText.textContent = '';
    display = '';
    // currNumbers = [];
}

function clearEverything() {
    //wipes all information including currNumbers
    const displayText = document.getElementById('display-text');
    displayText.textContent = '';
    display = '';
    currentOperator = '';
    currNumbers = [];
}

//each function first checks whether an "=" was pressed first
//this is to ensure that code doesn't break and perform weird
//pressing an operator directly after "=" will simply do nothing

function plusButton(item) {
    if (currentOperator === '=') {
        currentOperator = '+';
        return;
    }
    //if no numbers are stored
    //stores the first set of numbers
    else if (currNumbers.length === 0) {
        currNumbers.push(Number(display));
        currentOperator = '+';
        operatorClicked = true;
        display = '';
    }
    //if a set of numbers already stored
    //performs operation based on that and current display
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
        //for multiplying and dividing
        //rounds number if necessary
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