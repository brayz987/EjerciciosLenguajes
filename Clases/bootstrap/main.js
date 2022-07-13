'use strict';

const miParrafo = document.createElement('p');
const tituloh2 = document.createElement('h2');
const miDiv = document.createElement('div');

//atributos

miParrafo.id = "codParrafo";
miParrafo.className = "parrafo";
miParrafo.style = "color: yellow";
miParrafo.textContent = "Hola mundo";


//Insertar en el Dom

const seleccion = document.getElementById('seleccion');
seleccion.appendChild(miParrafo);


//Clonar elemento

const miParrafo2 = miParrafo.cloneNode();
miParrafo2.innerHTML="<h3>Hola mundo 2 </h3>";
seleccion.appendChild(miParrafo2);
