'use strict'

export function sucesion3() {
    const sucesion = [0];
    let answer;
    for (let i = 0; i < 9; i++) {
        answer = (sucesion[i] * sucesion[i]) + 1
        sucesion.push(answer);
    }
    sucesion.forEach(e => console.log(e));


    // el anterior elevado a la 2 + 1
}