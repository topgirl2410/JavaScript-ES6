'use strict';

const autentificado = true;

if (autentificado) {
    console.log("El usuario esta registrado");
}
/***************************************** Detener la ejecución de un IF ************************************************** */
const puntos = 500;


function revisarPuntuacion() {
    if (puntos > 400) {
        console.log("Excelente!!");
        return;
    }
    if (puntos > 300) {
        console.log("Buena puntuacion...¡¡¡ Felicidades !!!");
        return;
    }
}

revisarPuntuacion();