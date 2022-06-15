'use strict'

const miarreglo = [10,20,25,30,40];


console.log(miarreglo);

const result1 = miarreglo.map((e)=> e + 10);
console.log(result1);

result1.pop();
console.log(result1);

const result2 = miarreglo.map((e)=> e % 2);
console.log(result2);

