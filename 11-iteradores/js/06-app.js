'use strict';

// forEach 

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar"];

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})

/************************************************************************************************************ */

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 600 },
    { nombre: "Televisión", precio: 300 },
    { nombre: "Tab", precio: 400 },
    { nombre: "Auriculares", precio: 70 },
    { nombre: "Teclado", precio: 100 },
    { nombre: "Smartphone", precio: 1500 }
]

const nuevoArreglo = carrito.forEach(producto => producto.nombre)  // Undefined
/************************************** ( .map )***************************************************************** */
const nuevoArreglo1 = carrito.map(producto => producto.precio) // Crea un array nuevo;


console.log(nuevoArreglo);
console.log(nuevoArreglo1);