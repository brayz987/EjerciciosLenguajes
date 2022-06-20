import {Persona} from "./Persona.js";

const persona1 = new Persona('Andres','Davila', 'janda@gmail.com', '17', '123');
console.log(persona1);
console.info(persona1.datos+" "+persona1.calculoEdad());
