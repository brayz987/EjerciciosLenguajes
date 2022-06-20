 export class Persona {

    //Metodo constructor

    constructor(nobmre, apellido, correo, edad, clave) {
        this.nobmre = nobmre;
        this.apellido = apellido;
        this.correo = correo;
        this.edad = edad;
        this.clave = clave;
        this.datos = `La persona ${this.nobmre} ${this.apellido}, correo: ${this.correo}`
    }


    // Metodo para calcular mayoria de edad

    calculoEdad() {
        let respuesta;
        if (this.edad > 17) respuesta = "Mayor de edad";
        else respuesta = "No es mayor de edad";
        return respuesta
    }
}
