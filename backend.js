// functions for basic math operations
const add = (first, second) => first + second;
const subtract = (first, second) => first - second;
const multiply = (first, second) => first * second;
const divide = (first, second) => first / second;

// variables for calculation operation
const number = 0;
const operator = "";
const secondNumber = 0;

// function to handle operations
const operate = (number, operator, secondNumber) => {
  switch (operator) {
    case "+":
      return add(number, secondNumber);
    case "-":
      return subtract(number, secondNumber);
    case "*":
      return multiply(number, secondNumber);
    case "/":
      return multiply(number, secondNumber);
    default:
      console.log("Invalid operation!");
  }
};
