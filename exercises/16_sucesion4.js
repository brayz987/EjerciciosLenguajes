'use strict'

export function sucesion4() {

    // el anterior *2 mas el anterior

    const sucesion = [5];
    let answer;

    for (let i = 0; i < 9; i++) {
        answer = (sucesion[i] * 2) + sucesion[i];
        sucesion.push(answer);
    }

    sucesion.forEach(e => console.log(e));
}