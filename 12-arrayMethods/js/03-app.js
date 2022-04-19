'use strict';
/****************************************************************************************************************************/
const carrito = [
    { nombre: "Cazadora Piel", precio: 350 },
    { nombre: "Vaqueros", precio: 90 },
    { nombre: "Camisa Blanca", precio: 60 },
    { nombre: "Vestido Lunares", precio: 50 },
    { nombre: "Top de Noche", precio: 20 },
    { nombre: "Ropa Deportiva", precio: 120 },
]
/****************************************** Array Method (.forEach()) ********************************************************/

let total = 0;
carrito.forEach(producto => total += producto.precio);

console.log(total);


/************************************************* Array Method (.reduce()) Se recomienda usar mas este que el .forEach() aunque los dos son validos **************************************************/

let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);