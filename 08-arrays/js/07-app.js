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

const producto3 = {
    nombre: "smartphone",
    precio: 899,
    disponible: true
}

// Agrega al inicio del array
carrito.unshift(producto2);
carrito.unshift(producto);
carrito.unshift(producto1);
carrito.unshift(producto3);


// Eliminar el inicio de un array...

//carrito.shift()
//console.table(carrito);

// Eliminar del centro del array...
carrito.splice(1, 2); // 1- el indice desde donde quieres que empiece a cortar 2-Cuantos quieres que corte;
console.table(carrito);

// Eliminar último elemento del array...

//carrito.pop();
//console.table(carrito);