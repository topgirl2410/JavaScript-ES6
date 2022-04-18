'use strict';
/************************************** For Loop Simple ******************************************/

//for (let i = 0; i <= 10; i++) {
//console.log(`Numero: ${i}`)
//};

/******************************************************** Sacar los números pares del 0 al 20 ( Segunda parte: sacar tambien los números impares)**********************************/

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es PAR`)  // Saca solo los números pares;
    } else {
        console.log(`El número ${i} es IMPAR`)  // Saca solo los números impares;
    }
}

/**************************************************** Ejercicio 2 *******************************************************************************************************************************/

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 300 },
    { nombre: "Laptop", precio: 400 },
    { nombre: "Altavoces", precio: 100 },
    { nombre: "Portatil", precio: 1200 },
    { nombre: "Teclado", precio: 151 },
    { nombre: "Smarphone", precio: 1400 },
]

console.log(carrito.length); // Saber cuantos arreglos contiene el array;

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}