'use strict'

let number1;
let number2;
let answer;

while (true) {

    number1 = parseInt(prompt("Digite el primer numero del intervalo"));
    number2 = parseInt(prompt("Digite el segundo numero del intervalo"));

    if ( number1 > number2){
        alert("El primer numero no puede ser mayor al segundo por favor digite de nuevo los numeros");
    } else {
        answer = number1 + number2;
        console.info(answer);
        break;
    }
} 
