'use strict'

export function sum120() {
    const arrayNumbers = [1];
    let answer = 1;
    let index = 0;
    let sumArray = [];

    while (true) {
        answer += 2;
        arrayNumbers.push(answer);
        if (arrayNumbers.length >= 6) {
            sumArray = arrayNumbers.slice(index, index + 6);
            index++;

            if (sumArray.reduce(function (n1, n2) {
                    return n1 + n2
                }) == 120) {
                console.log(`Los valores que dan igual a 120 son: ${ sumArray.join(",") }`);
                break;
            }

        }
    }
}