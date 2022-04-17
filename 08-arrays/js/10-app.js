'use strict';

const carrito = [
    { nombre: "teclado windows", precio: 75, disponible: true },
    { nombre: "pantalla", precio: 750, disponible: true },
    { nombre: "tab", precio: 355, disponible: true },
    { nombre: "altavoces", precio: 50, disponible: true },
    { nombre: "lampara", precio: 55, disponible: true },
    { nombre: "unidad virtual", precio: 750, disponible: true }
];

carrito.forEach(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

/************************************** .map (te crea un array nuevo) ***************************************************** */

const nuevoArreglo1 = carrito.map(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

/********************************************************************************************************************* */
console.log(nuevoArreglo1);