import { P } from "../Principal/Persona.js";


class Estudiante extends P {



    constructor(nobmre, apellido, correo, edad, hobbies, pro) {
        super(nobmre, apellido, correo, edad, hobbies);
        this.promedio = pro;


    }
}

export { Estudiante };