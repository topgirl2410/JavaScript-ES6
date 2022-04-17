'use strict';

/*
 * Arrays (Arreglos): Coleccion de datos en una estructura ordenada. A medida que trabajamos en 
 * nuestro código, se hace necesario agrupar valores en una misma variable, para 
 * representar conjuntos de datos con cierta relación entre sí. Para ello tenemos
 * la opción de crear objetos, o unas variables más sencillas llamadas arrays.
 */


/********************************* Objeto ****************************************************** */
const producto = {
    nombre: "altavoces ultrasonido",
    precio: 350,
    disponible: true
}

/*********************************** Array ******************************************************* */
const numeros = [1, 5, 7, 10];

console.log(numeros);
console.log(numeros[0]);

/************************************** Otra manera de Array ************************************************ */
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto');
console.log(meses);
console.log(meses[0]);

// Un arreglo que contiene datos de todo tipo

const deTodo = ["maria", 39, true, "si", null, { nombre: "leonor", trabajo: "programadora" }];

console.log(deTodo)