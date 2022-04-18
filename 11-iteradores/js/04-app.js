'use strict';

/*** Bucle While se ejecuta mientras una condicion sea verdadera ***/

let i = 0;  // Inicializar el bucle While


while (i < 10) {  // Condicion

    if (i % 2 === 0) {
        console.log(`El número ${i} es PAR`)  // Saca solo los números pares;
    } else {
        console.log(`El número ${i} es IMPAR`)  // Saca solo los números impares;
    }

    i++;  // Incremento
}
