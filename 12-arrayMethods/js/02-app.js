'use strict';

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carro = [
    { nombre: "Monitor 20 pulgadas", precio: 250 },
    { nombre: "Televisión", precio: 350 },
    { nombre: "Tablet", precio: 289 },
    { nombre: "Auriculares", precio: 89 },
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