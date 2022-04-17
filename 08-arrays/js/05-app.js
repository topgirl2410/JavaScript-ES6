'use strict';

const carrito = [];

// Definir un producto

const producto = {
    nombre: "monitor 30 pulgadas",
    precio: 300,
    disponible: true
}

const producto1 = {
    nombre: "Ordenador Portatil",
    precio: 1200,
    disponible: true
}


const producto2 = {
    nombre: "cadena de musica",
    precio: 50,
    disponible: true
}

/************************************************************************************* */

carrito.push(producto); // Añade los elementos al carrito
carrito.push(producto1);

carrito.unshift(producto2); // añade el elemento al principio del carrito
/****************************************************************************************** */
console.table(carrito);