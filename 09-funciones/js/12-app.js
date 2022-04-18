'use strict';
/**
 * Arrow Function en un .forEach y un .map
 */

const carrito = [
    { nombre: "monitor 20 pulgadas", precio: 500 },
    { nombre: "portatil", precio: 700 },
    { nombre: "altavoces", precio: 50 },
    { nombre: "teclado", precio: 100 },
    { nombre: "raton", precio: 10 }

];

const nuevoArreglo = carrito.map(producto => {
    return `${producto.nombre} - precio: ${producto.precio}`;
})

carrito.forEach(producto => console.log(`${producto.nombre} - precio: ${producto.precio}`));

console.log(nuevoArreglo);


// Los Arrow function si no se colocan en el return y queda en una sola linea da por implicito el return..solo en el map;