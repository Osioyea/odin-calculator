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
clearOne.addEventListener('click', () => {removeOne();});
decimal.addEventListener('click', () => {testDisplay();});
equals.addEventListener('click', () => {calculate(operate(firstInput, operator, secondInput))});

numbers.forEach((item) => {
  item.addEventListener('click', () => {editNumbers(item.innerText);});
})

operators.forEach((item) => {
  item.addEventListener('click', () => {editOperator(item.innerText);});
})

function editNumbers(input){
  if(operator == ""){
    if(firstInput == "0"){
      firstInput = "";
    }
    firstInput += input;
    answer.textContent = "";
  }
  else{
    if(secondInput == "0"){
      secondInput = "";
    }
    secondInput += input;
  }
  updateDisplayedOperation();
}

function editOperator(input){
  if(firstInput != "" && secondInput == ""){
    operator = input;
  }
  else if(firstInput != "" && secondInput != ""){
    calculate(operate(firstInput, operator, secondInput));
    operator = input;
  }
  updateDisplayedOperation();
}

function updateLastOperation(){
  lastOperation.textContent = answer.textContent + " " + displayedOperation.textContent + " =";
}

function calculate(input){
  updateLastOperation();
  clearInputs();
  updateDisplayedOperation();
  updateAnswer(input);
  firstInput = answer.textContent;
}

function updateAnswer(input){
  answer.textContent = input;
}

function updateDisplayedOperation(){
  if(answer.textContent == "")
  displayedOperation.textContent = firstInput + " " + operator + " " + secondInput;
  else
  displayedOperation.textContent = operator + " " + secondInput;
}

function testDisplay(){
  console.log(
    "first input: " + firstInput,
    "\nsecond input: " + secondInput,
    "\noperator: " + operator
  );
}

function reset(){
  lastOperation.textContent = "";
  answer.textContent = "";
  displayedOperation.textContent = "";
  clearInputs();
}

function removeOne(){
  if(secondInput != ""){
    secondInput = secondInput.slice(0, -1);
    updateDisplayedOperation();
    return
  }
  if(operator != ""){
    operator = operator.slice(0, -1);
    updateDisplayedOperation();
    return
  }
  if(firstInput != ""){
    updateAnswer("");
    firstInput = firstInput.slice(0, -1);
    updateDisplayedOperation();
    return
  }
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
  result = Math.round(result * 100000) / 100000;
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