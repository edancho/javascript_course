const prompt = require("prompt-sync")();
let play = prompt('Do you want to make a calculation: ')
while(play == "Yes"||play == "Y"||play == "yes") {
    let operation = prompt('Enter an operation ( either +, -, *, / ): ');
    let number1 = parseInt(prompt('Enter first number: '));
    let number2 = parseInt(prompt('Enter second number: '));
    let result = null;
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
    let play = prompt('Do you want to make another calculation: ')
    if (play=="No"||play=="N") {
        console.log("Thank you for using my calculator! ");
        break;
    }


}

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