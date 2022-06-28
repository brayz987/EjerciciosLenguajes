'use strict'

export function pairsAndOdd() {
    let sumPairs = 0;
    let sumOdd = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i + " Es Par");
            sumPairs += i;
        } else {
            console.log(i + " Es Impar");
            sumOdd += i;
        }
    }

    console.log("La suma de los numeros Pares es " + sumPairs);
    console.log("La suma de los numeros Impares es " + sumOdd);
}