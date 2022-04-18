'use strict';

// Operador OR ( revisa que al menos se cumpla una condición ), codigo comun en la validacion de formularios;

const efectivo = 300;
const credito = 400;

const disponible = efectivo + credito;
const totalAPagar = 600;


if (efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar) {
    console.log("Si, podemos cargar la cuenta");
} else {
    console.log("Fondos Insuficientes");
}


