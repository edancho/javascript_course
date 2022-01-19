const prompt = require("prompt-sync")();

let operation = prompt('Enter an operation ( either +, -, * or / ): ');

let number1 = parseInt(prompt('Enter first number: '));
let number2 = parseInt(prompt('Enter second number: '));

let result;

if (operation == '+') {
    result = number1 + number2;
}
else if (operation == '-') {
    result = number1 - number2;
}
else if (operation == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operation} ${number2} = ${result}`);


/*
function getInputs(){
    let number1 = parseInt(prompt('Pick a number: '))
    let number2 = parseInt(prompt('Pick a number: '))
    let operation = prompt('Pick an operation (+, -, *, /): ')
    return [number1, number2, operation]
}
/*
/*
function calculator(){
    finalNumber = 
}
*/


//let [n1, n2] = calculator()