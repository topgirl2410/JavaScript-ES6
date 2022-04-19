'use strict';

const carro = [
    { nombre: "Monitor 20 pulgadas", precio: 250 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 289 },
    { nombre: "Auriculares", precio: 100 },
    { nombre: "Teclado", precio: 75 },
    { nombre: "Smartphone", precio: 899 }
];

let resultado;

/*****************************************Array Method (.filter()) Ejercicios ******************************************************************** */

// Traer los productos con el precio menor a 300 por consola

resultado = carro.filter((producto) => producto.precio < 300);
/************************************************************************************************************************************************************************************************************** */
// Traer los productos con el precio mayor a 200 por consola

resultado = carro.filter((producto) => producto.precio > 200);

/**************************************************************************************************************************************************************************************************************** */
// Traer todos los productos menos (teclado) por consola

resultado = carro.filter((producto) => producto.nombre !== "Teclado");

/***************************************************************************************************************************************************************************************************************** */

// Traer solo el teclado por consola 

resultado = carro.filter((producto) => producto.nombre === "Teclado");

/************************************************************************************************************************************************************************************************************** */

console.log(resultado);

