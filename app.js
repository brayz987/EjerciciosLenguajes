'use stirct'

let age = 23;

switch(true){
    case (age>1 && age<18):
        console.log("Menor de edad");
        break;

    case (age > 17):
        console.log("Mayor de edad");
        break;
    default:
        console.log("nada");
}