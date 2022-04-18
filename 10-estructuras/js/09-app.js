'use strict';

const autentificado = true;
const puedePagar = false;

// Operador Ternario

console.log(autentificado ? puedePagar ? 'Si, esta autentificado y puede pagar'
    : 'Si, esta autentificado pero no puede pagar'
    : 'No, no existe el usuario');






/************************************** IF Anidado *****************************************************/
const efectivo = 900;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    if (efectivo > totalPagar) {
        console.log('Si, pagaste con efectivo');
    } else {
        console.log('Otra forma de pago');
    }
} else {
    console.log('Fondos Insuficientes');
}