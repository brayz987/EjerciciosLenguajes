'use strict'

export function sucesion5() {
    // La posiciones de la sucesion elevadda al cuadrado

    const sucesion = [];
    let answer;

    for (let i = 1; i <= 10; i++) {
        answer = (i) * (i);
        sucesion.push(answer);
    }

    sucesion.forEach(e => console.log(e));
}