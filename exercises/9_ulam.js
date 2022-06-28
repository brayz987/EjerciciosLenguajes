'use strict'

export function ulam() {
    let number = parseInt(prompt("Digite cualquier numero: "));

    do {
        if (number % 2 === 0) {
            number /= 2;
            console.log(number);
        } else {
            number *= 3;
            number++;
            console.log(number);
        }
    } while (number !== 1)
}