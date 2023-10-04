let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let shouldResetScreen = false;

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const pointBtn = document.getElementById("pointBtn");
const currentScreen = document.getElementById("currentScreen");
const lastScreen = document.getElementById("lastScreen");

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => appendNumber(btn.textContent));
});

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", () => setOperation(btn.textContent));
});

const appendNumber = (number) => {
  if (currentScreen.textContent === "0" || shouldResetScreen) {
    resetScreen();
  }
  currentScreen.textContent += number;
};

const resetScreen = () => {
  currentScreen.textContent = "";
  shouldResetScreen = false;
};

const setOperation = (operator) => {
  if (currentOperation !== null) evaluate();
  firstNumber = currentScreen.textContent;
  currentOperation = operator;
  lastScreen.textContent = `${firstNumber} ${currentOperation}`;
  shouldResetScreen = true;
};

const clear = () => {
  currentScreen.textContent = "0";
  lastScreen.textContent = "";
  firstNumber = "";
  secondNumber = "";
  currentOperation = null;
};

const deleteNumber = () => {
  currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);
};

const appendPoint = () => {
  if (shouldResetScreen) resetScreen();
  if (currentScreen.textContent === "") {
    currentScreen.textContent = "0";
  }
  if (currentScreen.textContent.includes(".")) return;
  currentScreen.textContent += ".";
};

const evaluate = () => {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "÷" && currentScreen.textContent === "0") {
    alert("You can't divie by 0!");
    return;
  }
  secondNumber = currentScreen.textContent;
  currentScreen.textContent = operate(
    currentOperation,
    firstNumber,
    secondNumber
  );
  lastScreen.textContent = `${firstNumber} ${currentOperation} ${secondNumber}`;
  currentOperation = null;
};

const operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);
  if (operator === "+") {
    return add(a, b);
  }
  if (operator === "-") {
    return subtract(a, b);
  }
  if (operator === "x") {
    return multiply(a, b);
  }
  if (operator === "÷") {
    return divide(a, b);
  } else {
    return null;
  }
};

clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", deleteNumber);
pointBtn.addEventListener("click", appendPoint);
equalBtn.addEventListener("click", evaluate);
