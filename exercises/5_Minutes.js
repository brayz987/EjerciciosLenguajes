'use strict'

export function minutes() {
    const seconds = prompt("Cuantos tiempo quiere analizar? (Expreselo en sengundos)");;
    let minutes = parseInt(seconds / 60);
    let remaining = seconds - (minutes * 60);
    let missing = 60 - remaining;

    if (remaining === 0) {
        console.log(seconds + " Segundos es igual a " + minutes + " minutos exactos");
    } else {
        console.log(seconds + " Segundos es igual a " + minutes + " minutos y " + remaining + " segundos");
        console.log("Hacen falta " + missing + " segundos para completar los " + (minutes + 1) + " minutos")
    }



}