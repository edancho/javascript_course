//part 1
const fs = require('fs');

function getData() {
    return (fs.readFileSync('PC3input.txt', 'UTF8').split('\n'));
}

const data = getData();

let ones = [0,0,0,0,0,0,0,0,0,0,0,0];
let zeros = [0,0,0,0,0,0,0,0,0,0,0,0];

let gamma = "";
let epsilon = "";

for (let i = 0; i < data.length; i++ ) {
    let number = data[i];
    
    for (let column = 0; column < 12; column++ ){
        if (number[column] == 1){
            ones[column]++
        }
        else {
            zeros[column]++
        }
    }
}
for (let column = 0; column < 12; column++){
    if (ones[column] > zeros[column]){
        gamma += '1';
        epsilon += '0';
        
    }
    else { 
        gamma += '0';
        epsilon += '1';

    }
}



console.log(gamma);
console.log(epsilon);



/*
function gammaValue() {
    let gamma = []
    let zero = 0
    let one = 0
    for (i = 0; i < binary.length; i++) {
        switch ([binary[i]]) {
            case "0":
                zero++
                break;
            case "1":
                one++
                break;
        }
    }
    if (zero > one) {
        gamma.push(0);
        console.log(gamma);
    }
    if (one > zero) {
        gamma.push(1);
        console.log(gamma);
    }
    console.log(gamma);
}

*/
function powerConsumption() {
    let gamma = gammaValue();
    let power = 0;
    for (i = 0; i < gamma.length; i++) {
        power += Math.pow(2, i) * gamma[i];
    }
    return power
}
//part 2
let primeNumbers = [];

function checkPrime(num) {
    if (num == 2) return true;
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true
}
function nthPrime(testNum) {
    let i = 1
    while (primeNumbers.length < testNum) {
        i++;
        if (checkPrime(i)) {
            primeNumbers.push(i);
        }

    }
    return i;
}
//console.log(nthPrime(10001))
console.log(gammaValue)
console.log(powerConsumption())