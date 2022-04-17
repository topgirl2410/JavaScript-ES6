'use strict';

const carrito = [
    { nombre: "teclado windows", precio: 75, disponible: true },
    { nombre: "pantalla", precio: 750, disponible: true },
    { nombre: "tab", precio: 355, disponible: true },
    { nombre: "altavoces", precio: 50, disponible: true },
    { nombre: "lampara", precio: 55, disponible: true },
    { nombre: "unidad virtual", precio: 750, disponible: true }
];

// Bucle For
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

// Array Methods (.forEach)

carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`)
});