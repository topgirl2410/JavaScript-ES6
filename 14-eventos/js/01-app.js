'use strict';

/**************************************** Eventos en JavaScript *********************************************************/

// Ejercicio 1: (¿Que console.log se mostrara primero?)

console.log(1);

document.addEventListener('DOMContentLoaded', () => {  // DOMContentLoaded es un evento que se ejecuta una vez que es descargado todo el HTML 
    console.log(2)
})

console.log(3);

/********************************************************************************************************************************************************* */