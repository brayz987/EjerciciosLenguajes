'use strict'

const productsNumber = parseInt(prompt("Cuantos productos quiere ingresar:"));
let prices = [];
let totalwithoutIva = 0;
let totalIva = 0;

for ( let i=0 ; i < productsNumber ; i++){

    prices.push({
        "Nombre": prompt("Nombre del articulo " + (i+1) + ": "),
        "Precio": prompt("Precio sin IVA " + (i+1) + ": "),
        "Cantidad": prompt("Cantidad comprada: ")
    });
    prices[i]["Iva"] = prices[i]["Precio"]*19/100;
}

for ( let i = 0; i < prices.length; i++){ 
    totalwithoutIva += prices[i]["Precio"]*prices[i]["Cantidad"];
    totalIva += prices[i]["Iva"]*prices[i]["Cantidad"];
}

console.log(prices)
console.log("Total: " + totalwithoutIva + " Pesos");
console.log("Total IVA: " + totalIva + " Pesos");
console.log("Total a Pagar: " + (totalwithoutIva+totalIva) + " Pesos");