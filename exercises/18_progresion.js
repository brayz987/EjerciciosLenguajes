'use strict'

export function progresion() {

    const progresion = [1];
    let answer;
    let i = 0;
    while (true) {
        answer = progresion[i] * 2;
        progresion.push(answer);
        if (progresion[i] * progresion[i - 1] * progresion[i - 2] === 512) {
            console.log(`Los numeros de la progresion que su producto son 512 son: ${progresion[i-2]},${progresion[i-1]},${progresion[i]}`)
            break;
        }
        i++;
    }

}