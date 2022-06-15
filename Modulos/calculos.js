'use strcit'

const adittion=(n1,n2)=> n1+n2;


const filterElement=(dato)=>{
    let rep = dato.filter((e)=>e > 10)
    return rep;
}

export {
    adittion,
    filterElement
}