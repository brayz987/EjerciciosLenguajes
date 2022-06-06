'use strict'

let fibonacci = [1,1];

// The loop calculates the next number in the sequence and inserts it into the fibonacci array

for ( let i = 2 ; i < 10 ; i++){
    fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
}
for( let i = 0 ; i < fibonacci.length ; i++){
    console.log( fibonacci[i])
}