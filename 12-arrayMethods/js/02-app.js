'use strict';

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carro = [
    { nombre: "Monitor 20 pulgadas", precio: 250 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 289 },
    { nombre: "Auriculares", precio: 100 },
    { nombre: "Teclado", precio: 75 },
    { nombre: "Smartphone", precio: 899 }
];

/*************************************************Array Method (.forEach) ******************************************************************/

meses.forEach((mes, i) => {
    if (mes === "Febrero") {
        console.log(`Encontrado en el indice ${i}`);
    }
});

/*******************************************************Array Method (.findIndex)**************************************************************/

// Encuentra el indice de Abril (Si te retorna un -1 es que no lo pudo encontrar)

const indice = meses.findIndex(mes => mes === "Abril");

console.log(indice);

/*************************************************** Ejercicio ************************************************************* */

// Encontrar el indice de un arreglo de objetos....

const indice1 = carro.findIndex(producto => producto.precio === 100); // Solo te retorna el primero que encuentra;



console.log(indice1);