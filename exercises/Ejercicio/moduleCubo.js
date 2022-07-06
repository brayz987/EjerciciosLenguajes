// Calcular el cubo de un numero ingresado, el numero debe de ser validado no puede ser 0,null,string,undefined, debe ser en un funcion tipo flecha y en un modulo

'use strict';

const cubo = (base) => {
    if(base > 0 && base != null || undefined){
        return base*base*base;
    }else {
        return "Por favor ingrese un dato valido";
    }
}


export{
    cubo
}