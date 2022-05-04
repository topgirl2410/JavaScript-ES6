'use strict';

const diaHoy = new Date();
let valor;

/***************************************** Fechas ************************************************************ */

valor = diaHoy;

valor = diaHoy.getFullYear();  // Año actual

valor = diaHoy.getMonth(); // Mes en el que estamos

valor = diaHoy.getMinutes(); // Minuto en el que estamos

valor = diaHoy.getHours(); // La hora en la que estamos

valor = diaHoy.getTime(); // Los milisegundos que han pasado desde el 1 de enero de 1970 hasta ahora


/****************************************************************************************************** */
console.log(valor);