'use strict';

const carrito = [
    { nombre: "Cazadora Piel", precio: 350 },
    { nombre: "Vaqueros", precio: 90 },
    { nombre: "Camisa Blanca", precio: 60 },
    { nombre: "Vestido Lunares", precio: 50 },
    { nombre: "Top de Noche", precio: 20 },
    { nombre: "Ropa Deportiva", precio: 120 },
]

let resultado = carrito.every(producto => producto.precio > 500); // revisa todos (Version del && (and))
let resultado2 = carrito.some(producto => producto.precio < 500); // Revisa que al menos uno cumpla la condición; (Versión del || (or))


console.log(resultado);
console.log(resultado2);