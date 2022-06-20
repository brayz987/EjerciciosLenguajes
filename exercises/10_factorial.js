'use strict'

let number = parseInt(prompt("Digite el numero a factorizar"));
let answer = number;
let i = number;


// for ( let i = 10; i == 0 ; i-- ){
//     answer *= i;
//     console.log(answer);
// }


do {
    i--; 
    answer *= i; 
} while (  i !== 1);
console.log(answer);