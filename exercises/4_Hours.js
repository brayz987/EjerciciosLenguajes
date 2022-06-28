'use strict'

export function hours() {
    const minutes = prompt("Cuantos tiempo quiere analizar? (Expreselo en minutos)");
    let hours = parseInt(minutes / 60);
    let remaining = minutes - (hours * 60);

    if (remaining === 0) {
        console.log(minutes + " Minutos es igual a " + hours + " horas");
    } else {
        console.log(minutes + " Minutos es igual a " + hours + " horas y " + remaining + " minutos");
    }



}