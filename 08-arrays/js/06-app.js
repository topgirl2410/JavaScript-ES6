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



// Spread Operator

let resultado;
resultado = [...carrito, producto]; // Ponerlo al final

resultado = [producto2, ...resultado]; // ponerlo al principio

/*************************************************************************************** */
console.table(resultado);