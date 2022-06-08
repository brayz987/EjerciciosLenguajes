'use strict'

// ... <= Operador de propagacion

const myArray = [4,0,2,12,9];
console.log(myArray);
let myArray2 = [];
// console.log(...myArray);


let otherArray = new Array("a","e",5,true);

let resultArray = [...otherArray,...myArray];
// console.log(...resultArray);
const miarreglo = [];

for(let i=0 ; i<10 ; i++){
    miarreglo.push((Math.random() * (10 -1) + 1).toFixed(0)); // forma de generar numeros aleatorios
}

for (let i = 0 ; i<10; i++){
    myArray2 = [...myArray2,(Math.random()*(50 -1)+1).toFixed()];
}
console.log(myArray2);