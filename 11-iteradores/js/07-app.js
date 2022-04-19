'use strict';

/*************************************For Of********************************************/

const pendientes = ["Tarea", "comer", "Proyecto", "Estudiar"];


for (let pendiente of pendientes) {
    console.log(pendiente);
}

/**************************************For Of********************************************/

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 600 },
    { nombre: "Televisión", precio: 300 },
    { nombre: "Tab", precio: 400 },
    { nombre: "Auriculares", precio: 70 },
    { nombre: "Teclado", precio: 100 },
    { nombre: "Smartphone", precio: 1500 }
]

for (let producto of carrito) {
    console.log(producto.nombre);
}
