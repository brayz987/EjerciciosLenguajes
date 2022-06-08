'use strict'
const myArray = [4,0,2,12,9]; // Arreglo de 5 posiciones

let otherArray = new Array("a","e",5,true);

// console.log(myArray[3]);

// for(let i=0; i<myArray.length ; i++){
//     console.log(myArray[i]);
// }

// Variaciones del ciclo for

// for(let j in otherArray){
//     console.log(j);
// }

// for (let z of otherArray){
//     console.log(z);
// }


myArray.forEach(e => {
    console.log(e);
})