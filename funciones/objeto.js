'use strict'

let mensaje = "Esto es un mensaje";
const msj = new Function("mensaje","return `Hola ${mensaje}`");
console.log(msj(mensaje))