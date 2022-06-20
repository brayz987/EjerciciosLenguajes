'use strict'

let base = 0;
let exponent = 0;
let answer = 1;

base = parseInt(prompt("Escriba el numero base "));
exponent = parseInt(prompt("Escriba el exponente "));

for ( let i = 0 ; i < exponent ; i++ ){
    answer *= base;
}

console.log(`La respuesta es: ${answer}`);
