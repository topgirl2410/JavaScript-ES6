'use strict';

const producto = {
    nombre: "ordenador portatil",
    precio: 1250,
    disponible: true
}

console.log(Object.keys(producto)); // Retorna las llaves del producto
console.log(Object.values(producto)); // Retorna los valores del producto
console.log(Object.entries(producto)); // Retorna todo el producto