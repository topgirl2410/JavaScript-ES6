'use strict';
/************************************************************************************** */
//                Diferencias entre Declaration y Expression 
/************************************************************************************** */
// Declaration
sumar();

function sumar() {
    console.log(2 + 3)
};


// Expression

const sum = function() {
    console.log(3 + 6)
};

sum();
/************************************************* Diferencias entre Function Declaration y Function Expressión ********************************************************************************************************* */

// Declaration: te deja llamar a la funcion incluso antes de crearla (dos etapas, creacion y ejecucucion, la primera ignora nuestra llamada a la funcion (como si no existiera), en la segunda si la ejecuta);

/************************************************************************************************************************************************************************************************************************ */