let firstNumber = '';
let secondNumber = '';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const btn = document.querySelector('.button-grid');
const screen = document.querySelector('.screen-current');

const getNumber = (e) => {
    const number = e.target.innerText;
    firstNumber += number;
    console.log(firstNumber);
    displayNumber();
};


const displayNumber = () => {
    screen.textContent = firstNumber;
};

const resetScreen = () => {
    screen.textContent = '';
} ;

const operate = (operator, a, b) => {
    if (operator === '+') {
        return add(a, b);
    };
    if (operator === '-') {
        return subtract(a, b);
    };
    if (operator === 'x') {
        return multiply(a, b);
    };
    if (operator === '÷') {
        return divide(a, b);
    } else {
        return null;
    };
};

btn.addEventListener('click', getNumber)