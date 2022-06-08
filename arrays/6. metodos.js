'use strict'

let cadenaDias = "lunes,martes,miercoles,lunes,jueves,viernes-sabadoj";
let miArray = cadenaDias.split(",");
// console.log(miArray);
const myArray = [4,0,2,12,9];

//1. Buscar

const busqueda = miArray.find((e) => e === "lunes");
// console.log(busqueda);

//2. Filtrar

const resultado = myArray.filter((e) => e >= 9);
console.log(resultado);