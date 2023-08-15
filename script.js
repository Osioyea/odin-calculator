let firstInput = "";
let secondInput = "";
let operator = "";

const lastOperation = document.querySelector('.lastOperation');
const answer = document.querySelector('.answer');
const displayedOperation = document.querySelector('.displayedOperation');
const clearAll = document.querySelector('#clearAll');
const clearOne = document.querySelector('#clearOne');
const decimal = document.querySelector('#decimal');
const equals = document.querySelector('#equals');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

clearAll.addEventListener('click', () => {reset();});
clearOne.addEventListener('click', () => {console.log("bruh");});
decimal.addEventListener('click', () => {console.log("bruh");});
equals.addEventListener('click', () => {updateAnswer(operate(firstInput, operator, secondInput))});

numbers.forEach((item) => {
  item.addEventListener('click', () => {editNumbers(item.innerText);});
})

operators.forEach((item) => {
  item.addEventListener('click', () => {editOperator(item.innerText);});
})

function editNumbers(input){
  if(operator == "")
    firstInput += input;
  else
    secondInput += input;
  updateDisplayedOperation();
}

function editOperator(input){
  if(firstInput != "" && secondInput == "")
    operator = input;
  updateDisplayedOperation();
}

function updateLastOperation(){

}

function updateAnswer(input){

}

function updateDisplayedOperation(){
  displayedOperation.textContent = firstInput + " " + operator + " " + secondInput;
}

function testDisplay(){
  console.log(
    "first input: " + firstInput,
    "\nsecond input: " + secondInput,
    "\noperator: " + operator
  );
}

function reset(){
  lastOperation.textContent = " ";
  answer.textContent = "";
  displayedOperation.textContent = "";
  clearInputs();
}

function clearInputs(){
  firstInput = "";
  secondInput = "";
  operator = "";
}

function operate(firstNumber, operation, secondNumber){
  let result = 0;
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  switch(operation){
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "x":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
    case "%":
      result = mod(firstNumber, secondNumber);
      break
    case "^":
      result = power(firstNumber, secondNumber);
      break
  }
  return result;
}

function add(a, b){
  // if(a == 9 && b == 10){
  //   return 21;
  // }
  return a + b;
}
function subtract(a, b){
  return a - b;
}
function multiply(a, b){
  return a * b;
}
function divide(a, b){
  if(b == 0){
    return "Error. Please reset calculator";
  }
  return a / b;
}
function mod(a, b){
  return a % b;
}
function power(a, b){
  return Math.pow(a,b);
}

console.log(operate(firstInput, operator, secondInput));
console.log(typeof firstInput);