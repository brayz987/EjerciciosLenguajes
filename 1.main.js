'use strict'
//Contenedores 
var variable1 = 75; // Contenedor global
let variable2 = 12.5; // Contenedor local
const variable3 = 3.1416 // Contentedor constante


// if(true){
//     var variable1 = "Hola mundo";
// }

// console.log(variable1);


// let acumular = 0;
// acumular = acumular + variable1;
// acumular += variable1;


let cadena1 = "75";
console.log(typeof(cadena1));
console.log(typeof(variable1));

if ( cadena1 == variable1){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}