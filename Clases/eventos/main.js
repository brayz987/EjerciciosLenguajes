'use strict';


const btnOtro = document.getElementById("otro");




// Capturando eventos con .addEventListener

btnOtro.addEventListener("click",() => {
    const respuesta = document.getElementById("respuesta").value;
    console.log(respuesta);
    if (respuesta === "Si"){
        alert ("Dijo que si");
    }else{
        alert ("Vacio");
    }
})


// Capturar evento por propiedad

btnOtro.onclick = () => {
    console.log("Propiedad");
}

// itarget.id // para capturar elementos
/////////////////////////////////////////////////////////

const ver = () => {
    alert("Hice click");
}

const eventoOnMouseMove = () => {
    console.log("Me muevo sobre el parrafo");
}

const eventoOnMouseOut = () => {
    console.log("Salio del parrafo");
}


