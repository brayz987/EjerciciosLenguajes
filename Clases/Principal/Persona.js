class Persona {

    hobbies = [];
    #documento;

    //Metodo constructor

    constructor(nobmre, apellido, correo, edad, hobbies) {
        this.nobmre = nobmre;
        this.apellido = apellido;
        this.correo = correo;
        this.edad = edad;
        this.hobbies.push(hobbies) ;
    }


    get getDocumento(){
        return this.#documento;
    }

    set setDocumento(documento){
        this.#documento = documento;
    }

    getData(){
        return `Nombre ${this.nobmre} ${this.apellido} ${this.correo}`
    }

    calculoEdad() {
        let respuesta;
        if (this.edad > 17) respuesta = "Mayor de edad";
        else respuesta = "No es mayor de edad";
        return respuesta
    }
}

export { Persona as P}