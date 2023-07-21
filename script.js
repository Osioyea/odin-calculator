let firstInput = 9;
let secondImput = 10;
let operator = "+";

function operate(firstNumber, operation, secondNumber){
  let result = 0;
  switch(operation){
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "*":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
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

console.log(operate(firstInput, operator, secondImput));