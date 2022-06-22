import { P } from "../Principal/Persona.js";

class Profesor extends P {

    constructor(nobmre, apellido, correo, edad, hobbies, valorHora, cantidadHoras) {
        super(nobmre, apellido, correo, edad, hobbies);
        this.valorHora = valorHora;
        this.cantidadHoras = cantidadHoras;
    }

    getCalculoSalario() {
        return this.valorHora * this.cantidadHoras;
    }
}

export { Profesor };