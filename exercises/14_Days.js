'use strict'

export function days() {
    const Ndays = parseInt(prompt("Digite el numero de dias a validar:"));
    let years = parseInt(Ndays / 360);
    let month = parseInt((Ndays / 30) - (years * 12));
    let week = parseInt((Ndays / 7) - (month * 4.28) - (years * 12 * 4.28));
    let days = parseInt(Ndays - ((week * 7) + (month * 30) + (years * 360)));


    console.info(`${Ndays} dias es igual a ${years} años, ${month} meses, ${week} semanas y ${days} dias.`)

}