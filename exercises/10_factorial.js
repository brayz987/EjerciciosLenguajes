'use strict'

export function factorial() {
    let number = parseInt(prompt("Digite el numero a factorizar"));
    let answer = number;
    let i = number;

    do {
        i--;
        answer *= i;
    } while (i !== 1);
    console.log(answer);
}