'use strict'

const Ndays = parseInt(prompt("Digite el numero de dias a validar:"));
let years = parseInt(Ndays / 360);
let month = parseInt( (Ndays/30)-(years*12) ) ;
let week = parseInt( Ndays/13/4);
let days = parseInt( Ndays);

console.log(years);
console.log(month);
console.log(week);
console.log(days);



///incompleto