'use strict'

export function digits() {
    let number = parseInt(prompt("Escriba algun numero: "));
    number = number.toString();


    console.log(`Para escribir el numero ${number}, se requieren ${number.length} digitos`);
}