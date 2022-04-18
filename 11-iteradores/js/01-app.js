'use strict';
/************************************** For Loop ******************************************/

//for (let i = 0; i <= 10; i++) {
//console.log(`Numero: ${i}`)
//};

/******************************************************** Sacar los números pares del 0 al 20 ( Segunda parte: sacar tambien los números impares)**********************************/

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es PAR`)  // Saca solo los números pares;
    } else {
        console.log(`El número ${i} es IMPAR`)  // Saca solo los números impares;
    }
}
