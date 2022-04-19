'use strict';

const carrito = [
    { nombre: "Cazadora Piel", precio: 350 },
    { nombre: "Vaqueros", precio: 90 },
    { nombre: "Camisa Blanca", precio: 60 },
    { nombre: "Vestido Lunares", precio: 50 },
    { nombre: "Top de Noche", precio: 20 },
    { nombre: "Ropa Deportiva", precio: 120 },
]

/************************************************** Array Method (.forEach()) ************************************************* */

let resultado = '';

carrito.forEach((producto, indice) => {
    if (producto.nombre === "Vaqueros") {
        resultado = carrito[indice]
    }

});

console.log(resultado);


/************************************************** Array Method (.find()) ************************************************* */

const total = carrito.find(producto => producto.precio === 120);

console.log(total);

