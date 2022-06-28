import { Profesor } from "./Hijos/Profesor.js";
import { Estudiante } from "./Hijos/Estudiante.js";


const estudiante1 = new Estudiante("Brayan", "Cardenas", "bgcardenas@uniempresarial.edu.co", 21, "Videojuegos", 4.5 );
const profesor1 = new Profesor("Luis","Yamid","lyamid@uniempresarial.edu.co", 30, "Lector" , 18000, 160 );

profesor1.hobbies.push("Cinefilo","Natacion");
profesor1.setDocumento = 110035456;
estudiante1.setDocumento = 1003706375;


console.log(profesor1.getDocumento);
console.log( `El salario de ${profesor1.nobmre} ${profesor1.apellido} es un total de ${profesor1.getCalculoSalario()}` );


console.info(profesor1);
console.info(estudiante1);
