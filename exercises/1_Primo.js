'use strict'

export function primo() {

    const number = prompt("Ingrese el numero a determinar: ");
    let validation = 0;
    let prime = true;


    // The variable prime only change to false if the modulus is equal to 0, is validate the division between de 2 and the number previos of the variable prime

    for (let i = 2; i < number; i++) {
        validation = number % i;
        // console.log(validation);
        if (validation === 0) {
            prime = false;
            break;
        }
    }


    if (prime === true) {
        console.log("Es primo");
    } else if (prime === false) {
        console.log("No es primo");
    }

}