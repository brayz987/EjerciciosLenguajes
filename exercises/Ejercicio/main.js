'use strcit';

import { cubo } from "./moduleCubo.js";
import { calcularIva, setPrecios, calcularTotal } from "./modulePrecios.js";


var ejercicio = parseInt(prompt(`Seleccione el ejercicio a ejecutar:
1. Calcular Cubo
2. Calcular Precios`));

switch (ejercicio) {
    case 1:
        var base = parseInt(prompt("Ingrese el numero con el que desea calcular al cubo: "));
        console.log(cubo(base));
        break;
    case 2:
        var nProductos = parseInt(prompt("Cuantos productos desea ingresar"));
        if (nProductos > 0) {

            var precios = setPrecios(nProductos);
            var iva = calcularIva(precios);
            var total = calcularTotal(precios, iva);

            console.log(precios);
            console.log(iva);
            console.log(total);
        } else {
            console.log("Ingrese por lo minimo un producto");
        }
        break;
    default:
        console.log("Por favor seleccione un ejecicio valido");
}







