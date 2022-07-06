// Dado n cantidad de precios de productos, calcular la sumatoria total, y luego aplicar el iva 19%, se debe de imprimir el total sin iva, el monto del iva, y el total mas iva

'use strict';

const setPrecios = (n) => {
    var precios = [];
        for (var i = 1; i < n + 1; i++) {
            var precio = parseInt(prompt("Precio " + i));
            precios.push(precio);
        }
    return precios;
}



const calcularIva = (n) => {
    var iva = [];
    n.forEach(e => {
        iva.push(e * 0.19);
    });
    return iva;
}


const calcularTotal = (precios, iva) => {
    var total = 0;
    for (var i = 0; i < precios.length ; i++ ){
        total += precios[i] + iva[i];
    }
    return total;
}

export {
    setPrecios,
    calcularIva,
    calcularTotal
}