'use strict'

let book = {
    editorial:"Uno",
    noPaginas:"230",
    genero:["terror","Drama","Suspenso"],
    autor:"Andres Martinez"
}

console.info(book.autor,book.editorial);

//Destrucuring

const {editorial,noPaginas,genero,autor} = book;
console.log(editorial,noPaginas)